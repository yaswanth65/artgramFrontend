import express from 'express';
import Activity from '../models/Activity.js';
import ActivityBooking from '../models/ActivityBooking.js';
import { getCurrentUser, roleRequired } from '../middleware/auth.js';

const router = express.Router();

// ---------------------------
// List all activities (Admin & Manager)
// ---------------------------
router.get('/', getCurrentUser, roleRequired('admin', 'manager'), async (req, res) => {
  try {
    const activities = await Activity.find({ is_deleted: false });
    
    // Convert group_pricing JSON string to dict (if needed)
    activities.forEach(activity => {
      if (activity.group_pricing && typeof activity.group_pricing === 'string') {
        try {
          activity.group_pricing = JSON.parse(activity.group_pricing);
        } catch (error) {
          activity.group_pricing = {};
        }
      }
    });
    
    res.json({ activities });
  } catch (error) {
    console.error('List activities error:', error);
    res.status(500).json({ detail: 'Internal server error' });
  }
});

// ---------------------------
// Create new activity
// ---------------------------
router.post('/', getCurrentUser, roleRequired('admin', 'manager'), async (req, res) => {
  try {
    const { name, description, franchise_id, price_per_person, group_pricing, max_capacity_per_session } = req.body;

    if (!name || !description) {
      return res.status(400).json({ detail: 'Name and description are required' });
    }

    const existing = await Activity.findOne({ name, is_deleted: false });
    if (existing) {
      return res.status(400).json({ detail: 'Activity already exists' });
    }

    const activity = new Activity({
      name,
      description,
      franchise_id,
      price_per_person,
      group_pricing,
      max_capacity_per_session,
      created_by: req.user.name
    });

    await activity.save();

    res.json({ message: 'Activity created successfully' });
  } catch (error) {
    console.error('Create activity error:', error);
    res.status(500).json({ detail: 'Internal server error' });
  }
});

// ---------------------------
// Event availability for the next `days` days (Default: 4, Max: 14)
// ---------------------------
router.get('/:activity_id/availability', async (req, res) => {
  try {
    const { activity_id } = req.params;

    const activity = await Activity.findById(activity_id);
    if (!activity) {
      return res.status(404).json({ detail: 'Activity not found' });
    }

    // Get total booked people for this activity
    const totalBooked = await ActivityBooking.aggregate([
      {
        $match: {
          activity_id: activity._id,
          status: 'booked',
          is_deleted: false
        }
      },
      {
        $group: {
          _id: null,
          total_booked: { $sum: '$number_of_people' }
        }
      }
    ]);

    const totalBookedCount = totalBooked.length > 0 ? totalBooked[0].total_booked : 0;
    const seatsAvailable = activity.max_capacity_per_session - totalBookedCount;

    const availability = {
      activity_id: activity._id,
      name: activity.name,
      max_capacity_per_session: activity.max_capacity_per_session,
      total_booked: totalBookedCount,
      seats_available: seatsAvailable
    };
    
    res.json({ availability });
  } catch (error) {
    console.error('Get activity availability error:', error);
    res.status(500).json({ detail: 'Internal server error' });
  }
});

// ---------------------------
// Update activity
// ---------------------------
router.put('/:activity_id', getCurrentUser, roleRequired('admin', 'manager'), async (req, res) => {
  try {
    const { activity_id } = req.params;
    const { name, description, franchise_id, price_per_person, group_pricing, max_capacity_per_session } = req.body;

    const existing = await Activity.findOne({ _id: activity_id, is_deleted: false });
    if (!existing) {
      return res.status(404).json({ detail: 'Activity not found' });
    }

    const updateData = {};
    if (name) updateData.name = name;
    if (description) updateData.description = description;
    if (franchise_id !== undefined) updateData.franchise_id = franchise_id;
    if (price_per_person !== undefined) updateData.price_per_person = price_per_person;
    if (group_pricing !== undefined) updateData.group_pricing = group_pricing;
    if (max_capacity_per_session !== undefined) updateData.max_capacity_per_session = max_capacity_per_session;

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ detail: 'No update data provided' });
    }

    updateData.updated_by = req.user.name;
    updateData.updated_at = new Date();

    await Activity.findByIdAndUpdate(activity_id, updateData, { new: true, runValidators: true });

    res.json({ message: 'Activity updated successfully' });
  } catch (error) {
    console.error('Update activity error:', error);
    res.status(500).json({ detail: 'Internal server error' });
  }
});

// ---------------------------
// Soft delete activity
// ---------------------------
router.delete('/:activity_id', getCurrentUser, roleRequired('admin', 'manager'), async (req, res) => {
  try {
    const { activity_id } = req.params;

    const existing = await Activity.findOne({ _id: activity_id, is_deleted: false });
    if (!existing) {
      return res.status(404).json({ detail: 'Activity not found' });
    }

    await Activity.findByIdAndUpdate(activity_id, {
      is_deleted: true,
      updated_at: new Date(),
      updated_by: req.user.name
    });

    res.json({ message: 'Activity deleted successfully' });
  } catch (error) {
    console.error('Delete activity error:', error);
    res.status(500).json({ detail: 'Internal server error' });
  }
});

export default router;

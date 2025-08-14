import express from 'express';
import Event from '../models/Event.js';
import { getCurrentUser, roleRequired } from '../middleware/auth.js';

const router = express.Router();

// List all events (Admin and Manager)
router.get('/', getCurrentUser, roleRequired('admin', 'manager'), async (req, res) => {
  try {
    const events = await Event.find({ is_deleted: false });
    res.json({ events });
  } catch (error) {
    console.error('List events error:', error);
    res.status(500).json({ detail: 'Internal server error' });
  }
});

// Create new event (Admin and Manager)
router.post('/', getCurrentUser, roleRequired('admin', 'manager'), async (req, res) => {
  try {
    const { franchise_id, event_date, start_time, end_time, capacity } = req.body;

    if (!franchise_id || !event_date || !start_time || !end_time) {
      return res.status(400).json({ detail: 'Franchise ID, event date, start time, and end time are required' });
    }

    // Optional: Check if event clashes with existing events at franchise
    const existing = await Event.findOne({
      franchise_id,
      event_date: new Date(event_date),
      is_deleted: false,
      $or: [
        {
          start_time: { $lte: start_time },
          end_time: { $gt: start_time }
        },
        {
          start_time: { $lt: end_time },
          end_time: { $gte: end_time }
        }
      ]
    });

    if (existing) {
      return res.status(400).json({ detail: 'Event timing clashes with existing event' });
    }

    const event = new Event({
      franchise_id,
      event_date: new Date(event_date),
      start_time,
      end_time,
      capacity: capacity || 0,
      created_by: req.user.name
    });

    await event.save();

    res.json({ message: 'Event created successfully' });
  } catch (error) {
    console.error('Create event error:', error);
    res.status(500).json({ detail: 'Internal server error' });
  }
});

// Update event (Admin and Manager)
router.put('/:event_id', getCurrentUser, roleRequired('admin', 'manager'), async (req, res) => {
  try {
    const { event_id } = req.params;
    const { franchise_id, event_date, start_time, end_time, capacity } = req.body;

    const existing = await Event.findOne({ _id: event_id, is_deleted: false });
    if (!existing) {
      return res.status(404).json({ detail: 'Event not found' });
    }

    const updateData = {};
    if (franchise_id !== undefined) updateData.franchise_id = franchise_id;
    if (event_date) updateData.event_date = new Date(event_date);
    if (start_time) updateData.start_time = start_time;
    if (end_time) updateData.end_time = end_time;
    if (capacity !== undefined) updateData.capacity = capacity;

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ detail: 'No update data provided' });
    }

    updateData.updated_by = req.user.name;
    updateData.updated_at = new Date();

    await Event.findByIdAndUpdate(event_id, updateData, { new: true, runValidators: true });

    res.json({ message: 'Event updated successfully' });
  } catch (error) {
    console.error('Update event error:', error);
    res.status(500).json({ detail: 'Internal server error' });
  }
});

// Soft delete event (Admin and Manager)
router.delete('/:event_id', getCurrentUser, roleRequired('admin', 'manager'), async (req, res) => {
  try {
    const { event_id } = req.params;

    const existing = await Event.findOne({ _id: event_id, is_deleted: false });
    if (!existing) {
      return res.status(404).json({ detail: 'Event not found' });
    }

    await Event.findByIdAndUpdate(event_id, {
      is_deleted: true,
      updated_at: new Date(),
      updated_by: req.user.name
    });

    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error('Delete event error:', error);
    res.status(500).json({ detail: 'Internal server error' });
  }
});

export default router;

import express from 'express';
import Franchise from '../models/Franchise.js';
import { getCurrentUser, roleRequired } from '../middleware/auth.js';

const router = express.Router();

// List all franchises
router.get('/', getCurrentUser, roleRequired('admin'), async (req, res) => {
  try {
    const franchises = await Franchise.find({ is_deleted: false });
    res.json({ franchises });
  } catch (error) {
    console.error('List franchises error:', error);
    res.status(500).json({ detail: 'Internal server error' });
  }
});

// Create new franchise
router.post('/', getCurrentUser, roleRequired('admin'), async (req, res) => {
  try {
    const { name, address, city, state, pincode, phone, email } = req.body;

    if (!name || !address || !city || !state || !pincode || !phone || !email) {
      return res.status(400).json({ detail: 'All fields are required' });
    }

    const existing = await Franchise.findOne({ name, is_deleted: false });
    if (existing) {
      return res.status(400).json({ detail: 'Franchise already exists' });
    }

    const franchise = new Franchise({
      name,
      address,
      city,
      state,
      pincode,
      phone,
      email,
      created_by: req.user.name
    });

    await franchise.save();

    res.json({ message: 'Franchise created successfully' });
  } catch (error) {
    console.error('Create franchise error:', error);
    res.status(500).json({ detail: 'Internal server error' });
  }
});

// Update franchise (partial update)
router.put('/:franchise_id', getCurrentUser, roleRequired('admin'), async (req, res) => {
  try {
    const { franchise_id } = req.params;
    const { name, address, city, state, pincode, phone, email } = req.body;

    const existing = await Franchise.findOne({ _id: franchise_id, is_deleted: false });
    if (!existing) {
      return res.status(404).json({ detail: 'Franchise not found' });
    }

    const updateData = {};
    if (name) updateData.name = name;
    if (address) updateData.address = address;
    if (city) updateData.city = city;
    if (state) updateData.state = state;
    if (pincode) updateData.pincode = pincode;
    if (phone) updateData.phone = phone;
    if (email) updateData.email = email;

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ detail: 'No update data provided' });
    }

    updateData.updated_by = req.user.name;
    updateData.updated_at = new Date();

    await Franchise.findByIdAndUpdate(franchise_id, updateData, { new: true, runValidators: true });

    res.json({ message: 'Franchise updated successfully' });
  } catch (error) {
    console.error('Update franchise error:', error);
    res.status(500).json({ detail: 'Internal server error' });
  }
});

// Soft delete franchise
router.delete('/:franchise_id', getCurrentUser, roleRequired('admin'), async (req, res) => {
  try {
    const { franchise_id } = req.params;

    const existing = await Franchise.findOne({ _id: franchise_id, is_deleted: false });
    if (!existing) {
      return res.status(404).json({ detail: 'Franchise not found' });
    }

    await Franchise.findByIdAndUpdate(franchise_id, {
      is_deleted: true,
      updated_at: new Date(),
      updated_by: req.user.name
    });

    res.json({ message: 'Franchise deleted successfully' });
  } catch (error) {
    console.error('Delete franchise error:', error);
    res.status(500).json({ detail: 'Internal server error' });
  }
});

export default router;

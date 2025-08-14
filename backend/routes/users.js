import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import { getCurrentUser, roleRequired } from '../middleware/auth.js';

const router = express.Router();

// ========================
// LIST ALL USERS (Admin only)
// ========================
router.get('/', getCurrentUser, roleRequired('admin'), async (req, res) => {
  try {
    const users = await User.find({}, 'name email phone role franchise_id is_deleted');
    res.json({ users });
  } catch (error) {
    console.error('List users error:', error);
    res.status(500).json({ detail: 'Internal server error' });
  }
});

// ========================
// CREATE NEW USER (Admin)
// ========================
router.post('/', getCurrentUser, roleRequired('admin'), async (req, res) => {
  try {
    const { name, email, phone, password, role, franchise_id } = req.body;

    if (!name || !email || !phone || !password || !role) {
      return res.status(400).json({ detail: 'All required fields must be provided' });
    }

    if (!['manager', 'customer'].includes(role)) {
      return res.status(400).json({ detail: 'Invalid role for creation' });
    }

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ detail: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      phone,
      password_hash: hashedPassword,
      role,
      franchise_id,
      created_by: req.user.name
    });

    await user.save();

    res.json({ message: `${role.charAt(0).toUpperCase() + role.slice(1)} created successfully` });
  } catch (error) {
    console.error('Create user error:', error);
    res.status(500).json({ detail: 'Internal server error' });
  }
});

// ========================
// UPDATE USER (Admin)
// ========================
router.put('/:user_id', getCurrentUser, roleRequired('admin'), async (req, res) => {
  try {
    const { user_id } = req.params;
    const { name, phone, role, franchise_id } = req.body;

    const existing = await User.findById(user_id);
    if (!existing) {
      return res.status(404).json({ detail: 'User not found' });
    }

    const updateData = {};
    if (name) updateData.name = name;
    if (phone) updateData.phone = phone;
    if (role) updateData.role = role;
    if (franchise_id !== undefined) updateData.franchise_id = franchise_id;
    
    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ detail: 'No update data provided' });
    }

    updateData.updated_by = req.user.name;
    updateData.updated_at = new Date();

    await User.findByIdAndUpdate(user_id, updateData, { new: true, runValidators: true });

    res.json({ message: 'User updated successfully' });
  } catch (error) {
    console.error('Update user error:', error);
    res.status(500).json({ detail: 'Internal server error' });
  }
});

// ========================
// SOFT DELETE USER (Admin)
// ========================
router.delete('/:user_id', getCurrentUser, roleRequired('admin'), async (req, res) => {
  try {
    const { user_id } = req.params;

    const existing = await User.findById(user_id);
    if (!existing) {
      return res.status(404).json({ detail: 'User not found' });
    }

    await User.findByIdAndUpdate(user_id, {
      is_deleted: true,
      updated_at: new Date(),
      updated_by: req.user.name
    });

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Delete user error:', error);
    res.status(500).json({ detail: 'Internal server error' });
  }
});

export default router;

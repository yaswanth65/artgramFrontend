import express from 'express';
import Log from '../models/Log.js';
import { getCurrentUser, roleRequired } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getCurrentUser, roleRequired('admin'), async (req, res) => {
  try {
    const logs = await Log.find()
      .sort({ created_at: -1 })
      .limit(100);
    res.json({ logs });
  } catch (error) {
    console.error('Get logs error:', error);
    res.status(500).json({ detail: 'Internal server error' });
  }
});

export default router;

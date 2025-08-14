import express from 'express';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import User from '../models/User.js';
import PasswordResetToken from '../models/PasswordResetToken.js';
import { createAccessToken } from '../utils/jwtHandler.js';

const router = express.Router();

// ========================
// REGISTER (Customer by default)
// ========================
router.post('/register', async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    if (!name || !email || !phone || !password) {
      return res.status(400).json({ detail: 'All fields are required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ detail: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      phone,
      password_hash: hashedPassword,
      role: 'customer',
      created_by: name
    });

    await user.save();

    res.json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ detail: 'Internal server error' });
  }
});

// ========================
// LOGIN
// ========================
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ detail: 'Email and password are required' });
    }

    const user = await User.findOne({ email, is_deleted: false });
    if (!user) {
      return res.status(401).json({ detail: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      return res.status(401).json({ detail: 'Invalid email or password' });
    }

    const tokenData = {
      user_id: user._id,
      role: user.role,
      name: user.name
    };
    const token = createAccessToken(tokenData);

    res.json({ 
      access_token: token, 
      token_type: 'bearer', 
      role: user.role 
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ detail: 'Internal server error' });
  }
});

// ========================
// LOGOUT (JWT is stateless — client just discards token)
// ========================
router.post('/logout', (req, res) => {
  res.json({ message: 'Logout successful — please discard token on client side' });
});

// ========================
// FORGOT PASSWORD
// ========================
router.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ detail: 'Email is required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ detail: 'User not found' });
    }

    const token = uuidv4();
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 24); // Token expires in 24 hours

    const resetToken = new PasswordResetToken({
      user_id: user._id,
      token,
      expires_at: expiresAt
    });

    await resetToken.save();

    // In production, send token via email
    res.json({ message: 'Password reset token generated', reset_token: token });
  } catch (error) {
    console.error('Forgot password error:', error);
    res.status(500).json({ detail: 'Internal server error' });
  }
});

// ========================
// RESET PASSWORD
// ========================
router.post('/reset-password', async (req, res) => {
  try {
    const { token, new_password } = req.body;

    if (!token || !new_password) {
      return res.status(400).json({ detail: 'Token and new password are required' });
    }

    const resetData = await PasswordResetToken.findOne({ 
      token, 
      used: false, 
      expires_at: { $gt: new Date() } 
    });
    
    if (!resetData) {
      return res.status(400).json({ detail: 'Invalid or expired reset token' });
    }

    const hashedPassword = await bcrypt.hash(new_password, 10);

    await User.findByIdAndUpdate(resetData.user_id, { 
      password_hash: hashedPassword 
    });
    
    await PasswordResetToken.findByIdAndUpdate(resetData._id, { 
      used: true 
    });

    res.json({ message: 'Password reset successful' });
  } catch (error) {
    console.error('Reset password error:', error);
    res.status(500).json({ detail: 'Internal server error' });
  }
});

export default router;

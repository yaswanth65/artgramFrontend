import mongoose from 'mongoose';

const franchiseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  state: {
    type: String,
    required: true,
    trim: true
  },
  pincode: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  is_deleted: {
    type: Boolean,
    default: false
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  created_by: {
    type: String,
    required: true
  },
  updated_at: {
    type: Date,
    default: null
  },
  updated_by: {
    type: String,
    default: null
  }
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

// Index for better query performance
franchiseSchema.index({ name: 1 });
franchiseSchema.index({ city: 1 });
franchiseSchema.index({ state: 1 });
franchiseSchema.index({ is_deleted: 1 });

export default mongoose.model('Franchise', franchiseSchema);

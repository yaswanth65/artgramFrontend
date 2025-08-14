import mongoose from 'mongoose';

const logSchema = new mongoose.Schema({
  log_type: {
    type: String,
    required: true,
    enum: ['info', 'warning', 'error', 'debug']
  },
  message: {
    type: String,
    required: true
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  action: {
    type: String,
    default: null
  },
  ip_address: {
    type: String,
    default: null
  },
  created_at: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: { createdAt: 'created_at', updatedAt: false }
});

// Index for better query performance
logSchema.index({ log_type: 1 });
logSchema.index({ user_id: 1 });
logSchema.index({ created_at: -1 });

export default mongoose.model('Log', logSchema);

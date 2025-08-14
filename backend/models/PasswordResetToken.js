import mongoose from 'mongoose';

const passwordResetTokenSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  token: {
    type: String,
    required: true,
    unique: true
  },
  used: {
    type: Boolean,
    default: false
  },
  expires_at: {
    type: Date,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: { createdAt: 'created_at', updatedAt: false }
});

// Index for better query performance
passwordResetTokenSchema.index({ token: 1 });
passwordResetTokenSchema.index({ user_id: 1 });
passwordResetTokenSchema.index({ expires_at: 1 });

export default mongoose.model('PasswordResetToken', passwordResetTokenSchema);

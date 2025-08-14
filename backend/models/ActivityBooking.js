import mongoose from 'mongoose';

const activityBookingSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  activity_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Activity',
    required: true
  },
  number_of_people: {
    type: Number,
    required: true,
    min: 1
  },
  total_amount: {
    type: Number,
    required: true,
    min: 0
  },
  status: {
    type: String,
    enum: ['booked', 'confirmed', 'cancelled', 'rescheduled'],
    default: 'booked'
  },
  payment_status: {
    type: String,
    enum: ['pending', 'paid', 'failed', 'refunded'],
    default: 'pending'
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
activityBookingSchema.index({ user_id: 1 });
activityBookingSchema.index({ activity_id: 1 });
activityBookingSchema.index({ status: 1 });
activityBookingSchema.index({ payment_status: 1 });
activityBookingSchema.index({ is_deleted: 1 });

export default mongoose.model('ActivityBooking', activityBookingSchema);

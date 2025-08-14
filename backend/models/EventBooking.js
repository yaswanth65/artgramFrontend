import mongoose from 'mongoose';

const eventBookingSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  event_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: true
  },
  number_of_tickets: {
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
eventBookingSchema.index({ user_id: 1 });
eventBookingSchema.index({ event_id: 1 });
eventBookingSchema.index({ status: 1 });
eventBookingSchema.index({ payment_status: 1 });
eventBookingSchema.index({ is_deleted: 1 });

export default mongoose.model('EventBooking', eventBookingSchema);

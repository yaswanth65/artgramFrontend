import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  franchise_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Franchise',
    required: true
  },
  event_date: {
    type: Date,
    required: true
  },
  start_time: {
    type: String,
    required: true
  },
  end_time: {
    type: String,
    required: true
  },
  capacity: {
    type: Number,
    required: true,
    min: 0,
    default: 0
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
eventSchema.index({ franchise_id: 1 });
eventSchema.index({ event_date: 1 });
eventSchema.index({ is_deleted: 1 });

export default mongoose.model('Event', eventSchema);

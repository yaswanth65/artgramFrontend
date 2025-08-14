import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  franchise_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Franchise',
    default: null
  },
  price_per_person: {
    type: Number,
    required: true,
    min: 0
  },
  group_pricing: {
    type: mongoose.Schema.Types.Mixed,
    default: null
  },
  max_capacity_per_session: {
    type: Number,
    required: true,
    min: 1
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
activitySchema.index({ name: 1 });
activitySchema.index({ franchise_id: 1 });
activitySchema.index({ is_deleted: 1 });

export default mongoose.model('Activity', activitySchema);

import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  franchise_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Franchise',
    required: true
  },
  stock_quantity: {
    type: Number,
    required: true,
    min: 0
  },
  image_url: {
    type: String,
    default: null
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

// Compound index for unique product names per franchise
productSchema.index({ name: 1, franchise_id: 1 }, { unique: true });
productSchema.index({ franchise_id: 1 });
productSchema.index({ is_deleted: 1 });

export default mongoose.model('Product', productSchema);

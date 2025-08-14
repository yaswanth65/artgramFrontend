import express from 'express';
import Order from '../models/Order.js';
import Product from '../models/Product.js';
import { getCurrentUser } from '../middleware/auth.js';

const router = express.Router();

// List user's store orders (Customer)
router.get('/', getCurrentUser, async (req, res) => {
  try {
    const orders = await Order.find({ 
      user_id: req.user.user_id, 
      is_deleted: false 
    }).populate('franchise_id', 'name').populate('product_id', 'name price');
    
    res.json({ orders });
  } catch (error) {
    console.error('List orders error:', error);
    res.status(500).json({ detail: 'Internal server error' });
  }
});

// Create store order (Customer)
router.post('/', getCurrentUser, async (req, res) => {
  try {
    const { franchise_id, items, delivery_address } = req.body;

    if (!franchise_id || !items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ detail: 'Franchise ID and items array are required' });
    }

    if (!delivery_address) {
      return res.status(400).json({ detail: 'Delivery address is required' });
    }

    let totalOrderAmount = 0;
    
    // Validate products & calculate total
    for (const item of items) {
      const { product_id, quantity } = item;
      
      if (!product_id || !quantity || quantity <= 0) {
        return res.status(400).json({ detail: `Invalid quantity for product ${product_id}` });
      }

      const product = await Product.findOne({ _id: product_id, is_deleted: false });
      if (!product) {
        return res.status(404).json({ detail: `Product ${product_id} not found` });
      }

      if (product.franchise_id.toString() !== franchise_id) {
        return res.status(400).json({ detail: `Product ${product_id} does not belong to franchise ${franchise_id}` });
      }

      if (product.stock_quantity < quantity) {
        return res.status(400).json({ detail: `Insufficient stock for product ${product_id}` });
      }

      totalOrderAmount += product.price * quantity;
    }

    // Insert each order item as a separate order row
    for (const item of items) {
      const { product_id, quantity } = item;
      const product = await Product.findById(product_id);
      const totalAmount = product.price * quantity;

      // Reduce stock quantity
      await Product.findByIdAndUpdate(product_id, {
        stock_quantity: product.stock_quantity - quantity
      });

      const order = new Order({
        user_id: req.user.user_id,
        franchise_id,
        product_id,
        total_amount: totalAmount,
        status: 'placed',
        payment_status: 'pending',
        delivery_address
      });

      await order.save();
    }

    res.json({ message: 'Order placed successfully, pending payment' });
  } catch (error) {
    console.error('Create order error:', error);
    res.status(500).json({ detail: 'Internal server error' });
  }
});

// Cancel an order (Customer)
router.put('/:order_id/cancel', getCurrentUser, async (req, res) => {
  try {
    const { order_id } = req.params;

    const order = await Order.findOne({ _id: order_id, is_deleted: false });
    if (!order) {
      return res.status(404).json({ detail: 'Order not found' });
    }
    
    if (order.user_id.toString() !== req.user.user_id) {
      return res.status(403).json({ detail: 'Unauthorized' });
    }

    if (order.status === 'cancelled') {
      return res.status(400).json({ detail: 'Order already cancelled' });
    }

    // Update order status
    await Order.findByIdAndUpdate(order_id, {
      status: 'cancelled',
      updated_at: new Date()
    });

    // Optional: Restock the products
    const product = await Product.findById(order.product_id);
    if (product) {
      await Product.findByIdAndUpdate(order.product_id, {
        stock_quantity: product.stock_quantity + 1 // Here you might want to restore the exact quantity
      });
    }

    res.json({ message: 'Order cancelled successfully' });
  } catch (error) {
    console.error('Cancel order error:', error);
    res.status(500).json({ detail: 'Internal server error' });
  }
});

export default router;

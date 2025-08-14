import express from 'express';
import Product from '../models/Product.js';
import { getCurrentUser, roleRequired } from '../middleware/auth.js';

const router = express.Router();

// List all products (Admin and Manager)
router.get('/', getCurrentUser, roleRequired('admin', 'manager'), async (req, res) => {
  try {
    const products = await Product.find({ is_deleted: false });
    res.json({ products });
  } catch (error) {
    console.error('List products error:', error);
    res.status(500).json({ detail: 'Internal server error' });
  }
});

// Create new product (Admin and Manager)
router.post('/', getCurrentUser, roleRequired('admin', 'manager'), async (req, res) => {
  try {
    const { name, description, price, franchise_id, stock_quantity, image_url } = req.body;

    if (!name || !description || price === undefined || !franchise_id || stock_quantity === undefined) {
      return res.status(400).json({ detail: 'Name, description, price, franchise ID, and stock quantity are required' });
    }

    const existing = await Product.findOne({ name, franchise_id, is_deleted: false });
    if (existing) {
      return res.status(400).json({ detail: 'Product already exists for this franchise' });
    }

    const product = new Product({
      name,
      description,
      price,
      franchise_id,
      stock_quantity,
      image_url,
      created_by: req.user.name
    });

    await product.save();

    res.json({ message: 'Product created successfully' });
  } catch (error) {
    console.error('Create product error:', error);
    res.status(500).json({ detail: 'Internal server error' });
  }
});

// Update product (Admin and Manager)
router.put('/:product_id', getCurrentUser, roleRequired('admin', 'manager'), async (req, res) => {
  try {
    const { product_id } = req.params;
    const { name, description, price, franchise_id, stock_quantity, image_url } = req.body;

    const existing = await Product.findOne({ _id: product_id, is_deleted: false });
    if (!existing) {
      return res.status(404).json({ detail: 'Product not found' });
    }

    const updateData = {};
    if (name) updateData.name = name;
    if (description) updateData.description = description;
    if (price !== undefined) updateData.price = price;
    if (franchise_id !== undefined) updateData.franchise_id = franchise_id;
    if (stock_quantity !== undefined) updateData.stock_quantity = stock_quantity;
    if (image_url !== undefined) updateData.image_url = image_url;

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ detail: 'No update data provided' });
    }

    updateData.updated_by = req.user.name;
    updateData.updated_at = new Date();

    await Product.findByIdAndUpdate(product_id, updateData, { new: true, runValidators: true });

    res.json({ message: 'Product updated successfully' });
  } catch (error) {
    console.error('Update product error:', error);
    res.status(500).json({ detail: 'Internal server error' });
  }
});

// Soft delete product (Admin and Manager)
router.delete('/:product_id', getCurrentUser, roleRequired('admin', 'manager'), async (req, res) => {
  try {
    const { product_id } = req.params;

    const existing = await Product.findOne({ _id: product_id, is_deleted: false });
    if (!existing) {
      return res.status(404).json({ detail: 'Product not found' });
    }

    await Product.findByIdAndUpdate(product_id, {
      is_deleted: true,
      updated_at: new Date(),
      updated_by: req.user.name
    });

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Delete product error:', error);
    res.status(500).json({ detail: 'Internal server error' });
  }
});

export default router;

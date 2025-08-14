import express from 'express';
import Franchise from '../models/Franchise.js';
import EventBooking from '../models/EventBooking.js';
import ActivityBooking from '../models/ActivityBooking.js';
import Order from '../models/Order.js';
import Product from '../models/Product.js';
import Activity from '../models/Activity.js';
import { getCurrentUser, roleRequired } from '../middleware/auth.js';

const router = express.Router();

router.get('/admin/dashboard', getCurrentUser, roleRequired('admin'), async (req, res) => {
  try {
    const totalFranchises = await Franchise.countDocuments({ is_deleted: false });
    
    const totalBookings = await EventBooking.countDocuments({ is_deleted: false }) + 
                          await ActivityBooking.countDocuments({ is_deleted: false });

    // Calculate total earnings using aggregation
    const eventBookingsEarnings = await EventBooking.aggregate([
      { $match: { payment_status: 'paid', is_deleted: false } },
      { $group: { _id: null, total: { $sum: '$total_amount' } } }
    ]);

    const activityBookingsEarnings = await ActivityBooking.aggregate([
      { $match: { payment_status: 'paid', is_deleted: false } },
      { $group: { _id: null, total: { $sum: '$total_amount' } } }
    ]);

    const ordersEarnings = await Order.aggregate([
      { $match: { payment_status: 'paid', is_deleted: false } },
      { $group: { _id: null, total: { $sum: '$total_amount' } } }
    ]);

    const totalEarnings = (eventBookingsEarnings[0]?.total || 0) + 
                          (activityBookingsEarnings[0]?.total || 0) + 
                          (ordersEarnings[0]?.total || 0);

    // Top-selling products (top 5)
    const topProducts = await Order.aggregate([
      { $match: { is_deleted: false, payment_status: 'paid' } },
      { $group: { _id: '$product_id', sold_count: { $sum: 1 } } },
      { $sort: { sold_count: -1 } },
      { $limit: 5 },
      {
        $lookup: {
          from: 'products',
          localField: '_id',
          foreignField: '_id',
          as: 'product'
        }
      },
      { $unwind: '$product' },
      { $project: { name: '$product.name', sold_count: 1 } }
    ]);

    // Recent activities (top 5 latest created activities)
    const recentActivities = await Activity.find({ is_deleted: false })
      .select('name created_at')
      .sort({ created_at: -1 })
      .limit(5);

    res.json({
      total_franchises: totalFranchises,
      total_bookings: totalBookings,
      earnings_summary: totalEarnings,
      top_selling_products: topProducts,
      recent_activities: recentActivities
    });
  } catch (error) {
    console.error('Admin dashboard error:', error);
    res.status(500).json({ detail: 'Internal server error' });
  }
});

router.get('/manager/dashboard', getCurrentUser, roleRequired('manager'), async (req, res) => {
  try {
    const franchiseId = req.user.franchise_id;
    if (!franchiseId) {
      return res.status(400).json({ error: 'Franchise ID not associated with this manager' });
    }

    const totalBookings = await EventBooking.countDocuments({ 
      franchise_id: franchiseId, 
      is_deleted: false 
    }) + await ActivityBooking.countDocuments({ 
      franchise_id: franchiseId, 
      is_deleted: false 
    });

    // Calculate earnings for this franchise
    const eventBookingsEarnings = await EventBooking.aggregate([
      { $match: { franchise_id: franchiseId, payment_status: 'paid', is_deleted: false } },
      { $group: { _id: null, total: { $sum: '$total_amount' } } }
    ]);

    const activityBookingsEarnings = await ActivityBooking.aggregate([
      { $match: { franchise_id: franchiseId, payment_status: 'paid', is_deleted: false } },
      { $group: { _id: null, total: { $sum: '$total_amount' } } }
    ]);

    const ordersEarnings = await Order.aggregate([
      { $match: { franchise_id: franchiseId, payment_status: 'paid', is_deleted: false } },
      { $group: { _id: null, total: { $sum: '$total_amount' } } }
    ]);

    const totalEarnings = (eventBookingsEarnings[0]?.total || 0) + 
                          (activityBookingsEarnings[0]?.total || 0) + 
                          (ordersEarnings[0]?.total || 0);

    // Popular products for this franchise (top 5)
    const popularProducts = await Order.aggregate([
      { $match: { franchise_id: franchiseId, is_deleted: false, payment_status: 'paid' } },
      { $group: { _id: '$product_id', sold_count: { $sum: 1 } } },
      { $sort: { sold_count: -1 } },
      { $limit: 5 },
      {
        $lookup: {
          from: 'products',
          localField: '_id',
          foreignField: '_id',
          as: 'product'
        }
      },
      { $unwind: '$product' },
      { $project: { name: '$product.name', sold_count: 1 } }
    ]);

    // Popular activities for this franchise (top 5)
    const popularActivities = await ActivityBooking.aggregate([
      { $match: { is_deleted: false } },
      {
        $lookup: {
          from: 'activities',
          localField: 'activity_id',
          foreignField: '_id',
          as: 'activity'
        }
      },
      { $unwind: '$activity' },
      { $match: { 'activity.franchise_id': franchiseId } },
      { $group: { _id: '$activity_id', booking_count: { $sum: 1 } } },
      { $sort: { booking_count: -1 } },
      { $limit: 5 },
      {
        $lookup: {
          from: 'activities',
          localField: '_id',
          foreignField: '_id',
          as: 'activity'
        }
      },
      { $unwind: '$activity' },
      { $project: { name: '$activity.name', booking_count: 1 } }
    ]);

    res.json({
      franchise_id: franchiseId,
      total_bookings: totalBookings,
      earnings: totalEarnings,
      popular_products: popularProducts,
      popular_activities: popularActivities
    });
  } catch (error) {
    console.error('Manager dashboard error:', error);
    res.status(500).json({ detail: 'Internal server error' });
  }
});

export default router;

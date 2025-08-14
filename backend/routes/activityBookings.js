import express from 'express';
import ActivityBooking from '../models/ActivityBooking.js';
import Activity from '../models/Activity.js';
import { getCurrentUser } from '../middleware/auth.js';

const router = express.Router();

// List user's activity bookings (Customer)
router.get('/', getCurrentUser, async (req, res) => {
  try {
    const bookings = await ActivityBooking.find({ 
      user_id: req.user.user_id, 
      is_deleted: false 
    }).populate('activity_id', 'name');
    
    res.json({ bookings });
  } catch (error) {
    console.error('List activity bookings error:', error);
    res.status(500).json({ detail: 'Internal server error' });
  }
});

// Create new activity booking (Customer)
router.post('/', getCurrentUser, async (req, res) => {
  try {
    const { activity_id, number_of_people } = req.body;

    if (!activity_id || !number_of_people || number_of_people <= 0) {
      return res.status(400).json({ detail: 'Activity ID and valid number of people are required' });
    }

    const activity = await Activity.findOne({ _id: activity_id, is_deleted: false });
    if (!activity) {
      return res.status(404).json({ detail: 'Activity not found' });
    }

    // Calculate total amount (price_per_person * number_of_people)
    const totalAmount = activity.price_per_person * number_of_people;

    const booking = new ActivityBooking({
      user_id: req.user.user_id,
      activity_id,
      number_of_people,
      total_amount: totalAmount,
      status: 'booked',
      payment_status: 'pending',
      created_by: req.user.name
    });

    await booking.save();

    res.json({ message: 'Activity booking created successfully, pending payment' });
  } catch (error) {
    console.error('Create activity booking error:', error);
    res.status(500).json({ detail: 'Internal server error' });
  }
});

// Cancel activity booking (Customer)
router.put('/:booking_id/cancel', getCurrentUser, async (req, res) => {
  try {
    const { booking_id } = req.params;

    const booking = await ActivityBooking.findOne({ _id: booking_id, is_deleted: false });
    if (!booking) {
      return res.status(404).json({ detail: 'Booking not found' });
    }
    
    if (booking.user_id.toString() !== req.user.user_id) {
      return res.status(403).json({ detail: 'Unauthorized' });
    }

    if (booking.status === 'cancelled') {
      return res.status(400).json({ detail: 'Booking already cancelled' });
    }

    await ActivityBooking.findByIdAndUpdate(booking_id, {
      status: 'cancelled',
      updated_at: new Date(),
      updated_by: req.user.name
    });

    res.json({ message: 'Activity booking cancelled successfully' });
  } catch (error) {
    console.error('Cancel activity booking error:', error);
    res.status(500).json({ detail: 'Internal server error' });
  }
});

// Reschedule activity booking (Customer)
router.put('/:booking_id/reschedule', getCurrentUser, async (req, res) => {
  try {
    const { booking_id } = req.params;
    const { new_activity_id, number_of_people } = req.body;

    if (!new_activity_id || !number_of_people || number_of_people <= 0) {
      return res.status(400).json({ detail: 'New activity ID and valid number of people are required' });
    }

    const booking = await ActivityBooking.findOne({ _id: booking_id, is_deleted: false });
    if (!booking) {
      return res.status(404).json({ detail: 'Booking not found' });
    }
    
    if (booking.user_id.toString() !== req.user.user_id) {
      return res.status(403).json({ detail: 'Unauthorized' });
    }

    const newActivity = await Activity.findOne({ _id: new_activity_id, is_deleted: false });
    if (!newActivity) {
      return res.status(404).json({ detail: 'New activity not found' });
    }

    // Calculate new total amount for new activity and number_of_people
    const totalAmount = newActivity.price_per_person * number_of_people;

    await ActivityBooking.findByIdAndUpdate(booking_id, {
      activity_id: new_activity_id,
      number_of_people,
      total_amount: totalAmount,
      status: 'rescheduled',
      updated_at: new Date(),
      updated_by: req.user.name
    });

    res.json({ message: 'Activity booking rescheduled successfully' });
  } catch (error) {
    console.error('Reschedule activity booking error:', error);
    res.status(500).json({ detail: 'Internal server error' });
  }
});

export default router;

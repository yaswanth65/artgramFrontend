import express from 'express';
import EventBooking from '../models/EventBooking.js';
import Event from '../models/Event.js';
import { getCurrentUser } from '../middleware/auth.js';

const router = express.Router();

// List user's event bookings (Customer)
router.get('/', getCurrentUser, async (req, res) => {
  try {
    const bookings = await EventBooking.find({ 
      user_id: req.user.user_id, 
      is_deleted: false 
    }).populate('event_id', 'event_date start_time end_time');
    
    res.json({ bookings });
  } catch (error) {
    console.error('List event bookings error:', error);
    res.status(500).json({ detail: 'Internal server error' });
  }
});

// Create new event booking (Customer)
router.post('/', getCurrentUser, async (req, res) => {
  try {
    const { event_id, number_of_tickets } = req.body;

    if (!event_id || !number_of_tickets || number_of_tickets <= 0) {
      return res.status(400).json({ detail: 'Event ID and valid number of tickets are required' });
    }

    const event = await Event.findOne({ _id: event_id, is_deleted: false });
    if (!event) {
      return res.status(404).json({ detail: 'Event not found' });
    }

    // Check capacity
    const bookedSeats = await EventBooking.aggregate([
      {
        $match: {
          event_id: event._id,
          status: 'booked',
          is_deleted: false
        }
      },
      {
        $group: {
          _id: null,
          total: { $sum: '$number_of_tickets' }
        }
      }
    ]);
    
    const totalBooked = bookedSeats.length > 0 ? bookedSeats[0].total : 0;
    const available = event.capacity - totalBooked;
    
    if (number_of_tickets > available) {
      return res.status(400).json({ detail: `Only ${available} tickets available` });
    }

    // Calculate price - assuming activity price not directly linked here. You can extend if needed.
    // For simplicity, let's assume fixed price 100 per ticket for now
    const pricePerTicket = 100.0;
    const totalAmount = number_of_tickets * pricePerTicket;

    const booking = new EventBooking({
      user_id: req.user.user_id,
      event_id,
      number_of_tickets,
      total_amount: totalAmount,
      status: 'booked',
      payment_status: 'pending',
      created_by: req.user.name
    });

    await booking.save();

    res.json({ message: 'Booking created successfully, pending payment' });
  } catch (error) {
    console.error('Create event booking error:', error);
    res.status(500).json({ detail: 'Internal server error' });
  }
});

// Cancel a booking (Customer)
router.put('/:booking_id/cancel', getCurrentUser, async (req, res) => {
  try {
    const { booking_id } = req.params;

    const booking = await EventBooking.findOne({ _id: booking_id, is_deleted: false });
    if (!booking) {
      return res.status(404).json({ detail: 'Booking not found' });
    }
    
    if (booking.user_id.toString() !== req.user.user_id) {
      return res.status(403).json({ detail: 'Unauthorized' });
    }

    if (booking.status === 'cancelled') {
      return res.status(400).json({ detail: 'Booking already cancelled' });
    }

    await EventBooking.findByIdAndUpdate(booking_id, {
      status: 'cancelled',
      updated_at: new Date(),
      updated_by: req.user.name
    });

    res.json({ message: 'Booking cancelled successfully' });
  } catch (error) {
    console.error('Cancel event booking error:', error);
    res.status(500).json({ detail: 'Internal server error' });
  }
});

// Reschedule booking (Customer)
router.put('/:booking_id/reschedule', getCurrentUser, async (req, res) => {
  try {
    const { booking_id } = req.params;
    const { new_event_id } = req.body;

    if (!new_event_id) {
      return res.status(400).json({ detail: 'New event ID is required' });
    }

    const booking = await EventBooking.findOne({ _id: booking_id, is_deleted: false });
    if (!booking) {
      return res.status(404).json({ detail: 'Booking not found' });
    }
    
    if (booking.user_id.toString() !== req.user.user_id) {
      return res.status(403).json({ detail: 'Unauthorized' });
    }

    const newEvent = await Event.findOne({ _id: new_event_id, is_deleted: false });
    if (!newEvent) {
      return res.status(404).json({ detail: 'New event not found' });
    }

    // Check capacity for new event
    const bookedSeats = await EventBooking.aggregate([
      {
        $match: {
          event_id: newEvent._id,
          status: 'booked',
          is_deleted: false
        }
      },
      {
        $group: {
          _id: null,
          total: { $sum: '$number_of_tickets' }
        }
      }
    ]);
    
    const totalBooked = bookedSeats.length > 0 ? bookedSeats[0].total : 0;
    const available = newEvent.capacity - totalBooked;
    
    if (booking.number_of_tickets > available) {
      return res.status(400).json({ detail: `Only ${available} tickets available in new event` });
    }

    // Update booking
    await EventBooking.findByIdAndUpdate(booking_id, {
      event_id: new_event_id,
      status: 'rescheduled',
      updated_at: new Date(),
      updated_by: req.user.name
    });

    res.json({ message: 'Booking rescheduled successfully' });
  } catch (error) {
    console.error('Reschedule event booking error:', error);
    res.status(500).json({ detail: 'Internal server error' });
  }
});

export default router;

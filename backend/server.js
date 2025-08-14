import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './config/database.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL || "*",
  credentials: true
}));

// Import routes
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import franchiseRoutes from './routes/franchises.js';
import activityRoutes from './routes/activities.js';
import eventRoutes from './routes/events.js';
import eventBookingRoutes from './routes/eventBookings.js';
import activityBookingRoutes from './routes/activityBookings.js';
import productRoutes from './routes/products.js';
import orderRoutes from './routes/orders.js';
import dashboardRoutes from './routes/dashboard.js';
import logRoutes from './routes/logs.js';

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/franchises', franchiseRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/event-bookings', eventBookingRoutes);
app.use('/api/activity-bookings', activityBookingRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api', dashboardRoutes);
app.use('/api/logs', logRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to FunZone API' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Global error handler:', err);
  res.status(err.status || 500).json({ 
    detail: err.message || 'Internal server error' 
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ detail: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`FunZone API Server running on port ${PORT}`);
});

# FunZone API Backend

This is the Node.js backend for the FunZone application, converted from the original Python FastAPI implementation and now using MongoDB.

## Features

- **Authentication & Authorization**: JWT-based authentication with role-based access control
- **User Management**: CRUD operations for users with different roles (admin, manager, customer)
- **Franchise Management**: Manage multiple franchise locations
- **Activity Management**: Create and manage recreational activities
- **Event Management**: Schedule and manage events
- **Booking System**: Handle both activity and event bookings
- **Product Management**: Manage products for each franchise
- **Order Management**: Handle product orders
- **Dashboard**: Analytics for admin and manager users
- **Logging**: System activity logging

## API Endpoints

### Authentication (`/api/auth`)
- `POST /register` - User registration
- `POST /login` - User login
- `POST /logout` - User logout
- `POST /forgot-password` - Password reset request
- `POST /reset-password` - Password reset

### Users (`/api/users`)
- `GET /` - List all users (Admin only)
- `POST /` - Create new user (Admin only)
- `PUT /:user_id` - Update user (Admin only)
- `DELETE /:user_id` - Soft delete user (Admin only)

### Franchises (`/api/franchises`)
- `GET /` - List all franchises (Admin only)
- `POST /` - Create new franchise (Admin only)
- `PUT /:franchise_id` - Update franchise (Admin only)
- `DELETE /:franchise_id` - Soft delete franchise (Admin only)

### Activities (`/api/activities`)
- `GET /` - List all activities (Admin & Manager)
- `POST /` - Create new activity (Admin & Manager)
- `GET /:activity_id/availability` - Check activity availability
- `PUT /:activity_id` - Update activity (Admin & Manager)
- `DELETE /:activity_id` - Soft delete activity (Admin & Manager)

### Events (`/api/events`)
- `GET /` - List all events (Admin & Manager)
- `POST /` - Create new event (Admin & Manager)
- `PUT /:event_id` - Update event (Admin & Manager)
- `DELETE /:event_id` - Soft delete event (Admin & Manager)

### Products (`/api/products`)
- `GET /` - List all products (Admin & Manager)
- `POST /` - Create new product (Admin & Manager)
- `PUT /:product_id` - Update product (Admin & Manager)
- `DELETE /:product_id` - Soft delete product (Admin & Manager)

### Orders (`/api/orders`)
- `GET /` - List user's orders (Customer)
- `POST /` - Create new order (Customer)
- `PUT /:order_id/cancel` - Cancel order (Customer)

### Event Bookings (`/api/event-bookings`)
- `GET /` - List user's event bookings (Customer)
- `POST /` - Create event booking (Customer)
- `PUT /:booking_id/cancel` - Cancel booking (Customer)
- `PUT /:booking_id/reschedule` - Reschedule booking (Customer)

### Activity Bookings (`/api/activity-bookings`)
- `GET /` - List user's activity bookings (Customer)
- `POST /` - Create activity booking (Customer)
- `PUT /:booking_id/cancel` - Cancel booking (Customer)
- `PUT /:booking_id/reschedule` - Reschedule booking (Customer)

### Dashboard (`/api`)
- `GET /admin/dashboard` - Admin dashboard data
- `GET /manager/dashboard` - Manager dashboard data

### Logs (`/api/logs`)
- `GET /` - Get system logs (Admin only)

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Variables**
   Create a `.env` file with the following variables:
   ```env
   # Server Configuration
   PORT=5000
   
   # MongoDB Configuration
   MONGO_URI=mongodb://localhost:27017/funzone
   
   # JWT Configuration
   JWT_SECRET=your_jwt_secret
   JWT_ALGORITHM=HS256
   JWT_EXPIRY_MINUTES=600
   
   # Frontend URL (for CORS)
   FRONTEND_URL=http://localhost:3000
   ```

3. **Database Setup**
   - Ensure MongoDB is running
   - The application will automatically create the database and collections
   - MongoDB will create indexes automatically based on the schema definitions

4. **Run the Server**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

## Database Schema

The backend uses MongoDB with the following collections:

- `users` - User accounts with roles
- `franchises` - Franchise locations
- `activities` - Recreational activities
- `events` - Scheduled events
- `products` - Products for sale
- `orders` - Product orders
- `event_bookings` - Event reservations
- `activity_bookings` - Activity reservations
- `logs` - System activity logs
- `passwordresettokens` - Password reset tokens

## MongoDB Features

- **Schema Validation**: Mongoose schemas with validation rules
- **Indexing**: Automatic indexing for better query performance
- **Aggregation Pipeline**: Complex queries using MongoDB aggregation
- **Population**: Automatic population of referenced documents
- **Transactions**: Support for multi-document transactions
- **Connection Pooling**: Automatic connection management

## Authentication

- JWT tokens are used for authentication
- Tokens include user ID, role, and name
- Role-based access control is implemented
- Tokens expire after 600 minutes (configurable)

## Error Handling

- Consistent error response format: `{ detail: "error message" }`
- HTTP status codes are properly set
- Global error handling middleware
- MongoDB connection error handling

## Security Features

- Password hashing with bcrypt
- JWT token validation
- Role-based authorization
- NoSQL injection prevention with Mongoose
- CORS configuration

## Performance Features

- Database indexing for common queries
- Aggregation pipelines for complex analytics
- Population for efficient data retrieval
- Connection pooling for MongoDB

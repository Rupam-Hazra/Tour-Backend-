# Tour Backend API

This is a Node.js backend API for a tour booking application. It provides user authentication, tour management, and booking functionalities using Express and MongoDB (via Mongoose).

## Features
- User authentication (signup, login, JWT-based auth)
- Tour CRUD operations (create, read, update, delete)
- Booking creation for tours
- Basic product demo endpoints (for learning/testing)

## Tech Stack
- Node.js
- Express.js
- MongoDB & Mongoose
- JWT for authentication
- bcryptjs for password hashing
- dotenv for environment variables
- morgan for logging

## Folder Structure
```
server/
  config/         # Database connection
  controllers/    # Route logic (auth, tours, bookings)
  models/         # Mongoose models (User, Tour, Booking)
  routes/         # API route definitions
  utils/          # Error handling utilities
  server.js       # Main server entry point
  package.json    # Project metadata & dependencies
```

## Getting Started

### Prerequisites
- Node.js (v14+ recommended)
- MongoDB instance (local or cloud)

### Installation
1. Clone the repository
2. Navigate to the `server` directory
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the `server` directory with the following variables:
   ```env
   PORT=xxxx
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   JWT_EXPIRES_IN=90d
   JWT_COOKIE_EXPIRES_IN=90
   NODE_ENV=development
   ```
5. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### Auth
- `POST /api/v1/auth/signup` — Register a new user
- `POST /api/v1/auth/login` — Login and receive JWT

### Tours
- `GET /api/v1/tours/` — Get all tours (auth required)
- `POST /api/v1/tours/` — Create a new tour (auth required)
- `GET /api/v1/tours/:id` — Get a tour by ID
- `PATCH /api/v1/tours/:id` — Update a tour (admin/moderator only)
- `DELETE /api/v1/tours/:id` — Delete a tour

### Bookings
- `POST /api/v1/auth/create-booking` — Create a booking (auth required)

### Products (Demo)
- `GET /products` — Get all products (demo)
- `POST /products` — Add a product (demo)
- `GET /products/:id` — Get product by ID (demo)
- `PUT /products/:id` — Update product (demo)
- `DELETE /products/:id` — Delete product (demo)

## Models

### User
- `name`: String, required
- `email`: String, required, unique, validated
- `password`: String, required, hashed
- `role`: String, enum [user, admin, moderator], default: user

### Tour
- `name`: String, required, unique
- `price`: Number
- `description`: String, required
- `image`: String

### Booking
- `user`: ObjectId (User reference)
- `tour`: ObjectId (Tour reference)

## Utilities
- `appError.js`: Custom error class
- `catchAsync.js`: Async error wrapper

## Development
- Uses `nodemon` for auto-reloading during development (`npm start`)
- Logging via `morgan`

## Notes
- All sensitive data and secrets should be stored in `.env` (see `.gitignore`)
- Make sure MongoDB is running and accessible via the URI in `.env`

## License
ISC 

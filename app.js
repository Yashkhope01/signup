const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database.js');
const authRoutes = require('./routes/authroutes.js');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ message: 'Server Error' });
});

// Export the app
module.exports = app;

const express = require('express');
const connectDB = require('./config/db');
const cardRoutes = require('./routes/cardRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', cardRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Server Initialization
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

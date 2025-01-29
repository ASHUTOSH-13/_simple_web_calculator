const express = require('express');
const cors = require('cors'); // Import CORS
require('dotenv').config(); // Load environment variables from .env file

const app = express();

// Use the port from the .env file or default to 3000
const PORT = process.env.PORT || 3000;

// Enable CORS to allow requests from frontend (Vercel)
app.use(cors({
    origin: '*' // Allow requests from any origin (you can restrict it to your Vercel domain)
}));

// Middleware to parse JSON
app.use(express.json());

// Serve static files
app.use(express.static('public'));

// Default route for testing
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Use the calculator routes
const calculatorRoutes = require('./routes/calculatorRoutes');
app.use('/api', calculatorRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

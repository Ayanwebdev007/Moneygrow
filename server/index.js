const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/money-grow-bloom';
console.log('Attempting to connect to MongoDB...');

mongoose.connect(MONGODB_URI)
    .then(() => console.log('Successfully connected to MongoDB'))
    .catch(err => {
        console.error('CRITICAL: MongoDB connection error:', err.message);
        // Don't exit, but log clearly
    });

// API Routes
const contactRoutes = require('./routes/contact');
app.use('/api/contact', contactRoutes);

// Serve static assets if in production (only if directory exists)
if (process.env.NODE_ENV === 'production') {
    const distPath = path.join(__dirname, '../client/dist');
    if (require('fs').existsSync(distPath)) {
        app.use(express.static(distPath));
        app.get('(.*)', (req, res) => {
            res.sendFile(path.resolve(distPath, 'index.html'));
        });
    } else {
        app.get('/', (req, res) => {
            res.send('Money Grow Bloom API Running (Production)');
        });
    }
    app.get('/', (req, res) => {
        res.send('Money Grow Bloom API Running');
    });
}

// Health check endpoint
app.get('/health', (req, res) => {
    const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
    res.json({
        status: 'UP',
        database: dbStatus,
        environment: process.env.NODE_ENV || 'development'
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

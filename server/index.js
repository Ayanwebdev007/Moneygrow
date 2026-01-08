const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const path = require('path');

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});
const PORT = process.env.PORT || 5000;

// Socket setup
app.set('io', io);
io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);
    socket.on('disconnect', () => console.log('Client disconnected'));
});

app.use(cors({
    origin: [
        'https://moneygrow-api-wnvk.onrender.com',
        'https://moneygrow-web-wnvk.onrender.com',
        'http://localhost:8081',
        'http://localhost:8082'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/money-grow-bloom';
console.log('Attempting to connect to MongoDB...');
// Log a masked version for debugging
console.log('URI Prefix:', MONGODB_URI.substring(0, 20) + '...');

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Successfully connected to MongoDB');
        console.log('Main DB Name:', mongoose.connection.name);
    })
    .catch(err => {
        console.error('CRITICAL: MongoDB connection failure details:');
        console.error('Error Code:', err.code);
        console.error('Error Name:', err.name);
        console.error('Error Message:', err.message);
    });

// Health check endpoint
app.get('/health', (req, res) => {
    const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
    res.json({
        status: 'UP',
        database: dbStatus,
        environment: process.env.NODE_ENV || 'development'
    });
});

// API Routes
const contactRoutes = require('./routes/contact');
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
const planRoutes = require('./routes/plans');

app.use('/api/contact', contactRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/plans', planRoutes);

// Base API route
app.get('/', (req, res) => {
    res.send('Money Grow Bloom API Running');
});

// Serve Mobile Web App (Flutter)
const mobilePath = path.join(__dirname, 'public/mobile');
app.use('/mobile', express.static(mobilePath));
app.get('/mobile/:any*', (req, res) => {
    res.sendFile(path.resolve(mobilePath, 'index.html'));
});

// Serve static assets if in production (only if directory exists)
if (process.env.NODE_ENV === 'production') {
    const distPath = path.join(__dirname, '../client/dist');
    if (require('fs').existsSync(distPath)) {
        app.use(express.static(distPath));
        app.get('/:any*', (req, res) => {
            res.sendFile(path.resolve(distPath, 'index.html'));
        });
    }
}

http.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

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
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/money-grow-bloom')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

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
} else {
    app.get('/', (req, res) => {
        res.send('Money Grow Bloom API Running');
    });
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/money-grow-bloom')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
    res.send('Money Grow Bloom API');
});

// Routes
const contactRoutes = require('./routes/contact');
app.use('/api/contact', contactRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

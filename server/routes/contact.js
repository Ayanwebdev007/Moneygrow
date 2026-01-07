const express = require('express');
const router = express.Router();
const ContactMessage = require('../models/ContactMessage');

// POST /api/contact
router.post('/', async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;

        // Basic validation
        if (!name || !phone || !subject || !message) {
            return res.status(400).json({ error: 'All fields except email are required' });
        }

        const newContact = new ContactMessage({ name, email, phone, subject, message });
        await newContact.save();
        res.status(201).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error('Contact error:', error);
        res.status(500).json({ error: 'Failed to send message' });
    }
});

module.exports = router;

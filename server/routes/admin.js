const express = require('express');
const router = express.Router();
const ContactMessage = require('../models/ContactMessage');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');

// GET /api/admin/contacts - Get all contact messages (Protected)
router.get('/contacts', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const contacts = await ContactMessage.find().sort({ createdAt: -1 });
        res.json(contacts);
    } catch (error) {
        console.error('Fetch contacts error:', error);
        res.status(500).json({ error: 'Server error fetching contacts' });
    }
});

module.exports = router;

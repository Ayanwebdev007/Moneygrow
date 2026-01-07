const express = require('express');
const router = express.Router();
const ContactMessage = require('../models/ContactMessage');
const Investor = require('../models/Investor');
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

// DELETE /api/admin/contacts/bulk
router.delete('/contacts/bulk', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const { ids } = req.body;
        if (!ids || !Array.isArray(ids) || ids.length === 0) {
            return res.status(400).json({ error: 'No IDs provided for deletion' });
        }
        await ContactMessage.deleteMany({ _id: { $in: ids } });
        res.json({ message: `${ids.length} leads deleted successfully` });
    } catch (error) {
        console.error('Bulk delete error:', error);
        res.status(500).json({ error: 'Failed to delete selected leads' });
    }
});

// GET /api/admin/investors - Get all app investors
router.get('/investors', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const investors = await Investor.find().sort({ createdAt: -1 });
        res.json(investors);
    } catch (error) {
        console.error('Fetch investors error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Plan = require('../models/Plan');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');

// @route   GET /api/plans
// @desc    Get all active plans
router.get('/', async (req, res) => {
    try {
        const plans = await Plan.find({ isActive: true }).sort({ durationDays: 1 });
        res.json(plans);
    } catch (error) {
        console.error('Fetch plans error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// @route   GET /api/plans/admin
// @desc    Get all plans for admin (including inactive)
router.get('/admin', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const plans = await Plan.find().sort({ createdAt: -1 });
        res.json(plans);
    } catch (error) {
        console.error('Fetch admin plans error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// @route   POST /api/plans
// @desc    Create a new plan
router.post('/', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const { name, type, profitPercentage, durationDays, minAmount, maxAmount, description } = req.body;

        const newPlan = new Plan({
            name,
            type,
            profitPercentage,
            durationDays,
            minAmount,
            maxAmount,
            description
        });

        await newPlan.save();
        res.status(201).json(newPlan);
    } catch (error) {
        console.error('Create plan error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// @route   PUT /api/plans/:id
// @desc    Update a plan
router.put('/:id', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const plan = await Plan.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!plan) return res.status(404).json({ error: 'Plan not found' });
        res.json(plan);
    } catch (error) {
        console.error('Update plan error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// @route   DELETE /api/plans/:id
// @desc    Delete a plan
router.delete('/:id', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const plan = await Plan.findByIdAndDelete(req.params.id);
        if (!plan) return res.status(404).json({ error: 'Plan not found' });
        res.json({ message: 'Plan deleted' });
    } catch (error) {
        console.error('Delete plan error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;

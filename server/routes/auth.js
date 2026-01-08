const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Investor = require('../models/Investor');

// @route   POST /api/auth/login
// @desc    Admin login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET || 'secret_fallback',
            { expiresIn: '1d' }
        );

        res.json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// @route   POST /api/auth/investor/register
// @desc    Register a new investor (Mobile App)
router.post('/investor/register', async (req, res) => {
    try {
        const { name, phone, password } = req.body;

        // Check if investor exists
        let investor = await Investor.findOne({ phone });
        if (investor) {
            return res.status(400).json({ error: 'User already exists with this phone number' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        investor = new Investor({
            name,
            phone,
            password: hashedPassword
        });

        await investor.save();

        const token = jwt.sign(
            { id: investor._id, role: 'investor' },
            process.env.JWT_SECRET || 'secret_fallback',
            { expiresIn: '30d' }
        );

        res.status(201).json({
            token,
            user: {
                id: investor._id,
                name: investor.name,
                phone: investor.phone,
                role: 'investor'
            }
        });
    } catch (error) {
        console.error('Investor registration error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// @route   POST /api/auth/investor/login
// @desc    Login for investors (Mobile App)
router.post('/investor/login', async (req, res) => {
    try {
        const { phone, password } = req.body;

        const investor = await Investor.findOne({ phone });
        if (!investor) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, investor.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        if (investor.status === 'blocked') {
            return res.status(403).json({ error: 'Account is blocked' });
        }

        const token = jwt.sign(
            { id: investor._id, role: 'investor' },
            process.env.JWT_SECRET || 'secret_fallback',
            { expiresIn: '30d' }
        );

        res.json({
            token,
            user: {
                id: investor._id,
                name: investor.name,
                phone: investor.phone,
                role: 'investor'
            }
        });
    } catch (error) {
        console.error('Investor login error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;

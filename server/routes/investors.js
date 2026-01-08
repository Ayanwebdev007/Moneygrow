const express = require('express');
const router = express.Router();
const Investor = require('../models/Investor');
const { authMiddleware } = require('../middleware/auth');

// @route   POST /api/investor/kyc
// @desc    Submit KYC details
router.post('/kyc', authMiddleware, async (req, res) => {
    try {
        const { fullName, panNumber, aadhaarNumber, dob } = req.body;
        const investorId = req.user.id;

        // Basic Format Validation
        const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        const aadhaarRegex = /^[2-9]{1}[0-9]{11}$/;

        if (!panNumber || !panRegex.test(panNumber.toUpperCase())) {
            return res.status(400).json({ error: 'Invalid PAN Number format' });
        }

        if (!aadhaarNumber || !aadhaarRegex.test(aadhaarNumber)) {
            return res.status(400).json({ error: 'Invalid Aadhaar Number format' });
        }

        // Mock Verification Process (Simulated)
        // Log for verification "API"
        console.log(`[KYC] Verifying for investor ${investorId}:`, { fullName, panNumber });

        // Simulating external API delay
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Update Investor Status
        const investor = await Investor.findByIdAndUpdate(investorId, {
            fullName,
            panNumber: panNumber.toUpperCase(),
            aadhaarNumber,
            dob,
            kycStatus: 'approved' // In a real app, this might be 'pending' if manual review is needed
        }, { new: true });

        if (!investor) {
            return res.status(404).json({ error: 'Investor not found' });
        }

        res.json({
            success: true,
            message: 'KYC Verified Successfully!',
            user: {
                id: investor._id,
                name: investor.name,
                phone: investor.phone,
                kycStatus: investor.kycStatus
            }
        });

    } catch (error) {
        console.error('KYC Submission error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// @route   GET /api/investor/profile
// @desc    Get investor profile
router.get('/profile', authMiddleware, async (req, res) => {
    try {
        const investor = await Investor.findById(req.user.id).select('-password');
        if (!investor) {
            return res.status(404).json({ error: 'Investor not found' });
        }
        res.json(investor);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;

const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        enum: ['daily', 'monthly', 'quarterly', 'half-yearly', 'yearly'],
        required: true
    },
    profitPercentage: {
        type: Number,
        required: true
    },
    durationDays: {
        type: Number,
        required: true
    },
    minAmount: {
        type: Number,
        required: true
    },
    maxAmount: {
        type: Number
    },
    description: {
        type: String,
        trim: true
    },
    lockInPeriod: {
        type: String,
        required: true
    },
    payoutFrequency: {
        type: String,
        required: true
    },
    riskDisclaimer: {
        type: String,
        default: 'Investment in this plan is subject to market risks. Please read documents carefully.'
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Plan', planSchema);

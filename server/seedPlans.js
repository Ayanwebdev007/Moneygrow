const mongoose = require('mongoose');
const Plan = require('./models/Plan');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/money-grow-bloom';

const seedPlans = [
    {
        name: 'Daily Growth Plan',
        type: 'daily',
        profitPercentage: 2.5,
        durationDays: 30,
        minAmount: 500,
        maxAmount: 10000,
        description: 'Earn 2.5% daily profit for 30 days. High returns with daily payouts.',
        lockInPeriod: '0 Days',
        payoutFrequency: 'Daily',
        riskDisclaimer: 'High volatility. Capital at risk.',
        isActive: true
    },
    {
        name: 'Monthly Savings Plan',
        type: 'monthly',
        profitPercentage: 15,
        durationDays: 90,
        minAmount: 1000,
        maxAmount: 50000,
        description: 'Steady 15% monthly growth for a 90-day period. Perfect for medium-term goals.',
        lockInPeriod: '30 Days',
        payoutFrequency: 'Monthly',
        riskDisclaimer: 'Stable returns with moderate market risk.',
        isActive: true
    },
    {
        name: 'Quarterly Wealth Plan',
        type: 'quarterly',
        profitPercentage: 50,
        durationDays: 365,
        minAmount: 5000,
        maxAmount: 200000,
        description: 'Maximize your wealth with 50% quarterly returns over a full year.',
        lockInPeriod: '90 Days',
        payoutFrequency: 'Every 3 Months',
        riskDisclaimer: 'Balanced growth. Subject to market fluctuations.',
        isActive: true
    },
    {
        name: 'Half Yearly Plan',
        type: 'half-yearly',
        profitPercentage: 80,
        durationDays: 365,
        minAmount: 10000,
        maxAmount: 500000,
        description: 'Significant growth opportunities with bi-annual payouts.',
        lockInPeriod: '180 Days',
        payoutFrequency: 'Every 6 Months',
        riskDisclaimer: 'Long-term investment with moderate risk.',
        isActive: true
    },
    {
        name: 'Fixed Income Plan',
        type: 'yearly',
        profitPercentage: 25,
        durationDays: 365,
        minAmount: 2000,
        maxAmount: 100000,
        description: 'A traditional yearly plan offering a guaranteed 25% return on investment.',
        lockInPeriod: '365 Days',
        payoutFrequency: 'Yearly',
        riskDisclaimer: 'Low risk. Assured returns.',
        isActive: true
    }
];

const seedDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB for seeding...');

        // Clear existing plans
        await Plan.deleteMany({});
        console.log('Cleared existing plans.');

        // Insert seed plans
        await Plan.insertMany(seedPlans);
        console.log('Successfully seeded investment plans!');

        mongoose.connection.close();
    } catch (error) {
        console.error('Seeding error:', error);
        process.exit(1);
    }
};

seedDB();

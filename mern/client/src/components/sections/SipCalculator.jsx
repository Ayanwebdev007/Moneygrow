import React, { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';
import { ChartBar } from 'lucide-react';

export default function SipCalculator() {
    const [input, setInput] = useState({
        contributionAmount: 10000,
        frequency: 'monthly',
        durationMonths: 60,
        expectedReturnRate: 12
    });

    const [result, setResult] = useState({
        totalContribution: 0,
        estimatedValue: 0,
        estimatedReturns: 0,
    });

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(value);
    };

    const calculate = () => {
        const { contributionAmount, frequency, durationMonths, expectedReturnRate } = input;

        let contributionsPerYear = 12;
        if (frequency === 'daily') contributionsPerYear = 365;
        else if (frequency === 'monthly') contributionsPerYear = 12;
        else if (frequency === 'quarterly') contributionsPerYear = 4;
        else if (frequency === 'half-yearly') contributionsPerYear = 2;
        else if (frequency === 'yearly') contributionsPerYear = 1;

        const numberOfContributions = Math.floor((durationMonths / 12) * contributionsPerYear);
        const totalContribution = contributionAmount * numberOfContributions;
        const ratePerPeriod = (expectedReturnRate / 100) / contributionsPerYear;

        let estimatedValue;
        if (ratePerPeriod === 0) {
            estimatedValue = totalContribution;
        } else {
            // Future Value of SIP formula: P * ({[1 + i]^n - 1} / i) * (1 + i)
            estimatedValue = contributionAmount * (((Math.pow(1 + ratePerPeriod, numberOfContributions) - 1) / ratePerPeriod) * (1 + ratePerPeriod));
        }

        const estimatedReturns = estimatedValue - totalContribution;

        setResult({
            totalContribution: Math.round(totalContribution),
            estimatedValue: Math.round(estimatedValue),
            estimatedReturns: Math.round(estimatedReturns),
        });
    };

    useEffect(() => {
        calculate();
    }, [input]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput(prev => ({
            ...prev,
            [name]: name === 'frequency' ? value : Number(value)
        }));
    };

    return (
        <div className="p-6 md:p-10 space-y-8 bg-card">
            <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                    <ChartBar className="w-7 h-7" />
                </div>
                <div>
                    <h3 className="text-2xl font-serif font-bold text-foreground">SIP Calculator</h3>
                    <p className="text-muted-foreground text-sm">Estimate your potential wealth growth</p>
                </div>
            </div>

            <div className="grid gap-8">
                {/* Contribution Amount */}
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <label htmlFor="contributionAmount" className="text-sm font-semibold text-foreground/80 lowercase tracking-wide uppercase">
                            Investment Amount
                        </label>
                        <span className="text-lg font-bold text-primary">{formatCurrency(input.contributionAmount)}</span>
                    </div>
                    <input
                        type="range"
                        name="contributionAmount"
                        value={input.contributionAmount}
                        onChange={handleChange}
                        min="1000"
                        max="500000"
                        step="1000"
                        className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Frequency */}
                    <div className="space-y-4">
                        <label htmlFor="frequency" className="text-sm font-semibold text-foreground/80 uppercase tracking-wide">
                            Frequency
                        </label>
                        <select
                            id="frequency"
                            name="frequency"
                            value={input.frequency}
                            onChange={handleChange}
                            className="flex h-12 w-full rounded-xl border border-border bg-background px-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                        >
                            <option value="daily">Daily</option>
                            <option value="monthly">Monthly</option>
                            <option value="quarterly">Quarterly</option>
                            <option value="half-yearly">Half Yearly</option>
                            <option value="yearly">Yearly</option>
                        </select>
                    </div>

                    {/* Expected Return Rate */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label htmlFor="expectedReturnRate" className="text-sm font-semibold text-foreground/80 uppercase tracking-wide">
                                Returns (%)
                            </label>
                            <span className="text-lg font-bold text-primary">{input.expectedReturnRate}%</span>
                        </div>
                        <input
                            type="range"
                            name="expectedReturnRate"
                            value={input.expectedReturnRate}
                            onChange={handleChange}
                            min="1"
                            max="25"
                            step="0.5"
                            className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                    </div>
                </div>

                {/* Duration */}
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <label htmlFor="durationMonths" className="text-sm font-semibold text-foreground/80 uppercase tracking-wide">
                            Duration
                        </label>
                        <span className="text-lg font-bold text-primary">
                            <span>{Math.floor(input.durationMonths / 12)}</span>y{" "}
                            <span>{input.durationMonths % 12}</span>m
                        </span>
                    </div>
                    <input
                        type="range"
                        name="durationMonths"
                        value={input.durationMonths}
                        onChange={handleChange}
                        min="12"
                        max="360"
                        step="12"
                        className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                </div>
            </div>

            {/* Results */}
            <div className="space-y-6 pt-8 border-t border-border">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-5 rounded-2xl bg-muted/40 border border-border/50 group/item">
                        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground block mb-1">Total Invested</span>
                        <p className="text-2xl font-bold text-foreground">{formatCurrency(result.totalContribution)}</p>
                    </div>

                    <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 group/item">
                        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600/70 block mb-1">Profit earned</span>
                        <p className="text-2xl font-bold text-emerald-600">{formatCurrency(result.estimatedReturns)}</p>
                    </div>

                    <div className="p-5 rounded-2xl bg-primary/10 border border-primary/20 group/item shadow-sm">
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary/70 block mb-1">Maturity Value</span>
                        <p className="text-2xl font-bold text-primary">{formatCurrency(result.estimatedValue)}</p>
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/10">
                    <p className="text-[10px] text-orange-800/60 leading-relaxed font-medium">
                        Returns are estimates based on historical performance. Actual growth may vary.
                    </p>
                </div>
            </div>
        </div>
    );
}

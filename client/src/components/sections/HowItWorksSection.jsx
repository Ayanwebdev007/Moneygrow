import React from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, ShieldCheck, LayoutGrid, Wallet, TrendingUp, Coins, ArrowRight } from 'lucide-react';

const steps = [
    { step: '01', title: 'Register', sub: 'Quick Signup', icon: 'user-plus' },
    { step: '02', title: 'KYC', sub: 'Instant KYC', icon: 'shield-check' },
    { step: '03', title: 'Plan', sub: 'Pick a Plan', icon: 'layout-grid' },
    { step: '04', title: 'Invest', sub: 'Secure Payment', icon: 'wallet' },
    { step: '05', title: 'Grow', sub: 'Daily Profits', icon: 'trending-up' },
    { step: '06', title: 'Earn', sub: 'Easy Payout', icon: 'coins' },
];

const getIcon = (iconName) => {
    switch (iconName) {
        case 'user-plus': return <UserPlus className="w-6 h-6" />;
        case 'shield-check': return <ShieldCheck className="w-6 h-6" />;
        case 'layout-grid': return <LayoutGrid className="w-6 h-6" />;
        case 'wallet': return <Wallet className="w-6 h-6" />;
        case 'trending-up': return <TrendingUp className="w-6 h-6" />;
        case 'coins': return <Coins className="w-6 h-6" />;
        default: return null;
    }
};

export default function HowItWorksSection() {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-background via-card/30 to-background overflow-hidden">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-emerald-900 dark:text-emerald-400 text-xs font-bold mb-3">
                        Simple Process
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
                        Ready in <span className="text-emerald-800 dark:text-emerald-500">3 Minutes</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Your simple 6-step path to wealth.
                    </p>
                </div>

                {/* Simple Creative Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10">
                    {steps.map((item) => (
                        <div key={item.step} className="group relative p-6 rounded-3xl bg-white/50 dark:bg-card/30 border border-emerald-100 dark:border-white/5 backdrop-blur-md hover:border-emerald-500/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgba(16,185,129,0.1)] transition-all duration-500 text-center flex flex-col items-center justify-center min-h-[180px] overflow-hidden">

                            {/* Decorative Gradient Blob */}
                            <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 left-full group-hover:-left-full transition-all duration-1000 ease-in-out"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent dark:from-emerald-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Step Number */}
                            <span className="absolute top-4 right-4 text-3xl font-black text-emerald-900/40 dark:text-emerald-500/40 group-hover:text-emerald-900/60 dark:group-hover:text-emerald-500/60 transition-colors duration-500 scale-100 group-hover:scale-110 origin-top-right">
                                {item.step}
                            </span>

                            {/* Icon Container */}
                            <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/40 dark:to-emerald-800/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 group-hover:-translate-y-1 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-emerald-500/20 transition-all duration-500 z-10">
                                {getIcon(item.icon)}
                            </div>

                            <h3 className="font-heading text-lg font-bold text-foreground mb-2 z-10 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-sm text-muted-foreground font-medium z-10 group-hover:text-emerald-600/80 dark:group-hover:text-emerald-400/80 transition-colors">
                                {item.sub}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-8 text-center">
                    <Link to="/register" className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                        Start Your Journey
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

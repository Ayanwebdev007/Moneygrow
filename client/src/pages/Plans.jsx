import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { CheckCircle } from 'lucide-react';
import { cn } from '../lib/utils';

const plans = [
    {
        id: 'daily',
        name: 'Daily Plan',
        tagline: 'Small Starts',
        growthRate: '18%',
        minAmount: '₹10',
        period: '/ day',
        description: 'Save daily habits. Start with just ₹10.',
        features: ['Start with just ₹10/day', 'Daily contribution tracking', 'Up to 18% yearly growth', 'Digital passbook included', 'Perfect for daily earners'],
        color: 'from-emerald-500 to-green-600',
        bgGradient: 'from-emerald-50 to-green-50 dark:from-emerald-950/40 dark:to-green-950/40',
        borderColor: 'border-emerald-200 dark:border-emerald-800',
        accentColor: 'text-emerald-600 dark:text-emerald-400',
        image: '/images/daily-plan-person.png',
    },
    {
        id: 'monthly',
        name: 'Monthly Plan',
        tagline: 'Flexible',
        growthRate: '20%',
        minAmount: '₹300',
        period: '/ month',
        description: 'Steady growth for salaried professionals.',
        features: ['Starting from ₹300/month', 'Monthly contribution cycle', 'Up to 20% yearly growth', 'Flexible payment dates', 'Best for salaried individuals'],
        color: 'from-blue-500 to-indigo-600',
        bgGradient: 'from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40',
        borderColor: 'border-blue-200 dark:border-blue-800',
        accentColor: 'text-blue-600 dark:text-blue-400',
        image: '/images/monthly-plan-person.png',
        popular: true,
    },
    {
        id: 'quarterly',
        name: 'Quarterly Plan',
        tagline: 'Faster Growth',
        growthRate: '25%',
        minAmount: '₹900',
        period: '/ quarter',
        description: 'Higher impact with accelerated returns.',
        features: ['Entry from ₹900/quarter', 'Quarterly contribution cycle', 'Up to 25% yearly growth', '4 easy payments / year', 'Higher growth opportunity'],
        color: 'from-purple-500 to-violet-600',
        bgGradient: 'from-purple-50 to-violet-50 dark:from-purple-950/40 dark:to-violet-950/40',
        borderColor: 'border-purple-200 dark:border-purple-800',
        accentColor: 'text-purple-600 dark:text-purple-400',
        image: '/images/quarterly-plan-person.png',
    },
    {
        id: 'halfyearly',
        name: 'Half Yearly Plan',
        tagline: 'High Yield',
        growthRate: '28%',
        minAmount: '₹1,800',
        period: '/ 6 months',
        description: 'Strategic approach with premium benefits.',
        features: ['Starting from ₹1,800/6 months', 'Semi-annual contribution', 'Up to 28% yearly growth', 'Only 2 payments / year', 'Premium growth benefits'],
        color: 'from-rose-500 to-pink-600',
        bgGradient: 'from-rose-50 to-pink-50 dark:from-rose-950/40 dark:to-pink-950/40',
        borderColor: 'border-rose-200 dark:border-rose-800',
        accentColor: 'text-rose-600 dark:text-rose-400',
        image: '/images/halfyearly-plan-person.png',
    },
    {
        id: 'yearly',
        name: 'Yearly Plan',
        tagline: 'Top Growth',
        growthRate: '30%',
        minAmount: '₹3,600',
        period: '/ year',
        description: 'Our premium plan for maximum potential.',
        features: ['Starting from ₹3,600/year', 'Single annual contribution', 'Up to 30% yearly growth', 'Highest growth potential', 'Long-term wealth building'],
        color: 'from-amber-500 to-orange-600',
        bgGradient: 'from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/40',
        borderColor: 'border-amber-200 dark:border-amber-800',
        accentColor: 'text-amber-600 dark:text-amber-400',
        image: '/images/yearly-plan-person.png',
        premium: true,
    },
];

export default function Plans() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-muted/30">
                {/* Abstract Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
                </div>

                <div className="container-custom relative z-10 py-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6 border border-primary/20">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-primary"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
                                <span className="text-xs font-bold text-primary uppercase tracking-widest">
                                    Smart Investment Options
                                </span>
                            </div>

                            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight drop-shadow-sm">
                                Grow Your <br /><span className="text-primary">Wealth Your Way</span>
                            </h1>

                            <p className="text-xl text-muted-foreground mb-8 max-w-xl">
                                Tailored plans for every goal. All backed by real assets. Start small or go big.
                            </p>

                            <div className="flex items-center gap-6">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                                            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="User" />
                                        </div>
                                    ))}
                                    <div className="w-10 h-10 rounded-full border-2 border-background bg-primary text-white flex items-center justify-center text-xs font-bold">
                                        50k+
                                    </div>
                                </div>
                                <div className="text-sm">
                                    <div className="font-bold text-foreground">Trusted by 50,000+</div>
                                    <div className="text-muted-foreground">Active Indian Investors</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative hidden lg:block">
                            <div className="relative z-10 bg-card rounded-3xl p-8 border border-border shadow-2xl overflow-hidden group">
                                {/* Decorative glow */}
                                <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors"></div>

                                <div className="flex items-center justify-between mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xs text-muted-foreground uppercase font-bold tracking-tighter">Projected Returns</div>
                                        <div className="text-2xl font-bold text-primary">Up to 30% p.a.</div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                        <div className="h-full bg-primary w-3/4 rounded-full"></div>
                                    </div>
                                    <div className="flex justify-between text-xs font-medium">
                                        <span className="text-muted-foreground">Low Risk</span>
                                        <span className="text-primary font-bold">High Return</span>
                                    </div>
                                </div>

                                <div className="mt-8 pt-8 border-t border-border/50">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-emerald-600"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>
                                        </div>
                                        <div className="text-sm font-medium text-foreground">100% Secure & Regulated</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Plans List */}
            <section className="py-16 lg:py-20 bg-emerald-50/50">
                <div className="container-custom space-y-8">
                    {plans.map((plan, index) => (
                        <div
                            key={plan.id}
                            className={cn(
                                "relative rounded-3xl overflow-hidden border-2 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] bg-gradient-to-r",
                                plan.borderColor,
                                plan.bgGradient
                            )}
                        >
                            {/* Badges */}
                            {plan.popular && (
                                <div className="absolute top-4 right-4 z-20 bg-primary text-primary-foreground text-sm font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                                    Most Popular
                                </div>
                            )}
                            {plan.premium && (
                                <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                                    Premium Plan
                                </div>
                            )}

                            <div className={cn("flex flex-col", index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse")}>
                                {/* Image Section */}
                                <div className="lg:w-2/5 relative">
                                    <div className="h-64 lg:h-full min-h-[300px] relative overflow-hidden">
                                        <div className={cn("absolute inset-0 bg-gradient-to-br opacity-20", plan.color)}></div>
                                        <img
                                            src={plan.image}
                                            alt={plan.name}
                                            className="w-full h-full object-cover object-top"
                                        />
                                        <div className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6">
                                            <div className={cn("inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r text-white font-bold text-xl shadow-xl", plan.color)}>
                                                Up to {plan.growthRate} Yearly
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="lg:w-3/5 p-6 lg:p-10">
                                    <div className="space-y-6">
                                        <div>
                                            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                                                {plan.name}
                                            </h2>
                                            <p className={cn("text-lg font-semibold", plan.accentColor)}>
                                                {plan.tagline}
                                            </p>
                                        </div>

                                        <div className="flex items-baseline gap-2">
                                            <span className="text-4xl md:text-5xl font-bold text-foreground">{plan.minAmount}</span>
                                            <span className="text-xl text-muted-foreground">{plan.period}</span>
                                        </div>

                                        <p className="text-muted-foreground text-lg">
                                            {plan.description}
                                        </p>

                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {plan.features.map((feature) => (
                                                <li key={feature} className="flex items-center gap-3">
                                                    <CheckCircle className={cn("w-5 h-5 flex-shrink-0", plan.accentColor)} />
                                                    <span className="text-foreground">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                            <Link to="/register">
                                                <Button size="lg" className={cn("gap-2 font-semibold px-8 bg-gradient-to-r hover:opacity-90 text-white w-full sm:w-auto", plan.color)}>
                                                    Get Started
                                                </Button>
                                            </Link>
                                            <Link to="/how-it-works">
                                                <Button size="lg" variant="outline" className="gap-2 font-semibold w-full sm:w-auto">
                                                    Learn More
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-16 bg-background relative overflow-hidden">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Quick Comparison
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Compare all plans at a glance and choose the one that fits your investment style.
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full bg-card rounded-2xl overflow-hidden shadow-lg border border-border">
                            <thead>
                                <tr className="bg-primary text-primary-foreground">
                                    <th className="px-6 py-4 text-left font-semibold">Plan</th>
                                    <th className="px-6 py-4 text-center font-semibold">Min. Amount</th>
                                    <th className="px-6 py-4 text-center font-semibold">Frequency</th>
                                    <th className="px-6 py-4 text-center font-semibold">Growth Rate</th>
                                    <th className="px-6 py-4 text-center font-semibold">Best For</th>
                                </tr>
                            </thead>
                            <tbody>
                                {plans.map((plan, index) => (
                                    <tr key={plan.id} className={cn("border-b border-border transition-colors", index % 2 === 0 ? "bg-background" : "bg-muted/20 hover:bg-muted/40")}>
                                        <td className="px-6 py-4 font-semibold text-foreground">{plan.name}</td>
                                        <td className="px-6 py-4 text-center font-bold text-foreground">{plan.minAmount}</td>
                                        <td className="px-6 py-4 text-center text-muted-foreground capitalize">{plan.period.replace('/ ', '')}</td>
                                        <td className="px-6 py-4 text-center">
                                            <span className={cn("inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r text-white font-bold text-sm", plan.color)}>
                                                {plan.growthRate}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-center text-muted-foreground text-sm">{plan.features[4]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Growth Transparency Section */}
            <section className="py-16 bg-background relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 text-primary mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>
                            <span className="text-sm font-semibold uppercase tracking-wider">100% Transparency</span>
                        </div>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                            What We Guarantee
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Across all plans, Money Grow ensures complete transparency and security.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
                        {[
                            { text: 'Clear contribution structure', color: 'bg-primary/10 text-primary', icon: <><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></> },
                            { text: 'Transparent growth calculation', color: 'bg-accent/10 text-accent', icon: <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></> },
                            { text: 'Digital passbook & tracking', color: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600', icon: <><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></> },
                            { text: 'Defined plan tenure', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600', icon: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></> },
                            { text: 'Secure data handling', color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600', icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /> },
                        ].map((feature, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center p-6 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all">
                                <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-4", feature.color)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                                        {feature.icon}
                                    </svg>
                                </div>
                                <p className="text-sm font-medium text-foreground">{feature.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Income & Reward Opportunities */}
            <section className="py-12 bg-navy-tint border-t border-navy-500/5">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full border border-accent/20 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-accent"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                            <span className="text-xs font-bold text-accent uppercase tracking-wider">Partner Benefits</span>
                        </div>

                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
                            Partner & Agent Income
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Earn more with our multi-tier reward system.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
                        {[
                            { title: 'Direct', desc: 'Instant referral bonus', color: 'text-emerald-600', bg: 'bg-emerald-500/10', icon: <><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></> },
                            { title: 'Level', desc: 'Team growth income', color: 'text-blue-600', bg: 'bg-blue-500/10', icon: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></> },
                            { title: 'Reward', desc: 'Milestone achievements', color: 'text-purple-600', bg: 'bg-purple-500/10', icon: <><rect x="3" y="8" width="18" height="4" rx="1" /><path d="M12 8v13" /><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" /><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" /></> },
                            { title: 'Director', desc: 'Monthly turnover share', color: 'text-rose-600', bg: 'bg-rose-500/10', icon: <><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></> },
                            { title: 'Core Committee', desc: 'High-level leadership', color: 'text-amber-600', bg: 'bg-amber-500/10', icon: <path d="m2 4 3 12h14l3-12-6 7-4-9-4 9-6-7" /> },
                        ].map((item, idx) => (
                            <div key={idx} className="group p-4 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all text-center">
                                <div className={cn("w-10 h-10 mx-auto rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform", item.bg, item.color)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                        {item.icon}
                                    </svg>
                                </div>
                                <h3 className="font-bold text-sm text-foreground mb-1">{item.title}</h3>
                                <p className="text-xs text-muted-foreground leading-tight">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Know More / Contact Button */}
                    <div className="text-center">
                        <Link to="/contact">
                            <Button variant="secondary" className="gap-2 shadow-sm hover:shadow-md transition-all">
                                Know More
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Important Information */}
            <section className="py-12 bg-amber-50 dark:bg-amber-950/20 border-y border-amber-200 dark:border-amber-900">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row items-start gap-6 max-w-4xl mx-auto">
                        <div className="flex-shrink-0">
                            <div className="w-16 h-16 rounded-2xl bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-amber-600 dark:text-amber-400"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                                Important Information
                            </h3>
                            <ul className="space-y-3 text-muted-foreground">
                                {[
                                    'All plans are participation-based with no guaranteed returns',
                                    'Growth percentages are indicative and policy-driven',
                                    'Income and rewards depend on performance and plan continuity',
                                    'Please read all terms and conditions before investing',
                                ].map((info, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                                        {info}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                    <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="container-custom text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
                        <span className="text-sm font-semibold text-white">Start Your Journey Today</span>
                    </div>

                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Ready to Grow Your Wealth?
                    </h2>
                    <p className="text-white/90 max-w-2xl mx-auto mb-10 text-lg">
                        Choose a growth plan that aligns with your financial goals and start your journey with Money Grow today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/register">
                            <Button size="lg" variant="secondary" className="gap-2 font-bold px-10 py-6 text-lg shadow-xl hover:shadow-2xl transition-all">
                                Register Now
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </Button>
                        </Link>
                        <Link to="/login">
                            <Button size="lg" variant="outline" className="gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-6 text-lg">
                                Login to Account
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Legal Disclaimer */}
            <section className="py-8 bg-muted/50 border-t border-border">
                <div className="container-custom">
                    <div className="flex items-start gap-4 max-w-4xl mx-auto">
                        <div className="flex-shrink-0 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-muted-foreground"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>
                        </div>
                        <div>
                            <h4 className="font-semibold text-foreground mb-2">Legal Disclaimer</h4>
                            <p className="text-sm text-muted-foreground">
                                Money Grow is not a bank, NBFC, or investment advisory firm. All growth plans, income models,
                                and rewards operate under defined company policies and applicable regulations. Past performance
                                is not indicative of future results.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { ArrowRight, Star, TrendingUp, CheckCircle, ChevronLeft, ChevronRight, Crown } from 'lucide-react';
import { cn } from '../../lib/utils';

const plans = [
    {
        id: 'daily',
        name: 'Daily Plan',
        tagline: 'Small Starts',
        growthRate: '18%',
        minAmount: '₹10',
        period: '/ day',
        description: 'Save daily habits. Start with just ₹10.',
        features: ['Start with just ₹10/day', 'Daily contribution tracking', 'Up to 18% yearly growth', 'Digital passbook included'],
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
        features: ['Starting from ₹300/month', 'Monthly contribution cycle', 'Up to 20% yearly growth', 'Flexible payment dates'],
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
        features: ['Entry from ₹900/quarter', 'Quarterly contribution cycle', 'Up to 25% yearly growth', '4 easy payments / year'],
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
        features: ['Starting from ₹1,800/6 months', 'Semi-annual contribution', 'Up to 28% yearly growth', 'Only 2 payments / year'],
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
        features: ['Starting from ₹3,600/year', 'Single annual contribution', 'Up to 30% yearly growth', 'Highest growth potential'],
        color: 'from-amber-500 to-orange-600',
        bgGradient: 'from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/40',
        borderColor: 'border-amber-200 dark:border-amber-800',
        accentColor: 'text-amber-600 dark:text-amber-400',
        image: '/images/yearly-plan-person.png',
        premium: true,
    },
];

export default function GrowthPlansSection() {
    const containerRef = useRef(null);

    const scroll = (direction) => {
        if (containerRef.current) {
            const scrollAmount = containerRef.current.clientWidth * 0.8;
            containerRef.current.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="section-padding bg-emerald-950 text-white relative overflow-hidden">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="inline-block text-sm font-bold text-emerald-400 mb-3 uppercase tracking-wider">
                        Investment Options
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Pick Your Plan
                    </h2>
                    <p className="text-lg text-emerald-100/80 font-medium leading-relaxed">
                        5 simple ways to grow your money. Pick one and start today.
                    </p>
                </div>

                {/* Plans Carousel */}
                <div className="relative px-0 lg:px-16 group">
                    <div
                        ref={containerRef}
                        className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 hide-scrollbar scroll-smooth"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {plans.map((plan, index) => (
                            <div key={plan.id} className="flex-none w-full lg:w-full snap-center pl-4 lg:pl-0">
                                <div className={cn(
                                    "relative rounded-3xl overflow-hidden border-2 bg-gradient-to-r transition-all duration-300 hover:shadow-2xl",
                                    plan.borderColor,
                                    plan.bgGradient
                                )}>
                                    {/* Badges */}
                                    {plan.popular && (
                                        <div className="absolute top-4 right-4 z-20 bg-primary text-primary-foreground text-sm font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                                            <Star className="w-4 h-4 fill-current" />
                                            Most Popular
                                        </div>
                                    )}
                                    {plan.premium && (
                                        <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                                            <Crown className="w-4 h-4 fill-current" />
                                            Premium Plan
                                        </div>
                                    )}

                                    <div className={cn(
                                        "flex flex-col",
                                        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                    )}>
                                        {/* Image Section */}
                                        <div className="lg:w-2/5 relative">
                                            <div className="h-64 lg:h-full min-h-[320px] relative overflow-hidden">
                                                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-20", plan.color)}></div>
                                                <img
                                                    src={plan.image}
                                                    alt={plan.name}
                                                    className="w-full h-full object-cover object-top"
                                                />
                                                {/* Growth Rate Overlay */}
                                                <div className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6">
                                                    <div className={cn("inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r text-white font-bold text-xl shadow-xl", plan.color)}>
                                                        <TrendingUp className="w-6 h-6" />
                                                        Up to {plan.growthRate} Yearly
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="lg:w-3/5 p-6 lg:p-10">
                                            <div className="space-y-5">
                                                {/* Header */}
                                                <div>
                                                    <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                                                        {plan.name}
                                                    </h3>
                                                    <p className={cn("text-lg font-bold", plan.accentColor)}>
                                                        {plan.tagline}
                                                    </p>
                                                </div>

                                                {/* Price */}
                                                <div className="flex items-baseline gap-2">
                                                    <span className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">{plan.minAmount}</span>
                                                    <span className="text-xl text-slate-600 dark:text-emerald-100/60 transition-colors">{plan.period}</span>
                                                </div>

                                                {/* Description */}
                                                <p className="text-slate-700 dark:text-emerald-100/80 text-lg leading-relaxed">
                                                    {plan.description}
                                                </p>

                                                {/* Features */}
                                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {plan.features.map((feature) => (
                                                        <li key={feature} className="flex items-center gap-3 group/item">
                                                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center group-hover/item:bg-emerald-500/30 transition-colors">
                                                                <CheckCircle className={cn("w-3 h-3", plan.accentColor)} strokeWidth={2.5} />
                                                            </div>
                                                            <span className="text-slate-800 dark:text-emerald-50 font-medium">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>

                                                {/* CTA Buttons */}
                                                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                                    <a href="https://play.google.com/store/apps?hl=en_IN" target="_blank" rel="noopener noreferrer">
                                                        <Button size="lg" className={cn("gap-2 font-semibold px-8 bg-gradient-to-r hover:opacity-90 text-white w-full sm:w-auto", plan.color)}>
                                                            Get Started
                                                            <ArrowRight className="w-5 h-5" />
                                                        </Button>
                                                    </a>
                                                    <Link to="/plans">
                                                        <Button size="lg" variant="outline" className="gap-2 font-semibold w-full sm:w-auto">
                                                            Learn More
                                                        </Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Custom Navigation Arrows */}
                    <button
                        onClick={() => scroll(-1)}
                        className="absolute left-0 lg:-left-8 top-1/2 -translate-y-1/2 h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 border-0 shadow-xl flex items-center justify-center transition-transform hover:scale-105"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={() => scroll(1)}
                        className="absolute right-0 lg:-right-8 top-1/2 -translate-y-1/2 h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 border-0 shadow-xl flex items-center justify-center transition-transform hover:scale-105"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* View All Plans Link */}
                <div className="text-center mt-10">
                    <Link to="/plans">
                        <Button variant="outline" size="lg" className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white gap-2 font-semibold">
                            View All Plans
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    </Link>
                </div>

                {/* Disclaimer */}
                <p className="text-center text-xs text-emerald-100/60 max-w-2xl mx-auto mt-8 font-medium">
                    Investment plans are subject to terms and conditions. Returns are not guaranteed and depend on market conditions.
                </p>
            </div>
        </section>
    );
}

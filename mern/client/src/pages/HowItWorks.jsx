import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { cn } from '../lib/utils';
import { UserPlus, BarChart, TrendingUp, DollarSign, PieChart, Shield, CheckCircle, Smartphone, Clock, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50">
                {/* Abstract Shapes */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-3xl"></div>

                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6">
                                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                3-Minute Setup
                            </div>

                            <h1 className="font-serif text-4xl md:text-5xl lg:text-[5.5rem] font-bold text-foreground mb-6 leading-[1] drop-shadow-sm">
                                Easy to <span className="text-emerald-700">Start</span>,<br />
                                Simple to <span className="text-teal-700">Grow</span>
                            </h1>

                            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
                                Don't let complex jargon hold you back. Money Grow turns tiny daily savings into significant wealth through a transparent, 6-step process anyone can follow.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-10">
                                <Link to="/register">
                                    <Button size="lg" className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 h-14 px-8 text-lg rounded-xl shadow-xl shadow-emerald-600/20">
                                        Create Your Free Account
                                    </Button>
                                </Link>
                                <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-xl border-emerald-200">
                                    Download Guide
                                </Button>
                            </div>

                            {/* Trust Indicators */}
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-emerald-100 flex items-center justify-center overflow-hidden">
                                            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 20}`} alt="User" />
                                        </div>
                                    ))}
                                </div>
                                <p>Joined by 2,000+ new investors this month</p>
                            </div>
                        </div>

                        {/* Right Visual: Mini Process Steps */}
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { icon: <UserPlus className="w-5 h-5" />, title: 'Register', color: 'bg-blue-500', delay: '0ms' },
                                    { icon: <Shield className="w-5 h-5" />, title: 'Verify', color: 'bg-emerald-500', delay: '100ms' },
                                    { icon: <CheckCircle className="w-5 h-5" />, title: 'Choose Plan', color: 'bg-purple-500', delay: '200ms' },
                                    { icon: <TrendingUp className="w-5 h-5" />, title: 'Grow', color: 'bg-amber-500', delay: '300ms' },
                                ].map((step, idx) => (
                                    <div key={idx} className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all group overflow-hidden relative">
                                        <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform">
                                            <div className={cn("w-24 h-24 rounded-full", step.color)}></div>
                                        </div>
                                        <div className={cn("w-10 h-10 rounded-lg text-white flex items-center justify-center mb-4", step.color)}>
                                            {step.icon}
                                        </div>
                                        <h4 className="font-bold text-foreground">{step.title}</h4>
                                    </div>
                                ))}
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-2xl border border-emerald-50 flex items-center gap-3 animate-bounce shadow-emerald-500/10">
                                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                                    <TrendingUp className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs text-muted-foreground uppercase font-bold tracking-tighter">Verified Profits</div>
                                    <div className="text-sm font-bold text-emerald-600">Daily Payouts</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Stats */}
            <section className="py-12 bg-card border-y border-border">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { icon: <UserPlus className="w-8 h-8 text-primary mx-auto mb-3" />, value: '50,000+', label: 'Active Investors' },
                            { icon: <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />, value: '₹100Cr+', label: 'Assets Managed' },
                            { icon: <PieChart className="w-8 h-8 text-primary mx-auto mb-3" />, value: '4.8★', label: 'User Rating' },
                            { icon: <Shield className="w-8 h-8 text-primary mx-auto mb-3" />, value: '100%', label: 'Secure Platform' },
                        ].map((stat, idx) => (
                            <div key={idx} className="text-center">
                                {stat.icon}
                                <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Steps Section */}
            <section className="py-12 bg-emerald-50/50 border-y border-emerald-500/5">
                <div className="container-custom">
                    <div className="text-center mb-10">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
                            Your 6-Step Path to Wealth
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            A simple process to grow your money with digital farming and gold.
                        </p>
                    </div>

                    <div className="space-y-12">
                        {[
                            {
                                step: 1,
                                title: 'Quick Register',
                                subtitle: 'Join in 2 Minutes',
                                description: 'Create your account with just an email and phone number.',
                                highlights: ['No paperwork', 'Instant activation', 'Secure OTP', 'Free access'],
                                image: '/images/how-it-works/step-register.png',
                                color: 'from-emerald-500/20 to-emerald-500/5',
                            },
                            {
                                step: 2,
                                title: 'Digital KYC',
                                subtitle: 'Verify in 24 Hours',
                                description: 'Upload your documents and get verified within 24 hours.',
                                highlights: ['Aadhaar & PAN link', 'Safe bank link', 'Video KYC', 'RBI compliant'],
                                image: '/images/how-it-works/step-kyc.png',
                                color: 'from-blue-500/20 to-blue-500/5',
                            },
                            {
                                step: 3,
                                title: 'Pick a Plan',
                                subtitle: 'Tailored for You',
                                description: 'Choose a plan that fits your goals. Daily drops or yearly gains.',
                                highlights: ['Daily/Monthly', 'Yearly plans', 'Flexible amounts', 'Clear projections'],
                                image: '/images/how-it-works/step-choose-plan.png',
                                color: 'from-purple-500/20 to-purple-500/5',
                            },
                            {
                                step: 4,
                                title: 'Secure Invest',
                                subtitle: 'Safe Payments',
                                description: 'Add funds via UPI or Net Banking. Your money works from day one.',
                                highlights: ['All UPI apps', 'Instant confirm', 'Starts today', 'Digital receipts'],
                                image: '/images/how-it-works/step-invest.png',
                                color: 'from-amber-500/20 to-amber-500/5',
                            },
                            {
                                step: 5,
                                title: 'Watch it Grow',
                                subtitle: 'Live Tracking',
                                description: 'Track your wealth in real-time with our intuitive dashboard.',
                                highlights: ['Live profits', 'Growth analytics', 'Monthly reports', 'Push alerts'],
                                image: '/images/how-it-works/step-grow.png',
                                color: 'from-teal-500/20 to-teal-500/5',
                            },
                            {
                                step: 6,
                                title: 'Easy Payouts',
                                subtitle: 'Reap Rewards',
                                description: 'Withdraw anytime or reinvest to grow your wealth faster.',
                                highlights: ['Top returns', 'Easy withdrawals', 'Reinvest bonus', 'Tax efficient'],
                                image: '/images/how-it-works/step-returns.png',
                                color: 'from-orange-500/20 to-orange-500/5',
                            },
                        ].map((step, index) => (
                            <div key={index} className={cn("flex flex-col items-center gap-8 lg:gap-12", index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse")}>
                                {/* Image */}
                                <div className="w-full lg:w-1/3">
                                    <div className={cn("relative rounded-3xl overflow-hidden bg-gradient-to-br p-6", step.color)}>
                                        <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                                            {step.step}
                                        </div>
                                        <img
                                            src={step.image}
                                            alt={step.title}
                                            className="w-full h-auto rounded-2xl shadow-2xl"
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="w-full lg:w-2/3">
                                    <span className="inline-block text-sm font-medium text-primary mb-2 uppercase tracking-wider">
                                        Step {step.step}
                                    </span>
                                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-lg text-primary/80 font-medium mb-4">
                                        {step.subtitle}
                                    </p>
                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        {step.description}
                                    </p>
                                    <ul className="space-y-3">
                                        {step.highlights.map((highlight, hIdx) => (
                                            <li key={hIdx} className="flex items-center gap-3">
                                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                                                <span className="text-foreground">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Visual */}
            <section className="py-12 bg-amber-50/50">
                <div className="container-custom">
                    <div className="text-center mb-10">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
                            Your Investment Timeline
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            See how quickly you can start earning returns.
                        </p>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-primary/20 rounded-full hidden md:block"></div>

                        <div className="space-y-8">
                            {[
                                { time: 'Day 1', title: 'Join & Verify', desc: 'Quick signup and KYC' },
                                { time: 'Day 2', title: 'Invest', desc: 'Pick plan & fund account' },
                                { time: 'Week 1', title: 'Active', desc: 'Your money starts working' },
                                { time: 'Month 1+', title: 'Growth', desc: 'Track returns daily' },
                                { time: 'Maturity', title: 'Payout', desc: 'Withdraw or reinvest' }
                            ].map((item, index) => (
                                <div key={index} className={cn("flex items-center gap-8", index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse")}>
                                    <div className={cn("flex-1", index % 2 === 0 ? "md:text-right" : "md:text-left")}>
                                        <div className="bg-background rounded-2xl p-6 shadow-lg border border-border">
                                            <span className="inline-block text-sm font-medium text-primary mb-1">{item.time}</span>
                                            <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                                        </div>
                                    </div>
                                    <div className="hidden md:flex w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg z-10"></div>
                                    <div className="flex-1 hidden md:block"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-12 bg-navy-tint border-t border-navy-500/5">
                <div className="container-custom">
                    <div className="text-center mb-10">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
                            Why Thousands Trust Us
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            We combine technology and expertise to deliver top-tier results.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <Shield className="w-8 h-8 text-primary" />, title: 'Solid Security', description: 'Your funds are protected with bank-grade encryption and 2FA.' },
                            { icon: <Clock className="w-8 h-8 text-primary" />, title: 'Fast Profits', description: 'See returns within days, with easy withdrawal options anytime.' },
                            { icon: <TrendingUp className="w-8 h-8 text-primary" />, title: 'Proven Record', description: 'Consistently delivering top-tier returns to 50k+ investors.' }
                        ].map((item, idx) => (
                            <div key={idx} className="text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                                <p className="text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L12 3Z" /></svg>
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
        </div>
    );
}

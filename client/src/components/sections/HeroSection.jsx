import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRight, TrendingUp, CheckCircle, Star } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden min-h-[70vh] flex items-center pt-8 md:pt-12 pb-16">
            {/* Background */}
            <div className="absolute inset-0 gradient-hero"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Left Content */}
                    <div className="order-2 lg:order-1">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-3 animate-fade-in">
                            <div className="flex -space-x-1">
                                <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center">
                                    <Star className="w-3 h-3 text-accent-foreground" />
                                </div>
                            </div>
                            <span>Rated 4.9/5 by 10,000+ Investors</span>
                        </div>

                        {/* Heading */}
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight drop-shadow-md">
                            Grow Your Wealth <br />
                            <span className="text-gradient-gold">Faster & Smarter</span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-lg text-white mb-6 max-w-xl leading-relaxed font-medium">
                            Join 50,000+ Indians using our secure, high-return plans. Simple, transparent, and built for your future.
                        </p>

                        {/* Feature List */}
                        <div className="flex flex-wrap gap-4 mb-6">
                            {['3% Daily Returns', 'Safe & Secure', 'Fast Payouts'].map((feature) => (
                                <div key={feature} className="flex items-center gap-2 text-white/90">
                                    <CheckCircle className="w-5 h-5 text-accent" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
                            <a href="https://play.google.com/store/apps?hl=en_IN" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold btn-glow gap-2 text-base px-8 h-12">
                                    Start Investing
                                    <ArrowRight className="w-5 h-5" />
                                </Button>
                            </a>
                            <a href="/plans">
                                <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white text-base px-8 h-12">
                                    See Plans
                                </Button>
                            </a>
                        </div>

                        {/* Trust Stats */}
                        <div className="flex flex-wrap gap-8 pt-6 border-t border-white/10">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">₹50Cr+</div>
                                <div className="text-sm text-white/60">Assets Managed</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">10,000+</div>
                                <div className="text-sm text-white/60">Happy Investors</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">99.9%</div>
                                <div className="text-sm text-white/60">Satisfaction Rate</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="order-1 lg:order-2 relative px-4 lg:px-0">
                        {/* Main Investor Image */}
                        <div className="relative z-10 w-full max-w-[320px] md:max-w-md mx-auto">
                            <div className="relative">
                                <img
                                    src="/images/hero-investor.png"
                                    alt="Successful Investor"
                                    className="w-full rounded-[2rem] shadow-2xl"
                                />

                                {/* Floating Card - Growth Chart */}
                                <div className="absolute -left-8 md:-left-12 top-1/4 animate-fade-in block z-20">
                                    <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-2 md:p-3 border border-white/50 scale-50 sm:scale-75 md:scale-100 origin-right">
                                        <img
                                            src="/images/hero-growth-chart.png"
                                            alt="Growth Chart"
                                            className="w-20 h-20 md:w-32 md:h-32 rounded-xl object-cover"
                                        />
                                        <div className="mt-2 text-center">
                                            <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider font-bold">Your Growth</div>
                                            <div className="text-xs md:text-sm font-bold text-green-600 flex items-center justify-center gap-1">
                                                <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
                                                +127.5%
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Card - Coins */}
                                <div className="absolute -right-8 md:-right-8 bottom-1/4 animate-fade-in block z-20" style={{ animationDelay: '0.2s' }}>
                                    <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-2 md:p-3 border border-white/50 scale-50 sm:scale-75 md:scale-100 origin-left">
                                        <img
                                            src="/images/hero-coins.png"
                                            alt="Investment Returns"
                                            className="w-16 h-16 md:w-28 md:h-28 rounded-xl object-cover"
                                        />
                                        <div className="mt-2 text-center">
                                            <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider font-bold">Returns</div>
                                            <div className="text-xs md:text-sm font-bold text-accent flex items-center justify-center gap-1">
                                                {/* Coins Icon */}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 md:w-4 md:h-4"><circle cx="8" cy="8" r="6" /><path d="M18.09 10.37A6 6 0 1 1 10.34 18" /><path d="M7 6h1v4" /><path d="m16.71 13.88.7 .71-2.82 2.82" /></svg>
                                                ₹5.2L
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Trust Badge */}
                                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 animate-fade-in w-max" style={{ animationDelay: '0.4s' }}>
                                    <div className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-full px-4 md:px-6 py-2 md:py-3 shadow-xl flex items-center gap-2 md:gap-3 border border-white/20">
                                        <div className="flex items-center gap-1 shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-5 md:h-5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>
                                        </div>
                                        <div className="text-[10px] md:text-sm font-medium whitespace-nowrap">
                                            100% Secure & Verified Platform
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Background Decorations */}
                        <div className="absolute -top-10 -right-10 w-48 h-48 md:w-72 md:h-72 bg-accent/20 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 md:w-72 md:h-72 bg-primary/20 rounded-full blur-3xl -z-10"></div>
                    </div>
                </div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
                </svg>
            </div>
        </section>
    );
}

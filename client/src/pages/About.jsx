import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ArrowRight, Leaf, Shield, CheckCircle, TrendingUp } from 'lucide-react';

const stats = [
    { value: '10,000+', label: 'Happy Investors' },
    { value: '₹50Cr+', label: 'Assets Managed' },
    { value: '15-30%', label: 'Annual Returns' },
    { value: '5+ Years', label: 'Track Record' },
];

const values = [
    { title: 'Safe First', desc: 'Your money is protected by bank-grade tech.', icon: <Shield className="w-7 h-7" /> },
    { title: '10k+ Trusted', desc: 'Join 10,000+ Indians building their future.', icon: <CheckCircle className="w-7 h-7" /> },
    { title: '100% Clear', desc: 'Clear terms, no hidden fees, ever.', icon: <TrendingUp className="w-7 h-7" /> },
    { title: 'Expert Help', desc: 'Our team is here to help you grow 24/7.', icon: <Leaf className="w-7 h-7" /> },
];

export default function About() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/about/farming-field.png"
                        alt="Lush farmland at sunrise"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background from-0% via-background/95 via-30% to-transparent"></div>
                </div>
                <div className="w-full px-6 md:px-16 lg:px-24 relative z-10 py-20">
                    <div className="max-w-lg">
                        <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary font-medium text-sm mb-6">
                            About Money Grow
                        </span>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                            Grow Wealth <span className="text-primary">Naturally</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8 text-shadow-sm leading-relaxed">
                            Invest in what lasts. Fertile land and gold have grown wealth for thousands of years. Join 50,000+ Indians building a secure future today.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/plans">
                                <Button size="lg" className="group">
                                    Start Investing
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <Link to="/contact">
                                <Button variant="outline" size="lg">Talk to Us</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-primary">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-primary-foreground/80 text-sm md:text-base">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="section-padding bg-navy-tint relative overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <img
                                src="/images/about/team.png"
                                alt="Money Grow team"
                                className="rounded-2xl shadow-2xl w-full"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-card max-w-[200px] hidden md:block border border-border">
                                <div className="text-3xl font-bold text-primary mb-1">5+</div>
                                <div className="text-sm text-muted-foreground">Years of Excellence</div>
                            </div>
                        </div>
                        <div>
                            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Story</span>
                            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                                Built for Every Indian Investor
                            </h2>
                            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Money Grow started with one mission: make wealth-building easy for everyone. We believe investing shouldn't be complex or require huge capital.
                                </p>
                                <p>
                                    By combining the stability of farming and gold with modern tech, we've created a platform where you can start small and grow big.
                                </p>
                                <p>
                                    Today, we manage ₹50Cr+ for over 10,000 happy investors across India, helping them achieve their financial goals with confidence.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Farming Section */}
            <section className="section-padding bg-emerald-tint border-y border-emerald-500/5">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-green-500/10">
                                    <Leaf className="w-6 h-6 text-green-600" />
                                </div>
                                <span className="text-green-600 font-medium text-sm uppercase tracking-wider">Digital Farming</span>
                            </div>
                            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                                Why Agriculture?
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                Agriculture is humanity's oldest and most reliable investment. As global food demand grows every day, so does the value of your assets.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { title: 'High Demand', desc: 'Global food needs grow every year, ensuring value.' },
                                    { title: 'Govt Support', desc: 'Subsidies and stable policies protect your capital.' },
                                    { title: 'Reliable Growth', desc: 'Land values rise while crops earn seasonal income.' },
                                    { title: 'Beat Inflation', desc: 'Food prices rise with inflation, keeping you safe.' },
                                ].map((benefit) => (
                                    <div key={benefit.title} className="bg-card p-4 rounded-xl shadow-sm border border-border">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                                                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 p-6 bg-green-500/10 rounded-xl border border-green-500/20">
                                <div className="flex items-center gap-4">
                                    <TrendingUp className="w-10 h-10 text-green-600" />
                                    <div>
                                        <div className="font-serif text-2xl font-bold text-foreground">18-25% Annual Returns</div>
                                        <div className="text-muted-foreground">Average returns from our smart farming plans</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative">
                            <img
                                src="/images/about/farmer.png"
                                alt="Farmer inspecting crops"
                                className="rounded-2xl shadow-2xl w-full"
                            />
                            <div className="absolute -top-4 -left-4 bg-green-500 text-white p-4 rounded-xl shadow-lg hidden md:block">
                                <Leaf className="w-8 h-8" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Gold Section */}
            <section className="section-padding bg-background relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent"></div>
                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <img
                                src="/images/about/gold-investment.png"
                                alt="Gold bars and coins"
                                className="rounded-2xl shadow-2xl w-full"
                            />
                            <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white p-4 rounded-xl shadow-lg hidden md:block">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><circle cx="8" cy="8" r="6" /><path d="M18.09 10.37A6 6 0 1 1 10.34 18" /><path d="M7 6h1v4" /><path d="m16.71 13.88.7 .71-2.82 2.82" /></svg>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-amber-500/10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-amber-600"><circle cx="8" cy="8" r="6" /><path d="M18.09 10.37A6 6 0 1 1 10.34 18" /><path d="M7 6h1v4" /><path d="m16.71 13.88.7 .71-2.82 2.82" /></svg>
                                </div>
                                <span className="text-amber-600 font-medium text-sm uppercase tracking-wider">Gold Investment</span>
                            </div>
                            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                                Why Gold?
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                Gold has been the ultimate store of value for 5,000 years. It's the perfect way to protect your wealth against inflation and market changes.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { title: 'Safe Haven', desc: 'Gold stays strong when paper markets are shaky.' },
                                    { title: 'Proven Gains', desc: '500%+ growth in India over the last 20 years.' },
                                    { title: 'Easy Cash', desc: 'Convert to cash quickly, anywhere in the world.' },
                                    { title: 'Cultural Asset', desc: 'A timeless treasure that never loses its luster.' },
                                ].map((benefit) => (
                                    <div key={benefit.title} className="bg-card p-4 rounded-xl shadow-sm border border-border">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                                                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 p-6 bg-amber-500/10 rounded-xl border border-amber-500/20">
                                <div className="flex items-center gap-4">
                                    <TrendingUp className="w-10 h-10 text-amber-600" />
                                    <div>
                                        <div className="font-serif text-2xl font-bold text-foreground">500%+ Growth</div>
                                        <div className="text-muted-foreground">Gold appreciation in India over 20 years</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Combined Power Section */}
            <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-amber-500/10">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                            The Power of Both
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Get the best of both worlds: stable farming income and gold's safety. A perfect balance for your future.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-card p-8 rounded-2xl shadow-card text-center border border-border">
                            <div className="inline-flex p-4 rounded-full bg-green-500/10 mb-6">
                                <Leaf className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="font-serif text-xl font-bold mb-3">Digital Farming</h3>
                            <p className="text-muted-foreground mb-4">
                                Invest in agricultural projects and earn returns from crop yields without owning physical land.
                            </p>
                            <div className="text-2xl font-bold text-green-600">18-25% p.a.</div>
                        </div>
                        <div className="bg-primary p-8 rounded-2xl shadow-card text-center transform md:-translate-y-4">
                            <div className="inline-flex p-4 rounded-full bg-primary-foreground/20 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary-foreground"><rect width="16" height="20" x="4" y="2" rx="2" ry="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" /></svg>
                            </div>
                            <h3 className="font-serif text-xl font-bold text-primary-foreground mb-3">Combined Portfolio</h3>
                            <p className="text-primary-foreground/80 mb-4">
                                Our balanced approach ensures steady growth with minimized risk through diversification.
                            </p>
                            <div className="text-2xl font-bold text-primary-foreground">Balanced Risk</div>
                        </div>
                        <div className="bg-card p-8 rounded-2xl shadow-card text-center border border-border">
                            <div className="inline-flex p-4 rounded-full bg-amber-500/10 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-amber-600"><circle cx="8" cy="8" r="6" /><path d="M18.09 10.37A6 6 0 1 1 10.34 18" /><path d="M7 6h1v4" /><path d="m16.71 13.88.7 .71-2.82 2.82" /></svg>
                            </div>
                            <h3 className="font-serif text-xl font-bold mb-3">Gold Investment</h3>
                            <p className="text-muted-foreground mb-4">
                                Secure your wealth with gold investments that protect against inflation and market volatility.
                            </p>
                            <div className="text-2xl font-bold text-amber-600">12-15% p.a.</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="section-padding mesh-gradient-navy border-t border-navy-500/5">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Values</span>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                            Why Investors Trust Us
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            We built Money Grow on three pillars: security, clarity, and your success.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((item) => (
                            <div key={item.title} className="text-center p-8 rounded-2xl bg-card shadow-card hover:shadow-lg transition-shadow border border-border group">
                                <div className="inline-flex p-4 rounded-xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors text-primary">
                                    {item.icon}
                                </div>
                                <h3 className="font-serif text-lg font-bold mb-3">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-primary">
                <div className="container-custom text-center">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                        Ready to Grow Your Wealth?
                    </h2>
                    <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                        Join thousands of smart investors building their future. Start with just ₹5,000.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/register">
                            <Button size="lg" variant="secondary" className="group">
                                Create Free Account
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link to="/plans">
                            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                                See Plans
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

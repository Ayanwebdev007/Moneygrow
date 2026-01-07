import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRight, Phone } from 'lucide-react';

export default function CtaSection() {
    return (
        <section className="section-padding relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 gradient-hero"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

            <div className="container-custom relative">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Grow Your Wealth?
                    </h2>
                    <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
                        Join 50,000+ Indians building a secure future. Simple, transparent, and built for you.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                        <a href="https://play.google.com/store/apps?hl=en_IN" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold btn-glow gap-2 text-base px-8">
                                Get Started
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </a>
                        <a href="tel:+15551234567">
                            <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white gap-2 text-base px-8">
                                <Phone className="w-4 h-4" />
                                Talk to Us
                            </Button>
                        </a>
                    </div>

                    <p className="text-sm text-white/60">
                        No commitment required. Start small, grow big.
                    </p>
                </div>
            </div>
        </section>
    );
}

import React from 'react';
import { Activity, Zap, Shield, Headphones } from 'lucide-react';
import { cn } from '../../lib/utils';

const features = [
    { title: 'Live Tracking', icon: 'activity' },
    { title: 'Instant Payout', icon: 'zap' },
    { title: 'Secure Vault', icon: 'shield' },
    { title: '24/7 Support', icon: 'headphones' },
];

const getIcon = (iconName) => {
    switch (iconName) {
        case 'activity': return <Activity className="w-5 h-5 md:w-5 md:h-[0.875rem] text-emerald-400" />; // Adjusted size
        case 'zap': return <Zap className="w-5 h-5 md:w-5 md:h-5 text-emerald-400" />;
        case 'shield': return <Shield className="w-5 h-5 md:w-5 md:h-5 text-emerald-400" />;
        case 'headphones': return <Headphones className="w-5 h-5 md:w-5 md:h-5 text-emerald-400" />;
        default: return null;
    }
};

export default function AppDownloadSection() {
    return (
        <section className="relative py-12 md:py-16 bg-emerald-950 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMGI5ODEiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

                {/* Glowing Orbs */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Side: Phone Visual */}
                    <div className="order-2 lg:order-1 relative flex justify-center py-8 lg:py-0 overflow-visible">
                        {/* Wrapper for Phone + Floating Badges */}
                        <div className="relative w-full max-w-[240px] md:max-w-[420px] mx-auto">

                            {/* Floating Elements */}
                            <div className="absolute top-8 left-0 -translate-x-1/3 md:-translate-x-1/2 z-20 animate-float" style={{ animationDelay: '1s' }}>
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 md:p-3 rounded-xl md:rounded-2xl shadow-xl flex items-center gap-2 md:gap-3 scale-75 md:scale-100 origin-right">
                                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                    </div>
                                    <div className="leading-tight shrink-0">
                                        <div className="text-[10px] md:text-xs text-emerald-200/70 font-bold uppercase tracking-wider">Daily Profit</div>
                                        <div className="text-xs md:text-sm font-bold text-white">+₹4,500</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-12 right-0 translate-x-1/3 md:translate-x-1/2 z-20 animate-float" style={{ animationDelay: '2s' }}>
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 md:p-3 rounded-xl md:rounded-2xl shadow-xl flex items-center gap-2 md:gap-3 scale-75 md:scale-100 origin-left">
                                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-amber-500 flex items-center justify-center text-white shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                    </div>
                                    <div className="leading-tight shrink-0">
                                        <div className="text-[10px] md:text-xs text-amber-200/70 font-bold uppercase tracking-wider">Safety</div>
                                        <div className="text-xs md:text-sm font-bold text-white">100% Secure</div>
                                    </div>
                                </div>
                            </div>

                            {/* Phone Image */}
                            <div className="relative z-10 animate-float">
                                <img
                                    src="/images/phone-hand.png"
                                    alt="MoneyGrow App in Hand"
                                    className="w-full h-auto drop-shadow-2xl"
                                />
                            </div>

                            {/* Glow effect */}
                            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 bg-emerald-500/20 blur-[60px] md:blur-[100px] -z-10 h-2/3 scale-110"></div>
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="order-1 lg:order-2 text-center lg:text-left">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-[10px] font-bold tracking-wider uppercase mb-4 border border-amber-500/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                            Live on Play Store
                        </span>

                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                            Money Grow, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">Pocket Sized.</span>
                        </h2>

                        <p className="text-base text-emerald-100/70 mb-6 max-w-md mx-auto lg:mx-0 leading-relaxed">
                            Track investments, withdraw profits, and grow daily. Join the revolution.
                        </p>

                        <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8 max-w-md mx-auto lg:mx-0">
                            {features.map((feature) => (
                                <div key={feature.title} className="flex items-center gap-3 text-emerald-50">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                                        {/* Manually rendering icon to match Blade logic closely, though simple component would work */}
                                        <Activity className={cn("w-5 h-5 text-emerald-400", feature.icon !== 'activity' && 'hidden')} />
                                        <Zap className={cn("w-5 h-5 text-emerald-400", feature.icon !== 'zap' && 'hidden')} />
                                        <Shield className={cn("w-5 h-5 text-emerald-400", feature.icon !== 'shield' && 'hidden')} />
                                        <Headphones className={cn("w-5 h-5 text-emerald-400", feature.icon !== 'headphones' && 'hidden')} />
                                    </div>
                                    <span className="text-sm md:text-base font-semibold">{feature.title}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                            <a href="https://play.google.com/store/apps?hl=en_IN" target="_blank" rel="noopener noreferrer" className="transform hover:scale-105 transition-transform duration-300">
                                <img src="/images/playstore.png" alt="Download on Play Store" className="h-48 w-auto drop-shadow-lg" />
                            </a>

                            <div className="flex items-center gap-3 text-white/60 text-xs bg-white/5 px-3 py-2 rounded-xl border border-white/5">
                                <div className="flex -space-x-2">
                                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop" className="w-6 h-6 rounded-full border border-emerald-950 object-cover" alt="User 1" />
                                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop" className="w-6 h-6 rounded-full border border-emerald-950 object-cover" alt="User 2" />
                                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop" className="w-6 h-6 rounded-full border border-emerald-950 object-cover text-xs flex items-center justify-center bg-emerald-800 text-white" alt="User 3" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-white">10k+</span>
                                    <span className="text-[10px]">Downloads</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

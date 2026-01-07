import React from 'react';
import { Link } from 'react-router-dom';

const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Growth Plans', href: '/plans' },
];

const supportLinks = [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Help Center', href: '#' },
    { label: 'Success Stories', href: '#' },
];

const legalLinks = [
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Disclaimer', href: '/disclaimer' },
];

export default function Footer() {
    return (
        <footer className="bg-secondary text-secondary-foreground overflow-hidden">
            <div className="container-custom py-10 md:py-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-4 group">
                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground group-hover:scale-105 transition-transform">
                                {/* Sprout Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                    <path d="M7 20h10" />
                                    <path d="M10 20c5.5 0 10-4.5 10-10A10 10 0 0 0 10 0" />
                                    <path d="M7 20c5.5 0 10-4.5 10-10a10 10 0 0 0-10-10" />
                                    <path d="M14 20a6 6 0 0 1-12 0" />
                                </svg>
                            </div>
                            <span className="font-serif text-xl font-semibold">
                                Money Grow
                            </span>
                        </Link>
                        <p className="text-sm text-secondary-foreground/90 mb-6 leading-relaxed max-w-sm">
                            Build wealth with trust and expertise. Secure investments in farming and gold for every Indian.
                        </p>

                        <div className="space-y-4 text-sm">
                            <div className="flex items-start gap-3 group">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-primary"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                </div>
                                <span className="text-secondary-foreground font-medium pt-1.5">support@moneygrow.com</span>
                            </div>
                            <div className="flex items-start gap-3 group">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-primary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.05 12.05 0 0 0 2.81.57A2 2 0 0 1 22 16.92z" /></svg>
                                </div>
                                <span className="text-secondary-foreground font-medium pt-1.5">+91 98765 43210</span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <a href="https://play.google.com/store/apps?hl=en_IN" target="_blank" rel="noopener noreferrer" className="inline-block hover:scale-105 transition-transform">
                                <img src="/images/playstore.png" alt="Get it on Google Play" className="h-24 w-auto drop-shadow-sm" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="sm:pl-4 lg:pl-8">
                        <h4 className="font-serif text-lg font-semibold mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                            Quick Links
                        </h4>
                        <ul className="space-y-2.5">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link to={link.href} className="text-sm text-secondary-foreground/60 hover:text-primary hover:translate-x-1 transition-all inline-flex items-center">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="sm:pl-4 lg:pl-8">
                        <h4 className="font-serif text-lg font-semibold mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                            Support
                        </h4>
                        <ul className="space-y-2.5">
                            {supportLinks.map((link) => (
                                <li key={link.label}>
                                    <Link to={link.href} className="text-sm text-secondary-foreground/60 hover:text-primary hover:translate-x-1 transition-all inline-flex items-center">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="sm:pl-4 lg:pl-8">
                        <h4 className="font-serif text-lg font-semibold mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                            Legal
                        </h4>
                        <ul className="space-y-2.5">
                            {legalLinks.map((link) => (
                                <li key={link.label}>
                                    <Link to={link.href} className="text-sm text-secondary-foreground/60 hover:text-primary hover:translate-x-1 transition-all inline-flex items-center">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Disclaimer & Copyright */}
                <div className="mt-12 pt-6 border-t border-secondary-foreground/10">
                    <div className="bg-primary/5 rounded-2xl p-4 mb-6">
                        <p className="text-xs text-secondary-foreground/50 leading-relaxed italic">
                            <strong className="text-secondary-foreground/70 not-italic">Disclaimer:</strong> Investments are subject to market risks. Past performance is not indicative of future results. Please read all scheme-related documents carefully before investing. Money Grow is not responsible for any financial losses.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-secondary-foreground/50">
                            © {new Date().getFullYear()} Money Grow. Crafted for investors in India.
                        </p>
                        <div className="flex items-center gap-4">
                            {[
                                { label: 'Terms', href: '/terms' },
                                { label: 'Privacy', href: '/privacy' },
                                { label: 'Sitemap', href: '#' },
                            ].map((link) => (
                                <Link key={link.label} to={link.href} className="text-xs text-secondary-foreground/40 hover:text-primary transition-colors">
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Growth Plans', href: '/plans' },
    { label: 'Contact', href: '/contact' },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => {
        if (path === '/' && location.pathname !== '/') return false;
        return location.pathname.startsWith(path);
    };

    return (
        <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container-custom">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group shrink-0">
                        <div className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary text-primary-foreground transition-transform group-hover:scale-105">
                            {/* Sprout Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6">
                                <path d="M7 20h10" />
                                <path d="M10 20c5.5 0 10-4.5 10-10A10 10 0 0 0 10 0" />
                                <path d="M7 20c5.5 0 10-4.5 10-10a10 10 0 0 0-10-10" />
                                <path d="M14 20a6 6 0 0 1-12 0" />
                            </svg>
                        </div>
                        <span className="font-serif text-lg md:text-xl font-semibold text-foreground whitespace-nowrap">
                            Money Grow
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1 mx-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className={cn(
                                    "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                                    isActive(link.href)
                                        ? "text-primary bg-primary/5"
                                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center gap-3 shrink-0">
                        <a href="https://play.google.com/store/apps?hl=en_IN" target="_blank" rel="noopener noreferrer" className="hover:opacity-90 transition-opacity">
                            <img src="/images/playstore.png" alt="Get it on Google Play" className="h-24 md:h-32 w-auto" />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 rounded-md hover:bg-muted"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-border/40 animate-slide-up">
                        <nav className="flex flex-col gap-1 px-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    className={cn(
                                        "px-4 py-3 text-base font-medium rounded-xl transition-colors",
                                        isActive(link.href)
                                            ? "text-primary bg-primary/5"
                                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                    )}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border/40 items-center">
                                <a href="https://play.google.com/store/apps?hl=en_IN" target="_blank" rel="noopener noreferrer" className="block hover:scale-105 transition-transform" onClick={() => setIsMenuOpen(false)}>
                                    <img src="/images/playstore.png" alt="Get it on Google Play" className="h-24 w-auto drop-shadow-md" />
                                </a>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}

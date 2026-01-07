import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Leaf } from 'lucide-react';

export default function Register() {
    return (
        <section className="py-16 bg-muted/30">
            <div className="container-custom">
                <div className="max-w-md mx-auto bg-card rounded-xl shadow-lg border-0 overflow-hidden">
                    <div className="p-6 text-center pb-2">
                        <div className="flex justify-center mb-4">
                            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                                <Leaf className="w-7 h-7 text-primary-foreground" />
                            </div>
                        </div>
                        <h2 className="font-serif text-2xl font-bold">Create Account</h2>
                        <p className="text-sm text-muted-foreground mt-1">Start your investment journey today</p>
                    </div>
                    <div className="p-6 space-y-4">
                        <form className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium leading-none">Full Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="John Doe"
                                    required
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium leading-none">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    required
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium leading-none">Phone Number</label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="9876543210"
                                    required
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="password" className="text-sm font-medium leading-none">Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="••••••••"
                                    required
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="password_confirmation" className="text-sm font-medium leading-none">Confirm Password</label>
                                <input
                                    id="password_confirmation"
                                    name="password_confirmation"
                                    type="password"
                                    placeholder="••••••••"
                                    required
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                />
                            </div>
                            <div className="flex items-start gap-2">
                                <input type="checkbox" id="terms" className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" required />
                                <label htmlFor="terms" className="text-sm leading-relaxed text-muted-foreground cursor-pointer">
                                    I agree to the <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                                </label>
                            </div>
                            <Button type="submit" className="w-full">
                                Create Account
                            </Button>
                            <p className="text-center text-sm text-muted-foreground">
                                Already have an account? <Link to="/login" className="text-primary hover:underline">Sign in</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

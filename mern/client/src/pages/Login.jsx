import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Checkbox } from '../components/ui/Checkbox'; // Need to create this or use standard input
import { Leaf } from 'lucide-react';

export default function Login() {
    return (
        <section className="py-16 bg-muted/30 min-h-[80vh] flex items-center">
            <div className="container-custom">
                <div className="max-w-md mx-auto bg-card rounded-xl shadow-lg border-0 overflow-hidden">
                    <div className="p-6 text-center pb-2">
                        <div className="flex justify-center mb-4">
                            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                                <Leaf className="w-7 h-7 text-primary-foreground" />
                            </div>
                        </div>
                        <h2 className="font-serif text-2xl font-bold">Welcome Back</h2>
                        <p className="text-sm text-muted-foreground mt-1">Sign in to your Money Grow account</p>
                    </div>
                    <div className="p-6 space-y-4">
                        <form className="space-y-4">
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
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                                    <label htmlFor="remember" className="text-sm font-medium leading-none cursor-pointer">Remember me</label>
                                </div>
                                <Link to="#" className="text-sm text-primary hover:underline">Forgot password?</Link>
                            </div>
                            <Button type="submit" className="w-full">
                                Sign In
                            </Button>
                            <p className="text-center text-sm text-muted-foreground">
                                Don't have an account? <Link to="/register" className="text-primary hover:underline">Register</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

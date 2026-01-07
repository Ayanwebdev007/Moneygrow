import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            let apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';

            // Cleanup URL: remove trailing slashes and common whitespace
            apiUrl = apiUrl.trim().replace(/\/+$/, "");

            // Handle Render's internal service names or missing domains
            // If it doesn't contain a dot (like 'moneygrow-api') and isn't localhost
            if (!apiUrl.includes('.') && !apiUrl.includes('localhost')) {
                apiUrl = `${apiUrl}.onrender.com`;
            }

            if (!apiUrl.startsWith('http')) {
                apiUrl = `https://${apiUrl}`;
            }

            const targetUrl = `${apiUrl}/api/contact`;
            console.log('Submitting form to:', targetUrl);

            const response = await fetch(targetUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', phone: '', subject: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <section className="py-16 lg:py-24 bg-muted/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="container-custom relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h1 className="font-serif text-4xl font-bold text-foreground mb-4">Contact Us</h1>
                    <p className="text-muted-foreground">Have questions? We're here to help you on your investment journey.</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Contact Info Cards */}
                    <div className="space-y-6">
                        {[
                            { label: 'Customer Care', value: '+91 1800-123-4567', icon: <Phone className="w-5 h-5 text-emerald-600" /> },
                            { label: 'WhatsApp', value: '+91 98765-43210', icon: <MessageSquare className="w-5 h-5 text-emerald-600" /> },
                            { label: 'Address', value: '123 Financial District, Mumbai, Maharashtra 400001, India', icon: <MapPin className="w-5 h-5 text-primary" /> },
                            { label: 'Hours', value: 'Monday - Saturday: 9:00 AM - 6:00 PM', icon: <Clock className="w-5 h-5 text-primary" /> },
                        ].map((item) => (
                            <div key={item.label} className="bg-card p-4 rounded-xl border border-border shadow-md flex items-start gap-4">
                                <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="font-medium text-foreground">{item.label}</p>
                                    <p className="text-sm text-muted-foreground">{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2 bg-card rounded-xl border border-border shadow-lg p-6">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        required
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91 00000-00000"
                                        required
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="How can we help?"
                                    required
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your message..."
                                    required
                                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                ></textarea>
                            </div>

                            {status === 'error' && (
                                <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
                            )}
                            {status === 'success' && (
                                <p className="text-green-500 text-sm">Message sent successfully!</p>
                            )}

                            <Button type="submit" disabled={status === 'loading'} className="w-full">
                                {status === 'loading' ? 'Sending...' : 'Send Message'}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

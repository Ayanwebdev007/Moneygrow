import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, Loader2, AlertCircle, ArrowUpRight } from 'lucide-react';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            let apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            apiUrl = apiUrl.trim().replace(/\/+$/, "");
            if (!apiUrl.includes('.') && !apiUrl.includes('localhost')) apiUrl = `${apiUrl}.onrender.com`;
            if (!apiUrl.startsWith('http')) apiUrl = `https://${apiUrl}`;

            const response = await fetch(`${apiUrl}/api/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Login failed');
            }

            if (data.user.role !== 'admin') {
                throw new Error('Access denied. Admin only.');
            }

            localStorage.setItem('adminToken', data.token);
            localStorage.setItem('adminUser', JSON.stringify(data.user));
            navigate('/admin/dashboard');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans selection:bg-emerald-100">
            <div className="w-full max-w-md">
                <div className="bg-white border border-slate-200 rounded-[32px] p-8 lg:p-10 shadow-xl shadow-slate-200/50 relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                    <div className="relative">
                        <div className="flex justify-center mb-10">
                            <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-600/20">
                                <ArrowUpRight className="w-9 h-9 text-white" />
                            </div>
                        </div>

                        <div className="text-center mb-10">
                            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Admin Portal</h1>
                            <p className="text-slate-400 text-sm font-medium mt-1 uppercase tracking-widest text-[10px]">Security Clearance Required</p>
                        </div>

                        {error && (
                            <div className="mb-8 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-start gap-3 text-red-600 text-sm animate-in fade-in slide-in-from-top-1">
                                <AlertCircle className="w-5 h-5 shrink-0" />
                                <span className="font-bold">{error}</span>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest font-black text-slate-400 px-1">Email Identifier</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-slate-50 border border-slate-200 text-slate-900 pl-12 pr-4 py-3.5 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all outline-none font-medium placeholder:text-slate-300"
                                        placeholder="admin@moneygrow.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest font-black text-slate-400 px-1">Access Token</label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                                    <input
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full bg-slate-50 border border-slate-200 text-slate-900 pl-12 pr-4 py-3.5 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all outline-none font-medium placeholder:text-slate-300"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-black py-4 rounded-2xl transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-3 uppercase tracking-widest text-xs"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        <span>Authenticating...</span>
                                    </>
                                ) : (
                                    <span>Establish Session</span>
                                )}
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-8 flex items-center justify-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    <p className="text-center text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                        Money Grow Management System v1.0
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;

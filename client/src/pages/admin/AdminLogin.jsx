import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, Loader2, AlertCircle } from 'lucide-react';

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
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 font-sans">
            <div className="w-full max-w-md">
                <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 shadow-2xl overflow-hidden relative group">
                    {/* Background Glow */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500"></div>

                    <div className="relative">
                        <div className="flex justify-center mb-8">
                            <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                                <Lock className="w-8 h-8 text-blue-500" />
                            </div>
                        </div>

                        <h1 className="text-2xl font-bold text-white text-center mb-2">Admin Portal</h1>
                        <p className="text-slate-400 text-center mb-8">Authorized personnel only</p>

                        {error && (
                            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-3 text-red-400 text-sm animate-in fade-in slide-in-from-top-2">
                                <AlertCircle className="w-5 h-5 shrink-0" />
                                <span>{error}</span>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-slate-950/50 border border-slate-800 text-white pl-11 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all outline-none"
                                        placeholder="admin@moneygrow.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                    <input
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full bg-slate-950/50 border border-slate-800 text-white pl-11 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all outline-none"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        <span>Logging in...</span>
                                    </>
                                ) : (
                                    <span>Enter Dashboard</span>
                                )}
                            </button>
                        </form>
                    </div>
                </div>

                <p className="mt-8 text-center text-slate-500 text-xs">
                    Protected by Money Grow Security Systems
                </p>
            </div>
        </div>
    );
};

export default AdminLogin;

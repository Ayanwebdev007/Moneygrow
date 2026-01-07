import React, { useState, useEffect } from 'react';
import {
    Users,
    MessageSquare,
    ArrowUpRight,
    Search,
    Filter,
    Download,
    LogOut,
    Calendar,
    Mail,
    Phone,
    User as UserIcon,
    Loader2,
    RefreshCw
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const fetchContacts = async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem('adminToken');
            let apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            apiUrl = apiUrl.trim().replace(/\/+$/, "");
            if (!apiUrl.includes('.') && !apiUrl.includes('localhost')) apiUrl = `${apiUrl}.onrender.com`;
            if (!apiUrl.startsWith('http')) apiUrl = `https://${apiUrl}`;

            const response = await fetch(`${apiUrl}/api/admin/contacts`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                if (response.status === 401 || response.status === 403) {
                    handleLogout();
                }
                throw new Error('Failed to fetch contact data');
            }

            const data = await response.json();
            setContacts(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminUser');
        navigate('/admin/login');
    };

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.phone.includes(searchTerm)
    );

    const adminUser = JSON.parse(localStorage.getItem('adminUser') || '{}');

    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans">
            {/* Sidebar */}
            <aside className="fixed left-0 top-0 h-full w-64 bg-[#0f172a] border-r border-slate-800 z-50 transition-all duration-300 hidden lg:block">
                <div className="p-6">
                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                            <ArrowUpRight className="text-white w-6 h-6" />
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight">Money Grow</span>
                    </div>

                    <nav className="space-y-1">
                        <button className="w-full flex items-center gap-3 px-4 py-3 bg-blue-600/10 text-blue-400 rounded-xl font-medium transition-all group">
                            <Users className="w-5 h-5" />
                            <span>Inquiries</span>
                        </button>
                        {/* Placeholder for future features */}
                        <button disabled className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 rounded-xl font-medium cursor-not-allowed opacity-50">
                            <MessageSquare className="w-5 h-5" />
                            <span>App Users</span>
                        </button>
                    </nav>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-slate-800/50 p-4 rounded-xl mb-4 border border-slate-700">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                                <UserIcon className="w-4 h-4 text-slate-300" />
                            </div>
                            <div className="overflow-hidden">
                                <p className="text-sm font-medium text-white truncate">{adminUser.name}</p>
                                <p className="text-xs text-slate-500 truncate">Administrator</p>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl font-medium transition-all border border-transparent hover:border-red-500/20"
                    >
                        <LogOut className="w-5 h-5" />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="lg:ml-64 p-6 lg:p-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-2">Visitor Inquiries</h1>
                        <p className="text-slate-400">Total {contacts.length} submissions from the contact form</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={fetchContacts}
                            disabled={loading}
                            className="p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-slate-300 hover:text-white hover:border-slate-500 transition-all"
                        >
                            <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-all shadow-lg shadow-blue-600/20">
                            <Download className="w-4 h-4" />
                            <span>Export CSV</span>
                        </button>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="bg-[#0f172a] border border-slate-800 p-6 rounded-2xl">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-semibold text-green-400 bg-green-400/10 px-2.5 py-1 rounded-full">+12%</span>
                        </div>
                        <h3 className="text-slate-400 text-sm font-medium">New Inquiries</h3>
                        <p className="text-3xl font-bold text-white mt-1">{contacts.length}</p>
                    </div>
                </div>

                {/* Controls */}
                <div className="bg-[#0f172a] border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
                    <div className="p-6 border-b border-slate-800 flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                            <input
                                type="text"
                                placeholder="Search by name, email, or phone..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-slate-950/50 border border-slate-800 text-white pl-10 pr-4 py-2.5 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all"
                            />
                        </div>
                        <div className="flex gap-2 w-full md:w-auto">
                            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800 text-slate-300 border border-slate-700 rounded-xl hover:text-white transition-all">
                                <Filter className="w-4 h-4" />
                                <span>Filter</span>
                            </button>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-800/30">
                                    <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Visitor</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Contact Info</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Inquiry Date</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Message</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800">
                                {loading ? (
                                    <tr>
                                        <td colSpan="5" className="px-6 py-20 text-center">
                                            <Loader2 className="w-8 h-8 animate-spin text-blue-500 mx-auto" />
                                            <p className="mt-4 text-slate-400">Loading inquiries...</p>
                                        </td>
                                    </tr>
                                ) : filteredContacts.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" className="px-6 py-20 text-center">
                                            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <Filter className="w-8 h-8 text-slate-600" />
                                            </div>
                                            <p className="text-slate-400">No inquiries found matching your search</p>
                                        </td>
                                    </tr>
                                ) : (
                                    filteredContacts.map((contact) => (
                                        <tr key={contact._id} className="hover:bg-slate-800/20 transition-all">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center font-bold text-xs uppercase">
                                                        {contact.name.charAt(0)}
                                                    </div>
                                                    <span className="font-medium text-white">{contact.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-2 text-sm text-slate-400">
                                                        <Mail className="w-3.5 h-3.5" />
                                                        <span>{contact.email}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm text-slate-400">
                                                        <Phone className="w-3.5 h-3.5" />
                                                        <span>{contact.phone}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2 text-sm text-slate-400">
                                                    <Calendar className="w-3.5 h-3.5" />
                                                    <span>{new Date(contact.createdAt).toLocaleDateString()}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <p className="text-sm text-slate-300 line-clamp-2 max-w-xs">{contact.message}</p>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-blue-500 hover:text-blue-400 font-medium text-sm transition-all py-2 px-3 hover:bg-blue-500/10 rounded-lg">
                                                    View Details
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;

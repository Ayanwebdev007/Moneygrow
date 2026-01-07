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
    Phone,
    User as UserIcon,
    Loader2,
    RefreshCw,
    X,
    Clock,
    Eye,
    ChevronRight,
    MessageCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedContact, setSelectedContact] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [sortOrder, setSortOrder] = useState('newest');
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

    const filteredContacts = contacts
        .filter(contact =>
            contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (contact.phone && contact.phone.includes(searchTerm))
        )
        .sort((a, b) => {
            if (sortOrder === 'newest') {
                return new Date(b.createdAt) - new Date(a.createdAt);
            }
            return new Date(a.createdAt) - new Date(b.createdAt);
        });

    const openModal = (contact) => {
        setSelectedContact(contact);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedContact(null);
    };

    const adminUser = JSON.parse(localStorage.getItem('adminUser') || '{}');

    return (
        <div className="min-h-screen bg-[#050801] text-emerald-100 font-sans selection:bg-emerald-500/30">
            {/* Sidebar */}
            <aside className="fixed left-0 top-0 h-full w-20 lg:w-64 bg-[#0a0f02] border-r border-emerald-900/30 z-50 transition-all duration-300">
                <div className="p-4 lg:p-6 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-10 overflow-hidden">
                        <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-900/40 shrink-0">
                            <ArrowUpRight className="text-white w-7 h-7" />
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight whitespace-nowrap hidden lg:block">Money Grow</span>
                    </div>

                    <nav className="space-y-2 flex-grow">
                        <button className="w-full flex items-center justify-center lg:justify-start gap-4 px-4 py-3 bg-emerald-600/10 text-emerald-400 rounded-xl font-medium transition-all group border border-emerald-500/20">
                            <Users className="w-5 h-5" />
                            <span className="hidden lg:block">Inquiries</span>
                        </button>
                        <button disabled className="w-full flex items-center justify-center lg:justify-start gap-4 px-4 py-3 text-emerald-900 rounded-xl font-medium cursor-not-allowed opacity-30">
                            <MessageSquare className="w-5 h-5" />
                            <span className="hidden lg:block">App Users</span>
                        </button>
                    </nav>

                    <div className="mt-auto pt-6 space-y-4">
                        <div className="bg-emerald-900/10 p-3 lg:p-4 rounded-xl border border-emerald-900/30 hidden lg:block">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-amber-400 text-[#0a0f02] rounded-full flex items-center justify-center font-bold">
                                    {adminUser.name?.charAt(0)}
                                </div>
                                <div className="overflow-hidden">
                                    <p className="text-sm font-medium text-emerald-50 truncate">{adminUser.name}</p>
                                    <p className="text-[10px] uppercase tracking-wider text-amber-400 font-bold">Admin</p>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center justify-center gap-2 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl font-medium transition-all group"
                        >
                            <LogOut className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            <span className="hidden lg:block">Logout</span>
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="ml-20 lg:ml-64 p-4 lg:p-8">
                {/* Topbar Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                    <div>
                        <div className="flex items-center gap-2 text-amber-400 mb-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></div>
                            <span className="text-[10px] uppercase tracking-widest font-black">Admin Panel</span>
                        </div>
                        <h1 className="text-3xl lg:text-4xl font-black text-white">Inquiries</h1>
                        <p className="text-emerald-700 text-sm mt-1 uppercase tracking-tight font-medium">Total Entries: <span className="text-emerald-400">{contacts.length}</span></p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={fetchContacts}
                            disabled={loading}
                            className="p-3 bg-[#0a0f02] border border-emerald-900/30 rounded-xl text-emerald-500 hover:text-amber-400 hover:border-amber-400/30 transition-all shadow-xl"
                        >
                            <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
                        </button>
                        <button className="flex items-center gap-2 px-5 py-3 bg-amber-400 hover:bg-amber-300 text-[#0a0f02] rounded-xl font-black transition-all shadow-lg shadow-amber-400/10">
                            <Download className="w-4 h-4" />
                            <span className="text-sm uppercase tracking-tighter">Export CSV</span>
                        </button>
                    </div>
                </div>

                {/* Dashboard Card */}
                <div className="bg-[#0a0f02] border border-emerald-900/20 rounded-3xl overflow-hidden shadow-2xl">
                    <div className="p-4 lg:p-6 border-b border-emerald-900/20 flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="relative w-full md:w-80">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-700" />
                            <input
                                type="text"
                                placeholder="Search leads..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-[#050801] border border-emerald-900/40 text-white pl-10 pr-4 py-3 rounded-2xl focus:ring-2 focus:ring-amber-400/20 focus:border-amber-400/50 outline-none transition-all text-sm"
                            />
                        </div>
                        <div className="flex gap-2 w-full md:w-auto">
                            <div className="flex-1 md:flex-none relative">
                                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-500" />
                                <select
                                    className="w-full bg-emerald-900/10 text-emerald-400 border border-emerald-900/30 rounded-2xl pl-10 pr-6 py-3 transition-all text-xs font-bold uppercase tracking-widest appearance-none cursor-pointer hover:bg-emerald-900/20 outline-none"
                                    value={sortOrder}
                                    onChange={(e) => setSortOrder(e.target.value)}
                                >
                                    <option value="newest">Newest First</option>
                                    <option value="oldest">Oldest First</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[800px]">
                            <thead>
                                <tr className="bg-emerald-950/20">
                                    <th className="px-8 py-5 text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em]">Lead Details</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em]">Contact No.</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em]">Submitted On</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em]">Snippet</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em] text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-emerald-900/10">
                                {loading ? (
                                    <tr>
                                        <td colSpan="5" className="px-8 py-32 text-center">
                                            <div className="relative mx-auto w-12 h-12">
                                                <Loader2 className="w-12 h-12 animate-spin text-amber-400" />
                                                <div className="absolute inset-0 bg-amber-400/10 blur-xl"></div>
                                            </div>
                                            <p className="mt-6 text-emerald-800 text-xs font-bold uppercase tracking-widest animate-pulse">Synchronizing Data...</p>
                                        </td>
                                    </tr>
                                ) : filteredContacts.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" className="px-8 py-32 text-center text-emerald-900">
                                            <div className="w-20 h-20 bg-emerald-950/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                                <Search className="w-10 h-10 opacity-20" />
                                            </div>
                                            <p className="text-sm font-bold uppercase tracking-widest">No matching leads found</p>
                                        </td>
                                    </tr>
                                ) : (
                                    filteredContacts.map((contact) => (
                                        <tr key={contact._id} className="group hover:bg-emerald-600/[0.03] transition-all">
                                            <td className="px-8 py-6">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500/20 to-amber-400/10 text-emerald-400 rounded-xl flex items-center justify-center font-black text-base transition-transform group-hover:scale-110">
                                                        {contact.name.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <span className="font-bold text-emerald-50 block transition-colors group-hover:text-amber-400">{contact.name}</span>
                                                        <span className="text-[10px] text-emerald-700 uppercase tracking-tighter font-bold">Inquiry ID: #{contact._id.slice(-6)}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6">
                                                <div className="flex items-center gap-3 text-emerald-300 font-mono font-medium tracking-tight">
                                                    <div className="w-7 h-7 bg-emerald-900/20 rounded-lg flex items-center justify-center shrink-0">
                                                        <Phone className="w-3.5 h-3.5 text-emerald-500" />
                                                    </div>
                                                    {contact.phone || 'N/A'}
                                                </div>
                                            </td>
                                            <td className="px-8 py-6">
                                                <div className="flex flex-col gap-1">
                                                    <div className="flex items-center gap-2 text-sm text-emerald-50 font-bold">
                                                        <Calendar className="w-3.5 h-3.5 text-amber-500" />
                                                        <span>{new Date(contact.createdAt).toLocaleDateString()}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-xs text-emerald-700 font-black tracking-widest">
                                                        <Clock className="w-3 h-3" />
                                                        <span>{new Date(contact.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6">
                                                <p className="text-xs text-emerald-600 line-clamp-1 max-w-[200px] italic">
                                                    "{contact.message}"
                                                </p>
                                            </td>
                                            <td className="px-8 py-6 text-right">
                                                <button
                                                    onClick={() => openModal(contact)}
                                                    className="inline-flex items-center gap-2 text-amber-400 hover:text-white bg-amber-400/10 hover:bg-amber-400 border border-amber-400/20 hover:border-amber-400 font-bold py-2.5 px-4 rounded-2xl transition-all scale-95 hover:scale-100 shadow-lg shadow-amber-400/5 group"
                                                >
                                                    <Eye className="w-4 h-4" />
                                                    <span className="text-xs uppercase tracking-tighter">Details</span>
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

            {/* View Details Modal */}
            {isModalOpen && selectedContact && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-6 bg-[#050801]/90 backdrop-blur-md animate-in fade-in duration-300 px-4">
                    <div className="bg-[#0a0f02] border border-emerald-500/20 w-full max-w-xl rounded-[40px] shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-300">
                        {/* Modal Header */}
                        <div className="h-40 bg-gradient-to-br from-emerald-600 to-emerald-900 p-8 relative">
                            <button
                                onClick={closeModal}
                                className="absolute top-6 right-6 p-3 bg-black/20 hover:bg-black/40 text-white rounded-full transition-all backdrop-blur-md"
                            >
                                <X className="w-5 h-5" />
                            </button>
                            <div className="absolute -bottom-10 left-8">
                                <div className="w-24 h-24 bg-amber-400 rounded-3xl flex items-center justify-center text-[#0a0f02] text-4xl font-black shadow-2xl border-4 border-[#0a0f02]">
                                    {selectedContact.name?.charAt(0)}
                                </div>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-8 pt-16">
                            <div className="mb-10">
                                <h3 className="text-3xl font-black text-white mb-2">{selectedContact.name}</h3>
                                <div className="flex flex-wrap gap-4">
                                    <div className="flex items-center gap-2 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                                        <MessageCircle className="w-4 h-4 text-emerald-400" />
                                        <span className="text-xs font-bold text-emerald-300 uppercase shrink-0">Inquiry Lead</span>
                                    </div>
                                    <div className="text-xs text-emerald-900 font-black tracking-widest uppercase flex items-center pt-1.5">
                                        ID: {selectedContact._id}
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-8 mb-10">
                                <div className="space-y-1.5">
                                    <p className="text-[10px] uppercase tracking-widest font-black text-emerald-700">Phone Contact</p>
                                    <div className="flex items-center gap-3 text-emerald-50 font-black text-lg">
                                        <Phone className="w-5 h-5 text-amber-400" />
                                        {selectedContact.phone || 'Not Provided'}
                                    </div>
                                </div>
                                <div className="space-y-1.5 text-right lg:text-left">
                                    <p className="text-[10px] uppercase tracking-widest font-black text-emerald-700">Submission Time</p>
                                    <div className="flex items-center lg:justify-start justify-end gap-3 text-emerald-50 font-black text-lg">
                                        <Calendar className="w-5 h-5 text-amber-400" />
                                        {new Date(selectedContact.createdAt).toLocaleDateString()}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-emerald-950/30 border border-emerald-900/30 p-8 rounded-[32px] relative group">
                                <div className="absolute top-4 right-6 opacity-10">
                                    <MessageSquare className="w-12 h-12 text-emerald-400" />
                                </div>
                                <p className="text-[10px] uppercase tracking-widest font-black text-amber-400 mb-4 flex items-center gap-2">
                                    Message Overview
                                    <ChevronRight className="w-3 h-3" />
                                </p>
                                <p className="text-emerald-100 leading-relaxed font-medium">
                                    {selectedContact.message}
                                </p>
                            </div>

                            <div className="mt-10 flex gap-4">
                                <a
                                    href={`tel:${selectedContact.phone}`}
                                    className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-emerald-900/40 uppercase tracking-widest text-sm"
                                >
                                    <Phone className="w-5 h-5" />
                                    Call Lead
                                </a>
                                <button
                                    onClick={closeModal}
                                    className="px-8 bg-emerald-900/20 text-emerald-500 font-black border border-emerald-900/40 rounded-2xl hover:bg-emerald-900/30 transition-all uppercase tracking-widest text-sm"
                                >
                                    Dismiss
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;

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
    MessageCircle,
    LayoutDashboard
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

    const handleExportCSV = () => {
        if (contacts.length === 0) return;

        // Define Headers
        const headers = ["Name", "Phone", "Email", "Subject", "Date", "Time", "Message"];

        // Map Data to CSV Rows
        const rows = filteredContacts.map(contact => {
            const dateObj = new Date(contact.createdAt);
            const date = dateObj.toLocaleDateString();
            const time = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            // Escape commas and quotes for CSV safety
            const escape = (text) => `"${(text || '').toString().replace(/"/g, '""')}"`;

            return [
                escape(contact.name),
                escape(contact.phone),
                escape(contact.email),
                escape(contact.subject),
                escape(date),
                escape(time),
                escape(contact.message)
            ].join(",");
        });

        const csvContent = [headers.join(","), ...rows].join("\n");
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", `MoneyGrow_Leads_${new Date().toISOString().split('T')[0]}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const adminUser = JSON.parse(localStorage.getItem('adminUser') || '{}');

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-100">
            {/* Sidebar */}
            <aside className="fixed left-0 top-0 h-full w-20 lg:w-64 bg-white border-r border-slate-200 z-50 transition-all duration-300 shadow-sm">
                <div className="p-4 lg:p-6 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-10 overflow-hidden">
                        <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-md shadow-emerald-600/20 shrink-0">
                            <ArrowUpRight className="text-white w-6 h-6" />
                        </div>
                        <span className="text-lg font-bold text-slate-900 tracking-tight whitespace-nowrap hidden lg:block">Money Grow</span>
                    </div>

                    <nav className="space-y-1.5 flex-grow">
                        <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-4 px-4 hidden lg:block">Main Menu</p>
                        <button className="w-full flex items-center justify-center lg:justify-start gap-3 px-4 py-2.5 bg-emerald-50 text-emerald-700 rounded-xl font-semibold transition-all group">
                            <Users className="w-5 h-5" />
                            <span className="hidden lg:block">Inquiries</span>
                        </button>
                        <button disabled className="w-full flex items-center justify-center lg:justify-start gap-3 px-4 py-2.5 text-slate-400 rounded-xl font-medium cursor-not-allowed opacity-60">
                            <LayoutDashboard className="w-5 h-5" />
                            <span className="hidden lg:block">App Users</span>
                        </button>
                    </nav>

                    <div className="mt-auto pt-6 border-t border-slate-100 space-y-4">
                        <div className="flex items-center gap-3 px-2 hidden lg:flex">
                            <div className="w-8 h-8 bg-amber-100 text-amber-700 rounded-lg flex items-center justify-center font-bold text-xs uppercase">
                                {adminUser.name?.charAt(0)}
                            </div>
                            <div className="overflow-hidden">
                                <p className="text-xs font-bold text-slate-900 truncate">{adminUser.name}</p>
                                <p className="text-[10px] text-slate-400 font-medium">Administrator</p>
                            </div>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center justify-center lg:justify-start gap-3 px-4 py-2.5 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-xl font-semibold transition-all group"
                        >
                            <LogOut className="w-5 h-5" />
                            <span className="hidden lg:block">Logout</span>
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="ml-20 lg:ml-64 p-4 lg:p-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                            <span className="text-[10px] uppercase tracking-widest font-black text-emerald-600">Admin Live</span>
                        </div>
                        <h1 className="text-2xl lg:text-3xl font-bold text-slate-900">Contact Inquiries</h1>
                        <p className="text-slate-500 text-xs mt-1">Manage and respond to visitor messages</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={fetchContacts}
                            disabled={loading}
                            className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:text-emerald-600 hover:border-emerald-200 transition-all shadow-sm"
                        >
                            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                        </button>
                        <button
                            onClick={handleExportCSV}
                            disabled={loading || contacts.length === 0}
                            className="flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-bold transition-all shadow-md shadow-emerald-600/20 text-xs uppercase tracking-wider"
                        >
                            <Download className="w-4 h-4" />
                            <span>Export Data</span>
                        </button>
                    </div>
                </div>

                {/* Stats Summary */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                        <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">Total Leads</p>
                        <div className="flex items-end justify-between">
                            <h3 className="text-2xl font-bold text-slate-900">{contacts.length}</h3>
                            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                                <Users className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Data Table Section */}
                <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                    {/* Controls */}
                    <div className="p-4 lg:p-5 border-b border-slate-100 flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="relative w-full md:w-80">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Quick search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 text-slate-900 pl-10 pr-4 py-2.5 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/50 outline-none transition-all text-sm"
                            />
                        </div>
                        <div className="flex gap-2 w-full md:w-auto">
                            <div className="relative flex-1 md:flex-none">
                                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                                <select
                                    className="w-full bg-slate-50 text-slate-600 border border-slate-200 rounded-xl pl-9 pr-6 py-2.5 transition-all text-xs font-bold uppercase tracking-widest appearance-none cursor-pointer outline-none hover:border-slate-300"
                                    value={sortOrder}
                                    onChange={(e) => setSortOrder(e.target.value)}
                                >
                                    <option value="newest">Recent</option>
                                    <option value="oldest">Oldest</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-x-auto text-[13px]">
                        <table className="w-full text-left border-collapse min-w-[700px]">
                            <thead>
                                <tr className="bg-slate-50/50 border-b border-slate-100">
                                    <th className="px-6 py-4 font-bold text-slate-500 uppercase tracking-widest text-[10px]">Lead Name</th>
                                    <th className="px-6 py-4 font-bold text-slate-500 uppercase tracking-widest text-[10px]">Contact Info</th>
                                    <th className="px-6 py-4 font-bold text-slate-500 uppercase tracking-widest text-[10px]">Submitted At</th>
                                    <th className="px-6 py-4 font-bold text-slate-500 uppercase tracking-widest text-[10px]">Message Snippet</th>
                                    <th className="px-6 py-4 font-bold text-slate-500 uppercase tracking-widest text-[10px] text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {loading ? (
                                    <tr>
                                        <td colSpan="5" className="px-6 py-20 text-center">
                                            <Loader2 className="w-8 h-8 animate-spin text-emerald-500 mx-auto" />
                                            <p className="mt-4 text-slate-400 font-medium">Fetching leads...</p>
                                        </td>
                                    </tr>
                                ) : filteredContacts.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" className="px-6 py-20 text-center text-slate-400">
                                            <Search className="w-10 h-10 opacity-10 mx-auto mb-4" />
                                            <p className="font-medium">No results matching your query</p>
                                        </td>
                                    </tr>
                                ) : (
                                    filteredContacts.map((contact) => (
                                        <tr key={contact._id} className="group hover:bg-slate-50/80 transition-all">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center font-bold text-xs uppercase group-hover:bg-emerald-600 group-hover:text-white transition-all">
                                                        {contact.name.charAt(0)}
                                                    </div>
                                                    <span className="font-bold text-slate-700">{contact.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 font-medium text-slate-600">
                                                <div className="flex items-center gap-2">
                                                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                                                    {contact.phone || 'N/A'}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex flex-col">
                                                    <span className="font-bold text-slate-700 tracking-tight">{new Date(contact.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                                    <span className="text-[11px] text-slate-400 font-semibold">{new Date(contact.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <p className="text-slate-500 line-clamp-1 max-w-[200px] italic">
                                                    {contact.message}
                                                </p>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button
                                                    onClick={() => openModal(contact)}
                                                    className="inline-flex items-center gap-1.5 text-slate-600 hover:text-emerald-700 font-bold py-1.5 px-3 rounded-lg hover:bg-emerald-50 transition-all border border-transparent hover:border-emerald-100"
                                                >
                                                    <Eye className="w-4 h-4" />
                                                    <span>View</span>
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
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-200 border border-slate-200">
                        {/* Header */}
                        <div className="bg-emerald-600 p-6 text-white relative">
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-all text-white/80 hover:text-white"
                            >
                                <X className="w-5 h-5" />
                            </button>
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-white text-2xl font-black backdrop-blur-md border border-white/30">
                                    {selectedContact.name?.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">{selectedContact.name}</h3>
                                    <p className="text-emerald-50/70 text-xs font-bold uppercase tracking-widest mt-0.5">Contact Lead</p>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <div className="grid grid-cols-2 gap-6 mb-8 mt-2">
                                <div className="space-y-1">
                                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Phone</p>
                                    <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                                        <Phone className="w-4 h-4 text-emerald-500" />
                                        {selectedContact.phone || 'N/A'}
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Submitted</p>
                                    <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                                        <Calendar className="w-4 h-4 text-amber-500" />
                                        {new Date(selectedContact.createdAt).toLocaleDateString()}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-50 border border-slate-100 p-5 rounded-xl">
                                <p className="text-[10px] uppercase tracking-widest font-extrabold text-slate-400 mb-3 flex items-center gap-2">
                                    <MessageSquare className="w-3 h-3" />
                                    Full Inquiry Message
                                </p>
                                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                                    {selectedContact.message}
                                </p>
                            </div>

                            <div className="mt-8 flex gap-3">
                                <a
                                    href={`tel:${selectedContact.phone}`}
                                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/20 text-sm"
                                >
                                    <Phone className="w-4 h-4" />
                                    Call Now
                                </a>
                                <button
                                    onClick={closeModal}
                                    className="px-6 bg-slate-100 text-slate-600 font-bold border border-slate-200 rounded-xl hover:bg-slate-200 transition-all text-sm"
                                >
                                    Close
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

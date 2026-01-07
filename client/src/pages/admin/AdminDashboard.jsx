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
    LayoutDashboard,
    ChevronLeft,
    Menu,
    Briefcase,
    TrendingUp
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
    const [selectedIds, setSelectedIds] = useState([]);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
    const [activeSection, setActiveSection] = useState('inquiries');
    const [investors, setInvestors] = useState([]);
    const [plans, setPlans] = useState([]);
    const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
    const [planForm, setPlanForm] = useState({
        name: '',
        type: 'monthly',
        profitPercentage: 0,
        durationDays: 30,
        minAmount: 1000,
        description: ''
    });
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
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (!response.ok) throw new Error('Failed to fetch lead data');
            const data = await response.json();
            setContacts(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchInvestors = async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem('adminToken');
            let apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            apiUrl = apiUrl.trim().replace(/\/+$/, "");
            if (!apiUrl.includes('.') && !apiUrl.includes('localhost')) apiUrl = `${apiUrl}.onrender.com`;
            if (!apiUrl.startsWith('http')) apiUrl = `https://${apiUrl}`;

            const response = await fetch(`${apiUrl}/api/admin/investors`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (!response.ok) throw new Error('Failed to fetch investors');
            const data = await response.json();
            setInvestors(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchPlans = async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem('adminToken');
            let apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            apiUrl = apiUrl.trim().replace(/\/+$/, "");
            if (!apiUrl.includes('.') && !apiUrl.includes('localhost')) apiUrl = `${apiUrl}.onrender.com`;
            if (!apiUrl.startsWith('http')) apiUrl = `https://${apiUrl}`;

            const response = await fetch(`${apiUrl}/api/plans/admin`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (!response.ok) throw new Error('Failed to fetch plans');
            const data = await response.json();
            setPlans(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (activeSection === 'inquiries') fetchContacts();
        if (activeSection === 'investors') fetchInvestors();
        if (activeSection === 'plans') fetchPlans();
    }, [activeSection]);

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

    const handleBulkDelete = async () => {
        if (!window.confirm(`Are you sure you want to delete ${selectedIds.length} selected leads?`)) return;

        setIsDeleting(true);
        try {
            const token = localStorage.getItem('adminToken');
            let apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            apiUrl = apiUrl.trim().replace(/\/+$/, "");
            if (!apiUrl.includes('.') && !apiUrl.includes('localhost')) apiUrl = `${apiUrl}.onrender.com`;
            if (!apiUrl.startsWith('http')) apiUrl = `https://${apiUrl}`;

            const response = await fetch(`${apiUrl}/api/admin/contacts/bulk`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ids: selectedIds })
            });

            if (!response.ok) throw new Error('Failed to delete leads');

            setSelectedIds([]);
            fetchContacts();
            alert('Leads deleted successfully');
        } catch (err) {
            alert(err.message);
        } finally {
            setIsDeleting(false);
        }
    };

    const toggleSelectOne = (id) => {
        setSelectedIds(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    const handleSavePlan = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('adminToken');
            let apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            apiUrl = apiUrl.trim().replace(/\/+$/, "");
            if (!apiUrl.includes('.') && !apiUrl.includes('localhost')) apiUrl = `${apiUrl}.onrender.com`;
            if (!apiUrl.startsWith('http')) apiUrl = `https://${apiUrl}`;

            const response = await fetch(`${apiUrl}/api/plans`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(planForm)
            });

            if (!response.ok) throw new Error('Failed to save plan');

            setIsPlanModalOpen(false);
            fetchPlans();
            setPlanForm({ name: '', type: 'monthly', profitPercentage: 0, durationDays: 30, minAmount: 1000, description: '' });
            alert('Investment Plan created successfully');
        } catch (err) {
            alert(err.message);
        }
    };

    const handleDeletePlan = async (id) => {
        if (!window.confirm('Delete this plan? Users will no longer be able to invest in it.')) return;
        try {
            const token = localStorage.getItem('adminToken');
            let apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            apiUrl = apiUrl.trim().replace(/\/+$/, "");
            if (!apiUrl.includes('.') && !apiUrl.includes('localhost')) apiUrl = `${apiUrl}.onrender.com`;
            if (!apiUrl.startsWith('http')) apiUrl = `https://${apiUrl}`;

            const response = await fetch(`${apiUrl}/api/plans/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (!response.ok) throw new Error('Failed to delete');
            fetchPlans();
        } catch (err) {
            alert(err.message);
        }
    };

    const toggleSelectAll = () => {
        if (selectedIds.length === filteredContacts.length) {
            setSelectedIds([]);
        } else {
            setSelectedIds(filteredContacts.map(c => c._id));
        }
    };

    const renderInquiries = () => (
        <>
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
                <div className="p-4 lg:p-5 border-b border-slate-100 flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search leads..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 text-slate-900 pl-10 pr-4 py-2.5 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/50 outline-none transition-all text-sm"
                        />
                    </div>
                    <div className="flex gap-2">
                        <select
                            className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-widest outline-none"
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                        >
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                        </select>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[700px]">
                        <thead>
                            <tr className="bg-slate-50/50 border-b border-slate-100 text-[10px] uppercase tracking-widest text-slate-400">
                                <th className="pl-6 py-4 w-10">
                                    <input
                                        type="checkbox"
                                        checked={filteredContacts.length > 0 && selectedIds.length === filteredContacts.length}
                                        onChange={toggleSelectAll}
                                        className="w-4 h-4 rounded border-slate-300 text-emerald-600"
                                    />
                                </th>
                                <th className="px-6 py-4 font-bold">Name</th>
                                <th className="px-6 py-4 font-bold">Phone</th>
                                <th className="px-6 py-4 font-bold">Date</th>
                                <th className="px-6 py-4 font-bold">Message</th>
                                <th className="px-6 py-4 font-bold text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50 text-[13px]">
                            {loading ? (
                                <tr><td colSpan="6" className="py-20 text-center"><Loader2 className="w-8 h-8 animate-spin text-emerald-500 mx-auto" /></td></tr>
                            ) : filteredContacts.length === 0 ? (
                                <tr><td colSpan="6" className="py-20 text-center text-slate-400">No leads found</td></tr>
                            ) : (
                                filteredContacts.map((contact) => (
                                    <tr key={contact._id} className="hover:bg-slate-50/80 group">
                                        <td className="pl-6 py-4">
                                            <input
                                                type="checkbox"
                                                checked={selectedIds.includes(contact._id)}
                                                onChange={() => toggleSelectOne(contact._id)}
                                                className="w-4 h-4 rounded border-slate-300 text-emerald-600"
                                            />
                                        </td>
                                        <td className="px-6 py-4 font-bold text-slate-700">{contact.name}</td>
                                        <td className="px-6 py-4 text-slate-600">{contact.phone}</td>
                                        <td className="px-6 py-4 text-slate-500">
                                            {new Date(contact.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 text-slate-400 truncate max-w-[200px]">{contact.message}</td>
                                        <td className="px-6 py-4 text-right">
                                            <button onClick={() => openModal(contact)} className="text-emerald-600 font-bold hover:bg-emerald-50 px-3 py-1.5 rounded-lg transition-all">View</button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );

    const renderInvestors = () => (
        <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">Total App Users</p>
                    <div className="flex items-end justify-between">
                        <h3 className="text-2xl font-bold text-slate-900">{investors.length}</h3>
                        <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                            <Users className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                <div className="p-4 lg:p-5 border-b border-slate-100">
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search investors..."
                            className="w-full bg-slate-50 border border-slate-200 text-slate-900 pl-10 pr-4 py-2.5 rounded-xl outline-none text-sm"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[700px]">
                        <thead>
                            <tr className="bg-slate-50/50 border-b border-slate-100 text-[10px] uppercase tracking-widest text-slate-400">
                                <th className="px-6 py-4 font-bold">Investor Name</th>
                                <th className="px-6 py-4 font-bold">Phone Number</th>
                                <th className="px-6 py-4 font-bold">KYC Status</th>
                                <th className="px-6 py-4 font-bold">Joined</th>
                                <th className="px-6 py-4 font-bold text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50 text-[13px]">
                            {loading ? (
                                <tr><td colSpan="5" className="py-20 text-center"><Loader2 className="w-8 h-8 animate-spin text-emerald-500 mx-auto" /></td></tr>
                            ) : investors.length === 0 ? (
                                <tr><td colSpan="5" className="py-20 text-center text-slate-400">No registered app users yet</td></tr>
                            ) : (
                                investors.map((inv) => (
                                    <tr key={inv._id} className="hover:bg-slate-50/80">
                                        <td className="px-6 py-4 font-bold text-slate-700">{inv.name}</td>
                                        <td className="px-6 py-4 text-slate-600 font-medium">{inv.phone}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${inv.kycStatus === 'approved' ? 'bg-emerald-100 text-emerald-700' :
                                                inv.kycStatus === 'pending' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-500'
                                                }`}>
                                                {inv.kycStatus || 'Not Started'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-slate-500">{new Date(inv.createdAt).toLocaleDateString()}</td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="text-slate-400 hover:text-emerald-600 font-bold px-3 py-1.5 rounded-lg">Details</button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );

    const renderPlans = () => (
        <>
            <div className="flex justify-between items-center mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-grow mr-4">
                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                        <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">Active Plans</p>
                        <h3 className="text-2xl font-bold text-slate-900">{plans.length}</h3>
                    </div>
                </div>
                <button
                    onClick={() => setIsPlanModalOpen(true)}
                    className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold shadow-lg shadow-emerald-600/20 hover:scale-105 transition-transform"
                >
                    <Briefcase className="w-5 h-5" />
                    <span>Create New Plan</span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {plans.length === 0 ? (
                    <div className="col-span-full py-20 text-center bg-white border-2 border-dashed border-slate-200 rounded-3xl">
                        <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-10" />
                        <p className="text-slate-400 font-medium">No investment plans created yet</p>
                    </div>
                ) : (
                    plans.map(plan => (
                        <div key={plan._id} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative group">
                            <div className="flex justify-between items-start mb-4">
                                <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${plan.type === 'daily' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'
                                    }`}>
                                    {plan.type}
                                </div>
                                <button
                                    onClick={() => handleDeletePlan(plan._id)}
                                    className="p-1.5 text-slate-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 mb-1">{plan.name}</h4>
                            <p className="text-slate-500 text-xs mb-6 h-8 line-clamp-2">{plan.description}</p>

                            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-50">
                                <div>
                                    <p className="text-[10px] uppercase font-bold text-slate-400">Profit</p>
                                    <p className="text-xl font-black text-emerald-600">{plan.profitPercentage}%</p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-bold text-slate-400">Duration</p>
                                    <p className="text-sm font-bold text-slate-700">{plan.durationDays} Days</p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </>
    );

    const adminUser = JSON.parse(localStorage.getItem('adminUser') || '{}');

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-100">
            {/* Sidebar */}
            <aside className={`fixed left-0 top-0 h-full bg-white border-r border-slate-200 z-50 transition-all duration-300 shadow-sm ${isSidebarExpanded ? 'w-64' : 'w-20'}`}>
                <div className={`h-full flex flex-col items-center ${isSidebarExpanded ? 'p-6 items-stretch' : 'py-6 px-2'} relative`}>
                    {/* Toggle Button */}
                    <button
                        onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
                        className="absolute -right-3 top-10 w-6 h-6 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-emerald-600 shadow-sm z-[60] transition-transform hover:scale-110"
                    >
                        {isSidebarExpanded ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                    </button>

                    <div className={`flex items-center ${isSidebarExpanded ? 'gap-3 mb-10' : 'justify-center mb-12'} w-full overflow-hidden`}>
                        <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-md shadow-emerald-600/20 shrink-0">
                            <ArrowUpRight className="text-white w-6 h-6" />
                        </div>
                        {isSidebarExpanded && <span className="text-lg font-bold text-slate-900 tracking-tight whitespace-nowrap animate-in fade-in slide-in-from-left-2">Money Grow</span>}
                    </div>

                    <nav className="space-y-3 flex-grow w-full">
                        {isSidebarExpanded && <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-4 px-4">Main Menu</p>}
                        <button
                            onClick={() => setActiveSection('inquiries')}
                            className={`w-full flex items-center ${isSidebarExpanded ? 'justify-start px-4' : 'justify-center'} py-2.5 ${activeSection === 'inquiries' ? 'bg-emerald-50 text-emerald-700 shadow-sm' : 'text-slate-500 hover:bg-slate-50'} rounded-xl font-semibold transition-all group relative`}
                        >
                            <MessageSquare className="w-5 h-5 shrink-0" />
                            {isSidebarExpanded && <span className="ml-3 hidden lg:block animate-in fade-in slide-in-from-left-2 transition-all">Leads</span>}
                            {!isSidebarExpanded && <div className="absolute left-full ml-4 px-2 py-1 bg-slate-800 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl z-[70]">Leads</div>}
                        </button>

                        <button
                            onClick={() => setActiveSection('investors')}
                            className={`w-full flex items-center ${isSidebarExpanded ? 'justify-start px-4' : 'justify-center'} py-2.5 ${activeSection === 'investors' ? 'bg-emerald-50 text-emerald-700 shadow-sm' : 'text-slate-500 hover:bg-slate-50'} rounded-xl font-semibold transition-all group relative`}
                        >
                            <Users className="w-5 h-5 shrink-0" />
                            {isSidebarExpanded && <span className="ml-3 hidden lg:block animate-in fade-in slide-in-from-left-2 transition-all">Investors</span>}
                            {!isSidebarExpanded && <div className="absolute left-full ml-4 px-2 py-1 bg-slate-800 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl z-[70]">Investors</div>}
                        </button>

                        <button
                            onClick={() => setActiveSection('plans')}
                            className={`w-full flex items-center ${isSidebarExpanded ? 'justify-start px-4' : 'justify-center'} py-2.5 ${activeSection === 'plans' ? 'bg-emerald-50 text-emerald-700 shadow-sm' : 'text-slate-500 hover:bg-slate-50'} rounded-xl font-semibold transition-all group relative`}
                        >
                            <TrendingUp className="w-5 h-5 shrink-0" />
                            {isSidebarExpanded && <span className="ml-3 hidden lg:block animate-in fade-in slide-in-from-left-2 transition-all">Investment Plans</span>}
                            {!isSidebarExpanded && <div className="absolute left-full ml-4 px-2 py-1 bg-slate-800 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl z-[70]">Investment Plans</div>}
                        </button>
                    </nav>

                    <div className="mt-auto pt-6 border-t border-slate-100 space-y-4 w-full">
                        {isSidebarExpanded ? (
                            <div className="flex items-center gap-3 px-2 hidden lg:flex animate-in fade-in slide-in-from-bottom-2">
                                <div className="w-8 h-8 bg-amber-100 text-amber-700 rounded-lg flex items-center justify-center font-bold text-xs uppercase">
                                    {adminUser.name?.charAt(0)}
                                </div>
                                <div className="overflow-hidden">
                                    <p className="text-xs font-bold text-slate-900 truncate">{adminUser.name}</p>
                                    <p className="text-[10px] text-slate-400 font-medium">Administrator</p>
                                </div>
                            </div>
                        ) : (
                            <div className="flex justify-center group relative">
                                <div className="w-8 h-8 bg-amber-100 text-amber-700 rounded-lg flex items-center justify-center font-bold text-xs uppercase">
                                    {adminUser.name?.charAt(0)}
                                </div>
                                <div className="absolute left-full ml-4 px-2 py-1 bg-slate-800 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">Profile</div>
                            </div>
                        )}
                        <button
                            onClick={handleLogout}
                            className={`w-full flex items-center ${isSidebarExpanded ? 'justify-start px-4' : 'justify-center'} py-2.5 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-xl font-semibold transition-all group relative`}
                        >
                            <LogOut className="w-5 h-5 shrink-0" />
                            {isSidebarExpanded && <span className="ml-3 hidden lg:block animate-in fade-in slide-in-from-left-2">Logout</span>}
                            {!isSidebarExpanded && <div className="absolute left-full ml-4 px-2 py-1 bg-red-600 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">Logout</div>}
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className={`p-4 lg:p-8 transition-all duration-300 ${isSidebarExpanded ? 'ml-64' : 'ml-20'}`}>
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                            <span className="text-[10px] uppercase tracking-widest font-black text-emerald-600">Admin Live</span>
                        </div>
                        <h1 className="text-2xl lg:text-3xl font-bold text-slate-900">
                            {activeSection === 'inquiries' ? 'Contact Inquiries' :
                                activeSection === 'investors' ? 'Equity Investors' : 'Investment Plans'}
                        </h1>
                        <p className="text-slate-500 text-xs mt-1">
                            {activeSection === 'inquiries' ? 'Manage and respond to visitor messages' :
                                activeSection === 'investors' ? 'Manage registered app users' : 'Create and manage dynamic investment offerings'}
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        {selectedIds.length > 0 && (
                            <button
                                onClick={handleBulkDelete}
                                disabled={isDeleting}
                                className="flex items-center gap-2 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-all shadow-md shadow-red-600/20 text-xs uppercase tracking-wider animate-in fade-in zoom-in-95 duration-200"
                            >
                                {isDeleting ? <Loader2 className="w-4 h-4 animate-spin" /> : <X className="w-4 h-4" />}
                                <span>Delete Selected ({selectedIds.length})</span>
                            </button>
                        )}
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

                {activeSection === 'inquiries' && renderInquiries()}
                {activeSection === 'investors' && renderInvestors()}
                {activeSection === 'plans' && renderPlans()}
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
            {/* Plan Creation Modal */}
            {isPlanModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="bg-emerald-600 p-6 text-white flex justify-between items-center">
                            <h3 className="text-xl font-bold">Create Investment Plan</h3>
                            <button onClick={() => setIsPlanModalOpen(false)}><X className="w-6 h-6" /></button>
                        </div>
                        <form onSubmit={handleSavePlan} className="p-6 space-y-4">
                            <div>
                                <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">Plan Name</label>
                                <input
                                    type="text" required
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-emerald-500/20"
                                    value={planForm.name}
                                    onChange={(e) => setPlanForm({ ...planForm, name: e.target.value })}
                                    placeholder="e.g. Monthly Earning Plan"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">Type</label>
                                    <select
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 outline-none"
                                        value={planForm.type}
                                        onChange={(e) => setPlanForm({ ...planForm, type: e.target.value })}
                                    >
                                        <option value="daily">Daily</option>
                                        <option value="monthly">Monthly</option>
                                        <option value="yearly">Yearly</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">Profit %</label>
                                    <input
                                        type="number" required
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 outline-none"
                                        value={planForm.profitPercentage}
                                        onChange={(e) => setPlanForm({ ...planForm, profitPercentage: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">Duration (Days)</label>
                                    <input
                                        type="number" required
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 outline-none"
                                        value={planForm.durationDays}
                                        onChange={(e) => setPlanForm({ ...planForm, durationDays: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">Min Amount</label>
                                    <input
                                        type="number" required
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 outline-none"
                                        value={planForm.minAmount}
                                        onChange={(e) => setPlanForm({ ...planForm, minAmount: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">Description</label>
                                <textarea
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 outline-none h-20 resize-none"
                                    value={planForm.description}
                                    onChange={(e) => setPlanForm({ ...planForm, description: e.target.value })}
                                    placeholder="Brief details about the plan..."
                                />
                            </div>
                            <button type="submit" className="w-full bg-emerald-600 text-white font-bold py-3 rounded-xl shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition-all">
                                Save Plan
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;

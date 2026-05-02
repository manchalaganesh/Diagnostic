import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Plus, MessageCircle, Eye, MoreVertical } from 'lucide-react';

const bookingsData = [
  { id: '#B001', name: 'John Doe', avatar: 'JD', test: 'Full Body Checkup', date: 'Today, 10:00 AM', status: 'Confirmed', phone: '918019426972', amount: '₹2,500' },
  { id: '#B002', name: 'Jane Smith', avatar: 'JS', test: 'Blood Test', date: 'Today, 11:30 AM', status: 'Pending', phone: '918019426972', amount: '₹500' },
  { id: '#B003', name: 'Robert Johnson', avatar: 'RJ', test: 'ECG / Heart', date: 'Tomorrow, 09:00 AM', status: 'Confirmed', phone: '918019426972', amount: '₹1,200' },
  { id: '#B004', name: 'Emily Davis', avatar: 'ED', test: 'Thyroid Test', date: 'Tomorrow, 02:00 PM', status: 'Cancelled', phone: '918019426972', amount: '₹800' },
  { id: '#B005', name: 'Michael Brown', avatar: 'MB', test: 'Diabetes Test', date: 'May 4, 08:30 AM', status: 'Pending', phone: '918019426972', amount: '₹400' },
  { id: '#B006', name: 'Sarah Wilson', avatar: 'SW', test: 'X-Ray', date: 'May 4, 11:00 AM', status: 'Confirmed', phone: '918019426972', amount: '₹1,500' },
  { id: '#B007', name: 'David Lee', avatar: 'DL', test: 'Ultrasound Scan', date: 'May 5, 10:00 AM', status: 'Confirmed', phone: '918019426972', amount: '₹1,800' },
];

const Bookings = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Confirmed': return <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">Confirmed</span>;
      case 'Pending': return <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400 border border-amber-200 dark:border-amber-500/30">Pending</span>;
      case 'Cancelled': return <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-400 border border-rose-200 dark:border-rose-500/30">Cancelled</span>;
      default: return null;
    }
  };

  const handleWhatsApp = (phone: string, name: string) => {
    const message = `Hello ${name}, this is CarePlus Diagnostics regarding your recent booking.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 max-w-7xl mx-auto pb-10"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Bookings Management</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">View, search, and manage all patient appointments.</p>
        </div>
        <button className="flex items-center gap-2 bg-health-blue text-white px-4 py-2 rounded-xl font-medium hover:bg-health-blue/90 shadow-md shadow-health-blue/20 transition-all duration-200 text-sm">
          <Plus size={16} /> New Booking
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col">
        {/* Toolbar */}
        <div className="p-4 sm:p-6 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-50/50 dark:bg-slate-800/30">
          <div className="relative w-full sm:max-w-md group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-health-blue transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search by patient name, ID, or phone..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 focus:border-health-blue dark:focus:border-health-blue rounded-xl text-slate-900 dark:text-white outline-none transition-all shadow-sm focus:shadow-md text-sm"
            />
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button className="flex items-center justify-center gap-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-xl font-medium hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm transition-all duration-200 text-sm w-full sm:w-auto">
              <Filter size={16} /> Filter
            </button>
            <select className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-xl font-medium hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm transition-all duration-200 text-sm w-full sm:w-auto outline-none focus:border-health-blue">
              <option>All Status</option>
              <option>Confirmed</option>
              <option>Pending</option>
              <option>Cancelled</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider border-b border-slate-200 dark:border-slate-800">
                <th className="px-6 py-4 font-semibold">Booking ID</th>
                <th className="px-6 py-4 font-semibold">Patient Name</th>
                <th className="px-6 py-4 font-semibold">Test Details</th>
                <th className="px-6 py-4 font-semibold">Date & Time</th>
                <th className="px-6 py-4 font-semibold">Amount</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50 text-sm">
              {bookingsData.map((booking, i) => (
                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                  <td className="px-6 py-4 font-medium text-health-blue">{booking.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center text-slate-600 dark:text-slate-200 font-bold text-xs shadow-sm">
                        {booking.avatar}
                      </div>
                      <span className="font-semibold text-slate-900 dark:text-white">{booking.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-300 font-medium">{booking.test}</td>
                  <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{booking.date}</td>
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{booking.amount}</td>
                  <td className="px-6 py-4">
                    {getStatusBadge(booking.status)}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={() => handleWhatsApp(booking.phone, booking.name)}
                        className="p-1.5 text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 rounded-lg transition-colors"
                        title="WhatsApp"
                      >
                        <MessageCircle size={16} />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-health-blue hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-lg transition-colors" title="View">
                        <Eye size={16} />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" title="More">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-800/30">
          <span>Showing 1 to 7 of 45 bookings</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 disabled:opacity-50">Prev</button>
            <button className="px-3 py-1 rounded bg-health-blue text-white">1</button>
            <button className="px-3 py-1 rounded border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800">2</button>
            <button className="px-3 py-1 rounded border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800">Next</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Bookings;

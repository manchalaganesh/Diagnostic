
import { motion } from 'framer-motion';
import { 
  Users, 
  CalendarCheck, 
  FileText, 
  TrendingUp,
  Activity,
  ArrowUpRight,
  Plus,
  MessageCircle,
  MoreVertical,
  Eye,
  DollarSign,
  Clock,
  Download
} from 'lucide-react';
import { 
  XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, 
  LineChart, Line, PieChart, Pie, Cell 
} from 'recharts';
import { useTheme } from '../../context/ThemeContext';


const revenueData = [
  { name: 'Mon', revenue: 4000 },
  { name: 'Tue', revenue: 3000 },
  { name: 'Wed', revenue: 5500 },
  { name: 'Thu', revenue: 4500 },
  { name: 'Fri', revenue: 7000 },
  { name: 'Sat', revenue: 8500 },
  { name: 'Sun', revenue: 3000 },
];

const pieData = [
  { name: 'Blood Test', value: 400 },
  { name: 'Full Body', value: 300 },
  { name: 'ECG', value: 150 },
  { name: 'X-Ray', value: 250 },
];
const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];

// Dummy Data for Table
const recentBookings = [
  { id: '#B001', name: 'John Doe', avatar: 'JD', test: 'Full Body Checkup', date: 'Today, 10:00 AM', status: 'Confirmed', phone: '918019426972' },
  { id: '#B002', name: 'Jane Smith', avatar: 'JS', test: 'Blood Test', date: 'Today, 11:30 AM', status: 'Pending', phone: '918019426972' },
  { id: '#B003', name: 'Robert Johnson', avatar: 'RJ', test: 'ECG / Heart', date: 'Tomorrow, 09:00 AM', status: 'Confirmed', phone: '918019426972' },
  { id: '#B004', name: 'Emily Davis', avatar: 'ED', test: 'Thyroid Test', date: 'Tomorrow, 02:00 PM', status: 'Cancelled', phone: '918019426972' },
  { id: '#B005', name: 'Michael Brown', avatar: 'MB', test: 'Diabetes Test', date: 'May 4, 08:30 AM', status: 'Pending', phone: '918019426972' },
];

// Mini graph dummy data
const miniGraphData = [
  { value: 10 }, { value: 25 }, { value: 15 }, { value: 30 }, { value: 20 }, { value: 40 }, { value: 35 }
];

const Dashboard = () => {
  const { isDarkMode } = useTheme();

  const stats = [
    { name: 'Total Bookings', value: '2,405', change: '+12.5%', icon: <CalendarCheck className="w-5 h-5 text-health-blue" />, bg: 'bg-blue-50 dark:bg-blue-500/10', color: '#3b82f6' },
    { name: 'Today Appointments', value: '45', change: '+4.2%', icon: <Activity className="w-5 h-5 text-health-green" />, bg: 'bg-emerald-50 dark:bg-emerald-500/10', color: '#10b981' },
    { name: 'Total Revenue', value: '₹1.2M', change: '+18.1%', icon: <DollarSign className="w-5 h-5 text-indigo-500" />, bg: 'bg-indigo-50 dark:bg-indigo-500/10', color: '#6366f1' },
    { name: 'Total Patients', value: '1,234', change: '+8.4%', icon: <Users className="w-5 h-5 text-amber-500" />, bg: 'bg-amber-50 dark:bg-amber-500/10', color: '#f59e0b' },
    { name: 'Reports Uploaded', value: '8,942', change: '+2.4%', icon: <FileText className="w-5 h-5 text-purple-500" />, bg: 'bg-purple-50 dark:bg-purple-500/10', color: '#8b5cf6' },
    { name: 'Pending Reports', value: '18', change: '-5.2%', icon: <Clock className="w-5 h-5 text-rose-500" />, bg: 'bg-rose-50 dark:bg-rose-500/10', color: '#f43f5e' },
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 }
    })
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Dashboard Overview</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Welcome back! Here is your lab's performance today.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-xl font-medium hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm transition-all duration-200 text-sm">
            <Download size={16} /> Export
          </button>
          <button className="flex items-center gap-2 bg-health-blue text-white px-4 py-2 rounded-xl font-medium hover:bg-health-blue/90 shadow-md shadow-health-blue/20 transition-all duration-200 text-sm">
            <Plus size={16} /> Add Booking
          </button>
        </div>
      </div>

      {/* Premium Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <motion.div 
            key={i} 
            custom={i}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group overflow-hidden relative"
          >
            {/* Background Gradient Blur */}
            <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full blur-3xl opacity-20 ${stat.bg} group-hover:opacity-40 transition-opacity duration-500`}></div>
            
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.bg}`}>
                  {stat.icon}
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{stat.name}</p>
              </div>
              <span className={`flex items-center text-xs font-bold px-2 py-1 rounded-full ${
                stat.change.startsWith('+') 
                  ? 'text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 dark:text-emerald-400' 
                  : 'text-rose-600 bg-rose-50 dark:bg-rose-500/10 dark:text-rose-400'
              }`}>
                {stat.change} <TrendingUp size={12} className={`ml-1 ${stat.change.startsWith('-') ? 'rotate-180' : ''}`} />
              </span>
            </div>
            
            <div className="flex items-end justify-between relative z-10">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">{stat.value}</h3>
              
              {/* Mini Trend Graph */}
              <div className="w-24 h-12">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={miniGraphData}>
                    <Line type="monotone" dataKey="value" stroke={stat.color} strokeWidth={2} dot={false} isAnimationActive={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
          className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Revenue Trend</h3>
            <select className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm rounded-lg focus:ring-health-blue focus:border-health-blue px-3 py-1.5 outline-none">
              <option>Last 7 Days</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDarkMode ? '#1e293b' : '#f1f5f9'} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: isDarkMode ? '#94a3b8' : '#64748b', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: isDarkMode ? '#94a3b8' : '#64748b', fontSize: 12 }} tickFormatter={(value: any) => `₹${value/1000}k`} />
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: isDarkMode ? '#0f172a' : '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ color: '#3b82f6', fontWeight: 'bold' }}
                  formatter={(value: any) => [`₹${value}`, 'Revenue']}
                />
                <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Pie Chart */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
          className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col"
        >
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Popular Tests</h3>
          <div className="flex-1 min-h-[200px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value" stroke="none">
                  {pieData.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: isDarkMode ? '#0f172a' : '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">1.1k</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">Total Tests</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {pieData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                <span className="text-xs text-slate-600 dark:text-slate-300 font-medium">{item.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="grid lg:grid-cols-3 gap-6">
        
        {/* Recent Bookings Table */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col"
        >
          <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Recent Bookings</h3>
            <button className="text-health-blue text-sm font-semibold hover:text-health-lightblue flex items-center transition-colors">
              View All <ArrowUpRight size={16} className="ml-1" />
            </button>
          </div>
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-50/50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider">
                  <th className="px-6 py-4 font-semibold">Patient</th>
                  <th className="px-6 py-4 font-semibold">Test Type</th>
                  <th className="px-6 py-4 font-semibold">Date & Time</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50 text-sm">
                {recentBookings.map((booking, i) => (
                  <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center text-slate-600 dark:text-slate-200 font-bold text-xs shadow-sm">
                          {booking.avatar}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-white">{booking.name}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">{booking.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300 font-medium">{booking.test}</td>
                    <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{booking.date}</td>
                    <td className="px-6 py-4">
                      {getStatusBadge(booking.status)}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                          onClick={() => handleWhatsApp(booking.phone, booking.name)}
                          className="p-1.5 text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 rounded-lg transition-colors tooltip-trigger relative"
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
        </motion.div>

        {/* Quick Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col"
        >
          <div className="p-6 border-b border-slate-200 dark:border-slate-800">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Quick Actions</h3>
          </div>
          <div className="p-6 grid gap-4">
            <button className="w-full flex items-center gap-4 px-4 py-3 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl transition-all duration-200 group shadow-sm hover:shadow-md">
              <div className="bg-health-blue/10 dark:bg-health-blue/20 text-health-blue p-2.5 rounded-xl group-hover:scale-110 transition-transform">
                <CalendarCheck size={20} />
              </div>
              <span className="font-semibold text-slate-700 dark:text-slate-200">Add New Booking</span>
            </button>
            
            <button className="w-full flex items-center gap-4 px-4 py-3 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl transition-all duration-200 group shadow-sm hover:shadow-md">
              <div className="bg-amber-500/10 dark:bg-amber-500/20 text-amber-500 p-2.5 rounded-xl group-hover:scale-110 transition-transform">
                <Users size={20} />
              </div>
              <span className="font-semibold text-slate-700 dark:text-slate-200">Register Patient</span>
            </button>
            
            <button className="w-full flex items-center gap-4 px-4 py-3 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl transition-all duration-200 group shadow-sm hover:shadow-md">
              <div className="bg-purple-500/10 dark:bg-purple-500/20 text-purple-500 p-2.5 rounded-xl group-hover:scale-110 transition-transform">
                <FileText size={20} />
              </div>
              <span className="font-semibold text-slate-700 dark:text-slate-200">Upload Report</span>
            </button>
            
            <button className="w-full flex items-center gap-4 px-4 py-3 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl transition-all duration-200 group shadow-sm hover:shadow-md">
              <div className="bg-[#25D366]/10 dark:bg-[#25D366]/20 text-[#25D366] p-2.5 rounded-xl group-hover:scale-110 transition-transform">
                <MessageCircle size={20} />
              </div>
              <span className="font-semibold text-slate-700 dark:text-slate-200">Send WhatsApp</span>
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Dashboard;

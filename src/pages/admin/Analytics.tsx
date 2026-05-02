import { motion } from 'framer-motion';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Legend
} from 'recharts';
import { useTheme } from '../../context/ThemeContext';
import { Download } from 'lucide-react';

const yearlyData = [
  { month: 'Jan', tests: 400, packages: 240, home_collection: 150 },
  { month: 'Feb', tests: 300, packages: 139, home_collection: 200 },
  { month: 'Mar', tests: 550, packages: 380, home_collection: 250 },
  { month: 'Apr', tests: 450, packages: 390, home_collection: 180 },
  { month: 'May', tests: 700, packages: 480, home_collection: 300 },
  { month: 'Jun', tests: 650, packages: 380, home_collection: 280 },
];

const demographicData = [
  { ageGroup: '0-18', male: 40, female: 35 },
  { ageGroup: '19-35', male: 120, female: 150 },
  { ageGroup: '36-50', male: 200, female: 180 },
  { ageGroup: '51-65', male: 250, female: 220 },
  { ageGroup: '65+', male: 180, female: 200 },
];

const Analytics = () => {
  const { isDarkMode } = useTheme();
  
  const tooltipStyle = {
    backgroundColor: isDarkMode ? '#0f172a' : '#fff', 
    borderRadius: '8px', 
    border: isDarkMode ? '1px solid #1e293b' : '1px solid #e2e8f0',
    color: isDarkMode ? '#f8fafc' : '#0f172a'
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 max-w-7xl mx-auto pb-10"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Analytics & Reports</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Deep dive into diagnostic center performance.</p>
        </div>
        <button className="flex items-center gap-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-xl font-medium hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm transition-all duration-200 text-sm">
          <Download size={16} /> Export CSV
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        
        {/* Service Breakdown */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Service Type Breakdown</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={yearlyData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorTests" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorPackages" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDarkMode ? '#1e293b' : '#f1f5f9'} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: isDarkMode ? '#94a3b8' : '#64748b' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: isDarkMode ? '#94a3b8' : '#64748b' }} />
                <Tooltip contentStyle={tooltipStyle} />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                <Area type="monotone" dataKey="tests" name="Individual Tests" stroke="#3b82f6" fillOpacity={1} fill="url(#colorTests)" />
                <Area type="monotone" dataKey="packages" name="Health Packages" stroke="#10b981" fillOpacity={1} fill="url(#colorPackages)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Patient Demographics */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Patient Demographics</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={demographicData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDarkMode ? '#1e293b' : '#f1f5f9'} />
                <XAxis dataKey="ageGroup" axisLine={false} tickLine={false} tick={{ fill: isDarkMode ? '#94a3b8' : '#64748b' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: isDarkMode ? '#94a3b8' : '#64748b' }} />
                <Tooltip contentStyle={tooltipStyle} cursor={{ fill: isDarkMode ? '#1e293b' : '#f1f5f9' }} />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                <Bar dataKey="male" name="Male" fill="#6366f1" radius={[4, 4, 0, 0]} barSize={20} />
                <Bar dataKey="female" name="Female" fill="#ec4899" radius={[4, 4, 0, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default Analytics;

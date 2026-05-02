import { motion } from 'framer-motion';
import { Search, UserPlus, Phone, Mail, Calendar } from 'lucide-react';

const patientsData = [
  { id: 'P-1001', name: 'John Doe', age: 45, gender: 'Male', phone: '+91 80194 26972', email: 'john@example.com', lastVisit: 'Today', tests: 4 },
  { id: 'P-1002', name: 'Jane Smith', age: 32, gender: 'Female', phone: '+91 80194 26972', email: 'jane@example.com', lastVisit: 'May 1, 2026', tests: 2 },
  { id: 'P-1003', name: 'Robert Johnson', age: 58, gender: 'Male', phone: '+91 80194 26972', email: 'robert@example.com', lastVisit: 'Apr 28, 2026', tests: 7 },
  { id: 'P-1004', name: 'Emily Davis', age: 29, gender: 'Female', phone: '+91 80194 26972', email: 'emily@example.com', lastVisit: 'Apr 25, 2026', tests: 1 },
  { id: 'P-1005', name: 'Michael Brown', age: 62, gender: 'Male', phone: '+91 80194 26972', email: 'michael@example.com', lastVisit: 'Apr 15, 2026', tests: 12 },
];

const Patients = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 max-w-7xl mx-auto pb-10"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Patient Registry</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Manage patient profiles and test histories.</p>
        </div>
        <button className="flex items-center gap-2 bg-health-blue text-white px-4 py-2 rounded-xl font-medium hover:bg-health-blue/90 shadow-md shadow-health-blue/20 transition-all duration-200 text-sm">
          <UserPlus size={16} /> Register Patient
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col">
        {/* Toolbar */}
        <div className="p-4 sm:p-6 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-50/50 dark:bg-slate-800/30">
          <div className="relative w-full sm:max-w-md group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-health-blue transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search patients by name or phone..." 
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 focus:border-health-blue dark:focus:border-health-blue rounded-xl text-slate-900 dark:text-white outline-none transition-all shadow-sm focus:shadow-md text-sm"
            />
          </div>
        </div>

        {/* Grid List */}
        <div className="p-4 sm:p-6 grid gap-4 lg:grid-cols-2">
          {patientsData.map((patient, i) => (
            <div key={i} className="flex flex-col sm:flex-row gap-6 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-health-blue/50 dark:hover:border-health-blue/50 hover:shadow-md transition-all duration-300 bg-white dark:bg-slate-900 group">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
                    {patient.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-health-blue transition-colors">{patient.name}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{patient.id} • {patient.gender}, {patient.age} yrs</p>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <Phone size={14} className="text-slate-400" />
                    <span>{patient.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={14} className="text-slate-400" />
                    <span>{patient.email}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex sm:flex-col justify-between sm:justify-center gap-4 sm:pl-6 sm:border-l border-slate-100 dark:border-slate-800">
                <div className="text-left sm:text-center">
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1 justify-start sm:justify-center">
                    <Calendar size={12} /> Last Visit
                  </p>
                  <p className="font-semibold text-slate-900 dark:text-white">{patient.lastVisit}</p>
                </div>
                <div className="text-right sm:text-center">
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Total Tests</p>
                  <p className="font-bold text-health-blue text-lg">{patient.tests}</p>
                </div>
                <button className="hidden sm:block w-full py-1.5 px-3 bg-slate-50 dark:bg-slate-800 hover:bg-health-blue hover:text-white text-slate-700 dark:text-slate-200 text-xs font-semibold rounded-lg transition-colors border border-slate-200 dark:border-slate-700">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </motion.div>
  );
};

export default Patients;

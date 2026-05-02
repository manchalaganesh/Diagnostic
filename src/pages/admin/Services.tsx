import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit2, Trash2, ActivitySquare, CheckCircle, XCircle } from 'lucide-react';

const initialServices = [
  { id: 1, name: 'Full Body Checkup', category: 'Packages', price: '₹2,500', duration: '30 mins', active: true },
  { id: 2, name: 'Complete Blood Count (CBC)', category: 'Blood Tests', price: '₹500', duration: '10 mins', active: true },
  { id: 3, name: 'ECG / Heart Checkup', category: 'Cardiology', price: '₹1,200', duration: '20 mins', active: true },
  { id: 4, name: 'Thyroid Profile (T3, T4, TSH)', category: 'Hormone', price: '₹800', duration: '15 mins', active: true },
  { id: 5, name: 'Ultrasound Scan', category: 'Imaging', price: '₹1,500', duration: '45 mins', active: false },
  { id: 6, name: 'Diabetes Test (HbA1c)', category: 'Blood Tests', price: '₹400', duration: '10 mins', active: true },
];

const Services = () => {
  const [services, setServices] = useState(initialServices);

  const toggleService = (id: number) => {
    setServices(services.map(s => s.id === id ? { ...s, active: !s.active } : s));
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 max-w-7xl mx-auto pb-10"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Diagnostic Services</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Manage tests, packages, and pricing.</p>
        </div>
        <button className="flex items-center gap-2 bg-health-blue text-white px-4 py-2 rounded-xl font-medium hover:bg-health-blue/90 shadow-md shadow-health-blue/20 transition-all duration-200 text-sm">
          <Plus size={16} /> Add New Service
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider border-b border-slate-200 dark:border-slate-800">
                <th className="px-6 py-4 font-semibold">Service Name</th>
                <th className="px-6 py-4 font-semibold">Category</th>
                <th className="px-6 py-4 font-semibold">Price</th>
                <th className="px-6 py-4 font-semibold">Duration</th>
                <th className="px-6 py-4 font-semibold text-center">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50 text-sm">
              {services.map((service) => (
                <tr key={service.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${service.active ? 'bg-health-blue/10 text-health-blue' : 'bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500'}`}>
                        <ActivitySquare size={18} />
                      </div>
                      <span className={`font-semibold ${service.active ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
                        {service.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{service.category}</td>
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{service.price}</td>
                  <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{service.duration}</td>
                  <td className="px-6 py-4 text-center">
                    <button 
                      onClick={() => toggleService(service.id)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors"
                      style={{
                        backgroundColor: service.active ? 'var(--color-health-green)' : '#f1f5f9',
                        color: service.active ? 'white' : '#64748b'
                      }}
                    >
                      {service.active ? <CheckCircle size={14} /> : <XCircle size={14} />}
                      {service.active ? 'Active' : 'Inactive'}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 text-slate-400 hover:text-health-blue hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-lg transition-colors" title="Edit">
                        <Edit2 size={16} />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors" title="Delete">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;

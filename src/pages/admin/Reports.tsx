import { motion } from 'framer-motion';
import { UploadCloud, FileText, Search, Download, MessageCircle } from 'lucide-react';

const reportsData = [
  { id: 'REP-001', patient: 'John Doe', test: 'Full Body Checkup', date: 'May 2, 2026', size: '2.4 MB' },
  { id: 'REP-002', patient: 'Jane Smith', test: 'Blood Test', date: 'May 2, 2026', size: '1.1 MB' },
  { id: 'REP-003', patient: 'Robert Johnson', test: 'ECG / Heart', date: 'May 1, 2026', size: '3.5 MB' },
  { id: 'REP-004', patient: 'Emily Davis', test: 'Thyroid Profile', date: 'Apr 30, 2026', size: '850 KB' },
];

const Reports = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 max-w-7xl mx-auto pb-10"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Report Management</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Upload and share test results securely.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Upload Zone */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 flex flex-col items-center justify-center text-center h-full min-h-[300px] border-dashed border-2 group hover:border-health-blue dark:hover:border-health-blue transition-colors cursor-pointer">
            <div className="w-16 h-16 bg-blue-50 dark:bg-blue-500/10 text-health-blue rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <UploadCloud size={32} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Upload New Report</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 px-4">
              Drag and drop PDF files here, or click to browse your computer.
            </p>
            <button className="bg-health-blue text-white px-6 py-2.5 rounded-xl font-medium hover:bg-health-blue/90 shadow-md shadow-health-blue/20 transition-all duration-200 text-sm w-full">
              Select File
            </button>
            <p className="text-xs text-slate-400 mt-4">Supported formats: PDF, JPG, PNG (Max 10MB)</p>
          </div>
        </div>

        {/* Recent Reports */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col">
          <div className="p-4 sm:p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/30">
            <h3 className="font-bold text-slate-900 dark:text-white">Recently Uploaded</h3>
            <div className="relative w-full max-w-[200px] sm:max-w-xs group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-health-blue transition-colors" size={16} />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full pl-9 pr-3 py-1.5 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 focus:border-health-blue dark:focus:border-health-blue rounded-lg text-slate-900 dark:text-white outline-none transition-all text-sm"
              />
            </div>
          </div>
          
          <div className="divide-y divide-slate-100 dark:divide-slate-800/50">
            {reportsData.map((report, i) => (
              <div key={i} className="p-4 sm:p-6 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-50 dark:bg-red-500/10 text-red-500 flex items-center justify-center shrink-0">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-health-blue transition-colors">
                      {report.test} Report
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                      {report.patient} • {report.id}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                  <div className="text-right hidden sm:block">
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-300">{report.date}</p>
                    <p className="text-xs text-slate-500">{report.size}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-health-blue hover:text-white transition-colors tooltip-trigger" title="Download">
                      <Download size={16} />
                    </button>
                    <button className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors tooltip-trigger" title="Send via WhatsApp">
                      <MessageCircle size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Reports;

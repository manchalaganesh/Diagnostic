import { motion } from 'framer-motion';
import { Save, Building2, Phone, Mail, MapPin, Bell, Shield, MessageCircle } from 'lucide-react';

const Settings = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 max-w-4xl mx-auto pb-10"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Settings</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Manage your clinic details and preferences.</p>
        </div>
        <button className="flex items-center gap-2 bg-health-blue text-white px-6 py-2.5 rounded-xl font-medium hover:bg-health-blue/90 shadow-md shadow-health-blue/20 transition-all duration-200 text-sm">
          <Save size={16} /> Save Changes
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
        
        {/* Clinic Profile */}
        <div className="p-6 sm:p-8 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-blue-50 dark:bg-blue-500/10 text-health-blue rounded-xl">
              <Building2 size={20} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Clinic Profile</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Clinic Name</label>
              <input type="text" defaultValue="CarePlus Diagnostics" className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 focus:border-health-blue dark:focus:border-health-blue rounded-xl text-slate-900 dark:text-white outline-none transition-all shadow-sm focus:shadow-md" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input type="email" defaultValue="contact@careplus.com" className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 focus:border-health-blue dark:focus:border-health-blue rounded-xl text-slate-900 dark:text-white outline-none transition-all shadow-sm focus:shadow-md" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Primary Phone</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input type="tel" defaultValue="+91 80194 26972" className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 focus:border-health-blue dark:focus:border-health-blue rounded-xl text-slate-900 dark:text-white outline-none transition-all shadow-sm focus:shadow-md" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">WhatsApp Leads Number</label>
              <div className="relative">
                <MessageCircle className="absolute left-3 top-1/2 -translate-y-1/2 text-[#25D366]" size={18} />
                <input type="tel" defaultValue="+91 80194 26972" className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 focus:border-health-blue dark:focus:border-health-blue rounded-xl text-slate-900 dark:text-white outline-none transition-all shadow-sm focus:shadow-md" />
              </div>
              <p className="text-xs text-slate-500 mt-1">Bookings will be sent to this number.</p>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Address</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-4 text-slate-400" size={18} />
                <textarea rows={3} defaultValue="123 Health Avenue, Medical District, Hyderabad, Telangana 500001" className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 focus:border-health-blue dark:focus:border-health-blue rounded-xl text-slate-900 dark:text-white outline-none transition-all shadow-sm focus:shadow-md resize-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Notifications & Security */}
        <div className="p-6 sm:p-8">
          <div className="grid sm:grid-cols-2 gap-10">
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-amber-50 dark:bg-amber-500/10 text-amber-500 rounded-xl">
                  <Bell size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Notifications</h3>
              </div>
              <div className="space-y-4">
                <label className="flex items-center justify-between p-4 border border-slate-200 dark:border-slate-700 rounded-xl cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white text-sm">New Booking Alerts</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Receive browser notifications</p>
                  </div>
                  <div className="relative inline-block w-12 h-6 rounded-full bg-health-blue">
                    <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform translate-x-6"></span>
                  </div>
                </label>
                <label className="flex items-center justify-between p-4 border border-slate-200 dark:border-slate-700 rounded-xl cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white text-sm">Daily Summary</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Email report at 8 PM</p>
                  </div>
                  <div className="relative inline-block w-12 h-6 rounded-full bg-slate-200 dark:bg-slate-700">
                    <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform"></span>
                  </div>
                </label>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-500 rounded-xl">
                  <Shield size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Security</h3>
              </div>
              <div className="space-y-4">
                <button className="w-full text-left p-4 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <p className="font-semibold text-slate-900 dark:text-white text-sm">Change Admin Password</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Last changed 2 days ago</p>
                </button>
                <button className="w-full text-left p-4 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <p className="font-semibold text-rose-600 dark:text-rose-500 text-sm">Two-Factor Authentication</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Not enabled</p>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default Settings;

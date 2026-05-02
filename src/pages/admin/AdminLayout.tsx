import { useState, useEffect } from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  CalendarCheck, 
  Users, 
  FileText, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Activity,
  Bell,
  Search,
  Sun,
  Moon,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  ActivitySquare
} from 'lucide-react';

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  
  const { logout } = useAuth();
  const { isDarkMode, toggleTheme } = useTheme();

  // Real-time clock
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/admin' },
    { name: 'Bookings', icon: <CalendarCheck size={20} />, path: '/admin/bookings' },
    { name: 'Patients', icon: <Users size={20} />, path: '/admin/patients' },
    { name: 'Reports', icon: <FileText size={20} />, path: '/admin/reports' },
    { name: 'Services', icon: <ActivitySquare size={20} />, path: '/admin/services' },
    { name: 'Analytics', icon: <TrendingUp size={20} />, path: '/admin/analytics' },
    { name: 'Settings', icon: <Settings size={20} />, path: '/admin/settings' },
  ];

  const handleLogout = () => {
    logout();
  };

  const sidebarVariants = {
    expanded: { width: '240px' },
    collapsed: { width: '80px' }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex transition-colors duration-300">
      
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {mobileSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/50 dark:bg-slate-900/80 z-40 lg:hidden backdrop-blur-sm"
            onClick={() => setMobileSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar - Desktop & Mobile */}
      <motion.aside 
        initial={false}
        animate={sidebarOpen ? "expanded" : "collapsed"}
        variants={sidebarVariants}
        className={`fixed inset-y-0 left-0 z-50 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col transition-all duration-300 ease-in-out
          ${mobileSidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Logo Area */}
        <div className="h-20 flex items-center justify-between px-4 sm:px-6 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <Link to="/" className="flex items-center gap-3 overflow-hidden hover:opacity-90 transition-opacity">
            <div className="bg-health-blue text-white p-2 rounded-xl shrink-0 shadow-md">
              <Activity size={24} />
            </div>
            {(sidebarOpen || mobileSidebarOpen) && (
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-bold text-xl text-slate-900 dark:text-white whitespace-nowrap"
              >
                CarePlus
              </motion.span>
            )}
          </Link>
          <button 
            className="lg:hidden text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            onClick={() => setMobileSidebarOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <div className="px-3 py-6 flex flex-col h-[calc(100vh-5rem)] overflow-y-auto custom-scrollbar">
          <nav className="flex-1 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === '/admin'}
                onClick={() => setMobileSidebarOpen(false)}
                className={({ isActive }) => 
                  `flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group relative ${
                    isActive 
                      ? 'bg-health-blue text-white shadow-md shadow-health-blue/20' 
                      : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white'
                  }`
                }
              >
                <div className="shrink-0">{item.icon}</div>
                {(sidebarOpen || mobileSidebarOpen) && (
                  <span className="font-medium whitespace-nowrap">{item.name}</span>
                )}
                
                {/* Tooltip for collapsed state */}
                {!sidebarOpen && !mobileSidebarOpen && (
                  <div className="absolute left-full ml-4 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50 shadow-lg">
                    {item.name}
                  </div>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Bottom Actions */}
          <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <button 
              onClick={handleLogout}
              className="flex items-center gap-3 px-3 py-3 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-red-50 dark:hover:bg-red-500/10 hover:text-red-500 dark:hover:text-red-400 transition-colors group relative"
            >
              <div className="shrink-0"><LogOut size={20} /></div>
              {(sidebarOpen || mobileSidebarOpen) && (
                <span className="font-medium whitespace-nowrap">Logout</span>
              )}
              {!sidebarOpen && !mobileSidebarOpen && (
                <div className="absolute left-full ml-4 px-2 py-1 bg-red-500 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50">
                  Logout
                </div>
              )}
            </button>
            
            {/* Collapse Toggle (Desktop only) */}
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="hidden lg:flex items-center justify-center py-2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {sidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
            </button>
          </div>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <div 
        className={`flex-1 flex flex-col min-w-0 min-h-screen transition-all duration-300 ${sidebarOpen ? 'lg:ml-[240px]' : 'lg:ml-[80px]'}`}
      >
        {/* Top Navbar */}
        <header className="h-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 sm:px-6 sticky top-0 z-30 transition-colors">
          
          <div className="flex items-center gap-4 flex-1">
            <button 
              className="lg:hidden text-slate-500 hover:text-slate-900 dark:hover:text-white focus:outline-none p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              onClick={() => setMobileSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            
            {/* Search Bar */}
            <div className="hidden sm:flex items-center relative max-w-md w-full group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-health-blue transition-colors" size={20} />
              <input 
                type="text" 
                placeholder="Search patients, bookings, or reports..." 
                className="w-full pl-10 pr-4 py-2.5 bg-slate-100 dark:bg-slate-800 border-transparent focus:bg-white dark:focus:bg-slate-900 border focus:border-health-blue dark:focus:border-health-blue rounded-xl text-slate-900 dark:text-white outline-none transition-all shadow-sm focus:shadow-md"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
                <kbd className="hidden lg:inline-flex items-center justify-center px-2 py-1 text-xs font-semibold text-slate-400 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">⌘</kbd>
                <kbd className="hidden lg:inline-flex items-center justify-center px-2 py-1 text-xs font-semibold text-slate-400 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">K</kbd>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 ml-4">
            {/* Clock */}
            <div className="hidden md:flex flex-col items-end mr-4">
              <span className="text-sm font-semibold text-slate-900 dark:text-white leading-tight">
                {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {currentTime.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })}
              </span>
            </div>

            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Notifications */}
            <button className="relative p-2.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
            </button>
            
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-1"></div>
            
            {/* Profile Dropdown */}
            <button className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <div className="w-10 h-10 bg-gradient-to-tr from-health-blue to-health-lightblue rounded-xl flex items-center justify-center text-white font-bold shadow-md">
                A
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">Admin User</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">System Admin</p>
              </div>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 relative">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

import { Activity, Menu, X, Phone, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const closeMenu = () => setIsOpen(false);

  const handleWhatsApp = () => {
    const message = "Hello, I have an inquiry.";
    window.open(`https://wa.me/918019426972?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-0' : 'bg-white/90 backdrop-blur-sm shadow-sm py-1'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 sm:h-20 items-center">
          <Link to="/" onClick={handleLogoClick} className="flex items-center gap-2 cursor-pointer z-50">
            <div className="bg-health-blue text-white p-1.5 sm:p-2 rounded-lg">
              <Activity size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="font-bold text-lg sm:text-xl text-health-blue truncate">CarePlus</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-slate-600 hover:text-health-blue font-medium smooth-transition">About Us</a>
            <a href="#services" className="text-slate-600 hover:text-health-blue font-medium smooth-transition">Services</a>
            <a href="#reports" className="text-slate-600 hover:text-health-blue font-medium smooth-transition">Reports</a>
            <a href="#contact" className="text-slate-600 hover:text-health-blue font-medium smooth-transition">Contact</a>
            <a href="#book" className="bg-health-blue text-white px-6 py-2.5 rounded-full font-medium hover:bg-health-blue/90 shadow-md hover:shadow-lg smooth-transition">
              Book Appointment
            </a>
          </div>

          <div className="md:hidden flex items-center gap-3 z-50">
            <a href="tel:+918019426972" className="p-2 text-health-blue bg-blue-50 rounded-full hover:bg-blue-100 transition-colors">
              <Phone size={18} />
            </a>
            <button onClick={handleWhatsApp} className="p-2 text-[#25D366] bg-emerald-50 rounded-full hover:bg-emerald-100 transition-colors">
              <MessageCircle size={18} />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-health-blue focus:outline-none p-1">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMenu}
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 md:hidden shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-slate-100">
                <span className="font-bold text-lg text-health-blue">Menu</span>
                <button onClick={closeMenu} className="p-2 text-slate-500 hover:text-health-blue rounded-full hover:bg-slate-50">
                  <X size={24} />
                </button>
              </div>
              <div className="px-6 py-8 space-y-4 flex-1 overflow-y-auto">
                <a href="#about" onClick={closeMenu} className="block text-lg font-semibold text-slate-700 hover:text-health-blue transition-colors">About Us</a>
                <div className="w-full h-px bg-slate-100"></div>
                <a href="#services" onClick={closeMenu} className="block text-lg font-semibold text-slate-700 hover:text-health-blue transition-colors">Services</a>
                <div className="w-full h-px bg-slate-100"></div>
                <a href="#reports" onClick={closeMenu} className="block text-lg font-semibold text-slate-700 hover:text-health-blue transition-colors">Reports</a>
                <div className="w-full h-px bg-slate-100"></div>
                <a href="#contact" onClick={closeMenu} className="block text-lg font-semibold text-slate-700 hover:text-health-blue transition-colors">Contact</a>
              </div>
              <div className="p-6 border-t border-slate-100 bg-slate-50">
                <a href="#book" onClick={closeMenu} className="block w-full text-center bg-health-blue text-white px-6 py-4 rounded-xl font-bold shadow-md hover:bg-health-blue/90 active:scale-95 transition-all">
                  Book Appointment
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

import { Activity, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" onClick={handleLogoClick} className="flex items-center gap-2 cursor-pointer">
            <div className="bg-health-blue text-white p-2 rounded-lg">
              <Activity size={24} />
            </div>
            <span className="font-bold text-xl text-health-blue">CarePlus Diagnostics</span>
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

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-health-blue focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-4 pt-2 pb-6 space-y-3">
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-health-blue hover:bg-slate-50">About Us</a>
            <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-health-blue hover:bg-slate-50">Services</a>
            <a href="#reports" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-health-blue hover:bg-slate-50">Reports</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-health-blue hover:bg-slate-50">Contact</a>
            <a href="#book" className="block w-full text-center mt-4 bg-health-blue text-white px-6 py-3 rounded-full font-medium hover:bg-health-blue/90">
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

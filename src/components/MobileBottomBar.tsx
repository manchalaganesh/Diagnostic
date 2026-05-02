import { Phone, Calendar, MessageCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const MobileBottomBar = () => {
  const location = useLocation();
  
  // Hide on admin routes
  if (location.pathname.startsWith('/admin')) {
    return null;
  }

  const handleWhatsApp = () => {
    const message = "Hello, I want to book a diagnostic test.";
    window.open(`https://wa.me/918019426972?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] pb-safe">
      <div className="flex items-center justify-around p-2">
        <a 
          href="tel:+918019426972" 
          className="flex flex-col items-center justify-center p-2 text-slate-600 hover:text-health-blue transition-colors active:scale-95 w-1/3"
        >
          <div className="bg-blue-50 p-2 rounded-full mb-1">
            <Phone size={20} className="text-health-blue" />
          </div>
          <span className="text-[10px] font-medium">Call Us</span>
        </a>
        
        <button 
          onClick={handleWhatsApp}
          className="flex flex-col items-center justify-center p-2 text-slate-600 hover:text-[#25D366] transition-colors active:scale-95 w-1/3"
        >
          <div className="bg-emerald-50 p-2 rounded-full mb-1">
            <MessageCircle size={20} className="text-[#25D366]" />
          </div>
          <span className="text-[10px] font-medium">WhatsApp</span>
        </button>
        
        <a 
          href="#book" 
          className="flex flex-col items-center justify-center p-2 text-health-blue w-1/3 active:scale-95 transition-transform"
        >
          <div className="bg-health-blue text-white p-3 rounded-full mb-1 shadow-lg shadow-health-blue/30 -mt-6 ring-4 ring-white">
            <Calendar size={24} />
          </div>
          <span className="text-[11px] font-bold">Book Now</span>
        </a>
      </div>
    </div>
  );
};

export default MobileBottomBar;

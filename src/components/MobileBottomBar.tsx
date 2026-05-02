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
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-100 shadow-[0_-8px_20px_-10px_rgba(0,0,0,0.1)] pb-safe">
      <div className="flex items-center justify-between p-2 gap-2 max-w-md mx-auto">
        <a 
          href="tel:+918019426972" 
          className="flex-1 flex flex-col items-center justify-center py-2.5 px-1 rounded-xl bg-slate-50 text-health-blue hover:bg-blue-50 active:scale-95 transition-all duration-200"
        >
          <Phone size={20} className="mb-1" />
          <span className="text-[11px] font-semibold">Call Us</span>
        </a>
        
        <button 
          onClick={handleWhatsApp}
          className="flex-1 flex flex-col items-center justify-center py-2.5 px-1 rounded-xl bg-slate-50 text-[#25D366] hover:bg-emerald-50 active:scale-95 transition-all duration-200"
        >
          <MessageCircle size={20} className="mb-1" />
          <span className="text-[11px] font-semibold">WhatsApp</span>
        </button>
        
        <a 
          href="#book" 
          className="flex-1 flex flex-col items-center justify-center py-2.5 px-1 rounded-xl bg-health-blue text-white shadow-md shadow-health-blue/20 hover:bg-health-blue/90 active:scale-95 transition-all duration-200"
        >
          <Calendar size={20} className="mb-1" />
          <span className="text-[11px] font-bold">Book Test</span>
        </a>
      </div>
    </div>
  );
};

export default MobileBottomBar;

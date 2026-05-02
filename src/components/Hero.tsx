import { ArrowRight, FileText, Activity } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 to-emerald-50"></div>
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-health-lightBlue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-health-green/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-health-lightBlue/10 text-health-blue font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-health-lightBlue animate-pulse"></span>
              Trusted by 10,000+ Patients
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Accurate Diagnostics for <span className="text-health-blue">Better Health</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Fast, Reliable & Affordable Medical Testing Services. Get your health checked with state-of-the-art technology and experienced medical professionals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full max-w-md mx-auto lg:mx-0">
              <a href="#book" className="flex items-center justify-center gap-2 w-full sm:w-auto bg-health-blue text-white px-8 py-3.5 rounded-full font-semibold text-lg hover:bg-health-blue/90 shadow-lg hover:shadow-xl hover:-translate-y-1 smooth-transition">
                Book Appointment
                <ArrowRight size={20} />
              </a>
              
              <a href="#reports" className="flex items-center justify-center gap-2 w-full sm:w-auto bg-white text-health-blue border-2 border-health-blue/20 px-8 py-3.5 rounded-full font-semibold text-lg hover:border-health-blue hover:bg-slate-50 shadow-md hover:shadow-lg hover:-translate-y-1 smooth-transition">
                <FileText size={20} />
                View Reports
              </a>
            </div>
            
            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-8">
              <div className="flex flex-col items-center sm:items-start w-1/3 sm:w-auto">
                <span className="text-2xl sm:text-3xl font-bold text-slate-900">24h</span>
                <span className="text-xs sm:text-sm text-slate-500 font-medium text-center sm:text-left">Report Delivery</span>
              </div>
              <div className="hidden sm:block w-px h-12 bg-slate-200"></div>
              <div className="flex flex-col items-center sm:items-start w-1/3 sm:w-auto">
                <span className="text-2xl sm:text-3xl font-bold text-slate-900">50+</span>
                <span className="text-xs sm:text-sm text-slate-500 font-medium text-center sm:text-left">Tests</span>
              </div>
              <div className="hidden sm:block w-px h-12 bg-slate-200"></div>
              <div className="flex flex-col items-center sm:items-start w-1/3 sm:w-auto">
                <span className="text-2xl sm:text-3xl font-bold text-slate-900">99%</span>
                <span className="text-xs sm:text-sm text-slate-500 font-medium text-center sm:text-left">Accuracy</span>
              </div>
            </div>
          </div>
          
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Replace with actual image later or leave as placeholder space styled attractively */}
              <img 
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Medical Laboratory Professional" 
                loading="lazy"
                className="w-full h-auto object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white p-3 sm:p-4 rounded-xl shadow-xl flex items-center gap-3 sm:gap-4 animate-bounce" style={{animationDuration: '3s'}}>
              <div className="bg-health-green/10 p-2 sm:p-3 rounded-full text-health-green">
                <Activity className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">Home Collection</p>
                <p className="text-base sm:text-lg font-bold text-slate-900">Available Now</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;

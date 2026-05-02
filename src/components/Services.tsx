import { 
  Droplet, 
  Activity, 
  HeartPulse, 
  Scan, 
  Stethoscope, 
  Syringe, 
  FlaskConical, 
  Home 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Blood Tests",
      description: "Complete blood count and specialized blood work.",
      icon: <Droplet className="w-8 h-8" />,
      color: "text-red-500",
      bg: "bg-red-50"
    },
    {
      title: "Full Body Checkup",
      description: "Comprehensive health screening packages.",
      icon: <Activity className="w-8 h-8" />,
      color: "text-health-blue",
      bg: "bg-blue-50"
    },
    {
      title: "ECG / Heart Checkup",
      description: "Advanced cardiac monitoring and diagnostics.",
      icon: <HeartPulse className="w-8 h-8" />,
      color: "text-rose-500",
      bg: "bg-rose-50"
    },
    {
      title: "X-Ray",
      description: "High-resolution digital X-ray imaging.",
      icon: <Scan className="w-8 h-8" />,
      color: "text-slate-600",
      bg: "bg-slate-100"
    },
    {
      title: "Ultrasound Scan",
      description: "Detailed sonography for various conditions.",
      icon: <Stethoscope className="w-8 h-8" />,
      color: "text-purple-500",
      bg: "bg-purple-50"
    },
    {
      title: "Diabetes Test",
      description: "Fasting, PP, and HbA1c screening.",
      icon: <Syringe className="w-8 h-8" />,
      color: "text-amber-500",
      bg: "bg-amber-50"
    },
    {
      title: "Thyroid Test",
      description: "T3, T4, and TSH profile testing.",
      icon: <FlaskConical className="w-8 h-8" />,
      color: "text-health-green",
      bg: "bg-emerald-50"
    },
    {
      title: "Home Sample Collection",
      description: "Safe and hygienic testing from your home.",
      icon: <Home className="w-8 h-8" />,
      color: "text-indigo-500",
      bg: "bg-indigo-50"
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-health-blue/10 text-health-blue font-semibold text-sm mb-4">
            OUR SERVICES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Comprehensive Diagnostic Services
          </h2>
          <p className="text-slate-600 text-lg">
            We offer a wide range of medical tests and screenings using state-of-the-art equipment to ensure the highest accuracy.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 smooth-transition group cursor-pointer"
            >
              <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-5 sm:mb-6 ${service.bg} ${service.color} group-hover:scale-110 smooth-transition`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-health-blue smooth-transition">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#book" className="text-health-blue font-medium text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 smooth-transition -translate-x-2 group-hover:translate-x-0">
                Book Test Now <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <a href="#services-full" className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-8 py-3 rounded-full font-semibold hover:border-health-blue hover:text-health-blue shadow-sm hover:shadow-md smooth-transition">
            View All Services
          </a>
        </div>

      </div>
    </section>
  );
};

import { ArrowRight } from 'lucide-react';

export default Services;

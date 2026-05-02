import { CheckCircle2, Microscope, Clock, BadgeDollarSign } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Microscope className="w-6 h-6 text-health-blue" />,
      title: "Advanced Equipment",
      description: "State-of-the-art diagnostic machinery ensuring precision."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-health-blue" />,
      title: "Certified Lab Experts",
      description: "Highly qualified pathologsits and technicians."
    },
    {
      icon: <Clock className="w-6 h-6 text-health-blue" />,
      title: "Quick Report Delivery",
      description: "Get your accurate reports within 24 hours."
    },
    {
      icon: <BadgeDollarSign className="w-6 h-6 text-health-blue" />,
      title: "Affordable Pricing",
      description: "Quality healthcare that doesn't break the bank."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Modern Laboratory" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-health-green/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-health-blue/10 rounded-full blur-xl"></div>
            
            <div className="absolute bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-health-blue/10 p-3 rounded-full">
                  <CheckCircle2 className="w-8 h-8 text-health-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-2xl">ISO</h4>
                  <p className="text-sm text-slate-500 font-medium">Certified Lab</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-health-blue/10 text-health-blue font-semibold text-sm mb-4">
              ABOUT US
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Committed to Excellence in <span className="text-health-blue">Medical Diagnostics</span>
            </h2>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              At CarePlus Diagnostics, we believe that accurate diagnosis is the first step towards better health. Our facility is equipped with the latest technology to provide you with fast and reliable test results.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 bg-blue-50 p-3 rounded-xl">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-slate-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <a href="#about-more" className="text-health-blue font-semibold flex items-center gap-2 hover:gap-3 smooth-transition">
                Learn more about our facility <CheckCircle2 size={20} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

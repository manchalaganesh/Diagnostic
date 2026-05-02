import { ShieldCheck, UserCog, Clock, Sparkles, Download, Headset } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-7 h-7 text-white" />,
      title: "Accurate Results",
      description: "Multiple quality checks ensure 99.9% accuracy in all our diagnostic reports."
    },
    {
      icon: <UserCog className="w-7 h-7 text-white" />,
      title: "Experienced Doctors",
      description: "Our team consists of veteran pathologists and skilled technicians."
    },
    {
      icon: <Clock className="w-7 h-7 text-white" />,
      title: "Same Day Reports",
      description: "Get your routine test reports delivered on the very same day."
    },
    {
      icon: <Sparkles className="w-7 h-7 text-white" />,
      title: "Hygienic Lab",
      description: "We maintain strict hygiene and sanitization protocols at all times."
    },
    {
      icon: <Download className="w-7 h-7 text-white" />,
      title: "Online Reports",
      description: "Easily download and share your reports securely from our portal."
    },
    {
      icon: <Headset className="w-7 h-7 text-white" />,
      title: "24/7 Support",
      description: "Our dedicated support team is always available to assist you."
    }
  ];

  return (
    <section className="py-20 bg-health-blue text-white overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-health-green/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose CarePlus Diagnostics?
          </h2>
          <p className="text-blue-100 text-lg">
            We are committed to providing the highest quality diagnostic services with a patient-first approach.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 smooth-transition"
            >
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-blue-100 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;

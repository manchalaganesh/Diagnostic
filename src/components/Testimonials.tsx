import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "I've been going to CarePlus for all my family's routine checkups. Their service is incredibly fast, and the staff is very polite. The online report download feature saves me a trip!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "The home sample collection was a lifesaver when my father couldn't travel. The phlebotomist arrived right on time, followed all hygiene protocols, and we got the reports by evening.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "Very clean facility with the latest equipment. I had my ultrasound done here, and the doctor took the time to explain everything to me. Highly recommend their services.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-health-blue/10 text-health-blue font-semibold text-sm mb-4">
            TESTIMONIALS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-slate-600 text-lg">
            Don't just take our word for it. Read about the experiences of people who trust us with their health.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-3xl relative">
              <Quote className="absolute top-6 right-8 text-health-blue/10 w-16 h-16" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-slate-700 leading-relaxed mb-8 relative z-10 italic">
                "{review.content}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <p className="text-sm text-slate-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;

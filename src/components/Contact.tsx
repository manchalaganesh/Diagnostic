import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-health-blue/10 text-health-blue font-semibold text-sm mb-4">
            CONTACT US
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-slate-600 text-lg">
            We're here to help and answer any question you might have. We look forward to hearing from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-blue-50 text-health-blue rounded-full flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Our Location</h4>
                  <p className="text-slate-600 leading-relaxed">
                    123 Healthcare Avenue, Medical District<br/>
                    New York, NY 10001
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-emerald-50 text-health-green rounded-full flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Phone Number</h4>
                  <p className="text-slate-600 mb-1">+91 80194 26972</p>
                  <p className="text-slate-600">+91 80194 26973 (Emergency)</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email Address</h4>
                  <p className="text-slate-600 mb-1">info@careplus.com</p>
                  <p className="text-slate-600">support@careplus.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Working Hours</h4>
                  <p className="text-slate-600 mb-1">Monday - Saturday: 7:00 AM - 9:00 PM</p>
                  <p className="text-slate-600">Sunday: 8:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-100">
              <a 
                href="https://wa.me/918019426972" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#20bd5a] shadow-md hover:shadow-lg smooth-transition"
              >
                <MessageCircle size={24} />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white p-2 rounded-3xl shadow-lg h-[400px] lg:h-auto overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215570220677!2d-73.98782398459384!3d40.75704157932688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1689623588975!5m2!1sen!2sus" 
              className="w-full h-full rounded-2xl border-0"
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

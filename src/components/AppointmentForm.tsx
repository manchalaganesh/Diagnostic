import { Calendar, Mail, MessageSquare, Phone, User, Stethoscope, Clock, MapPin, Loader2 } from 'lucide-react';
import { useState } from 'react';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    test: '',
    date: '',
    time: '',
    address: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission & validation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // WhatsApp message formatting
      const phoneNumber = "918019426972";
      const message = `Hello, I want to book a diagnostic test.
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Test: ${formData.test}
Date: ${formData.date}
Time: ${formData.time}
Address: ${formData.address || 'N/A'}
Message: ${formData.message || 'N/A'}

Please confirm my appointment.`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');

      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        test: '',
        date: '',
        time: '',
        address: '',
        message: ''
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="book" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-health-blue/10 text-health-blue font-semibold text-sm mb-4">
              BOOK AN APPOINTMENT
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Schedule Your Test Today
            </h2>
            <p className="text-slate-600 mb-8 text-lg">
              Booking a test with CarePlus Diagnostics is quick and easy. Fill out the form, and our representative will contact you to confirm your appointment.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-health-green/10 p-3 rounded-full text-health-green shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Call Us Directly</h4>
                  <p className="text-slate-600 text-sm mb-1">Available 24/7 for urgent bookings</p>
                  <a href="tel:+918019426972" className="text-health-blue font-semibold text-lg hover:underline">+91 80194 26972</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-full text-health-blue shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Us</h4>
                  <p className="text-slate-600 text-sm mb-1">For general inquiries</p>
                  <a href="mailto:info@careplus.com" className="text-health-blue font-semibold text-lg hover:underline">info@careplus.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Book Online</h3>
            
            {isSubmitted ? (
              <div className="bg-health-green/10 text-health-green border border-health-green/20 rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-health-green/20 rounded-full mb-4">
                  <span className="text-2xl">✓</span>
                </div>
                <h4 className="text-xl font-bold mb-2">Appointment Requested!</h4>
                <p className="text-sm">We have received your details. Our team will call you shortly to confirm.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name" 
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-health-blue focus:ring-2 focus:ring-health-blue/20 outline-none smooth-transition bg-slate-50"
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number" 
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-health-blue focus:ring-2 focus:ring-health-blue/20 outline-none smooth-transition bg-slate-50"
                    />
                  </div>
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address" 
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-health-blue focus:ring-2 focus:ring-health-blue/20 outline-none smooth-transition bg-slate-50"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <select 
                      name="test"
                      required
                      value={formData.test}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-health-blue focus:ring-2 focus:ring-health-blue/20 outline-none smooth-transition bg-slate-50 appearance-none text-slate-600"
                    >
                      <option value="" disabled>Select Test</option>
                      <option value="blood">Blood Test</option>
                      <option value="body">Full Body Checkup</option>
                      <option value="ecg">ECG / Heart</option>
                      <option value="xray">X-Ray</option>
                      <option value="ultrasound">Ultrasound Scan</option>
                      <option value="diabetes">Diabetes Test</option>
                      <option value="thyroid">Thyroid Test</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input 
                      type="date" 
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-health-blue focus:ring-2 focus:ring-health-blue/20 outline-none smooth-transition bg-slate-50 text-slate-600"
                    />
                  </div>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input 
                      type="time" 
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-health-blue focus:ring-2 focus:ring-health-blue/20 outline-none smooth-transition bg-slate-50 text-slate-600"
                    />
                  </div>
                </div>

                <div className="relative">
                  <MapPin className="absolute left-3 top-4 text-slate-400 w-5 h-5" />
                  <textarea 
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Home Address (Optional - For Home Collection)" 
                    rows={2}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-health-blue focus:ring-2 focus:ring-health-blue/20 outline-none smooth-transition bg-slate-50 resize-none"
                  ></textarea>
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 text-slate-400 w-5 h-5" />
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Additional Message or Symptoms" 
                    rows={3}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-health-blue focus:ring-2 focus:ring-health-blue/20 outline-none smooth-transition bg-slate-50 resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full flex justify-center items-center gap-2 bg-health-blue text-white py-4 rounded-xl font-bold text-lg hover:bg-health-blue/90 shadow-md hover:shadow-lg smooth-transition disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Confirm Appointment"
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;

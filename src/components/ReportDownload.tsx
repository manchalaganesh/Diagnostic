import { FileText, Download, Lock } from 'lucide-react';
import { useState } from 'react';

const ReportDownload = () => {
  const [identifier, setIdentifier] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState('');

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (identifier.length < 5) {
      setError('Please enter a valid Mobile Number or Report ID');
      return;
    }
    
    setError('');
    setIsSearching(true);
    
    // Simulate searching and erroring since it's a mockup
    setTimeout(() => {
      setIsSearching(false);
      setError('No reports found for this identifier. Please check and try again.');
    }, 1500);
  };

  return (
    <section id="reports" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-5 h-full">
            
            <div className="md:col-span-2 bg-health-blue p-10 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-16 -mr-16 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
              
              <FileText className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">View Your Reports Online</h3>
              <p className="text-blue-100 mb-8">
                Access your test results securely from anywhere. Reports are available for 6 months from the date of testing.
              </p>
              
              <div className="flex items-center gap-2 text-sm text-blue-200 mt-auto">
                <Lock size={16} />
                <span>256-bit Secure Connection</span>
              </div>
            </div>

            <div className="md:col-span-3 p-10">
              <h4 className="text-xl font-bold text-slate-900 mb-6">Download Report</h4>
              
              <form onSubmit={handleDownload}>
                <div className="mb-6">
                  <label htmlFor="identifier" className="block text-sm font-medium text-slate-700 mb-2">
                    Mobile Number / Report ID
                  </label>
                  <input 
                    type="text" 
                    id="identifier"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder="e.g. 9876543210 or RPT-12345"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-health-blue focus:ring-2 focus:ring-health-blue/20 outline-none smooth-transition bg-slate-50"
                  />
                  {error && (
                    <p className="mt-2 text-sm text-red-500">{error}</p>
                  )}
                </div>

                <button 
                  type="submit" 
                  disabled={isSearching}
                  className="w-full flex items-center justify-center gap-2 bg-health-blue text-white py-3.5 rounded-xl font-bold hover:bg-health-blue/90 shadow-md smooth-transition disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSearching ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  ) : (
                    <>
                      <Download size={20} />
                      Download Report
                    </>
                  )}
                </button>
              </form>

              <div className="mt-8 text-center border-t border-slate-100 pt-6">
                <p className="text-sm text-slate-500">
                  Having trouble finding your report? <br/>
                  <a href="#contact" className="text-health-blue font-semibold hover:underline">Contact Support</a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportDownload;

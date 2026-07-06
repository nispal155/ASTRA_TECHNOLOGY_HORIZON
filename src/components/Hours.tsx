import { MapPin, Clock, CalendarDays } from 'lucide-react';

export default function Hours() {
  return (
    <section id="location-hours" className="py-24 bg-white dark:bg-brand-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Location Info */}
          <div className="flex-1 w-full lg:pr-12">
            <h2 className="text-brand-accent font-semibold tracking-wide uppercase text-sm mb-3">Visit Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-text dark:text-white mb-6">Headquarters & Operations</h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Our central office is located in the heart of Itahari, positioned to serve forward-thinking businesses across Nepal and globally. 
              Drop by for a consultation on your next digital transformation project.
            </p>
            
            <div className="flex items-start gap-4 p-6 bg-brand-light-slate dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700">
              <div className="mt-1 bg-white dark:bg-brand-primary p-3 rounded-full shadow-sm">
                <MapPin className="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-brand-text dark:text-white mb-1">Astra Technology Horizon <span className="inline-block animate-bounce relative top-1">🇳🇵</span></h4>
                <p className="text-slate-600 dark:text-slate-300">Itahari-4, Sunsari</p>
                <p className="text-slate-600 dark:text-slate-300">Koshi Province, Nepal</p>
              </div>
            </div>
          </div>
          
          {/* Hours Card */}
          <div className="flex-1 w-full max-w-lg">
            <div className="bg-brand-primary rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden text-white">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Clock className="w-32 h-32" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/20">
                  <CalendarDays className="w-8 h-8 text-brand-accent" />
                  <h3 className="text-2xl font-bold">Business Hours</h3>
                </div>
                
                <ul className="space-y-6">
                  <li className="flex justify-between items-center group">
                    <span className="text-lg font-medium text-slate-300 group-hover:text-white transition-colors">Sunday – Thursday</span>
                    <span className="text-lg font-bold text-brand-accent">10:00 AM – 5:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center group">
                    <span className="text-lg font-medium text-slate-300 group-hover:text-white transition-colors">Friday</span>
                    <span className="text-lg font-bold text-brand-accent">10:00 AM – 2:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center group pt-2">
                    <span className="text-lg font-medium text-slate-400 group-hover:text-white transition-colors">Saturday</span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-white dark:bg-brand-primary/10 text-slate-300">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

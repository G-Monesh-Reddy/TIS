import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Award, ShieldCheck } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { siteData } from '../data/siteData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? siteData.testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === siteData.testimonials.length - 1 ? 0 : prev + 1));
  };

  const dignitaries = [
    {
      name: "Shri Anurag Tripathi Ji",
      designation: "Secretary, CBSE (Central Board of Secondary Education)",
      note: "Commended TIS for its state-of-the-art residential infrastructure and dedication to holistic child development."
    },
    {
      name: "Shri Ashok Kumar Ji",
      designation: "Former Director General of Police (DGP), Uttarakhand",
      note: "Applauded the disciplined campus culture, sports facilities, and comprehensive safety standards for students."
    },
    {
      name: "Shri Arvind Pandey Ji",
      designation: "Former Education Minister, Uttarakhand",
      note: "Recognized TIS's commitment to blending modern technological education with enduring cultural roots."
    }
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Voices of Trust"
          title="Loved by Parents Across India & Abroad"
          subtitle="Read firsthand experiences from families who chose TIS Dehradun for their children's foundational boarding education."
        />

        {/* Testimonials Carousel / Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {siteData.testimonials.slice(0, 3).map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-amber-500/20 mb-4" />
                <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-amber-500/40"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {item.relation}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dignitary Endorsements Strip */}
        <div className="mt-16 p-8 rounded-3xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 mb-6">
            <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-500">
              <Award className="w-4 h-4" />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Institutional Endorsements & Eminent Visitors
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dignitaries.map((dig) => (
              <div key={dig.name} className="p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60">
                <h5 className="font-bold text-sm text-slate-900 dark:text-white">{dig.name}</h5>
                <p className="text-[11px] font-semibold text-amber-600 dark:text-amber-400 mt-0.5">{dig.designation}</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  "{dig.note}"
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

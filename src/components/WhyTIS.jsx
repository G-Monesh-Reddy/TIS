import { motion } from 'framer-motion';
import { Sparkles, Trophy, HeartHandshake, Globe, Trees, ShieldCheck, Check } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { siteData } from '../data/siteData';

export default function WhyTIS() {
  const iconMap = {
    Sparkles: Sparkles,
    Trophy: Trophy,
    HeartHandshake: HeartHandshake,
    Globe: Globe,
    Trees: Trees,
    ShieldCheck: ShieldCheck
  };

  return (
    <section id="why-tis" className="py-20 md:py-28 bg-slate-100/70 dark:bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Why Choose TIS Dehradun"
          title="Designed for Holistic Character, Not Merely Test Scores"
          subtitle="Discover what distinguishes Tula's International School as Uttarakhand's most coveted co-ed residential sanctuary for forward-thinking families."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {siteData.differentiators.map((diff, index) => {
            const Icon = iconMap[diff.icon] || Sparkles;
            return (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-white dark:bg-[#0c1424] border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-amber-500/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                    {diff.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {diff.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center text-xs font-semibold text-amber-600 dark:text-amber-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2" />
                  <span>The TIS Advantage</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Holistic Gurukul Daily Schedule Preview / Feature Banner */}
        <div className="mt-16 p-8 md:p-10 rounded-3xl bg-gradient-to-r from-[#0d1b2a] via-[#102a43] to-[#0d1b2a] text-white border border-slate-700/60 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs uppercase font-extrabold tracking-widest text-amber-400">
                A Day in the Life of a TIS Boarder
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold mt-2">
                Morning Yoga, Academic Mastery, Olympic Sports & Evening Study Circles
              </h3>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                Every minute is structured to nurture physical fitness, mental calm, intellectual focus, and meaningful camaraderie without the distractions of excessive screen time.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="#admissions"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all duration-200"
              >
                Schedule a Campus Visit
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

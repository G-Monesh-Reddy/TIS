import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Trophy, ArrowRight, Eye } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { siteData } from '../data/siteData';

export default function Facilities() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Sports', 'Aquatics', 'Precision Sports', 'Campus Life'];

  const filteredFacilities = filter === 'All'
    ? siteData.facilities
    : siteData.facilities.filter(item => item.category === filter);

  return (
    <section id="facilities" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Olympic-Standard Infrastructure"
          title="World-Class Facilities Across 22 Green Acres"
          subtitle="Explore our sprawling sports arenas, residential dorms, and learning hubs designed to offer students every opportunity to discover and excel in their passions."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                filter === cat
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Facilities Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredFacilities.map((facility) => (
              <motion.div
                layout
                key={facility.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all duration-300 aspect-[4/5] flex flex-col justify-end"
              >
                {/* Background Image */}
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = '/images/campus-residential.jpg';
                  }}
                />
                
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent group-hover:via-slate-950/60 transition-colors duration-300" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-2.5 py-1 rounded-lg text-[10px] uppercase font-bold tracking-wider bg-slate-950/80 backdrop-blur-md text-amber-400 border border-white/10">
                    {facility.tag}
                  </span>
                </div>

                {/* Bottom Content / Hover Reveal */}
                <div className="relative z-10 p-5 text-white">
                  <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider block mb-1">
                    {facility.category}
                  </span>
                  <h3 className="text-lg font-bold leading-tight group-hover:text-amber-300 transition-colors">
                    {facility.name}
                  </h3>
                  <p className="mt-2 text-xs text-slate-300 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                    {facility.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 360 Virtual Tour CTA Card */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center flex-shrink-0">
              <Eye className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Can't Visit in Person Right Now?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Take our high-definition 360° virtual campus tour from the comfort of your home.
              </p>
            </div>
          </div>
          <a
            href={siteData.contact.virtualTourUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-amber-500 text-xs sm:text-sm font-semibold text-slate-800 dark:text-white hover:text-amber-500 text-center transition-colors"
          >
            Launch 360° Virtual Tour
          </a>
        </div>

      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Sparkles, Music, Palette, Flame, Compass } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { siteData } from '../data/siteData';

export default function StudentLife() {
  return (
    <section id="life-at-tis" className="py-20 md:py-28 bg-slate-100/70 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Beyond Academics"
          title="Life at TIS: Creativity, Expression & Unbounded Adventure"
          subtitle="From pottery wheels and classical Kathak mudras to Himalayan treks and karate belt gradings, our students cultivate balanced, creative, and resilient personalities."
        />

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-12">
          
          {/* Card 1: Performing Arts (Large 7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl min-h-[340px] md:min-h-[420px] flex flex-col justify-end p-8"
          >
            <img
              src="/images/activity-dance.webp"
              alt="Dance and Performing Arts at TIS"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            
            <div className="relative z-10 text-white">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500 text-slate-950 mb-3">
                Performing Arts Academy
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                Classical Indian & Western Dance
              </h3>
              <p className="mt-2 text-sm text-slate-300 max-w-xl leading-relaxed">
                Kathak, Contemporary, and Hip-Hop instruction under seasoned choreographers preparing students for national cultural fests and youth theater productions.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Pottery & Fine Arts (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-5 group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl min-h-[340px] md:min-h-[420px] flex flex-col justify-end p-8"
          >
            <img
              src="/images/activity-pottery.webp"
              alt="Pottery and Ceramic Studio at TIS"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            
            <div className="relative z-10 text-white">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-3">
                Fine Arts & Sculpture
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold leading-tight">
                Pottery & Ceramic Wheel Studio
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Tactile mindfulness and sculptural craft. Students learn ceramic wheel molding, clay sculpting, and glaze firing.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Martial Arts & Karate (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5 group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl min-h-[340px] md:min-h-[400px] flex flex-col justify-end p-8"
          >
            <img
              src="/images/activity-karate.webp"
              alt="Karate and Martial Arts at TIS"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            
            <div className="relative z-10 text-white">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-3">
                Discipline & Defense
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold leading-tight">
                Karate & Taekwondo Dojo
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Instilling self-defense, focus, emotional fortitude, and martial belt progression under qualified NIS black-belt instructors.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Horse Riding & Polo (Large 7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="md:col-span-7 group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl min-h-[340px] md:min-h-[400px] flex flex-col justify-end p-8"
          >
            <img
              src="/images/activity-polo.webp"
              alt="Horse Riding and Polo Arena at TIS"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            
            <div className="relative z-10 text-white">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500 text-slate-950 mb-3">
                Heritage Equestrian Sport
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                Equestrian Excellence & Polo
              </h3>
              <p className="mt-2 text-sm text-slate-300 max-w-xl leading-relaxed">
                TIS is among the select few boarding schools in India offering equestrian riding, trotting, show-jumping, and polo on dedicated groomed grounds.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

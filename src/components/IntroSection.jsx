import { motion } from 'framer-motion';
import { Award, Compass, Heart, Shield, Sparkles, CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { siteData } from '../data/siteData';

export default function IntroSection() {
  const pillars = [
    {
      icon: Compass,
      title: "Mind (Intellect & Rigor)",
      desc: "Comprehensive CBSE curriculum empowered by inquiry, research labs, STEM robotics, and individual mentorship."
    },
    {
      icon: Shield,
      title: "Body (Strength & Fitness)",
      desc: "15+ Olympic sports, rigorous physical training, yoga, horse riding, and balanced organic dining for athletic vigor."
    },
    {
      icon: Heart,
      title: "Soul (Character & Compassion)",
      desc: "Grounded in timeless Gurukul ideals of mindfulness, respect for mentors, empathy, and environmental stewardship."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative bg-slate-100/60 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="The Modern Gurukul Philosophy"
          title="Nurturing Mind, Body & Soul in the Foothills of Dehradun"
          subtitle="Founded under the aegis of Rishabh Educational Trust, Tula's International School reimagines ancient Indian residential schooling for the 21st-century global citizen."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-12">
          
          {/* Left Column: Image Composition & Ranking Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 bg-slate-950 aspect-[4/3]">
              <img
                src="/images/campus-uttarakhand.jpg"
                alt="Tula's International School Campus in Uttarakhand"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="p-1 rounded-md bg-amber-500 text-slate-950">
                    <Award className="w-4 h-4" />
                  </span>
                  <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
                    EducationWorld & Education Today Rankings
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold">
                  Recognized among the Top 10 Co-Ed Boarding Schools in India
                </h3>
              </div>
            </div>

            {/* Overlapping Accreditation Chip */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl flex items-center gap-3">
              <img
                src="/images/award-iayp.jpg"
                alt="IAYP International Award for Young People"
                className="w-12 h-12 object-contain rounded-lg"
              />
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white">IAYP Member</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Duke of Edinburgh's Award</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & 3 Gurukul Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-center space-y-6"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-snug">
                An Educational Sanctuary Built for Compassionate Global Leaders
              </h3>
              <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                At TIS, we believe high academic scores mean little without character, discipline, and emotional balance. Our residential ecosystem surrounds young minds with clean mountain air, dedicated mentor teachers living on campus, and rich multi-disciplinary exposure.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 shadow-xs hover:border-amber-500/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center flex-shrink-0">
                    <pillar.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {pillar.title}
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick stats grid */}
            <div className="grid grid-cols-3 gap-3 pt-4">
              <div className="p-3.5 rounded-xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20 text-center">
                <span className="block text-2xl font-black text-amber-600 dark:text-amber-400">12+</span>
                <span className="text-[11px] font-medium text-slate-600 dark:text-slate-400">Years of Legacy</span>
              </div>
              <div className="p-3.5 rounded-xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20 text-center">
                <span className="block text-2xl font-black text-amber-600 dark:text-amber-400">1:8</span>
                <span className="text-[11px] font-medium text-slate-600 dark:text-slate-400">Teacher Ratio</span>
              </div>
              <div className="p-3.5 rounded-xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20 text-center">
                <span className="block text-2xl font-black text-amber-600 dark:text-amber-400">22</span>
                <span className="text-[11px] font-medium text-slate-600 dark:text-slate-400">Acre Campus</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

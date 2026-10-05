import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, BookOpenCheck, GraduationCap, CheckCircle, ArrowRight, Laptop, Award, Users } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { siteData } from '../data/siteData';
import Button from './Button';

export default function Academics({ onOpenAdmission }) {
  const [selectedProgram, setSelectedProgram] = useState(0);

  const icons = {
    Compass: Compass,
    BookOpenCheck: BookOpenCheck,
    GraduationCap: GraduationCap,
  };

  const academicFeatures = [
    {
      title: "Atal Tinkering Lab",
      desc: "NITI Aayog supported innovation lab with 3D printers, IoT kits, and robotics sensors.",
      icon: Laptop
    },
    {
      title: "Integrated Competitive Coaching",
      desc: "Synchronized JEE, NEET, CUET & SAT coaching by top national faculties alongside CBSE syllabus.",
      icon: Award
    },
    {
      title: "Global Mindler Career Advisory",
      desc: "Scientific psychometric assessment and comprehensive university application mentoring.",
      icon: Users
    }
  ];

  return (
    <section id="academics" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="CBSE Academic Architecture"
          title="From Foundational Curiosity to University Distinction"
          subtitle="A continuum of personalized learning, rigorous CBSE curriculum, and future-ready 21st-century competencies from Grade IV through Grade XII."
        />

        {/* 3 Stage Academic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {siteData.academicPrograms.map((program, idx) => {
            const IconComponent = icons[program.icon] || GraduationCap;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative flex flex-col justify-between p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:border-amber-500/50 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                      {program.stage}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 text-amber-500 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                    {program.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {program.subtitle}
                  </p>

                  <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800/80 space-y-2.5">
                    {program.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <button
                    onClick={onOpenAdmission}
                    className="w-full py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-500 dark:hover:border-amber-500 text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-amber-500 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Enquire for {program.stage}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Academic Innovation Highlights Bar */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl">
          {academicFeatures.map((feat, i) => (
            <div key={feat.title} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0">
                <feat.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">{feat.title}</h4>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

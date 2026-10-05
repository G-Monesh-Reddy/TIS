import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, FileText, CheckCircle2, Phone, Download, Calculator, HelpCircle } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Button from './Button';
import { siteData } from '../data/siteData';

export default function AdmissionsCTA({ onOpenAdmission }) {
  // Interactive Scholarship & Eligibility Estimator
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [studentScore, setStudentScore] = useState(85);
  const [category, setCategory] = useState('merit');

  const getEstimatedConcession = () => {
    if (category === 'defense') return 'Up to 15% Defense Concession';
    if (category === 'sibling') return '10% Sibling Concession';
    if (studentScore >= 95) return 'Up to 30% TSA Merit Scholarship';
    if (studentScore >= 90) return 'Up to 20% TSA Merit Scholarship';
    if (studentScore >= 80) return 'Up to 10% TSA Merit Scholarship';
    return 'Merit Assessment Required (TSA)';
  };

  return (
    <section id="admissions" className="py-20 md:py-28 relative bg-slate-900 text-white overflow-hidden">
      {/* Background Gradient Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Admissions 2025–26"
          title="Secure Your Child's Future at Uttarakhand's Top Boarding School"
          subtitle="Registrations are actively invited for Classes IV to IX & Class XI (Science, Commerce, Humanities). Limited seats per grade to preserve our 1:8 teacher-student ratio."
          className="text-white"
        />

        {/* 4 Step Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 mb-16">
          {siteData.admissionSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-slate-800/60 border border-slate-700/60 flex flex-col justify-between hover:border-amber-500/50 transition-colors"
            >
              <div>
                <span className="text-3xl font-black text-amber-400 font-mono block mb-4">
                  {step.step}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700/50 flex items-center gap-1.5 text-xs text-amber-400 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Simple & Transparent</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Conversion Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-amber-950/40 via-slate-800/80 to-slate-900 border border-amber-500/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Rolling Admissions & Scholarships</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Ready to Give Your Child the Gurukul Advantage?
            </h3>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Schedule an in-person campus walk-through or take the online TSA Scholarship assessment today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto flex-shrink-0">
            <Button
              size="lg"
              onClick={onOpenAdmission}
              className="w-full sm:w-auto shadow-xl shadow-amber-500/30"
            >
              Apply Online Now
            </Button>
            <button
              onClick={() => setCalculatorOpen(!calculatorOpen)}
              className="px-5 py-3.5 rounded-xl border border-slate-700 hover:border-amber-400 bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-sm font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-amber-400" />
              <span>Scholarship Estimator</span>
            </button>
          </div>
        </div>

        {/* Expandable Interactive Scholarship Estimator */}
        {calculatorOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 p-6 sm:p-8 rounded-3xl bg-slate-800 border border-amber-500/40 shadow-xl"
          >
            <div className="max-w-xl mx-auto text-center">
              <h4 className="text-xl font-bold text-white flex items-center justify-center gap-2">
                <Calculator className="w-5 h-5 text-amber-400" />
                <span>T.S.A. Scholarship & Concession Estimator</span>
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                TIS offers merit-based scholarships through Tula's Scholarship Assessment (TSA) plus sibling and defense concessions.
              </p>

              <div className="mt-6 space-y-4 text-left">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                    <span>Recent Academic Score / Percentage</span>
                    <span className="text-amber-400 font-bold">{studentScore}%</span>
                  </div>
                  <input
                    type="range"
                    min="60"
                    max="100"
                    value={studentScore}
                    onChange={(e) => setStudentScore(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Category Concession
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs"
                  >
                    <option value="merit">General / Academic Merit</option>
                    <option value="defense">Armed Forces / Defense Personnel</option>
                    <option value="sibling">Sibling Enrolled at TIS</option>
                  </select>
                </div>

                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-center">
                  <span className="text-xs text-slate-300 uppercase tracking-wider font-semibold block">
                    Estimated Scholarship Benefit
                  </span>
                  <span className="text-lg font-extrabold text-amber-400 mt-1 block">
                    {getEstimatedConcession()}
                  </span>
                  <span className="text-[11px] text-slate-400 mt-1 block">
                    *Subject to verification of TSA test score and authentic documentation.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}

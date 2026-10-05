import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Trophy, Shield, Play, MapPin } from 'lucide-react';
import Button from './Button';
import { siteData } from '../data/siteData';

export default function Hero({ onOpenAdmission }) {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-20 overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-amber-500/15 to-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Accreditation Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-700 dark:text-amber-400 text-xs font-semibold mb-6 shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Ranked #1 Boarding School in Uttarakhand</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 dark:text-white leading-[1.08]">
              The Modern Gurukul <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500">
                Where Ancient Values
              </span> <br />
              Meet Modern Excellence
            </h1>

            {/* Subtitle / Positioning Copy */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Tula's International School is Dehradun's premier CBSE co-educational residential boarding sanctuary for Classes IV to XII. We integrate timeless Gurukul character with futuristic STEM, 15+ Olympic sports, and pastoral care across 22 green acres.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Button
                size="lg"
                onClick={onOpenAdmission}
                className="w-full sm:w-auto shadow-lg shadow-amber-500/20"
              >
                Apply for 2025–26
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="#academics"
                icon={false}
                className="w-full sm:w-auto"
              >
                Explore Academics
              </Button>
              <a
                href={siteData.contact.virtualTourUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60"
              >
                <div className="w-7 h-7 rounded-full bg-amber-500/15 flex items-center justify-center text-amber-500">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>360° Virtual Tour</span>
              </a>
            </div>

            {/* Trust Highlights Strip */}
            <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-800/80 w-full grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <span className="block text-2xl font-black text-slate-900 dark:text-white">22+</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Acre Eco Campus</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-slate-900 dark:text-white">15+</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Olympic Sports</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-slate-900 dark:text-white">1:8</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Teacher Ratio</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-slate-900 dark:text-white">100%</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">CBSE Pass Record</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Layered Visual Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Main Featured Campus Visual */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-slate-900 aspect-[4/3] group">
              <img
                src="/images/campus-residential.jpg"
                alt="Tula's International School Campus in Dehradun"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

              {/* Campus Location Tag */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/10 text-white text-xs font-medium">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Dehradun, Uttarakhand</span>
              </div>

              {/* Bottom Caption on Image */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold block mb-1">
                  Residential Sanctuary
                </span>
                <p className="text-sm font-medium text-slate-200">
                  Fostering character, intellectual rigor & athletic mastery in the Shivalik foothills.
                </p>
              </div>
            </div>

            {/* Floating Trust Card 1: Equestrian & Sports */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 sm:-left-8 p-3.5 sm:p-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-xl flex items-center gap-3.5 max-w-[260px]"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center flex-shrink-0">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Equestrian Academy
                </h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">
                  Full Horse Riding & Polo arena with NIS certified masters
                </p>
              </div>
            </motion.div>

            {/* Floating Trust Card 2: Affiliation Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="hidden sm:flex absolute -top-5 -right-5 p-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-xl items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                <Shield className="w-4 h-4" />
              </div>
              <div className="text-left pr-2">
                <span className="block text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">CBSE Affiliated</span>
                <span className="text-xs font-bold text-slate-900 dark:text-white">Classes IV to XII</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

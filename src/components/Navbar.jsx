import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, GraduationCap, ChevronRight } from 'lucide-react';
import { siteData } from '../data/siteData';
import ThemeToggle from './ThemeToggle';
import Button from './Button';

export default function Navbar({ onOpenAdmission }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Top Admissions Announcement Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-1.5 px-4 border-b border-white/5 relative z-40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-medium text-slate-200">Admissions Open 2025–26</span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline text-amber-400 font-medium">Ranked #1 Boarding School in Uttarakhand</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${siteData.contact.helpline}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>Helpline: {siteData.contact.helpline}</span>
            </a>
            <span className="hidden md:inline text-slate-600">•</span>
            <a
              href={siteData.contact.virtualTourUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1 text-slate-300 hover:text-amber-400 transition-colors"
            >
              <span>360° Virtual Tour</span>
              <ChevronRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header / Sticky Navigation */}
      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/85 dark:bg-[#070d18]/85 backdrop-blur-md shadow-md border-b border-slate-200/80 dark:border-slate-800/80 py-3'
            : 'bg-white/40 dark:bg-[#070d18]/40 backdrop-blur-xs py-4 md:py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* School Logo & Brand Identity */}
            <a
              href="#hero"
              className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-amber-500 rounded-lg"
              aria-label="Tula's International School - Return to Homepage"
            >
              <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-slate-900 border border-amber-500/30 overflow-hidden shadow-sm">
                <img
                  src="/images/tis-logo.png"
                  alt="Tula's International School Crest"
                  className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextSibling.style.display = 'flex';
                  }}
                />
                <span className="hidden text-amber-400 font-black text-sm tracking-tighter items-center justify-center">
                  TIS
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base md:text-lg tracking-tight text-slate-950 dark:text-white leading-none">
                  Tula's International School
                </span>
                <span className="text-[10px] md:text-xs tracking-wider uppercase font-semibold text-amber-600 dark:text-amber-400 mt-1">
                  The Modern Gurukul • Dehradun
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {siteData.navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-1.5 text-xs xl:text-sm font-medium rounded-lg text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-slate-100/70 dark:hover:bg-slate-800/60 transition-colors duration-150"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              <Button
                size="sm"
                onClick={onOpenAdmission}
                className="shadow-sm"
              >
                Apply Now
              </Button>
            </div>

            {/* Mobile Actions: Theme Toggle & Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#070d18]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3"
            >
              <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
                {siteData.navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-amber-500/10 hover:text-amber-500 transition-colors"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>
                ))}
              </nav>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2">
                <Button
                  onClick={() => {
                    closeMobileMenu();
                    onOpenAdmission();
                  }}
                  className="w-full justify-center"
                >
                  Apply For Admission (2025–26)
                </Button>
                <a
                  href={`tel:${siteData.contact.helpline}`}
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-500" />
                  <span>Call Helpline: {siteData.contact.helpline}</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

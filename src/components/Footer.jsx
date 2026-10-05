import { Phone, Mail, MapPin, ArrowUp, ExternalLink, ShieldCheck } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Footer({ onOpenAdmission }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const policies = [
    { title: "Mandatory CBSE Disclosure", href: "https://tis.edu.in/" },
    { title: "Child Welfare & Safety Policy", href: "https://tis.edu.in/MandatoryPDF/childWelfarePolicy.pdf" },
    { title: "Mobile Phone Policy", href: "https://tis.edu.in/MandatoryPDF/MobilePhonePolicy.pdf" },
    { title: "Disciplinary Policy", href: "https://tis.edu.in/MandatoryPDF/DisciplinaryPolicy.pdf" },
    { title: "School Calendar 2024–25", href: "https://tis.edu.in/MandatoryPDF/TIS_CALENDAR_2024__PDF.pdf" },
    { title: "School Brochure", href: "https://tis.edu.in/MandatoryPDF/TIS_BROCHURE.pdf" }
  ];

  return (
    <footer className="bg-[#050b14] text-slate-400 text-xs border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* Background Decorative Accent */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-amber-500/30 flex items-center justify-center p-1 overflow-hidden">
                <img
                  src="/images/tis-footer-logo.png"
                  alt="Tula's International School Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = '/images/tis-logo.png';
                  }}
                />
              </div>
              <div>
                <span className="text-base font-extrabold text-white tracking-tight block">
                  Tula's International School
                </span>
                <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider block">
                  The Modern Gurukul • Dehradun
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Affiliated with CBSE, New Delhi. A premier co-educational residential boarding sanctuary in Dehradun fostering holistic intellectual, physical, and character excellence across 22 pollution-free acres.
            </p>

            <div className="pt-2 flex items-center gap-2">
              <span className="p-1 rounded bg-amber-500/10 text-amber-400">
                <ShieldCheck className="w-4 h-4" />
              </span>
              <span className="text-[11px] text-slate-300 font-semibold">
                Rishabh Educational Trust • Established 2012
              </span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              {siteData.navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-amber-400 transition-colors block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies & Disclosures (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Mandatory Policies
            </h4>
            <ul className="space-y-2">
              {policies.map((pol) => (
                <li key={pol.title}>
                  <a
                    href={pol.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5 py-0.5"
                  >
                    <span>{pol.title}</span>
                    <ExternalLink className="w-3 h-3 text-slate-600 flex-shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions Desk & CTA (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Admissions Helpline
            </h4>
            <div className="space-y-2">
              <a
                href={`tel:${siteData.contact.helpline}`}
                className="text-base font-extrabold text-amber-400 hover:text-amber-300 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>{siteData.contact.helpline}</span>
              </a>
              <a
                href={`mailto:${siteData.contact.email}`}
                className="text-xs text-slate-300 hover:text-amber-400 flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-amber-500" />
                <span>{siteData.contact.email}</span>
              </a>
              <p className="text-[11px] text-slate-400 pt-1">
                Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun - 248011
              </p>
            </div>

            <button
              onClick={onOpenAdmission}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-bold text-xs shadow-md transition-all cursor-pointer"
            >
              Apply Online (Session 2025–26)
            </button>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Tula's International School, Dehradun. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="https://tis.fedena.com/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">
              Fedena Portal Login
            </a>
            <a href="https://tis.edu.in/privacy-policy/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">
              Privacy Policy
            </a>
            <a href="https://tis.edu.in/terms-conditions/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">
              Terms & Conditions
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-amber-500 transition-colors cursor-pointer"
              aria-label="Scroll to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

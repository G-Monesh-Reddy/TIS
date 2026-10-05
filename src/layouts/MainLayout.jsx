import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import ScrollProgress from '../components/ScrollProgress';
import AdmissionModal from '../components/AdmissionModal';

export default function MainLayout({ children }) {
  const [admissionOpen, setAdmissionOpen] = useState(false);

  const openAdmission = () => setAdmissionOpen(true);
  const closeAdmission = () => setAdmissionOpen(false);

  return (
    <div className="relative min-h-screen flex flex-col bg-stone-50 text-slate-900 dark:bg-[#070d18] dark:text-slate-100 transition-colors duration-300">
      {/* Scroll Progress Bar at the top */}
      <ScrollProgress />

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Primary Sticky Header */}
      <Navbar onOpenAdmission={openAdmission} />

      {/* Page Content with Children */}
      <main className="flex-1 w-full">
        {typeof children === 'function' ? children({ onOpenAdmission: openAdmission }) : children}
      </main>

      {/* Global Footer */}
      <Footer onOpenAdmission={openAdmission} />

      {/* Interactive Admission Enquiry Modal */}
      <AdmissionModal isOpen={admissionOpen} onClose={closeAdmission} />
    </div>
  );
}

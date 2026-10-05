import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, ChevronDown, CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { siteData } from '../data/siteData';

export default function Contact() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formSent, setFormSent] = useState(false);
  const [message, setMessage] = useState({ name: '', phone: '', query: '' });

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.name || !message.phone) return;
    setFormSent(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-slate-100/60 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Reach Our Admissions Team"
          title="Connect with Tula's International School"
          subtitle="We welcome parents to visit our 22-acre campus in Dehradun. Schedule a personalized campus walk-through or get answers from our admissions directors."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          
          {/* Left Column: Contact Cards & Campus Location */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-3xl bg-white dark:bg-[#0c1424] border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Campus Location & Helpline
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Campus Address</h4>
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200 mt-0.5">
                      {siteData.contact.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Admissions Helpline</h4>
                    <a
                      href={`tel:${siteData.contact.helpline}`}
                      className="text-base font-bold text-amber-600 dark:text-amber-400 hover:underline block"
                    >
                      {siteData.contact.helpline}
                    </a>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Landlines: {siteData.contact.landlines.join(', ')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Official Email</h4>
                    <a
                      href={`mailto:${siteData.contact.email}`}
                      className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-amber-500"
                    >
                      {siteData.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Visiting Hours</h4>
                    <p className="text-sm text-slate-800 dark:text-slate-200">
                      Monday to Saturday: 9:00 AM – 5:00 PM (Prior appointment recommended)
                    </p>
                  </div>
                </div>
              </div>

              {/* Embedded Map Representation */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 aspect-[16/9] bg-slate-900 group">
                <iframe
                  title="Tulas International School Dehradun Location"
                  src="https://maps.google.com/maps?q=Tula's+International+School+Dehradun&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter grayscale contrast-125 dark:invert dark:hue-rotate-180 opacity-90 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Query Form & FAQs */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Quick Contact Form */}
            <div className="p-8 rounded-3xl bg-white dark:bg-[#0c1424] border border-slate-200 dark:border-slate-800 shadow-md">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Send an Instant Message
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Have a specific question about boarding admissions, fee structure, or curriculum?
              </p>

              {!formSent ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                      Your Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Vikram Malhotra"
                      value={message.name}
                      onChange={(e) => setMessage({ ...message, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                      Contact Number / WhatsApp *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+91-9876543210"
                      value={message.phone}
                      onChange={(e) => setMessage({ ...message, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                      Your Query
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your child's current grade, sports interests, or boarding preferences..."
                      value={message.query}
                      onChange={(e) => setMessage({ ...message, query: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Admissions</span>
                  </button>
                </form>
              ) : (
                <div className="py-8 text-center">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Message Dispatched!</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Thank you {message.name}. Our admissions counselor will call you at {message.phone}.
                  </p>
                </div>
              )}
            </div>

            {/* Frequently Asked Questions Accordion */}
            <div className="p-8 rounded-3xl bg-white dark:bg-[#0c1424] border border-slate-200 dark:border-slate-800 shadow-md">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Frequently Asked Questions
              </h3>

              <div className="space-y-3">
                {siteData.faqs.map((faq, idx) => (
                  <div
                    key={faq.question}
                    className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-4 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-amber-500 transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${
                          activeFaq === idx ? 'rotate-180 text-amber-500' : 'text-slate-400'
                        }`}
                      />
                    </button>
                    {activeFaq === idx && (
                      <div className="p-4 pt-0 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-900/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

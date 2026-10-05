import { motion } from 'framer-motion';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  className = ''
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-3xl mb-12 md:mb-16 ${centered ? 'mx-auto text-center' : ''} ${className}`}
    >
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${
          centered ? 'mx-auto' : ''
        } bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 shadow-xs`}>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          {badge}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

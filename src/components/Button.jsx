import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  icon = true,
  className = '',
  ...props
}) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group';

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-2.5 font-semibold',
  }[size] || 'px-5 py-2.5 text-sm gap-2';

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-semibold shadow-md shadow-amber-600/20 hover:shadow-lg hover:shadow-amber-500/30 border border-amber-400/30',
    secondary:
      'bg-slate-900/80 hover:bg-slate-900 text-white dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-700/50 shadow-sm',
    outline:
      'border border-slate-300 dark:border-slate-700 hover:border-amber-500 text-slate-800 dark:text-slate-200 hover:text-amber-600 dark:hover:text-amber-400 bg-transparent hover:bg-amber-500/5',
    ghost:
      'text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-500/10'
  }[variant] || 'bg-amber-500 text-slate-950';

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        href={href}
        className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={props.type || 'button'}
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {content}
    </motion.button>
  );
}

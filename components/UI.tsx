import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

// --- Card ---
interface CardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const Card: React.FC<CardProps> = ({ children, className = '', delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className={`bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 transition-colors duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

// --- Badge ---
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'blue';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default' }) => {
  const styles = {
    default: 'bg-zinc-800 text-zinc-300',
    outline: 'border border-zinc-700 text-zinc-400',
    blue: 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium tracking-wide ${styles[variant]}`}>
      {children}
    </span>
  );
};

// --- Section Header ---
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, align = 'left' }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500 pb-2"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-4 text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

// --- Feature Item ---
interface FeatureItemProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({ title, description, icon: Icon }) => (
  <div className="flex gap-4 items-start">
    <div className="p-3 bg-zinc-800/50 rounded-lg shrink-0">
      <Icon className="w-6 h-6 text-blue-400" />
    </div>
    <div>
      <h4 className="text-lg font-semibold text-white mb-1">{title}</h4>
      <p className="text-zinc-400 leading-relaxed text-sm">{description}</p>
    </div>
  </div>
);

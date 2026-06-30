import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function PageHero({ chip, title, highlight, description, breadcrumbs = [], children }) {
  return (
    <section className="relative overflow-hidden pt-36 lg:pt-44 pb-16 lg:pb-20 noise">
      {/* fundo decorativo extra */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-[500px] w-[1200px] bg-radial-fade" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute -right-32 -top-20 h-[400px] w-[400px] rounded-full border-2 border-brand-200/40 -z-10"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        className="absolute -right-20 -top-8 h-[300px] w-[300px] rounded-full border-2 border-brand-300/30 -z-10"
      />
      <div className="absolute -top-40 -left-40 -z-10 h-[400px] w-[400px] rounded-full bg-brand-500/10 blur-3xl" />

      <div className="container-x relative">
        {/* breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-1.5 text-sm text-ink-700/60 mb-8"
        >
          <Link to="/" className="flex items-center gap-1 hover:text-brand-600 transition-colors">
            <Home className="h-3.5 w-3.5" /> Home
          </Link>
          {breadcrumbs.map((b, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5" />
              {b.to ? (
                <Link to={b.to} className="hover:text-brand-600 transition-colors">
                  {b.label}
                </Link>
              ) : (
                <span className="text-ink-900 font-semibold">{b.label}</span>
              )}
            </span>
          ))}
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {chip && <span className="chip">{chip}</span>}
          <h1 className="mt-5 font-display text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] max-w-4xl">
            {title} {highlight && <span className="text-gradient">{highlight}</span>}
          </h1>
          {description && (
            <p className="mt-6 text-lg text-ink-700/85 max-w-2xl leading-relaxed">{description}</p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}

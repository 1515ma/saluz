import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 p-10 md:p-16 text-white shadow-brand-lg noise"
        >
          {/* círculos decorativos */}
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute inset-0 bg-grid-dark opacity-20" />

          {/* círculos giratórios decorativos */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="absolute -right-12 -top-12 h-56 w-56 rounded-full border border-white/15"
          />

          <div className="relative grid md:grid-cols-3 gap-10 items-center">
            <div className="md:col-span-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                <Sparkles className="h-3.5 w-3.5" />
                Pronto para começar?
              </span>
              <h3 className="mt-5 font-display text-3xl md:text-5xl font-bold leading-[1.1]">
                Transforme suas embalagens em uma <span className="italic">extensão da sua marca.</span>
              </h3>
              <p className="mt-5 text-white/80 max-w-xl">
                Solicite agora um orçamento gratuito e sem compromisso. Atendemos pequenas, médias e
                grandes tiragens com a mesma qualidade industrial.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Link
                to="/contato"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-brand-700 shadow-2xl shadow-black/20 transition-all hover:scale-105"
              >
                Solicitar Orçamento
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

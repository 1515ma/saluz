import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, Award, Sparkles, Package } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 lg:pt-32 noise">
      {/* fundo decorativo */}
      <div className="absolute inset-0 -z-10 bg-grid opacity-60" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-[700px] w-[1100px] bg-radial-fade" />
      <div className="absolute -top-20 -right-20 -z-10 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="absolute top-40 -left-32 -z-10 h-96 w-96 rounded-full bg-brand-600/10 blur-3xl" />

      <div className="container-x grid lg:grid-cols-2 gap-10 items-center pb-20 lg:pb-28">
        {/* texto */}
        <div className="relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <span className="chip">
              <Sparkles className="h-3.5 w-3.5" />
              Indústria de Sacolas Plásticas
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="mt-6 font-display text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-[1.02] tracking-tight"
          >
            Sacolas plásticas <br />
            de alta resistência <br />
            <span className="relative inline-block">
              <span className="text-gradient">para o seu dia a dia.</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
                className="absolute -bottom-2 left-0 h-2 w-full origin-left rounded-full bg-brand-600/30"
              />
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-7 max-w-xl text-lg text-ink-700/90 leading-relaxed"
          >
            A <strong className="text-ink-900">Saluz</strong> é uma indústria especializada em
            <strong className="text-brand-700"> sacolas plásticas tipo camiseta</strong>, lisas. Produzimos com
            tecnologia, resistência reforçada e entrega para todo o Brasil.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link to="/contato" className="btn-primary group">
              Pedir Orçamento
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/produtos" className="btn-ghost">
              Ver Produtos
            </Link>
          </motion.div>

          {/* mini stats */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="mt-12 grid grid-cols-3 max-w-lg gap-2 lg:gap-6"
          >
            {[
              { icon: ShieldCheck, label: 'Material', value: 'Reforçado' },
              { icon: Zap, label: 'Entrega', value: 'Rápida' },
              { icon: Award, label: 'Impressão', value: 'Premium' },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl border border-ink-900/5 bg-white/70 backdrop-blur px-4 py-3">
                <s.icon className="h-5 w-5 text-brand-600" />
                <p className="mt-2 text-[11px] uppercase tracking-wider text-ink-700/60 font-semibold">{s.label}</p>
                <p className="font-display text-base font-bold">{s.value}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* visual à direita: vídeo + 3D + foto real */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: 'easeOut', delay: 0.2 }}
          className="relative h-[560px] lg:h-[680px] xl:h-[720px]"
        >
          {/* moldura */}
          <div className="absolute inset-0 rounded-[3rem] overflow-hidden bg-gradient-to-br from-brand-50 via-white to-white shadow-[0_30px_80px_-25px_rgba(255,102,0,0.35)] border border-brand-100" />

          {/* vídeo de fundo */}
          <div className="absolute inset-0 rounded-[3rem] overflow-hidden">
            <video
              src="/videos/saluz.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* overlay sutil só para integrar com o restante do design */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/30 via-transparent to-transparent" />
          </div>

          {/* foto real (sacola2) flutuando no canto inferior direito */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -8 }}
            animate={{ opacity: 1, y: 0, rotate: -6 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            whileHover={{ rotate: 0, scale: 1.05 }}
            className="absolute -right-4 -bottom-4 lg:right-6 lg:bottom-6 w-44 lg:w-56 xl:w-64 rounded-3xl overflow-hidden border-4 border-white shadow-2xl shadow-black/20 bg-white"
          >
            <img
              src="/images/sacola2.webp"
              alt="Sacola plástica Saluz"
              className="w-full h-auto object-contain"
            />
            <div className="px-4 py-3 bg-gradient-to-r from-brand-600 to-brand-800 text-white">
              <p className="text-[10px] uppercase tracking-wider font-bold opacity-80">Best-seller</p>
              <p className="font-display font-bold text-sm">Sacola Camiseta</p>
            </div>
          </motion.div>

          {/* badges flutuantes */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 0.7 }}
            className="absolute left-3 lg:left-6 top-10 glass-card px-4 py-3 flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-white">
              <Zap className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-ink-700/60 font-semibold">Produção</p>
              <p className="font-display font-bold text-sm">Até 20 dias úteis</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="absolute right-3 lg:right-6 top-32 glass-card px-4 py-3 flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-900 text-white">
              <Package className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-ink-700/60 font-semibold">Tiragem</p>
              <p className="font-display font-bold text-sm">A partir 1.000un</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* marquee de marcas / setores */}
      <div className="border-y border-ink-900/5 bg-white py-6 mask-fade-x">
        <div className="marquee-track gap-16 whitespace-nowrap">
          {[...Array(2)].map((_, dup) => (
            <div key={dup} className="flex items-center gap-16 px-8">
              {[
                'SUPERMERCADOS',
                'PADARIAS',
                'LOJAS DE ROUPA',
                'FARMÁCIAS',
                'BOUTIQUES',
                'RESTAURANTES',
                'COMÉRCIO',
                'INDÚSTRIA',
                'DELIVERY',
              ].map((t) => (
                <span key={t} className="font-display text-2xl md:text-3xl font-bold tracking-tight text-ink-900/30 hover:text-brand-600 transition-colors">
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { PencilRuler, Beaker, Printer, Scissors, PackageCheck, Truck } from 'lucide-react';

const steps = [
  {
    icon: PencilRuler,
    title: 'Briefing e Design',
    desc: 'Recebemos a arte ou criamos o layout junto com você, com mockup digital antes da produção.',
  },
  {
    icon: Beaker,
    title: 'Extrusão do Filme',
    desc: 'Produzimos o filme plástico em nossa indústria com controle de espessura e largura.',
  },
  {
    icon: Scissors,
    title: 'Corte e Solda',
    desc: 'Máquinas automatizadas que cortam o formato camiseta com precisão milimétrica.',
  },
  {
    icon: PackageCheck,
    title: 'Controle de Qualidade',
    desc: 'Inspeção visual e dimensional em todos os lotes antes da expedição.',
  },
  {
    icon: Truck,
    title: 'Entrega para Todo o Brasil',
    desc: 'Logística integrada com prazos otimizados e atendimento pós-venda.',
  },
];

export default function Process() {
  return (
    <section className="relative py-24 lg:py-32 bg-ink-900 text-white overflow-hidden noise">
      <div className="absolute inset-0 -z-10 bg-grid-dark opacity-40" />
      <div className="absolute -top-32 -left-32 -z-10 h-96 w-96 rounded-full bg-brand-600/20 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 -z-10 h-96 w-96 rounded-full bg-brand-600/20 blur-3xl" />

      <div className="container-x">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
            COMO PRODUZIMOS
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            Do filme em rolo à entrega da <span className="text-gradient">sacola pronta</span>.
          </h2>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            Toda a produção das sacolas é feita dentro da nossa indústria, garantindo controle de qualidade e
            agilidadeo em cada etapa do processo.
          </p>
        </div>

        {/* timeline */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur p-7 overflow-hidden hover:border-brand-500/40 transition-all"
            >
              {/* número */}
              <div className="absolute -right-2 -top-4 font-display text-[7rem] font-black text-white/[0.04] leading-none select-none">
                {String(i + 1).padStart(2, '0')}
              </div>

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-800 text-white shadow-brand">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{s.desc}</p>

                <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-400">
                  Etapa {String(i + 1).padStart(2, '0')}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* stats faixa */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
          {[
            { value: '04+', label: 'Anos de experiência' },
            { value: '50+', label: 'Clientes ativos' },
            { value: '2.5M', label: 'Sacolas / mês' },
            { value: '99%', label: 'Taxa de aprovação' },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-ink-900 p-8 lg:p-10 text-center hover:bg-brand-900 transition-colors"
            >
              <p className="font-display text-5xl lg:text-6xl font-black text-gradient">{s.value}</p>
              <p className="mt-2 text-sm text-white/60 uppercase tracking-wider font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

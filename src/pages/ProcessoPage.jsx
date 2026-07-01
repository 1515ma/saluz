import { motion } from 'framer-motion';
import { PencilRuler, Beaker, Printer, Scissors, PackageCheck, Truck, CheckCircle2, AlertCircle } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import CTA from '../components/CTA.jsx';
import SEO, { breadcrumbSchema } from '../components/SEO.jsx';

const steps = [
  {
    icon: PencilRuler,
    title: 'Briefing e Design',
    desc: 'Recebemos a arte ou criamos o layout junto com você, com mockup digital antes da produção.',
    items: ['Análise do projeto', 'Criação ou ajuste do layout', 'Aprovação do mockup digital'],
  },
  {
    icon: Beaker,
    title: 'Extrusão do Filme',
    desc: 'Produzimos o filme plástico em nossa indústria com controle de espessura e qualidade.',
    items: ['Matéria-prima PEAD/PEBD', 'Controle micrométrico de espessura', 'Aditivos sob demanda'],
  },
  {
    icon: Scissors,
    title: 'Corte e Solda',
    desc: 'Máquinas de corte e solda automatizadas com precisão milimétrica.',
    items: ['Alça camiseta, vazada ou soldada', 'Solda lateral ou de fundo', 'Sanfona opcional'],
  },
  {
    icon: PackageCheck,
    title: 'Controle de Qualidade',
    desc: 'Inspeção visual e dimensional em todos os lotes antes da expedição.',
    items: ['Conferência dimensional', 'Inspeção visual de impressão', 'Teste de resistência'],
  },
  {
    icon: Truck,
    title: 'Entrega para Todo o Brasil',
    desc: 'Logística integrada com prazos otimizados e atendimento pós-venda.',
    items: ['Embalagem em caixas/fardos', 'Transportadoras parceiras', 'Acompanhamento até a entrega'],
  },
];

const certificacoes = [
  'Material PEAD/PEBD virgem',
  'Controle de qualidade ISO',
  'Atende legislação ambiental',
  'Reaproveitamento 100% das aparas',
];

export default function ProcessoPage() {
  return (
    <>
      <SEO
        title="Nosso Processo Produtivo — Da Extrusão à Sacola Pronta"
        description="Conheça o processo industrial da Saluz: extrusão, corte, solda e expedição. Indústria verticalizada com controle de qualidade em todas as etapas."
        url="/processo"
        jsonLd={breadcrumbSchema([
          { name: 'Início', url: '/' },
          { name: 'Processo', url: '/processo' },
        ])}
      />
      <PageHero
        chip="COMO PRODUZIMOS"
        title="Do filme em rolo à"
        highlight="sacola pronta."
        description="Conheça em detalhes cada etapa do nosso processo industrial. Toda a produção é feita dentro da nossa indústria, garantindo controle de qualidade, agilidade e personalização."
        breadcrumbs={[{ label: 'Processo' }]}
      />

      {/* Etapas em detalhe */}
      <section className="relative py-16 lg:py-24">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: (i % 2) * 0.1, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl border border-ink-900/5 bg-white p-8 hover:border-brand-200 hover:shadow-[0_30px_60px_-20px_rgba(255,102,0,0.25)] transition-all overflow-hidden"
              >
                {/* número decorativo */}
                <div className="absolute -right-4 -top-8 font-display text-[9rem] font-black text-brand-50 leading-none select-none">
                  {String(i + 1).padStart(2, '0')}
                </div>

                <div className="relative">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-800 text-white shadow-brand">
                      <s.icon className="h-7 w-7" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
                      Etapa {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-bold text-ink-900">{s.title}</h3>
                  <p className="mt-3 text-ink-700/80 leading-relaxed">{s.desc}</p>

                  <ul className="mt-5 space-y-2">
                    {s.items.map((it, k) => (
                      <li key={k} className="flex items-start gap-2 text-sm text-ink-800">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 text-brand-600 flex-shrink-0" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificações */}
      <section className="relative py-16 lg:py-24 bg-ink-900 text-white overflow-hidden noise">
        <div className="absolute inset-0 -z-10 bg-grid-dark opacity-40" />
        <div className="absolute -top-32 -left-32 -z-10 h-96 w-96 rounded-full bg-brand-600/30 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 -z-10 h-96 w-96 rounded-full bg-brand-600/30 blur-3xl" />

        <div className="container-x text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
            QUALIDADE GARANTIDA
          </span>
          <h2 className="mt-5 font-display text-3xl lg:text-5xl font-bold">
            Padrões rigorosos em <span className="text-gradient">cada etapa</span>
          </h2>
          <p className="mt-6 text-lg text-white/70">
            Nossa produção segue padrões internacionais para entregar produtos consistentes, seguros e
            ambientalmente responsáveis.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificacoes.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 text-left"
              >
                <CheckCircle2 className="h-5 w-5 text-brand-400 flex-shrink-0" />
                <span className="text-sm font-medium">{c}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-16 lg:py-24">
        <div className="container-x">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-ink-900/5 rounded-3xl overflow-hidden border border-ink-900/5">
            {[
              { value: '4+', label: 'Anos de experiência' },
              { value: '100+', label: 'Clientes ativos' },
              { value: '2.5M', label: 'Sacolas / mês' },
              { value: '99%', label: 'Taxa de aprovação' },
            ].map((s, i) => (
              <div key={i} className="bg-white p-8 lg:p-10 text-center hover:bg-brand-50 transition-colors">
                <p className="font-display text-5xl lg:text-6xl font-black text-gradient">{s.value}</p>
                <p className="mt-2 text-sm text-ink-700/70 uppercase tracking-wider font-semibold">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

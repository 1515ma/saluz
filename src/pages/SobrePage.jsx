import { motion } from 'framer-motion';
import { Factory, Recycle, Target, Users, Award, Globe, Heart, Lightbulb } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import CTA from '../components/CTA.jsx';
import SEO, { breadcrumbSchema } from '../components/SEO.jsx';

const timeline = [
  { year: '2014', title: 'Fundação', text: 'A Saluz nasce em São Paulo com uma única extrusora e o sonho de produzir sacolas de qualidade.' },
  { year: '2017', title: 'Primeira expansão', text: 'Conquistamos os primeiros 100 clientes recorrentes e dobramos a área da fábrica.' },
  { year: '2020', title: 'Verticalização total', text: 'Internalizamos da extrusão à expedição, eliminando intermediários e ganhando agilidade.' },
  { year: '2023', title: 'Impressão HD', text: 'Investimento em maquinário de impressão flexográfica até 6 cores com clichês HD.' },
  { year: '2026', title: 'Sustentabilidade', text: 'Lançamento da linha de sacolas oxi-biodegradáveis e reaproveitamento de 100% das aparas.' },
];

const valores = [
  { icon: Heart, title: 'Cliente em primeiro lugar', text: 'Atendimento consultivo e personalizado, do briefing à expedição.' },
  { icon: Award, title: 'Excelência industrial', text: 'Processos rigorosos de qualidade em todas as etapas produtivas.' },
  { icon: Lightbulb, title: 'Inovação contínua', text: 'Investimos em maquinário e tecnologias que mantém o padrão Saluz.' },
  { icon: Recycle, title: 'Compromisso sustentável', text: 'Reaproveitamento, energia eficiente e materiais responsáveis.' },
];

const features = [
  { icon: Factory, title: 'Parque Industrial', text: 'Equipamentos de última geração para extrusão, impressão e corte com alta precisão.' },
  { icon: Target, title: 'Foco no Cliente', text: 'Soluções sob medida, do design ao acabamento, com atendimento consultivo.' },
  { icon: Users, title: 'Time Especializado', text: 'Profissionais com anos de experiência no segmento de embalagens plásticas.' },
  { icon: Globe, title: 'Entregamos em todo o Brasil', text: 'Logística integrada com prazos otimizados e atendimento pós-venda.' },
];

export default function SobrePage() {
  return (
    <>
      <SEO
        title="Sobre a Saluz Plastics — Indústria Verticalizada"
        description="Conheça a Saluz: indústria verticalizada em sacolas plásticas desde 2014. Da extrusão à expedição, com mais de 10 anos de mercado, foco em qualidade e atendimento direto da fábrica."
        url="/sobre"
        jsonLd={breadcrumbSchema([
          { name: 'Início', url: '/' },
          { name: 'Sobre', url: '/sobre' },
        ])}
      />
      <PageHero
        chip="QUEM SOMOS"
        title="Indústria verticalizada em"
        highlight="sacolas plásticas."
        description="Há mais de uma década produzindo sacolas plásticas de altíssima qualidade para o varejo, a indústria e o comércio brasileiro. Conheça nossa história, nossos valores e o que nos diferencia."
        breadcrumbs={[{ label: 'Sobre' }]}
      />

      {/* História + Missão */}
      <section className="relative py-16 lg:py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
              Mais que sacolas: <span className="text-gradient">identidade em movimento</span>.
            </h2>
            <p className="mt-6 text-ink-700/85 text-lg leading-relaxed">
              A Saluz nasceu em 2014 com uma proposta simples: produzir sacolas plásticas com excelência,
              entregando no prazo e atendendo de verdade. Em mais de uma década, viramos referência para
              centenas de varejistas, indústrias e distribuidoras de todo o país.
            </p>
            <p className="mt-4 text-ink-700/85 text-lg leading-relaxed">
              Acreditamos que <strong>cada sacola é uma extensão da marca</strong> que ela carrega. Por isso,
              cuidamos do material à impressão com a mesma atenção que damos ao atendimento.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            <div className="rounded-3xl bg-gradient-to-br from-brand-600 to-brand-900 text-white p-7 shadow-brand">
              <Factory className="h-10 w-10 mb-4" />
              <p className="font-display text-3xl font-black">10+</p>
              <p className="text-sm text-white/80 mt-1">Anos de indústria</p>
            </div>
            <div className="rounded-3xl border border-ink-900/5 bg-white p-7 sm:translate-y-6">
              <Users className="h-10 w-10 text-brand-600 mb-4" />
              <p className="font-display text-3xl font-black text-ink-900">500+</p>
              <p className="text-sm text-ink-700/70 mt-1">Clientes ativos</p>
            </div>
            <div className="rounded-3xl border border-ink-900/5 bg-white p-7">
              <Award className="h-10 w-10 text-brand-600 mb-4" />
              <p className="font-display text-3xl font-black text-ink-900">2.5M</p>
              <p className="text-sm text-ink-700/70 mt-1">Sacolas / mês</p>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-ink-900 to-ink-700 text-white p-7 sm:translate-y-6">
              <Globe className="h-10 w-10 mb-4" />
              <p className="font-display text-3xl font-black">BR</p>
              <p className="text-sm text-white/80 mt-1">Entrega nacional</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Valores */}
      <section className="relative py-16 lg:py-24">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="chip mx-auto">NOSSOS VALORES</span>
            <h2 className="section-title mt-5">
              O que <span className="text-gradient">nos move</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className={`rounded-3xl border p-7 transition-all ${
                  i % 2 === 0 ? 'bg-gradient-to-br from-brand-600 to-brand-900 text-white border-transparent shadow-brand' : 'bg-white border-ink-900/5 hover:border-brand-200 hover:shadow-xl'
                }`}
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${i % 2 === 0 ? 'bg-white/15' : 'bg-brand-50 text-brand-600'}`}>
                  <v.icon className="h-7 w-7" />
                </div>
                <h3 className={`mt-5 font-display text-lg font-bold ${i % 2 === 0 ? 'text-white' : 'text-ink-900'}`}>
                  {v.title}
                </h3>
                <p className={`mt-2 text-sm leading-relaxed ${i % 2 === 0 ? 'text-white/80' : 'text-ink-700/80'}`}>
                  {v.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-16 lg:py-24 bg-ink-900 text-white overflow-hidden noise">
        <div className="absolute inset-0 -z-10 bg-grid-dark opacity-40" />
        <div className="absolute -top-32 left-1/3 -z-10 h-72 w-72 rounded-full bg-brand-600/30 blur-3xl" />

        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
              NOSSA TRAJETÓRIA
            </span>
            <h2 className="mt-5 font-display text-3xl lg:text-5xl font-bold">
              Uma década crescendo <span className="text-gradient">com você</span>
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* linha vertical */}
            <div className="absolute left-8 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-500/20 via-brand-500/50 to-brand-500/20" />

            {timeline.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
                className={`relative pl-20 lg:pl-0 mb-10 lg:flex ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}
              >
                <div className="lg:w-1/2 lg:px-8">
                  <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur p-6">
                    <p className="font-display text-3xl font-black text-gradient">{t.year}</p>
                    <h4 className="mt-2 font-display text-xl font-bold">{t.title}</h4>
                    <p className="mt-2 text-sm text-white/70 leading-relaxed">{t.text}</p>
                  </div>
                </div>
                {/* ponto na linha */}
                <div className="absolute left-6 lg:left-1/2 lg:-translate-x-1/2 top-6 lg:top-1/2 lg:-translate-y-1/2 h-6 w-6 rounded-full bg-brand-600 ring-4 ring-ink-900 shadow-lg shadow-brand-500/50" />
                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="relative py-16 lg:py-24">
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl border border-ink-900/5 bg-white p-8 hover:border-brand-200 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
                    <f.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">{f.title}</h3>
                    <p className="mt-2 text-ink-700/80 leading-relaxed">{f.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Factory, Recycle, Target, Users, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: Factory,
    title: 'Parque Industrial',
    text: 'Equipamentos de última geração para extrusão, impressão e corte com alta precisão.',
  },
  {
    icon: Recycle,
    title: 'Compromisso Sustentável',
    text: 'Reaproveitamento de matéria-prima e processos com baixo impacto ambiental.',
  },
  {
    icon: Target,
    title: 'Foco no Cliente',
    text: 'Soluções sob medida, do design ao acabamento, com atendimento consultivo.',
  },
  {
    icon: Users,
    title: 'Time Especializado',
    text: 'Profissionais com anos de experiência no segmento de embalagens plásticas.',
  },
];

const bullets = [
  'Sacolas plásticas tipo camiseta em diversos tamanhos',
  'Sacolas boca lisa e modelos para boutiques e moda',
  'Atendimento para pequenas, médias e grandes tiragens',
];

export default function About() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute -top-32 right-0 -z-10 h-96 w-96 rounded-full bg-brand-50 blur-3xl" />

      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 lg:sticky lg:top-28"
        >
          <span className="chip">SOBRE A SALUZ</span>
          <h2 className="section-title mt-5">
            Indústria <span className="text-gradient">verticalizada</span> em sacolas plásticas.
          </h2>
          <p className="mt-6 text-lg text-ink-700/90 leading-relaxed">
            A Saluz nasceu para entregar mais do que sacolas: entrega <strong>identidade, resistência e
            confiança</strong> ao comércio brasileiro. Atuamos da extrusão à expedição, controlando 100% do
            processo produtivo dentro da nossa fábrica para garantir qualidade em cada peça.
          </p>

          <ul className="mt-8 space-y-3">
            {bullets.map((b, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex items-start gap-3 text-ink-800"
              >
                <CheckCircle2 className="h-5 w-5 mt-1 text-brand-600 flex-shrink-0" />
                <span>{b}</span>
              </motion.li>
            ))}
          </ul>

          <Link to="/sobre" className="btn-primary mt-10">
            Conheça mais sobre nós
          </Link>
        </motion.div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className={`group relative rounded-3xl border p-7 transition-all duration-300 ${
                i % 3 === 0
                  ? 'bg-gradient-to-br from-brand-600 to-brand-800 border-transparent text-white shadow-brand'
                  : 'bg-white border-ink-900/5 hover:border-brand-200 hover:shadow-[0_20px_50px_-15px_rgba(255,102,0,0.25)]'
              } ${i === 1 ? 'sm:translate-y-8' : ''} ${i === 3 ? 'sm:translate-y-8' : ''}`}
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                  i % 3 === 0 ? 'bg-white/15 text-white' : 'bg-brand-50 text-brand-600'
                }`}
              >
                <f.icon className="h-7 w-7" />
              </div>
              <h3 className={`mt-5 font-display text-xl font-bold ${i % 3 === 0 ? 'text-white' : 'text-ink-900'}`}>
                {f.title}
              </h3>
              <p className={`mt-2 text-sm leading-relaxed ${i % 3 === 0 ? 'text-white/80' : 'text-ink-700/80'}`}>
                {f.text}
              </p>
              <div className={`mt-6 font-display text-5xl font-black ${i % 3 === 0 ? 'text-white/15' : 'text-brand-100'}`}>
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

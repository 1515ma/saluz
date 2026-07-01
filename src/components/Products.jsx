import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShoppingBag, Layers, Printer, Scissors, Palette, Leaf, ShieldCheck } from 'lucide-react';

const products = [
  {
    id: 'sacola-preta',
    title: 'Sacola preta',
    subtitle: 'Impressão de sacolas pretas',
    description:
      'Sacola tipo camiseta preta opaca, lisa, sem impressão. Solução econômica e versátil para qualquer tipo de comércio que precisa de embalagem prática.',
    image: '/images/sacola preta.png',
    tags: ['Sacola Lisa', 'Sacola Preta', 'Brilho ou fosco'],
    icon: ShoppingBag,
  },
  {
    id: 'sacola-branca',
    title: 'Sacola Branca',
    subtitle: 'Lisa, sem impressão',
    description:
      'Sacola tipo camiseta branca opaca, lisa, sem impressão. Solução econômica e versátil para qualquer tipo de comércio que precisa de embalagem prática.',
    image: '/images/sacola2.png',
    tags: ['Sem impressão', 'PEAD virgem', 'Atóxica'],
    icon: ShoppingBag,
  },
  {
    id: 'bobina',
    title: 'Bobina',
    subtitle: 'Filme plástico bobinado',
    description:
      'Bobinas de filme plástico para automação industrial, envase e linhas de produção. Largura, espessura e tratamento sob medida.',
    image: '/images/saluz-bobina.png',
    tags: ['Sob medida', 'Industrial', 'PE/PP'],
    icon: Layers,
  },
  {
    id: 'sacola-verde',
    title: 'Sacola Verde',
    subtitle: 'Identidade visual diferenciada',
    description:
      'Sacola tipo camiseta na cor verde — destaque sua marca com uma cor diferenciada nos pontos de venda. Disponível em outras cores sob consulta.',
    image: '/images/sacola verde.png',
    tint: '#16a34a',
    tags: ['Verde sólida', 'Outras cores', 'Personalizável'],
    icon: Leaf,
  },
];

const extras = [
  { icon: Scissors, title: 'Corte e Solda', text: 'Alça camiseta, boca lisa, com sanfona ou fundo reforçado.' },
  { icon: Palette, title: 'Cores Sob Medida', text: 'Pantone customizado para combinar exatamente com sua identidade.' },
  { icon: ShoppingBag, title: 'Tamanho Sob Medida', text: 'Tamanho de acordo com a necessidade do cliente.' }
];

export default function Products() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid opacity-50" />

      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="chip">NOSSOS PRODUTOS</span>
            <h2 className="section-title mt-5 max-w-3xl">
              Linha completa de <span className="text-gradient">sacolas plásticas</span> industriais.
            </h2>
          </div>
          <p className="max-w-md text-ink-700/90 leading-relaxed">
            Camiseta tradicional. Tudo produzido com tecnologia,
            qualidade e a flexibilidade que seu negócio precisa.
          </p>
        </div>

        {/* destaque com foto real */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-ink-900 via-ink-800 to-brand-950 border border-white/10 mb-6"
        >
          <div className="absolute inset-0 bg-grid-dark opacity-30" />
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-600/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />

          <div className="relative grid lg:grid-cols-12 gap-8 p-8 lg:p-12 items-center">
            <div className="lg:col-span-7 text-white">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
                <ShoppingBag className="h-3.5 w-3.5" /> Carro-chefe
              </span>
              <h3 className="mt-5 font-display text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.05]">
                Sacola plástica<br />
                <span className="text-gradient">camiseta branca</span>
              </h3>
              <p className="mt-5 text-lg text-white/75 max-w-xl">
                Nosso produto carro-chefe. Sacola tipo camiseta na cor branca, com excelente resistência,
                acabamento padrão indústria e disponível em múltiplos tamanhos para todo tipo de comércio.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {['PEAD virgem', 'Alça reforçada', 'Branca opaca', 'Atóxica', 'Reciclável'].map((t) => (
                  <span key={t} className="rounded-full bg-white/10 border border-white/15 px-3 py-1.5 text-xs font-semibold text-white">
                    {t}
                  </span>
                ))}
              </div>

              {/* tamanhos */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { name: 'PP', size: '20×30 cm' },
                  { name: 'P', size: '30×40 cm' },
                  { name: 'M', size: '40×50 cm' },
                  { name: 'G', size: '50×60 cm' },
                ].map((s) => (
                  <div key={s.name} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4">
                    <p className="font-display text-2xl font-bold text-white">{s.name}</p>
                    <p className="text-xs text-white/60 mt-1">{s.size}</p>
                  </div>
                ))}
              </div>

              <Link to="/produtos/sacola-camiseta" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-brand-700 shadow-2xl shadow-black/30 hover:scale-105 transition-transform">
                Quero esta sacola
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            {/* foto real da sacola */}
            <div className="lg:col-span-5 relative">
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden bg-white p-6 shadow-2xl shadow-black/40">
                  <img
                    src="/images/saluz-sacola.png"
                    alt="Saluz sacola"
                    className="w-full h-auto object-contain"
                  />
                </div>
                {/* selo */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-brand-600 text-white flex items-center justify-center shadow-2xl"
                >
                  <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-spin-slow">
                    <defs>
                      <path id="circle-text" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
                    </defs>
                    <text fill="white" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="700" letterSpacing="2">
                      <textPath href="#circle-text">• QUALIDADE SALUZ • FABRICAÇÃO PRÓPRIA </textPath>
                    </text>
                  </svg>
                  <ShieldCheck className="h-7 w-7 relative z-10" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* grid de produtos secundários */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {products.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-ink-900/8 bg-white hover:border-brand-200 hover:shadow-[0_30px_60px_-20px_rgba(255,102,0,0.25)] transition-all flex flex-col"
            >
              {/* foto real do produto — limpa, sem gradiente nem blur */}
              <div className="relative h-56 overflow-hidden bg-white">
                <motion.img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-contain p-4"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6 }}
                />
                {/* overlay de tinta colorida pra variantes coloridas */}
                {p.tint && (
                  <div
                    className="absolute inset-0 pointer-events-none mix-blend-multiply"
                    style={{ backgroundColor: p.tint }}
                  />
                )}
              </div>

              <div className="relative p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <p.icon className="h-4 w-4" />
                  </div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-600">
                    {p.subtitle}
                  </p>
                </div>

                <h3 className="mt-3 font-display text-xl font-bold leading-tight text-ink-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700/80 flex-1">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full px-2.5 py-1 text-[10px] font-semibold bg-brand-50 text-brand-700 border border-brand-100">
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/produtos/${p.id}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-800 transition-colors"
                >
                  Ver detalhes
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* extras */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {extras.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-ink-900/5 bg-white p-7 hover:border-brand-200 hover:shadow-lg transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
                <e.icon className="h-6 w-6" />
              </div>
              <h4 className="mt-5 font-display text-lg font-bold">{e.title}</h4>
              <p className="mt-2 text-sm text-ink-700/80">{e.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

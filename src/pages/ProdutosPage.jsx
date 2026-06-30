import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Scissors, Palette, Printer } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import CTA from '../components/CTA.jsx';
import SEO, { breadcrumbSchema } from '../components/SEO.jsx';
import { products } from '../data/products.js';

const extras = [
  { icon: Scissors, title: 'Corte e Solda', text: 'Alça camiseta, boca lisa, com sanfona ou fundo reforçado.' },
  { icon: Palette, title: 'Cores Sob Medida', text: 'Pantone customizado para combinar exatamente com sua identidade.' },
  { icon: Printer, title: 'Impressão Flexográfica', text: 'Até 6 cores com alta definição em rolo industrial.' },
];

export default function ProdutosPage() {
  return (
    <>
      <SEO
        title="Produtos — Sacolas Plásticas, Bobinas e Personalizadas"
        description="Linha completa de sacolas plásticas Saluz: tipo camiseta branca, personalizada com sua logo, bobinas industriais e sacolas coloridas. Produção sob medida."
        url="/produtos"
        keywords="sacola camiseta, sacola personalizada, sacola plástica branca, sacola verde, bobina plástica, sacola com impressão"
        jsonLd={breadcrumbSchema([
          { name: 'Início', url: '/' },
          { name: 'Produtos', url: '/produtos' },
        ])}
      />
      <PageHero
        chip="LINHA COMPLETA"
        title="Sacolas plásticas para"
        highlight="todo tipo de negócio."
        description="Da sacola camiseta clássica à personalizada com impressão da sua marca. Conheça em detalhe cada produto que fabricamos."
        breadcrumbs={[{ label: 'Produtos' }]}
      />

      {/* Lista grande de produtos */}
      <section className="relative pt-4 pb-16 lg:pb-24">
        <div className="container-x space-y-10">
          {products.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className={`relative rounded-[2.5rem] overflow-hidden border ${
                i === 0
                  ? 'bg-gradient-to-br from-ink-900 via-ink-800 to-brand-950 text-white border-white/10'
                  : 'bg-white border-ink-900/5'
              }`}
            >
              <div className={`absolute inset-0 ${i === 0 ? 'bg-grid-dark opacity-30' : 'bg-grid opacity-30'}`} />
              <div className={`absolute -top-32 -right-32 h-96 w-96 rounded-full blur-3xl ${i === 0 ? 'bg-brand-600/30' : 'bg-brand-100/60'}`} />

              <div className={`relative grid lg:grid-cols-12 gap-8 p-8 lg:p-12 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:col-start-6' : ''}`}>
                  <div className="flex items-center gap-3">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${i === 0 ? 'bg-white/10 text-white' : 'bg-brand-50 text-brand-600'}`}>
                      <p.icon className="h-6 w-6" />
                    </div>
                    {p.badge && (
                      <span className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] ${
                        i === 0 ? 'bg-brand-500/20 text-brand-300 border border-brand-500/40' : 'bg-brand-50 text-brand-700 border border-brand-100'
                      }`}>
                        {p.badge}
                      </span>
                    )}
                  </div>

                  <h2 className={`mt-6 font-display text-4xl lg:text-5xl font-bold leading-[1.05] ${i === 0 ? 'text-white' : 'text-ink-900'}`}>
                    {p.title}
                  </h2>
                  <p className={`mt-2 text-sm font-semibold uppercase tracking-wider ${i === 0 ? 'text-brand-300' : 'text-brand-600'}`}>
                    {p.subtitle}
                  </p>
                  <p className={`mt-5 text-lg leading-relaxed ${i === 0 ? 'text-white/75' : 'text-ink-700/80'}`}>
                    {p.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                          i === 0 ? 'bg-white/10 text-white border border-white/15' : 'bg-brand-50 text-brand-700 border border-brand-100'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      to={`/produtos/${p.slug}`}
                      className={`inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold transition-all ${
                        i === 0
                          ? 'bg-white text-brand-700 hover:scale-105 shadow-2xl'
                          : 'bg-brand-600 text-white hover:bg-brand-700 shadow-brand'
                      }`}
                    >
                      Ver detalhes
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                    <Link
                      to="/contato"
                      className={`inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold transition-all ${
                        i === 0
                          ? 'border border-white/30 bg-white/5 text-white hover:bg-white/15'
                          : 'border border-ink-900/10 bg-white text-ink-900 hover:border-brand-200 hover:text-brand-600'
                      }`}
                    >
                      Solicitar orçamento
                    </Link>
                  </div>
                </div>

                {/* imagem preenchendo o retângulo */}
                <div className={`lg:col-span-5 relative ${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                    className="relative"
                  >
                    <div className="relative rounded-3xl bg-white shadow-2xl overflow-hidden aspect-square">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                      {p.tint && (
                        <div
                          className="absolute inset-0 pointer-events-none mix-blend-multiply"
                          style={{ backgroundColor: p.tint }}
                        />
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Acabamentos e Extras */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-white to-brand-50/30">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="chip mx-auto">ACABAMENTOS</span>
            <h2 className="section-title mt-5">
              Customização <span className="text-gradient">sem limites</span>
            </h2>
            <p className="mt-5 text-lg text-ink-700/85">
              Todos os nossos produtos podem ser combinados com diferentes acabamentos para atender suas necessidades específicas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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

      <CTA />
    </>
  );
}

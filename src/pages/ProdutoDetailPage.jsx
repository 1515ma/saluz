import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Sparkles, Package } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import CTA from '../components/CTA.jsx';
import SEO, { productSchema, breadcrumbSchema } from '../components/SEO.jsx';
import { getProduct, products } from '../data/products.js';

export default function ProdutoDetailPage() {
  const { slug } = useParams();
  const product = getProduct(slug);

  if (!product) return <Navigate to="/produtos" replace />;

  const others = products.filter((p) => p.slug !== slug);

  return (
    <>
      <SEO
        title={`${product.title} — ${product.short}`}
        description={product.description}
        url={`/produtos/${product.slug}`}
        image={product.image}
        keywords={[product.title.toLowerCase(), ...product.tags.map((t) => t.toLowerCase())].join(', ')}
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            productSchema(product),
            breadcrumbSchema([
              { name: 'Início', url: '/' },
              { name: 'Produtos', url: '/produtos' },
              { name: product.title, url: `/produtos/${product.slug}` },
            ]),
          ],
        }}
      />
      <PageHero
        chip={product.badge || 'PRODUTO'}
        title={product.title}
        highlight=""
        description={product.short}
        breadcrumbs={[
          { label: 'Produtos', to: '/produtos' },
          { label: product.title },
        ]}
      />

      {/* Conteúdo principal: imagem + info */}
      <section className="relative py-12 lg:py-16">
        <div className="container-x grid lg:grid-cols-12 gap-10 lg:gap-12">
          {/* imagem grande */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-50/50 border border-ink-900/5 p-10 lg:p-16 min-h-[500px] flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                className="absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full border-2 border-brand-200/40"
              />
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative max-h-[400px]"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-[400px] w-auto object-contain drop-shadow-2xl"
                  />
                  {product.tint && (
                    <div
                      className="absolute inset-0 pointer-events-none mix-blend-multiply"
                      style={{ backgroundColor: product.tint }}
                    />
                  )}
                </div>
              </motion.div>
            </div>

            {/* mini galeria (placeholder com mesma imagem reduzida) */}
            <div className="mt-4 grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className={`rounded-2xl border bg-white p-3 cursor-pointer transition-all hover:border-brand-300 ${n === 1 ? 'border-brand-500 ring-2 ring-brand-200' : 'border-ink-900/5'}`}
                >
                  <div className="relative">
                    <img src={product.image} alt="" className="w-full h-16 object-contain" />
                    {product.tint && (
                      <div
                        className="absolute inset-0 pointer-events-none mix-blend-multiply"
                        style={{ backgroundColor: product.tint }}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <product.icon className="h-6 w-6" />
              </div>
              {product.badge && (
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700 border border-brand-100">
                  <Sparkles className="h-3 w-3" />
                  {product.badge}
                </span>
              )}
            </div>

            <h2 className="mt-5 font-display text-3xl font-bold">{product.subtitle}</h2>

            <p className="mt-5 text-ink-700/85 leading-relaxed">{product.description}</p>

            {/* tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {product.tags.map((t) => (
                <span key={t} className="rounded-full bg-brand-50 text-brand-700 border border-brand-100 px-3 py-1.5 text-xs font-semibold">
                  {t}
                </span>
              ))}
            </div>

            {/* tamanhos */}
            <h3 className="mt-8 font-display text-lg font-bold flex items-center gap-2">
              <Package className="h-4 w-4 text-brand-600" /> Tamanhos disponíveis
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {product.sizes.map((s) => (
                <div key={s.name} className="rounded-2xl border border-ink-900/5 bg-white p-4 hover:border-brand-200 transition-colors">
                  <p className="font-display text-xl font-bold text-ink-900">{s.name}</p>
                  <p className="text-xs text-ink-700/70 mt-0.5">{s.size}</p>
                  <p className="text-[10px] uppercase tracking-wider text-brand-600 mt-2 font-bold">{s.pack}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/contato" className="btn-primary flex-1">
                Solicitar orçamento
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer" className="btn-ghost">
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-white via-brand-50/30 to-white">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="chip mx-auto">DIFERENCIAIS</span>
            <h2 className="section-title mt-5">
              Por que <span className="text-gradient">esta sacola?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {product.features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="rounded-3xl border border-ink-900/5 bg-white p-7 hover:border-brand-200 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold">{f.title}</h3>
                    <p className="mt-2 text-sm text-ink-700/80 leading-relaxed">{f.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Aplicações */}
      <section className="relative py-16 lg:py-24">
        <div className="container-x">
          <div className="rounded-[2.5rem] bg-ink-900 text-white p-10 lg:p-14 overflow-hidden relative noise">
            <div className="absolute inset-0 bg-grid-dark opacity-30" />
            <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-600/30 blur-3xl" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
                APLICAÇÕES
              </span>
              <h3 className="mt-5 font-display text-3xl lg:text-4xl font-bold max-w-2xl">
                Ideal para esses <span className="text-gradient">segmentos</span>:
              </h3>

              <div className="mt-8 flex flex-wrap gap-3">
                {product.applications.map((app, i) => (
                  <motion.span
                    key={app}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className="rounded-full bg-white/10 border border-white/20 backdrop-blur px-5 py-2.5 text-sm font-semibold text-white"
                  >
                    {app}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outros produtos */}
      <section className="relative py-16 lg:py-24">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="chip">VEJA TAMBÉM</span>
              <h3 className="section-title mt-5">Outros produtos</h3>
            </div>
            <Link to="/produtos" className="btn-ghost self-start md:self-end">
              <ArrowLeft className="h-4 w-4" /> Voltar para todos
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {others.map((p) => (
              <Link
                key={p.slug}
                to={`/produtos/${p.slug}`}
                className="group rounded-3xl border border-ink-900/5 bg-white overflow-hidden hover:border-brand-200 hover:shadow-xl transition-all"
              >
                <div className="h-56 bg-gradient-to-br from-brand-50 to-white flex items-center justify-center p-6">
                  <img src={p.image} alt={p.title} className="max-h-full object-contain group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-wider text-brand-600 font-semibold">{p.subtitle}</p>
                  <h4 className="mt-2 font-display text-2xl font-bold">{p.title}</h4>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 group-hover:gap-3 transition-all">
                    Ver produto <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

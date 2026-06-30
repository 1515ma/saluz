import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Calendar, Clock, User } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import SEO, { breadcrumbSchema } from '../components/SEO.jsx';
import { posts, formatDate } from '../data/posts.js';

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <SEO
        title="Blog Saluz — Notícias sobre Embalagens e Varejo"
        description="Artigos, tendências e dicas sobre sacolas plásticas personalizadas, sustentabilidade, varejo e marketing de marca. Conteúdo prático para o seu negócio."
        url="/blog"
        keywords="blog saluz, sacola plástica, embalagem personalizada, marketing varejo, sustentabilidade plástico"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'Blog Saluz Plastics',
          url: 'https://saluzplastics.com.br/blog',
          blogPost: posts.map((p) => ({
            '@type': 'BlogPosting',
            headline: p.title,
            url: `https://saluzplastics.com.br/blog/${p.slug}`,
            datePublished: p.date,
          })),
        }}
      />
      <PageHero
        chip="BLOG SALUZ"
        title="Conteúdo, dicas e"
        highlight="novidades do mercado de sacolas."
        description="Artigos práticos sobre sacolas plásticas, branding, sustentabilidade e tendências do varejo brasileiro."
        breadcrumbs={[{ label: 'Blog' }]}
      />

      {/* Post em destaque */}
      <section className="relative py-8 lg:py-12">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Link
              to={`/blog/${featured.slug}`}
              className="group block rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-ink-900 via-ink-800 to-brand-950 text-white relative noise"
            >
              <div className="absolute inset-0 bg-grid-dark opacity-30" />
              <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-600/30 blur-3xl" />

              <div className="relative grid lg:grid-cols-2 gap-8 p-8 lg:p-12 items-center">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                    Em destaque · {featured.category}
                  </span>
                  <h2 className="mt-5 font-display text-3xl lg:text-5xl font-bold leading-[1.1]">
                    {featured.title}
                  </h2>
                  <p className="mt-5 text-white/75 leading-relaxed">{featured.excerpt}</p>

                  <div className="mt-7 flex flex-wrap items-center gap-5 text-sm text-white/70">
                    <span className="inline-flex items-center gap-1.5"><User className="h-4 w-4" />{featured.author}</span>
                    <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" />{formatDate(featured.date)}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" />{featured.readTime}</span>
                  </div>

                  <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-brand-700 group-hover:scale-105 transition-transform">
                    Ler artigo completo
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                <div className="relative">
                  <div className="relative rounded-3xl overflow-hidden h-72 lg:h-80 border border-white/10">
                    <img src={featured.cover} alt={featured.title} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Demais posts */}
      <section className="relative py-12 lg:py-16">
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-6">
            {rest.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl overflow-hidden border border-ink-900/5 bg-white hover:border-brand-200 hover:shadow-xl transition-all"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="relative h-64 overflow-hidden">
                    <img src={post.cover} alt={post.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full bg-brand-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-7">
                    <div className="flex items-center gap-4 text-xs text-ink-700/60">
                      <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" />{formatDate(post.date)}</span>
                      <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</span>
                    </div>
                    <h3 className="mt-3 font-display text-xl lg:text-2xl font-bold leading-snug group-hover:text-brand-700 transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm text-ink-700/80 leading-relaxed">{post.excerpt}</p>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 group-hover:gap-3 transition-all">
                      Ler artigo <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / Categorias */}
      <section className="relative py-16 lg:py-24">
        <div className="container-x">
          <div className="rounded-[2.5rem] bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 text-white p-10 lg:p-14 overflow-hidden relative shadow-brand-lg">
            <div className="absolute inset-0 bg-grid-dark opacity-20" />
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-display text-3xl lg:text-4xl font-bold leading-tight">
                  Receba as novidades direto no seu e-mail
                </h3>
                <p className="mt-4 text-white/80">
                  Conteúdo exclusivo sobre sacolas, embalagem e varejo. Sem spam, prometemos.
                </p>
              </div>

              <form
                onSubmit={(e) => { e.preventDefault(); alert('Inscrição registrada!'); }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  required
                  placeholder="seu@email.com"
                  className="flex-1 rounded-full px-6 py-4 text-ink-900 outline-none focus:ring-4 focus:ring-white/20"
                />
                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-brand-700 px-7 py-4 font-semibold hover:scale-105 transition-transform">
                  Inscrever
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Calendar, Clock, User, Share2, Facebook, Linkedin, Twitter } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import SEO, { articleSchema, breadcrumbSchema } from '../components/SEO.jsx';
import { getPost, posts, formatDate } from '../data/posts.js';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = getPost(slug);

  if (!post) return <Navigate to="/blog" replace />;

  const related = posts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        url={`/blog/${post.slug}`}
        image={post.cover}
        type="article"
        keywords={`${post.category.toLowerCase()}, ${post.title.toLowerCase()}, blog saluz`}
        author={post.author}
        publishedTime={new Date(post.date).toISOString()}
        modifiedTime={new Date(post.date).toISOString()}
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            articleSchema(post),
            breadcrumbSchema([
              { name: 'Início', url: '/' },
              { name: 'Blog', url: '/blog' },
              { name: post.title, url: `/blog/${post.slug}` },
            ]),
          ],
        }}
      />
      <PageHero
        chip={post.category}
        title={post.title}
        breadcrumbs={[
          { label: 'Blog', to: '/blog' },
          { label: post.title },
        ]}
      >
        <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-ink-700/70">
          <span className="inline-flex items-center gap-1.5"><User className="h-4 w-4" />{post.author}</span>
          <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" />{formatDate(post.date)}</span>
          <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" />{post.readTime}</span>
        </div>
      </PageHero>

      {/* Cover */}
      <section className="relative py-4">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative rounded-[2.5rem] overflow-hidden border border-ink-900/5 h-[28rem] lg:h-[34rem]"
          >
            <img src={post.cover} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Conteúdo do artigo */}
      <section className="relative py-12 lg:py-16">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          {/* sidebar */}
          <aside className="lg:col-span-3 order-2 lg:order-1">
            <div className="lg:sticky lg:top-28 space-y-6">
              {/* compartilhar */}
              <div className="rounded-2xl border border-ink-900/5 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-ink-700/60 flex items-center gap-2">
                  <Share2 className="h-3.5 w-3.5" /> Compartilhar
                </p>
                <div className="mt-3 flex gap-2">
                  {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/10 hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>

              {/* índice */}
              <div className="rounded-2xl border border-ink-900/5 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-ink-700/60">Conteúdo</p>
                <ul className="mt-3 space-y-2">
                  {post.content.map((c, i) => (
                    <li key={i}>
                      <a
                        href={`#sec-${i}`}
                        className="block text-sm text-ink-800 hover:text-brand-600 transition-colors py-1.5 border-l-2 border-transparent hover:border-brand-600 pl-3"
                      >
                        {c.h}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-900 text-white p-6">
                <p className="font-display text-lg font-bold leading-tight">
                  Gostou do artigo?
                </p>
                <p className="mt-1 text-sm text-white/80">
                  Solicite seu orçamento de sacolas plásticas agora.
                </p>
                <Link to="/contato" className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-700">
                  Fale com a gente
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </aside>

          {/* corpo */}
          <article className="lg:col-span-9 order-1 lg:order-2 space-y-8">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-xl text-ink-700/90 leading-relaxed font-medium border-l-4 border-brand-500 pl-6"
            >
              {post.excerpt}
            </motion.p>

            {post.content.map((c, i) => (
              <motion.div
                key={i}
                id={`sec-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5 }}
                className="space-y-3"
              >
                <h2 className="font-display text-2xl lg:text-3xl font-bold scroll-mt-28">
                  {c.h}
                </h2>
                <p className="text-ink-800/85 leading-relaxed text-lg">{c.p}</p>
              </motion.div>
            ))}

            {/* CTA final inline */}
            <div className="mt-10 rounded-3xl bg-gradient-to-br from-ink-900 to-brand-950 text-white p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-dark opacity-20" />
              <div className="relative">
                <p className="text-xs uppercase tracking-wider font-bold text-brand-300">PRÓXIMOS PASSOS</p>
                <h3 className="mt-2 font-display text-2xl lg:text-3xl font-bold">
                  Pronto para ter sacolas com a cara da sua marca?
                </h3>
                <p className="mt-3 text-white/80">Nossa equipe responde em até 1 dia útil.</p>
                <Link to="/contato" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-brand-700 hover:scale-105 transition-transform">
                  Pedir orçamento <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Posts relacionados */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-white to-brand-50/30">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="chip">VEJA TAMBÉM</span>
              <h2 className="section-title mt-5">Outros artigos</h2>
            </div>
            <Link to="/blog" className="btn-ghost self-start md:self-end">
              <ArrowLeft className="h-4 w-4" /> Todos os artigos
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {related.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="group rounded-3xl overflow-hidden border border-ink-900/5 bg-white hover:border-brand-200 hover:shadow-xl transition-all"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={p.cover} alt={p.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-wider text-brand-600 font-bold">{p.category}</p>
                  <h4 className="mt-2 font-display text-xl font-bold">{p.title}</h4>
                  <div className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 group-hover:gap-3 transition-all">
                    Ler artigo <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

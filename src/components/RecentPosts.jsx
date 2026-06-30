import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Calendar, Clock, Newspaper } from 'lucide-react';
import { getRecentPosts, formatDate } from '../data/posts.js';

export default function RecentPosts() {
  const posts = getRecentPosts(3);

  return (
    <section className="relative py-24 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="chip">
              <Newspaper className="h-3.5 w-3.5" />
              Notícias e Conteúdo
            </span>
            <h2 className="section-title mt-5">
              Últimas do <span className="text-gradient">blog Saluz</span>
            </h2>
            <p className="mt-4 max-w-xl text-lg text-ink-700/80">
              Conteúdo prático sobre sacolas plásticas, tendências do varejo, sustentabilidade e marketing.
            </p>
          </div>
          <Link to="/blog" className="btn-ghost self-start md:self-end">
            Ver todos os artigos
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-ink-900/8 bg-white hover:border-brand-300 hover:shadow-[0_20px_50px_-15px_rgba(255,102,0,0.25)] transition-all"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                {/* cover — sem blur branco, preenche todo o espaço */}
                <div className="relative h-52 overflow-hidden">
                  <motion.img
                    src={post.cover}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                  />
                  {/* gradient escuro no rodapé pra contraste */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  {/* categoria */}
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-brand-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* conteúdo */}
                <div className="p-6 lg:p-7">
                  <div className="flex items-center gap-4 text-xs text-ink-700/60">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {formatDate(post.date)}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-xl font-bold leading-snug text-ink-900 group-hover:text-brand-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-700/80 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 group-hover:gap-3 transition-all">
                    Ler artigo
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

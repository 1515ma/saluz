/**
 * Gera sitemap.xml dinamicamente a partir dos dados de produtos e posts.
 * É executado automaticamente ao rodar `npm run build`.
 *
 * Se mudar de domínio, ajuste SITE_URL abaixo (deve ser igual ao SITE_URL em src/components/SEO.jsx).
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

const SITE_URL = 'https://saluzplastics.com.br';

async function loadData() {
  // importa os dados ESM do projeto
  const productsModule = await import(pathToFileURL(path.join(root, 'src/data/products.js')).href);
  const postsModule = await import(pathToFileURL(path.join(root, 'src/data/posts.js')).href);
  return {
    products: productsModule.products || [],
    posts: postsModule.posts || [],
  };
}

function urlEntry(loc, { lastmod, changefreq = 'monthly', priority = 0.7 } = {}) {
  return `  <url>
    <loc>${SITE_URL}${loc}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

async function generate() {
  const { products, posts } = await loadData();
  const today = new Date().toISOString().split('T')[0];

  const staticRoutes = [
    { loc: '/', priority: 1.0, changefreq: 'weekly' },
    { loc: '/sobre', priority: 0.8 },
    { loc: '/produtos', priority: 0.9, changefreq: 'weekly' },
    { loc: '/processo', priority: 0.7 },
    { loc: '/blog', priority: 0.8, changefreq: 'weekly' },
    { loc: '/contato', priority: 0.8 },
  ];

  const productEntries = products.map((p) =>
    urlEntry(`/produtos/${p.slug}`, { lastmod: today, priority: 0.8 })
  );

  const postEntries = posts.map((p) =>
    urlEntry(`/blog/${p.slug}`, { lastmod: p.date, priority: 0.7 })
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes.map((r) => urlEntry(r.loc, { lastmod: today, priority: r.priority, changefreq: r.changefreq })).join('\n')}
${productEntries.join('\n')}
${postEntries.join('\n')}
</urlset>
`;

  // Escreve no public/ (pra dev) e no dist/ (pra produção, se já existir)
  const dests = [
    path.join(root, 'public', 'sitemap.xml'),
    path.join(root, 'dist', 'sitemap.xml'),
  ];

  for (const dest of dests) {
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) continue; // pula dist se não existir
    fs.writeFileSync(dest, xml, 'utf-8');
    console.log(`[sitemap] gerado em ${path.relative(root, dest)}`);
  }

  console.log(`[sitemap] ${staticRoutes.length + productEntries.length + postEntries.length} URLs incluídas`);
}

generate().catch((err) => {
  console.error('[sitemap] erro ao gerar:', err);
  process.exit(1);
});

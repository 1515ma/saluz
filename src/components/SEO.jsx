import { Helmet } from 'react-helmet-async';

/**
 * Componente SEO reutilizável.
 * Define title, meta description, canonical, OpenGraph, Twitter Cards e JSON-LD.
 *
 * Atualize SITE_URL e SITE_NAME conforme o domínio final.
 */

// >>> AJUSTE AQUI quando publicar o site <<<
export const SITE_URL = 'https://saluzplastics.com.br';
export const SITE_NAME = 'Saluz Plastics';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.svg`;

export default function SEO({
  title,
  description = 'Indústria de sacolas plásticas com impressão personalizada, bobinas industriais e sacolas tipo camiseta. Qualidade, prazo e personalização para o seu negócio.',
  keywords = 'sacolas plásticas, sacola personalizada, sacola camiseta, bobina plástica, indústria de sacolas, impressão flexográfica, embalagem plástica, saluz plastics',
  image = DEFAULT_OG_IMAGE,
  url,
  type = 'website',
  noIndex = false,
  jsonLd = null,
  publishedTime = null,
  modifiedTime = null,
  author = null,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Indústria de Sacolas Plásticas`;
  const canonical = url ? `${SITE_URL}${url}` : SITE_URL;
  const ogImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph (Facebook / WhatsApp / LinkedIn) */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="pt_BR" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD estruturado */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}

/* ===================== HELPERS DE STRUCTURED DATA ===================== */

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': SITE_URL,
    name: SITE_NAME,
    image: DEFAULT_OG_IMAGE,
    url: SITE_URL,
    telephone: '+55-11-99999-9999',
    priceRange: '$$',
    description:
      'Indústria especializada em sacolas plásticas com impressão personalizada, bobinas industriais e sacolas tipo camiseta.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BR',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
    },
    sameAs: [
      'https://www.instagram.com/saluzplastics',
      'https://www.facebook.com/saluzplastics',
    ],
  };
}

export function productSchema(product) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: `${SITE_URL}${product.image}`,
    brand: { '@type': 'Brand', name: SITE_NAME },
    sku: product.slug,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'BRL',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: SITE_NAME },
    },
  };
}

export function articleSchema(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.cover}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: post.author || SITE_NAME },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/saluzname.png` },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.url}`,
    })),
  };
}

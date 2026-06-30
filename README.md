# Saluz Plastics — Site Institucional

Site institucional da **Saluz Plastics**, indústria de sacolas plásticas com impressão personalizada, bobinas industriais e sacolas tipo camiseta.

Stack: **React 18 + Vite + TailwindCSS + Framer Motion + React Router + React Three Fiber**.

---

## Como rodar localmente

```bash
npm install
npm run dev
```

O servidor sobe em `http://localhost:5173`.

## Build de produção

```bash
npm run build
```

O build vai para `dist/`. O comando também gera `sitemap.xml` automaticamente a partir das páginas, produtos e posts atuais.

Para apenas regenerar o sitemap:

```bash
npm run generate-sitemap
```

Para testar o build localmente:

```bash
npm run preview
```

---

## Deploy

### Vercel (recomendado)

1. Acesse [vercel.com](https://vercel.com) e faça login com a conta do GitHub.
2. **New Project** → importe o repositório `saluz-website`.
3. A Vercel detecta automaticamente o `vercel.json`. Não é necessário configurar nada.
4. Clique em **Deploy**. Em ~1 minuto o site está no ar.
5. Em **Settings → Domains**, conecte o domínio `saluzplastics.com.br` (ou outro).

### Netlify (alternativa)

1. Acesse [netlify.com](https://netlify.com) → **Import from Git** → escolha o repositório.
2. Build command: `npm run build` · Publish directory: `dist`. Já vem configurado pelo `netlify.toml`.
3. Deploy → conectar domínio.

### Outros providers

Qualquer hospedagem que sirva arquivos estáticos funciona. Pontos importantes:

- Servir `dist/` como raiz.
- Configurar fallback SPA: qualquer rota inexistente → `/index.html`.
- Manter `/sitemap.xml`, `/robots.txt` e `/og-image.svg` acessíveis na raiz.

---

## Como adicionar / editar posts do blog

Os posts ficam em **`src/data/posts.js`**. Para adicionar um novo post, é só editar esse arquivo no GitHub (botão "Edit this file" diretamente no GitHub Web), adicionando um novo objeto no array `posts`:

```js
{
  slug: 'meu-novo-post',                       // URL será /blog/meu-novo-post
  title: 'Título do post',
  excerpt: 'Resumo curto que aparece nos cards.',
  category: 'Marketing',                       // ou 'Produtos', 'Sustentabilidade' etc.
  date: '2026-06-01',                          // formato YYYY-MM-DD
  readTime: '5 min',
  author: 'Equipe Saluz',
  cover: '/images/sacola-cozinha.png',         // imagem de capa
  content: [
    { h: 'Subtítulo da primeira seção', p: 'Texto do parágrafo...' },
    { h: 'Segundo subtítulo', p: 'Outro parágrafo...' },
  ],
},
```

Depois do commit:

1. A Vercel/Netlify faz redeploy automático em ~1 min.
2. O `sitemap.xml` é regenerado no build (Google indexa o novo post).
3. O post aparece automaticamente na home (3 mais recentes) e na página `/blog`.

### Como adicionar/editar produtos

Mesma lógica em **`src/data/products.js`**. Cada produto vira uma página `/produtos/{slug}`.

---

## SEO

O site está totalmente preparado para indexação no Google:

- **Meta tags dinâmicas** por página (title, description, OpenGraph, Twitter Cards) via `react-helmet-async`
- **Schema.org JSON-LD** estruturado em todas as páginas (`LocalBusiness`, `Organization`, `Product`, `BlogPosting`, `BreadcrumbList`)
- **`sitemap.xml`** gerado automaticamente no build
- **`robots.txt`** liberando crawl total
- **URLs canônicas**
- **Open Graph image** (`/og-image.svg`)

### Após o deploy, faça:

1. **Google Search Console** → adicione a propriedade `https://saluzplastics.com.br`.
2. **Verifique a propriedade** (a Vercel/Netlify aceita verificação via DNS ou HTML tag — adicione a meta tag no `index.html` se solicitado).
3. **Envie o sitemap**: Search Console → Sitemaps → cole `https://saluzplastics.com.br/sitemap.xml`.
4. **Solicite indexação** das principais páginas (Home, Produtos, Blog) na própria Search Console.
5. Repita o passo 1-3 no **Bing Webmaster Tools** para indexação no Bing/Yahoo/DuckDuckGo.

### Quando mudar de domínio

Atualize estas 4 referências:

| Arquivo | O quê |
|---|---|
| `src/components/SEO.jsx` | constante `SITE_URL` |
| `scripts/generate-sitemap.js` | constante `SITE_URL` |
| `public/robots.txt` | linha `Sitemap:` |
| `index.html` | meta `og:url`, `canonical` e URLs nos JSON-LD |

---

## Estrutura do projeto

```
saluz-website/
├── public/                # Assets estáticos servidos como /
│   ├── images/            # Logos e fotos
│   ├── videos/            # Vídeos do site
│   ├── favicon.svg
│   ├── og-image.svg       # Imagem de preview em redes sociais
│   ├── sitemap.xml        # Gerado pelo build
│   └── robots.txt
├── scripts/
│   └── generate-sitemap.js
├── src/
│   ├── components/        # Componentes reutilizáveis
│   │   ├── SEO.jsx        # Componente de meta tags + Schema.org
│   │   └── ...
│   ├── data/
│   │   ├── posts.js       # ← editar para adicionar/editar posts
│   │   └── products.js    # ← editar para adicionar/editar produtos
│   ├── pages/             # Páginas roteadas
│   ├── utils/
│   │   └── removeImageBackground.js  # Remoção de fundo da logo no customizer
│   ├── App.jsx            # Rotas
│   ├── main.jsx
│   └── index.css
├── index.html             # HTML base com meta tags + Schema.org LocalBusiness
├── tailwind.config.js
├── vite.config.js         # Plugin de cópia de assets + auto-install
├── vercel.json            # Config para deploy na Vercel
├── netlify.toml           # Config para deploy na Netlify
└── package.json
```

---

## Funcionalidades destacadas

- **Customizador de logo na sacola** (`/` — seção LogoCustomizer): o usuário envia a logo, o site **remove automaticamente o fundo** (PNG/JPG com fundo branco vira transparente), e ela aparece impressa numa sacola de mockup. Tamanho, posição (X/Y), rotação e cor podem ser ajustados em tempo real.

- **Multipage com React Router**: cada seção é uma página separada com SEO próprio.

- **Animações com Framer Motion** + background animado global.

- **Auto-instalação de dependências** via plugin Vite — basta rodar `npm run dev` e o que falta é instalado.

---

## Licença

© Saluz Plastics. Todos os direitos reservados.

export const posts = [
  {
    slug: 'sacola-plastica-personalizada-fortalece-marca',
    title: 'Como a sacola plástica personalizada fortalece a sua marca',
    excerpt:
      'Mais do que uma embalagem: cada sacola que sai da sua loja é um anúncio ambulante. Veja como a impressão personalizada pode multiplicar a percepção da sua marca.',
    category: 'Marketing',
    date: '2026-05-10',
    readTime: '6 min',
    author: 'Equipe Saluz',
    cover: '/images/sacola-cozinha.png',
    content: [
      {
        h: 'A sacola como mídia ambulante',
        p:
          'Quando o cliente sai da sua loja carregando uma sacola personalizada, ela funciona como um outdoor móvel. A cada pessoa que cruza com ele na rua, no transporte público ou em casa, sua marca é vista — sem que você pague por mídia.',
      },
      {
        h: 'Impressão flexográfica: cores vivas e baixo custo',
        p:
          'A impressão flexográfica permite imprimir até 6 cores com alta definição. Para o lojista, isso significa fortalecer a identidade visual sem precisar de tiragens gigantes — produzimos a partir de 1.000 unidades já personalizadas.',
      },
      {
        h: 'Estudos comprovam o impacto',
        p:
          'Pesquisas em retail mostram que clientes têm 3x mais chance de lembrar de uma marca cuja sacola viram na rua, comparado a marcas que usam embalagens neutras. É marketing de baixo custo e alto retorno.',
      },
      {
        h: 'Por onde começar',
        p:
          'Defina sua logo principal, escolha 2 a 4 cores da identidade da marca, dimensione a peça para o seu tipo de produto e nos envie o briefing. Em até 5 dias úteis sua sacola personalizada está pronta para uso.',
      },
    ],
  },
  {
    slug: 'tipos-de-sacolas-plasticas-guia-completo',
    title: 'Tipos de sacolas plásticas: guia completo para o seu negócio',
    excerpt:
      'Camiseta, boca lisa, alça soldada, com sanfona... Cada tipo de sacola tem uma aplicação ideal. Descubra qual escolher para o seu segmento.',
    category: 'Produtos',
    date: '2026-05-03',
    readTime: '8 min',
    author: 'Equipe Saluz',
    cover: '/images/sacola-cozinha.png',
    content: [
      {
        h: 'Sacola tipo camiseta',
        p:
          'A mais popular do varejo brasileiro. Possui alças vazadas no formato camiseta (lembra uma blusa sem mangas), ideal para supermercados, padarias e comércio em geral. Versátil, econômica e fácil de carregar.',
      },
      {
        h: 'Sacola boca lisa',
        p:
          'Sem alças no corte, é fechada na parte superior com alça vazada redonda ou fitilho. Visual mais sofisticado, perfeita para boutiques, presentes e lojas de moda.',
      },
      {
        h: 'Sacola com alça soldada',
        p:
          'A alça é soldada separadamente ao corpo da sacola, garantindo maior resistência. Indicada para cargas pesadas e produtos com peso variável.',
      },
      {
        h: 'Sacola com sanfona',
        p:
          'Possui dobras laterais ou no fundo que se expandem conforme o conteúdo. Ótima para produtos volumosos como roupas, brinquedos e itens não-alimentícios.',
      },
      {
        h: 'Bobina contínua',
        p:
          'Filme plástico em rolo, ideal para automação industrial, envase e linhas de produção. Não é uma sacola propriamente dita, mas é a matéria-prima para muitas embalagens automatizadas.',
      },
    ],
  },
  {
    slug: 'sacolas-sustentaveis-o-que-saber',
    title: 'Sacolas plásticas e sustentabilidade: o que toda empresa precisa saber',
    excerpt:
      'Reciclagem, PEAD virgem, oxi-biodegradáveis... Entenda como a indústria de sacolas está se reinventando para um futuro mais sustentável.',
    category: 'Sustentabilidade',
    date: '2026-04-25',
    readTime: '5 min',
    author: 'Equipe Saluz',
    cover: '/images/sacola-cozinha.png',
    content: [
      {
        h: 'O plástico não é o vilão — o descarte é',
        p:
          'A sacola plástica é leve, resistente, durável, reutilizável e 100% reciclável. O problema histórico está no descarte incorreto. A indústria, há anos, vem investindo em soluções que minimizam esse impacto.',
      },
      {
        h: 'PEAD reciclado e virgem',
        p:
          'Na Saluz, utilizamos PEAD virgem para garantir qualidade e resistência, mas todos os resíduos do nosso processo voltam à cadeia produtiva — sem aterro. Também trabalhamos com PEAD reciclado pós-consumo para clientes que buscam um apelo "verde" maior.',
      },
      {
        h: 'Sacolas oxi-biodegradáveis',
        p:
          'Sob demanda, produzimos sacolas com aditivo oxi-biodegradável (d2w®), que aceleram a degradação ao final da vida útil. Atende às legislações de municípios mais exigentes do Brasil.',
      },
      {
        h: 'Compromisso da Saluz',
        p:
          'Reaproveitamos 100% das aparas internas, usamos energia eficiente nas extrusoras e estamos em processo de certificação ISO 14001. Sustentabilidade é parte da nossa operação, não marketing.',
      },
    ],
  },
];

export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}

export function getRecentPosts(limit = 3) {
  return [...posts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
}

export function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
}

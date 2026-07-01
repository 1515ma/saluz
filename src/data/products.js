import { ShoppingBag, Printer, Layers, Leaf } from 'lucide-react';

export const products = [
  {
    slug: 'sacola-camiseta',
    title: 'Sacola Camiseta',
    short: 'Sacola plástica branca tipo camiseta',
    subtitle: 'Modelo clássico de alça vazada',
    description:
      'Nosso carro-chefe. Sacola plástica tipo camiseta na cor branca opaca, com alça reforçada e excelente resistência. Ideal para supermercados, padarias, mercearias, açougues e todo o comércio em geral. Produzida em PEAD virgem, é atóxica e reciclável.',
    image: '/images/saluz-sacola.png',
    badge: 'Carro-chefe',
    icon: ShoppingBag,
    color: '#ffffff',
    tags: ['PEAD virgem', 'Alça reforçada', 'Branca opaca', 'Atóxica', 'Reciclável'],
    sizes: [
      { name: 'PP', size: '20×30 cm', pack: '1.000 un' },
      { name: 'P', size: '30×40 cm', pack: '1.000 un' },
      { name: 'M', size: '40×50 cm', pack: '500 un' },
      { name: 'G', size: '50×60 cm', pack: '500 un' },
      { name: 'GG', size: '60×80 cm', pack: '250 un' },
    ],
    features: [
      { title: 'Alta resistência', text: 'Suporta cargas pesadas sem rasgar nas alças.' },
      { title: 'Opacidade total', text: 'Esconde o conteúdo, ideal para discrição do consumidor.' },
      { title: 'Atóxica', text: 'Aprovada para contato indireto com alimentos secos.' },
      { title: 'Reciclável', text: 'Material 100% reciclável dentro da economia circular.' },
    ],
    applications: ['Supermercados', 'Padarias', 'Açougues', 'Mercearias', 'Hortifrutis', 'Lojas de varejo'],
  },
  {
    slug: 'sacola-preta',
    title: 'Sacola Preta',
    short: 'Sacola plástica preta tipo camiseta',
    subtitle: 'Modelo clássico de alça vazada',
    description:
      'Sacola plástica tipo camiseta na cor preta opaca, com alça reforçada e excelente resistência. Ideal para supermercados, padarias, mercearias, açougues e todo o comércio em geral. Produzida em PEAD virgem, é atóxica e reciclável.',
    image: '/images/sacola preta.png',
    badge: 'Mais vendida',
    icon: Printer,
    color: '#fafafa',
    tags: ['PEAD virgem', 'Alça reforçada', 'Preto opaca', 'Atóxica'],
    sizes: [
      { name: 'Pequena', size: '30×40 cm', pack: '1.000 un' },
      { name: 'Média', size: '40×50 cm', pack: '500 un' },
      { name: 'Grande', size: '50×60 cm', pack: '500 un' },
      { name: 'Sob medida', size: 'A combinar', pack: '500+ un' },
    ],
    features: [
      { title: 'Alta resistência', text: 'Suporta cargas pesadas sem rasgar nas alças.' },
      { title: 'Opacidade total', text: 'Esconde o conteúdo, ideal para discrição do consumidor.' },
      { title: 'Atóxica', text: 'Aprovada para contato indireto com alimentos secos.' },
      { title: 'Reciclável', text: 'Material 100% reciclável dentro da economia circular.' },
    ],
    applications: ['Boutiques', 'Lojas de roupa', 'Farmácias', 'Restaurantes', 'Lanchonetes', 'Delivery', 'Marketing'],
  },
  {
    slug: 'bobina',
    title: 'Bobina',
    short: 'Filme plástico bobinado industrial',
    subtitle: 'Para automação e linhas de produção',
    description:
      'Bobinas de filme plástico técnico para automação industrial, envase, embalagem em linhas de produção e aplicações que exigem rolo contínuo. Largura, espessura e tratamento sob medida. Material: polietileno (PEAD/PEBD) ou polipropileno (PP).',
    image: '/images/saluz-bobina.png',
    badge: 'Industrial',
    icon: Layers,
    color: '#FF6600',
    tags: ['Sob medida', 'PEAD/PEBD', 'PP', 'Tratamento corona', 'Rolo contínuo'],
    sizes: [
      { name: 'Estreita', size: '20 a 50 cm', pack: '50 kg' },
      { name: 'Média', size: '50 a 100 cm', pack: '50 kg' },
      { name: 'Larga', size: '100 a 180 cm', pack: '80 kg' },
      { name: 'Especial', size: '180 cm +', pack: 'A combinar' },
    ],
    features: [
      { title: 'Rolo contínuo', text: 'Ideal para máquinas de envase e automações industriais.' },
      { title: 'Espessura controlada', text: 'Controle micrométrico da espessura — de 20 a 200 microns.' },
      { title: 'Tratamento corona', text: 'Opcional para melhor aderência de impressões posteriores.' },
      { title: 'Materiais variados', text: 'PEAD, PEBD ou polipropileno conforme aplicação.' },
    ],
    applications: ['Indústria alimentícia', 'Cosméticos', 'Têxtil', 'Logística', 'Envase automatizado', 'Distribuidoras'],
  },

  {
    slug: 'sacola-verde',
    title: 'Sacola Verde',
    short: 'Sacola plástica colorida — verde',
    subtitle: 'Identidade visual diferenciada',
    description:
      'Sacola tipo camiseta na cor verde, com alta opacidade e acabamento uniforme. Solução perfeita para marcas que querem se destacar nos pontos de venda com uma cor diferenciada. Trabalhamos também com outras cores sob consulta.',
    image: '/images/sacola verde.png',
    tint: '#16a34a',
    badge: 'Colorida',
    icon: Leaf,
    color: '#16a34a',
    tags: ['Verde sólida', 'Outras cores sob consulta', 'PEAD virgem', 'Personalizável'],
    sizes: [
      { name: 'PP', size: '20×30 cm', pack: '1.000 un' },
      { name: 'P', size: '30×40 cm', pack: '1.000 un' },
      { name: 'M', size: '40×50 cm', pack: '500 un' },
      { name: 'G', size: '50×60 cm', pack: '500 un' },
    ],
    features: [
      { title: 'Cor sólida', text: 'Pigmentação industrial que mantém a cor por toda a vida útil.' },
      { title: 'Outras cores', text: 'Trabalhamos com verde, azul, preto, vermelho, amarelo e cores especiais.' },
      { title: 'Personalizável', text: 'Pode ser combinada com impressão da sua logo em cima.' },
      { title: 'Alta opacidade', text: 'Discrição total do conteúdo transportado.' },
    ],
    applications: ['Hortifrutis', 'Lojas eco-friendly', 'Floriculturas', 'Marcas com identidade verde', 'Comércio em geral'],
  },
];

export function getProduct(slug) {
  return products.find((p) => p.slug === slug);
}

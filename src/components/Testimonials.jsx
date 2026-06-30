import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Mariana Costa',
    role: 'Sócia',
    company: 'Boutique Mari',
    initial: 'M',
    text: 'As sacolas personalizadas mudaram a percepção dos meus clientes. Acabamento perfeito e atendimento excepcional.',
  },
  {
    name: 'Roberto Lima',
    role: 'Gerente',
    company: 'Mercado São Pedro',
    initial: 'R',
    text: 'A única que entrega prazo, qualidade e preço justo ao mesmo tempo. Parceiros há 3 anos sem nenhum problema.',
  },
  {
    name: 'Camila Santos',
    role: 'Proprietária',
    company: 'Padaria Pão Quente',
    initial: 'C',
    text: 'As sacolas camiseta são muito mais resistentes. Meus clientes notaram a diferença na hora — não rasgam, não furam.',
  },
  {
    name: 'André Pereira',
    role: 'Diretor',
    company: 'Distribuidora Norte',
    initial: 'A',
    text: 'Bobinas industriais com regularidade e pontualidade impecáveis. Nosso fornecedor estratégico há mais de 2 anos.',
  },
  {
    name: 'Fernanda Oliveira',
    role: 'Founder',
    company: 'Studio Moda F.',
    initial: 'F',
    text: 'A impressão da logo ficou exatamente como o mockup. Acabamento fosco premium e alça reforçada.',
  },
  {
    name: 'Pedro Almeida',
    role: 'Sócio',
    company: 'Açougue Premium',
    initial: 'P',
    text: 'Atendimento direto, ágil e humano. Recebo orçamento no mesmo dia e a sacola fica pronta antes do prazo combinado.',
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="container-x">
        {/* cabeçalho premium */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 lg:mb-20 items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-600 mb-5">
              <span className="h-px w-8 bg-brand-600" />
              Confiam na Saluz
            </div>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-ink-900 leading-[1.05]">
              Cada sacola é um <br className="hidden md:block" />
              <span className="italic font-normal text-brand-600">elogio em movimento.</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            {/* stats inline */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 lg:justify-end">
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="h-4 w-4 fill-brand-500 text-brand-500" />
                    ))}
                  </div>
                  <span className="font-display text-2xl font-black text-ink-900">4.9</span>
                </div>
                <p className="text-xs text-ink-700/60 mt-1">de 500+ avaliações</p>
              </div>
              <div className="h-10 w-px bg-ink-900/10" />
              <div>
                <p className="font-display text-2xl font-black text-ink-900">98%</p>
                <p className="text-xs text-ink-700/60 mt-1">de recompra</p>
              </div>
              <div className="h-10 w-px bg-ink-900/10" />
              <div>
                <p className="font-display text-2xl font-black text-ink-900">10+</p>
                <p className="text-xs text-ink-700/60 mt-1">anos de mercado</p>
              </div>
            </div>
          </div>
        </div>

        {/* grid clean — bento style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
              className="group relative rounded-2xl border border-ink-900/8 bg-white p-7 hover:border-brand-300 transition-all duration-300"
            >
              {/* aspas decorativas */}
              <div className="absolute top-5 right-5 font-display text-7xl font-black text-brand-500/10 leading-none select-none pointer-events-none">
                "
              </div>

              {/* estrelas */}
              <div className="flex gap-0.5 relative">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-3.5 w-3.5 fill-brand-500 text-brand-500" />
                ))}
              </div>

              {/* depoimento */}
              <blockquote className="mt-4 text-ink-800 leading-relaxed text-[15px] relative">
                {t.text}
              </blockquote>

              {/* pessoa */}
              <figcaption className="mt-6 pt-5 border-t border-ink-900/8 flex items-center gap-3 relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-100 to-brand-50 text-brand-700 font-display font-bold text-sm border border-brand-200/60">
                  {t.initial}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm text-ink-900 truncate">{t.name}</p>
                  <p className="text-xs text-ink-700/60 truncate">
                    {t.role} <span className="text-brand-600 font-medium">· {t.company}</span>
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* CTA discreto */}
        <p className="mt-14 text-center text-sm text-ink-700/60">
          Junte-se a centenas de marcas satisfeitas —{' '}
          <a href="/contato" className="text-brand-600 font-semibold hover:underline underline-offset-4">
            solicite seu orçamento
          </a>
          .
        </p>
      </div>
    </section>
  );
}

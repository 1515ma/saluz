import PageHero from '../components/PageHero.jsx';
import Contact from '../components/Contact.jsx';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import SEO, { breadcrumbSchema } from '../components/SEO.jsx';

const contactCards = [
  {
    icon: Phone,
    title: 'Telefone Comercial',
    value: '+55 (11) 3000-0000',
    desc: 'Seg. à Sex., 08h às 18h',
    href: 'tel:+551130000000',
    color: 'from-brand-500 to-brand-700',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Direto',
    value: '+55 (11) 9 9999-9999',
    desc: 'Resposta em até 1h útil',
    href: 'https://wa.me/5511999999999',
    color: 'from-emerald-500 to-emerald-700',
  },
  {
    icon: Mail,
    title: 'E-mail Comercial',
    value: 'comercial@saluz.com.br',
    desc: 'Respondemos em até 1 dia útil',
    href: 'mailto:comercial@saluz.com.br',
    color: 'from-blue-500 to-blue-700',
  },
  {
    icon: MapPin,
    title: 'Fábrica',
    value: 'Rua das Indústrias, 1234',
    desc: 'São Paulo / SP — CEP 00000-000',
    href: '#',
    color: 'from-amber-500 to-amber-700',
  },
];

export default function ContatoPage() {
  return (
    <>
      <SEO
        title="Contato — Solicite seu Orçamento"
        description="Fale com a Saluz Plastics: telefone, WhatsApp, e-mail e formulário de orçamento. Atendimento direto da fábrica, resposta em até 1 dia útil."
        url="/contato"
        jsonLd={breadcrumbSchema([
          { name: 'Início', url: '/' },
          { name: 'Contato', url: '/contato' },
        ])}
      />
      <PageHero
        chip="FALE COM A GENTE"
        title="Pronto para criar a"
        highlight="sacola ideal para o seu negócio?"
        description="Estamos prontos para atender sua demanda — seja para uma pequena tiragem personalizada ou produção em escala industrial. Escolha o canal de sua preferência."
        breadcrumbs={[{ label: 'Contato' }]}
      />

      {/* Cards de canais */}
      <section className="relative pt-4 pb-16 lg:pb-20">
        <div className="container-x grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactCards.map((c, i) => (
            <motion.a
              key={i}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group rounded-3xl border border-ink-900/5 bg-white p-6 hover:border-brand-200 hover:shadow-xl transition-all"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${c.color} text-white`}>
                <c.icon className="h-6 w-6" />
              </div>
              <p className="mt-5 text-[11px] uppercase tracking-wider text-ink-700/60 font-semibold">
                {c.title}
              </p>
              <p className="mt-1 font-display text-lg font-bold text-ink-900 group-hover:text-brand-600 transition-colors">
                {c.value}
              </p>
              <p className="mt-1 text-xs text-ink-700/70">{c.desc}</p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* horários */}
      <section className="relative py-8">
        <div className="container-x">
          <div className="rounded-3xl bg-gradient-to-r from-brand-600 via-brand-700 to-brand-900 text-white p-8 lg:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-brand">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white/15">
              <Clock className="h-7 w-7" />
            </div>
            <div className="flex-1">
              <p className="text-xs uppercase tracking-wider font-bold opacity-80">Horário comercial</p>
              <p className="font-display text-2xl font-bold">Segunda à Sexta — 08h às 18h</p>
              <p className="text-sm text-white/80 mt-1">Sábados eventuais via agendamento. Pedidos urgentes via WhatsApp.</p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}

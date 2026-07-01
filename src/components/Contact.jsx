import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Loader2, CheckCircle2, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: 'Sacola camiseta',
    quantity: '',
    message: '',
  });

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch("https://formspree.io/f/xeeblygd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Nome: form.name,
          Empresa: form.company,
          Email: form.email,
          Telefone: form.phone,
          Produto: form.product,
          Quantidade: form.quantity,
          Mensagem: form.message
        }) 
      });

      if (response.ok) {
        setStatus('sent');
        setTimeout(() => setStatus('idle'), 4000);
        setForm({
          name: '',
          company: '',
          email: '',
          phone: '',
          product: 'Sacola camiseta',
          quantity: '',
          message: '',
        });
      } else {
        setStatus('idle');
        alert("Houve um problema ao enviar. Tente novamente.");
      }
    } catch (error) {
      setStatus('idle');
      alert("Erro de conexão. Verifique sua internet.");
    }
  };
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute -top-32 -right-32 -z-10 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 -z-10 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl" />

      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* lado esquerdo info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <span className="chip">FALE COM A SALUZ</span>
            <h2 className="section-title mt-5">
              Vamos criar a sacola <span className="text-gradient">perfeita</span> para você.
            </h2>
            <p className="mt-5 text-lg text-ink-700/85 leading-relaxed">
              Preencha o formulário ou entre em contato pelos nossos canais. Nossa equipe responde em até
              <strong className="text-brand-700"> 1 dia útil</strong> com orçamento personalizado.
            </p>

            <div className="mt-10 space-y-4">
              {[
                {
                  icon: Phone,
                  label: 'Telefone',
                  value: '+55 (11) 3000-0000',
                  href: 'tel:+551130000000',
                },
                {
                  icon: MessageCircle,
                  label: 'WhatsApp',
                  value: '+55 (11) 9 9999-9999',
                  href: 'https://wa.me/5511999999999',
                },
                {
                  icon: Mail,
                  label: 'E-mail',
                  value: 'comercial@saluz.com.br',
                  href: 'mailto:comercial@saluz.com.br',
                },
                {
                  icon: MapPin,
                  label: 'Endereço',
                  value: 'Rua Carlopolis, 181 Guarulhos / SP — CEP 07170-540',
                },
                {
                  icon: Clock,
                  label: 'Atendimento',
                  value: 'Seg. à Sex. — 08h às 18h',
                },
              ].map((c, i) => (
                <motion.a
                  key={i}
                  href={c.href || '#'}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  className="group flex items-center gap-4 rounded-2xl border border-ink-900/5 bg-white p-4 hover:border-brand-200 hover:shadow-lg transition-all"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-700/60">{c.label}</p>
                    <p className="font-semibold text-ink-900">{c.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* formulário */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden border border-ink-900/5 bg-gradient-to-br from-ink-900 via-ink-800 to-brand-950 p-1 shadow-brand-lg">
              <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />
              <div className="relative rounded-[2.25rem] bg-white p-8 lg:p-10">
                <h3 className="font-display text-2xl lg:text-3xl font-bold">Solicite seu orçamento</h3>
                <p className="mt-2 text-ink-700/80 text-sm">
                  Preencha os campos abaixo e nosso time entrará em contato com você.
                </p>

                <form onSubmit={onSubmit} className="mt-8 grid sm:grid-cols-2 gap-4">
                  <Field label="Nome*" required>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      placeholder="Seu nome completo"
                      className="input-field"
                    />
                  </Field>

                  <Field label="Empresa">
                    <input
                      value={form.company}
                      onChange={(e) => update('company', e.target.value)}
                      placeholder="Nome da empresa"
                      className="input-field"
                    />
                  </Field>

                  <Field label="E-mail*" required>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      placeholder="email@empresa.com"
                      className="input-field"
                    />
                  </Field>

                  <Field label="Telefone / WhatsApp*" required>
                    <input
                      required
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      placeholder="(11) 99999-9999"
                      className="input-field"
                    />
                  </Field>

                  <Field label="Produto de interesse">
                    <select
                      value={form.product}
                      onChange={(e) => update('product', e.target.value)}
                      className="input-field"
                    >
                      <option>Sacola camiseta branca</option>
                      <option>Sacola camiseta preta</option>
                      <option>Sacola camiseta verde</option>
                      <option>Bobina</option>
                      <option>Outros</option>
                    </select>
                  </Field>

                  <Field label="Quantidade estimada">
                    <input
                      value={form.quantity}
                      onChange={(e) => update('quantity', e.target.value)}
                      placeholder="Ex: 5.000 un"
                      className="input-field"
                    />
                  </Field>

                  <div className="sm:col-span-2">
                    <Field label="Mensagem">
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={(e) => update('message', e.target.value)}
                        placeholder="Conte um pouco mais sobre o seu projeto..."
                        className="input-field resize-none"
                      />
                    </Field>
                  </div>

                  <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4 mt-2">
                    <button
                      type="submit"
                      disabled={status !== 'idle'}
                      className="btn-primary flex-1 sm:flex-none disabled:opacity-80"
                    >
                      {status === 'idle' && (
                        <>
                          Enviar mensagem
                          <Send className="h-4 w-4" />
                        </>
                      )}
                      {status === 'sending' && (
                        <>
                          Enviando...
                          <Loader2 className="h-4 w-4 animate-spin" />
                        </>
                      )}
                      {status === 'sent' && (
                        <>
                          Mensagem enviada
                          <CheckCircle2 className="h-4 w-4" />
                        </>
                      )}
                    </button>
                    <p className="text-xs text-ink-700/60">
                      * Campos obrigatórios. Respeitamos sua privacidade — seus dados estão seguros.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .input-field {
          width: 100%;
          border: 1px solid rgba(10, 10, 12, 0.1);
          background: #fafafa;
          border-radius: 0.875rem;
          padding: 0.875rem 1rem;
          font-size: 0.9rem;
          color: #15151a;
          transition: all 0.2s;
          outline: none;
        }
        .input-field:focus {
          border-color: #FF6600;
          background: #fff;
          box-shadow: 0 0 0 4px rgba(255, 102, 0, 0.12);
        }
        .input-field::placeholder { color: rgba(31,31,38,0.4); }
      `}</style>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold uppercase tracking-wider text-ink-700/70 mb-1.5">
        {label}
      </span>
      {children}
    </label>
  );
}

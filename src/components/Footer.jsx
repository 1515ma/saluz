import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-ink-900 text-white pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid-dark opacity-30" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 -z-10 h-72 w-[700px] rounded-full bg-brand-600/20 blur-3xl" />

      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          <div className="lg:col-span-5">
            <div className="bg-white/95 rounded-2xl p-4 inline-block shadow-2xl">
              <img
                src="/images/saluzname.png"
                alt="Saluz Sacolas Plásticas"
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="mt-6 text-white/65 max-w-md leading-relaxed">
              Indústria especializada em sacolas plásticas tipo camiseta e bobinas. Qualidade, prazo e personalização em cada sacola que produzimos.
            </p>
            <div className="mt-7 flex gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white hover:bg-brand-600 hover:border-brand-600 hover:-translate-y-0.5 transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-base mb-5">Empresa</h4>
            <ul className="space-y-3 text-sm text-white/65">
              <li><Link to="/sobre" className="hover:text-white transition-colors">Sobre nós</Link></li>
              <li><Link to="/processo" className="hover:text-white transition-colors">Processo</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contato" className="hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-base mb-5">Produtos</h4>
            <ul className="space-y-3 text-sm text-white/65">
              <li><Link to="/produtos/sacola-camiseta" className="hover:text-white transition-colors">Sacola camiseta</Link></li>
              <li><Link to="/produtos/sacola-personalizada" className="hover:text-white transition-colors">Sacola personalizada</Link></li>
              <li><Link to="/produtos/bobina" className="hover:text-white transition-colors">Bobina</Link></li>
              <li><Link to="/produtos" className="hover:text-white transition-colors">Ver todos</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-base mb-5">Contato</h4>
            <ul className="space-y-4 text-sm text-white/65">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-brand-400 mt-1 flex-shrink-0" />
                <span>Rua Carlopolis, 181<br />Guarulhos / SP — CEP 07170-540</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-brand-400 mt-1 flex-shrink-0" />
                <span>+55 (11) 3000-0000</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-brand-400 mt-1 flex-shrink-0" />
                <span>comercial@saluz.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Saluz Embalagens. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

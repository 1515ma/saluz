import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const links = [
  { to: '/', label: 'Início', end: true },
  { to: '/sobre', label: 'Sobre' },
  { to: '/produtos', label: 'Produtos' },
  { to: '/processo', label: 'Processo' },
  { to: '/blog', label: 'Blog' },
  { to: '/contato', label: 'Contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // fecha menu mobile ao navegar
  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/85 backdrop-blur-xl border-b border-ink-900/5 shadow-[0_2px_30px_rgba(0,0,0,0.05)]' : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="group flex items-center gap-2">
          <img
            src="/images/saluzname.png"
            alt="Saluz Sacolas Plásticas"
            className="h-14 lg:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `group relative px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'text-brand-600' : 'text-ink-700 hover:text-brand-600'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  <span
                    className={`absolute inset-x-4 -bottom-0.5 h-0.5 origin-left bg-brand-600 transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+551130000000" className="inline-flex items-center gap-2 text-sm font-medium text-ink-700 hover:text-brand-600 transition">
            <Phone className="h-4 w-4" /> (11) 3000-0000
          </a>
          <Link to="/contato" className="btn-primary text-sm py-2.5 px-5">
            Solicitar Orçamento
          </Link>
        </div>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden flex h-11 w-11 items-center justify-center rounded-xl border border-ink-900/10 bg-white"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-white border-b border-ink-900/5"
          >
            <div className="container-x py-6 flex flex-col gap-2">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.end}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-base font-medium ${
                      isActive ? 'bg-brand-50 text-brand-700' : 'text-ink-800 hover:bg-brand-50 hover:text-brand-700'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <Link to="/contato" className="btn-primary mt-2">
                Solicitar Orçamento
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

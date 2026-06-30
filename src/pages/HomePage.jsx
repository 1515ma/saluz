import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Products from '../components/Products.jsx';
import LogoCustomizer from '../components/LogoCustomizer.jsx';
import Process from '../components/Process.jsx';
import Testimonials from '../components/Testimonials.jsx';
import RecentPosts from '../components/RecentPosts.jsx';
import CTA from '../components/CTA.jsx';
import Contact from '../components/Contact.jsx';
import SEO, { localBusinessSchema } from '../components/SEO.jsx';

export default function HomePage() {
  return (
    <>
      <SEO
        title="Indústria de Sacolas Plásticas e Bobinas"
        description="Saluz Plastics — indústria de sacolas plásticas, bobinas industriais e sacolas tipo camiseta. Qualidade, prazo e atendimento direto da fábrica."
        url="/"
        jsonLd={localBusinessSchema()}
      />
      <Hero />
      <About />
      <Products />
      <LogoCustomizer />
      <Process />
      <Testimonials />
      <RecentPosts />
      <CTA />
      <Contact />
    </>
  );
}

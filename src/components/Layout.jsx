import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import WhatsAppFloat from './WhatsAppFloat.jsx';
import ScrollProgress from './ScrollProgress.jsx';
import AnimatedBackground from './AnimatedBackground.jsx';

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <ScrollProgress />
      <Navbar />
      <main className="relative">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

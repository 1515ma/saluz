import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import SobrePage from './pages/SobrePage.jsx';
import ProdutosPage from './pages/ProdutosPage.jsx';
import ProdutoDetailPage from './pages/ProdutoDetailPage.jsx';
import ProcessoPage from './pages/ProcessoPage.jsx';
import ContatoPage from './pages/ContatoPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import BlogPostPage from './pages/BlogPostPage.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/produtos" element={<ProdutosPage />} />
          <Route path="/produtos/:slug" element={<ProdutoDetailPage />} />
          <Route path="/processo" element={<ProcessoPage />} />
          <Route path="/contato" element={<ContatoPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

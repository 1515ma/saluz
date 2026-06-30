import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

// Garante que dependências declaradas no package.json estão instaladas.
// Útil para autoinstalar quando o package.json muda e o dev server já está rodando.
function autoInstallPlugin() {
  return {
    name: 'auto-install-deps',
    buildStart() {
      try {
        const pkgPath = path.resolve(__dirname, 'package.json');
        const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
        const deps = { ...pkg.dependencies, ...pkg.devDependencies };
        const missing = [];

        for (const name of Object.keys(deps)) {
          const depPath = path.resolve(__dirname, 'node_modules', name, 'package.json');
          if (!fs.existsSync(depPath)) missing.push(name);
        }

        if (missing.length > 0) {
          console.log(`[auto-install] Instalando dependências faltando: ${missing.join(', ')}`);
          execSync(`npm install ${missing.join(' ')} --no-audit --no-fund --loglevel=error`, {
            cwd: __dirname,
            stdio: 'inherit',
          });
          console.log('[auto-install] ✓ Concluído');
        }
      } catch (err) {
        console.warn('[auto-install] skipped:', err.message);
      }
    },
  };
}

// Plugin que detecta arquivos enviados pelo usuário (na pasta assets do Cursor
// ou já dentro de public/) e copia/renomeia para nomes URL-friendly em public/images
// e public/videos.
function copyUserAssetsPlugin() {
  return {
    name: 'copy-user-assets',
    buildStart() {
      try {
        const root = __dirname;
        const publicDir = path.resolve(root, 'public');
        const destImg = path.resolve(publicDir, 'images');
        const destVid = path.resolve(publicDir, 'videos');
        if (!fs.existsSync(destImg)) fs.mkdirSync(destImg, { recursive: true });
        if (!fs.existsSync(destVid)) fs.mkdirSync(destVid, { recursive: true });

        // Pastas onde procurar
        const searchDirs = [
          'C:/Users/gabri/.cursor/projects/c-Users-gabri-Desktop-projeto-saluz2/assets',
          publicDir,
          path.resolve(publicDir, 'images'),
          path.resolve(publicDir, 'videos'),
        ];

        // (regex de nome, destino, tipo)
        // Mappings — ORDEM IMPORTA: mais específicos primeiro, fallbacks por último.
        // Quando dois arquivos batem no mesmo destino, o ÚLTIMO arquivo encontrado vence (sobrescreve).
        const mappings = [
          // NOVA LOGO (Gemini "2p0grf") — prioridade alta, sobrescreve a antiga
          { match: /2p0grf/i, dest: 'images/saluzname.png', priority: 10 },
          // Mockup limpo na cozinha (Gemini "eq7kld") — versão nova, sem logo
          { match: /eq7kld/i, dest: 'images/sacola-cozinha.png', priority: 10 },
          // Logo antiga ainda detectada como fallback
          { match: /saluzname/i, dest: 'images/saluzname.png', priority: 1 },
          // Mockup antigo (com logo Saluz aplicada) — fallback
          { match: /1aw1tv/i, dest: 'images/sacola-cozinha.png', priority: 1 },
          // Produtos
          { match: /sacola2/i, dest: 'images/sacola2.png', priority: 5 },
          { match: /saluz[-_ ]?sacola/i, dest: 'images/saluz-sacola.png', priority: 5 },
          { match: /saluz[-_ ]?bobina/i, dest: 'images/saluz-bobina.png', priority: 5 },
          // Legacy
          { match: /MLB|961790|D_NQ_NP/i, dest: 'images/sacola-camiseta.png', priority: 1 },
        ];

        const imageExts = /\.(png|jpg|jpeg|webp|gif|svg)$/i;
        const videoExts = /\.(mp4|webm|mov|m4v)$/i;
        const foundVideos = [];

        // Cole todos os arquivos candidatos com a regra que casa
        const candidates = []; // { src, dest, priority, file }
        for (const dir of searchDirs) {
          if (!fs.existsSync(dir)) continue;
          const files = fs.readdirSync(dir);
          for (const file of files) {
            const full = path.join(dir, file);
            if (!fs.statSync(full).isFile()) continue;

            if (imageExts.test(file)) {
              for (const m of mappings) {
                if (m.match.test(file)) {
                  candidates.push({ src: full, dest: m.dest, priority: m.priority, file });
                }
              }
            }
            if (videoExts.test(file)) foundVideos.push({ full, file, dir });
          }
        }

        // Para cada destino, escolhe candidato de maior prioridade (e mais recente em caso de empate)
        const byDest = new Map();
        for (const c of candidates) {
          const cur = byDest.get(c.dest);
          if (!cur || c.priority > cur.priority) byDest.set(c.dest, c);
        }

        for (const [dest, c] of byDest) {
          const dst = path.resolve(publicDir, dest);
          if (c.src !== dst) {
            fs.copyFileSync(c.src, dst);
            console.log(`[assets] ${path.relative(root, c.src)} → public/${dest} (priority ${c.priority})`);
          }
        }

        // Copia o primeiro vídeo encontrado como saluz.mp4 (ou mantém a extensão original)
        if (foundVideos.length > 0) {
          // Prefere vídeos que já estão em public e não estão dentro de videos/
          const v = foundVideos[0];
          const ext = path.extname(v.file).toLowerCase();
          const dst = path.resolve(destVid, 'saluz' + ext);
          if (v.full !== dst) {
            fs.copyFileSync(v.full, dst);
            console.log(`[assets] ${path.relative(root, v.full)} → public/videos/saluz${ext}`);
          }
        }

        // Listar conteúdo da pasta public para debug
        console.log('[assets] === Conteúdo de public/images ===');
        if (fs.existsSync(destImg)) {
          for (const f of fs.readdirSync(destImg)) console.log('  -', f);
        }
        console.log('[assets] === Conteúdo de public/videos ===');
        if (fs.existsSync(destVid)) {
          for (const f of fs.readdirSync(destVid)) console.log('  -', f);
        }
        console.log('[assets] === Conteúdo direto de public/ ===');
        for (const f of fs.readdirSync(publicDir)) {
          const stat = fs.statSync(path.join(publicDir, f));
          console.log(`  - ${f}${stat.isDirectory() ? '/' : ''}`);
        }
      } catch (err) {
        console.warn('[assets] skipped:', err.message);
      }
    },
  };
}

export default defineConfig({
  plugins: [autoInstallPlugin(), react(), copyUserAssetsPlugin()],
  server: {
    port: 5173,
    open: true,
    // touch para forçar restart e reexecutar o plugin de cópia de assets v2
  },
});

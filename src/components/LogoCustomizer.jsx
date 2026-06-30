import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Upload, Trash2, ZoomIn, MoveVertical, MoveHorizontal, RotateCw, Sparkles, ArrowUpRight, Palette, Check, Wand2, Loader2 } from 'lucide-react';
import { removeImageBackground } from '../utils/removeImageBackground.js';

// Posicionamento ideal padrão (centro da área da sacola visível no mockup).
const DEFAULTS = {
  scale: 42,
  xPos: 50,
  yPos: 56,
  rotation: 0,
  logoColor: 'original',
};

export default function LogoCustomizer() {
  const fileRef = useRef();
  const [logo, setLogo] = useState(null);          // logo com fundo removido (default)
  const [originalLogo, setOriginalLogo] = useState(null); // versão original
  const [removeBg, setRemoveBg] = useState(true);  // toggle "remover fundo"
  const [processing, setProcessing] = useState(false);
  const [scale, setScale] = useState(DEFAULTS.scale);
  const [xPos, setXPos] = useState(DEFAULTS.xPos);
  const [yPos, setYPos] = useState(DEFAULTS.yPos);
  const [rotation, setRotation] = useState(DEFAULTS.rotation);
  const [logoColor, setLogoColor] = useState(DEFAULTS.logoColor);
  const [justUploaded, setJustUploaded] = useState(false);

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) return;

    setScale(DEFAULTS.scale);
    setXPos(DEFAULTS.xPos);
    setYPos(DEFAULTS.yPos);
    setRotation(DEFAULTS.rotation);
    setLogoColor(DEFAULTS.logoColor);

    const reader = new FileReader();
    reader.onload = async (ev) => {
      const src = ev.target.result;
      setOriginalLogo(src);
      setProcessing(true);
      // Para SVG não há "fundo branco" pra remover — usa direto
      const isSvg = file.type === 'image/svg+xml';
      try {
        const out = isSvg || !removeBg
          ? src
          : await removeImageBackground(src, { tolerance: 38, feather: true });
        setLogo(out);
      } catch (err) {
        console.warn('Background removal failed, using original:', err);
        setLogo(src);
      } finally {
        setProcessing(false);
        setJustUploaded(true);
      }
    };
    reader.readAsDataURL(file);
  };

  // Reprocessa quando o usuário ativa/desativa a remoção de fundo
  useEffect(() => {
    if (!originalLogo) return;
    if (!removeBg) {
      setLogo(originalLogo);
      return;
    }
    let cancelled = false;
    setProcessing(true);
    removeImageBackground(originalLogo, { tolerance: 38, feather: true })
      .then((out) => {
        if (!cancelled) setLogo(out);
      })
      .catch(() => {
        if (!cancelled) setLogo(originalLogo);
      })
      .finally(() => {
        if (!cancelled) setProcessing(false);
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [removeBg, originalLogo]);

  useEffect(() => {
    if (!justUploaded) return;
    const t = setTimeout(() => setJustUploaded(false), 2500);
    return () => clearTimeout(t);
  }, [justUploaded]);

  const reset = () => {
    setLogo(null);
    setOriginalLogo(null);
    setScale(DEFAULTS.scale);
    setXPos(DEFAULTS.xPos);
    setYPos(DEFAULTS.yPos);
    setRotation(DEFAULTS.rotation);
    setLogoColor(DEFAULTS.logoColor);
    if (fileRef.current) fileRef.current.value = '';
  };

  const colorFilters = {
    original: 'none',
    orange: 'brightness(0) saturate(100%) invert(48%) sepia(96%) saturate(2438%) hue-rotate(2deg) brightness(105%) contrast(105%)',
    white: 'brightness(0) invert(1)',
    black: 'brightness(0)',
  };

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-50/40 via-white to-brand-50/30" />
      <div className="absolute -top-32 -right-32 -z-10 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 -z-10 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl" />

      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="chip mx-auto">
            <Sparkles className="h-3.5 w-3.5" />
            FERRAMENTA INTERATIVA
          </span>
          <h2 className="section-title mt-5">
            Veja sua <span className="text-gradient">logo na sacola</span> agora
          </h2>
          <p className="mt-5 text-lg text-ink-700/85">
            Envie sua logo e ela aparece automaticamente impressa em uma sacola Saluz —
            depois é só ajustar se quiser.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          {/* preview à esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden bg-stone-100 border border-ink-900/5 shadow-2xl aspect-square">
              <img
                src="/images/sacola-cozinha.png"
                alt="Sacola Saluz"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* área da logo sobreposta — IMPORTANTE: div estático com transform CSS controla posição+rotação,
                  o motion.img dentro só anima opacity (não conflita) */}
              {logo && (
                <div
                  className="absolute pointer-events-none"
                  style={{
                    left: `${xPos}%`,
                    top: `${yPos}%`,
                    width: `${scale}%`,
                    transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                    transition: 'transform 0.18s ease, left 0.18s ease, top 0.18s ease, width 0.18s ease',
                  }}
                >
                  <motion.img
                    key={logo}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    src={logo}
                    alt="Sua logo"
                    className="w-full h-auto object-contain drop-shadow-[0_6px_20px_rgba(0,0,0,0.18)]"
                    style={{
                      filter: colorFilters[logoColor],
                      mixBlendMode: logoColor === 'white' ? 'normal' : 'multiply',
                    }}
                  />
                </div>
              )}

              {/* placeholder dropzone quando ainda não há logo */}
              {!logo && (
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="bg-white/85 backdrop-blur-md rounded-3xl p-8 max-w-sm text-center border-2 border-dashed border-brand-300">
                    <Upload className="h-10 w-10 text-brand-600 mx-auto" />
                    <p className="mt-4 font-display text-xl font-bold text-ink-900">
                      Envie sua logo
                    </p>
                    <p className="mt-2 text-sm text-ink-700/70">
                      Suba PNG, JPG ou SVG. Removemos o fundo automaticamente e aplicamos na sacola.
                    </p>
                    <button
                      onClick={() => fileRef.current?.click()}
                      className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-600 text-white px-6 py-3 text-sm font-semibold hover:bg-brand-700 transition-colors"
                    >
                      <Upload className="h-4 w-4" /> Escolher arquivo
                    </button>
                  </div>
                </div>
              )}

              {/* badge "preview" */}
              <div className="absolute top-4 left-4 z-10">
                <span className="rounded-full bg-ink-900/80 backdrop-blur text-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Preview ao vivo
                </span>
              </div>

              {/* toast "logo aplicada" */}
              <AnimatePresence>
                {justUploaded && (
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="absolute top-4 right-4 z-10 rounded-full bg-emerald-500 text-white px-3 py-1.5 text-[11px] font-bold flex items-center gap-1.5 shadow-lg"
                  >
                    <Check className="h-3.5 w-3.5" />
                    Logo aplicada
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <input
              type="file"
              ref={fileRef}
              accept="image/*"
              onChange={handleFile}
              className="hidden"
            />
          </motion.div>

          {/* controles à direita */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl bg-white border border-ink-900/5 shadow-xl p-7 lg:p-8 h-full flex flex-col">
              <h3 className="font-display text-2xl font-bold">Personalizar</h3>
              <p className="mt-1 text-sm text-ink-700/70">
                Sua logo aparece centralizada automaticamente. Ajuste só se quiser.
              </p>

              {/* upload */}
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-700/70 mb-2">
                  Arquivo da logo
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => fileRef.current?.click()}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-600 text-white px-5 py-3 text-sm font-semibold hover:bg-brand-700 transition-colors"
                  >
                    <Upload className="h-4 w-4" /> {logo ? 'Trocar logo' : 'Enviar logo'}
                  </button>
                  {logo && (
                    <button
                      onClick={reset}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-ink-900/10 bg-white px-5 py-3 text-sm font-semibold text-ink-700 hover:bg-stone-50 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  )}
                </div>
                <p className="mt-2 text-xs text-ink-700/50">
                  Pode enviar com fundo branco — a gente remove automaticamente.
                </p>
              </div>

              {/* toggle remoção de fundo */}
              <div className="mt-5 rounded-2xl border border-ink-900/8 bg-stone-50 p-3.5">
                <label className="flex items-center gap-3 cursor-pointer">
                  <div className="relative flex-shrink-0">
                    <input
                      type="checkbox"
                      checked={removeBg}
                      onChange={(e) => setRemoveBg(e.target.checked)}
                      className="peer sr-only"
                    />
                    <div className="h-6 w-11 rounded-full bg-ink-900/15 peer-checked:bg-brand-600 transition-colors" />
                    <div className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-md transition-transform peer-checked:translate-x-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-ink-900 flex items-center gap-1.5">
                      <Wand2 className="h-3.5 w-3.5 text-brand-600" />
                      Remover fundo automaticamente
                    </p>
                    <p className="text-[11px] text-ink-700/60">
                      Detecta o fundo (branco/sólido) e deixa transparente.
                    </p>
                  </div>
                  {processing && <Loader2 className="h-4 w-4 text-brand-600 animate-spin flex-shrink-0" />}
                </label>
              </div>

              {/* sliders */}
              <div className="mt-6 space-y-5">
                <Slider
                  icon={ZoomIn}
                  label="Tamanho"
                  value={scale}
                  onChange={setScale}
                  min={15}
                  max={80}
                  unit="%"
                  disabled={!logo}
                />
                <Slider
                  icon={MoveHorizontal}
                  label="Posição horizontal"
                  value={xPos}
                  onChange={setXPos}
                  min={10}
                  max={90}
                  unit="%"
                  disabled={!logo}
                />
                <Slider
                  icon={MoveVertical}
                  label="Posição vertical"
                  value={yPos}
                  onChange={setYPos}
                  min={25}
                  max={85}
                  unit="%"
                  disabled={!logo}
                />
                <Slider
                  icon={RotateCw}
                  label="Rotação"
                  value={rotation}
                  onChange={setRotation}
                  min={-180}
                  max={180}
                  step={1}
                  unit="°"
                  disabled={!logo}
                />
              </div>

              {/* cor */}
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-700/70 mb-2 flex items-center gap-1.5">
                  <Palette className="h-3.5 w-3.5" /> Cor da impressão
                </p>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { id: 'original', label: 'Original', sample: 'linear-gradient(45deg, #FF6600, #1a1a1f)' },
                    { id: 'orange', label: 'Laranja', sample: '#FF6600' },
                    { id: 'black', label: 'Preto', sample: '#0a0a0c' },
                    { id: 'white', label: 'Branco', sample: '#ffffff' },
                  ].map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setLogoColor(c.id)}
                      disabled={!logo}
                      className={`rounded-2xl border-2 px-2 py-3 text-[11px] font-semibold transition-all ${
                        !logo
                          ? 'opacity-50 cursor-not-allowed border-ink-900/10 bg-white text-ink-700'
                          : logoColor === c.id
                            ? 'border-brand-600 bg-brand-50 text-brand-700'
                            : 'border-ink-900/10 bg-white text-ink-700 hover:border-brand-200'
                      }`}
                    >
                      <div
                        className="h-6 w-6 rounded-full mx-auto mb-1.5 border border-ink-900/10"
                        style={{ background: c.sample }}
                      />
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* botão de reset rápido */}
              {logo && (
                <button
                  onClick={() => {
                    setScale(DEFAULTS.scale);
                    setXPos(DEFAULTS.xPos);
                    setYPos(DEFAULTS.yPos);
                    setRotation(DEFAULTS.rotation);
                    setLogoColor(DEFAULTS.logoColor);
                  }}
                  className="mt-5 text-xs font-semibold text-ink-700/70 hover:text-brand-600 transition-colors self-start inline-flex items-center gap-1.5"
                >
                  <RotateCw className="h-3 w-3" />
                  Recentralizar logo
                </button>
              )}

              <div className="flex-1" />

              {/* CTA */}
              <div className="mt-7 pt-6 border-t border-ink-900/10 space-y-3">
                <Link
                  to="/contato"
                  className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 text-white px-7 py-3.5 font-semibold shadow-brand hover:scale-[1.02] transition-transform"
                >
                  Quero esta sacola com minha logo
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Personalizei%20uma%20sacola%20no%20site%20e%20gostaria%20de%20um%20or%C3%A7amento."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-ink-900/10 bg-white text-ink-800 px-7 py-3.5 font-semibold hover:bg-stone-50 transition-colors"
                >
                  Falar no WhatsApp com a arte
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* dicas */}
        <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {[
            { num: '01', title: 'PNG transparente', text: 'Para melhor resultado, envie a logo em PNG com fundo transparente.' },
            { num: '02', title: 'Resolução alta', text: 'Mínimo 600x600px. Quanto maior, melhor a qualidade da impressão.' },
            { num: '03', title: 'Vetor de preferência', text: 'Se tiver SVG, ainda melhor — escalável para qualquer tamanho.' },
          ].map((tip) => (
            <div key={tip.num} className="rounded-2xl bg-white border border-ink-900/5 p-5">
              <p className="font-display text-2xl font-black text-brand-200">{tip.num}</p>
              <p className="mt-1 font-semibold text-ink-900">{tip.title}</p>
              <p className="mt-1 text-sm text-ink-700/70">{tip.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Slider({ icon: Icon, label, value, onChange, min, max, step = 1, unit = '%', disabled = false }) {
  return (
    <div className={disabled ? 'opacity-50' : ''}>
      <div className="flex items-center justify-between mb-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-ink-700/70 flex items-center gap-1.5">
          <Icon className="h-3.5 w-3.5" /> {label}
        </p>
        <span className="text-xs font-bold text-brand-600 tabular-nums">{value}{unit}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        disabled={disabled}
        className="w-full accent-brand-600 disabled:cursor-not-allowed"
      />
    </div>
  );
}

import { motion } from 'framer-motion';

/**
 * Background animado global — vive atrás de tudo no app.
 * Tudo posicionado fixed e pointer-events-none para nunca interferir nos cliques.
 */
export default function AnimatedBackground() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* gradiente base */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-50/25 to-white" />

      {/* mesh de pontos sutil */}
      <div className="absolute inset-0 bg-dots opacity-50" />

      {/* listras industriais diagonais */}
      <div className="absolute inset-0 bg-stripes opacity-60" />

      {/* RAY conic animado */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-ray opacity-30" />

      {/* Blob laranja morphing topo direita */}
      <motion.div
        animate={{
          x: [0, 50, -25, 0],
          y: [0, 30, 15, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-40 -right-40 h-[600px] w-[600px] blob-morph bg-brand-500/20 blur-[120px]"
      />

      {/* Blob laranja meio esquerda */}
      <motion.div
        animate={{
          x: [0, -35, 30, 0],
          y: [0, 40, -10, 0],
          scale: [1, 0.95, 1.1, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 -left-60 h-[500px] w-[500px] blob-morph bg-brand-600/15 blur-[140px]"
      />

      {/* Blob inferior centro */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -20, 30, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-40 left-1/3 h-[700px] w-[700px] blob-morph bg-brand-500/10 blur-[160px]"
      />

      {/* Blob secundário superior esquerda */}
      <motion.div
        animate={{
          x: [0, 25, -15, 0],
          y: [0, 50, 25, 0],
          rotate: [0, 30, -20, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-1/4 h-[400px] w-[400px] blob-morph bg-brand-400/15 blur-[110px]"
      />

      {/* linhas SVG decorativas */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.05]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1000 1000"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF6600" />
            <stop offset="100%" stopColor="#c44a17" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 0 200 Q 250 100 500 250 T 1000 300"
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
        />
        <motion.path
          d="M 0 700 Q 300 800 600 650 T 1000 750"
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse', delay: 1 }}
        />
        <motion.path
          d="M 100 100 Q 200 400 400 350 T 900 500"
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse', delay: 2 }}
        />
      </svg>

      {/* anéis decorativos rotativos (visíveis em telas grandes) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-20 -right-20 h-[600px] w-[600px] rounded-full border border-brand-300/20"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-10 -right-10 h-[500px] w-[500px] rounded-full border border-brand-300/15 border-dashed"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-1/4 -left-32 h-[500px] w-[500px] rounded-full border border-brand-400/15"
      />

      {/* partículas flutuantes (laranja) */}
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-brand-500/40"
          style={{
            left: `${(i * 73) % 100}%`,
            top: `${(i * 47) % 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.6, 1],
          }}
          transition={{
            duration: 6 + (i % 5),
            repeat: Infinity,
            delay: i * 0.4,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* "snowflakes" maiores (alguns pontos maiores e mais lentos) */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`big-${i}`}
          className="absolute h-3 w-3 rounded-full bg-brand-400/30 blur-sm"
          style={{
            left: `${10 + (i * 18) % 90}%`,
            top: `${20 + (i * 27) % 70}%`,
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, 20, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            delay: i * 1.2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

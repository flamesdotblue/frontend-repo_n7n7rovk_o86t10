import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] overflow-hidden">
      {/* 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text contrast (does not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-28 md:pt-32 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
            Introducing
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
            Base X — Community Name Builder
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-slate-700">
            Craft memorable names for communities, projects, and teams. Powered by playful design and smart patterns to spark inspiration.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              href="#demo"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-white shadow-lg shadow-slate-900/10 transition-colors hover:bg-slate-800"
            >
              Try the demo
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              href="#features"
              className="inline-flex items-center justify-center rounded-lg bg-white/80 backdrop-blur px-5 py-3 text-slate-900 ring-1 ring-slate-200 transition-colors hover:bg-white"
            >
              Explore features
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

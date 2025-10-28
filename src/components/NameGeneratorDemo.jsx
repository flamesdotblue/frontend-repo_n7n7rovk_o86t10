import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const prefixes = ['Neo', 'Hyper', 'Meta', 'Open', 'Proto', 'Ultra', 'Nova', 'Prime', 'Astra', 'Pulse'];
const cores = ['Base', 'Hub', 'Nest', 'Forge', 'Guild', 'Loop', 'Grid', 'Verse', 'Collective', 'Core'];
const suffixes = ['X', 'Lab', 'Works', 'OS', 'DAO', 'Club', 'Space', 'Engine', 'Cloud', 'Stack'];

function generate(input) {
  const seed = input.trim();
  const base = seed ? seed.replace(/[^a-zA-Z0-9]/g, '') : 'Base';
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  const picks = [
    `${cap(base)} ${suffixes[Math.floor(Math.random() * suffixes.length)]}`,
    `${prefixes[Math.floor(Math.random() * prefixes.length)]}${cap(base)}`,
    `${cap(base)} ${cores[Math.floor(Math.random() * cores.length)]}`,
    `${prefixes[Math.floor(Math.random() * prefixes.length)]} ${cap(base)} ${suffixes[Math.floor(Math.random() * suffixes.length)]}`,
    `${cap(base)}ly`,
    `${cap(base)}line`,
  ];
  // de-duplicate and limit
  return Array.from(new Set(picks)).slice(0, 5);
}

export default function NameGeneratorDemo() {
  const [term, setTerm] = useState('community');
  const ideas = useMemo(() => generate(term), [term]);
  const [saved, setSaved] = useState([]);

  return (
    <section id="demo" className="relative w-full py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Try the name builder</h2>
          <p className="mt-3 text-slate-600">Type a theme or keyword and get instant, brandable ideas.</p>
        </div>

        <div className="mt-10 mx-auto max-w-2xl">
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
            <input
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="e.g. dev, art, crypto, design"
              className="flex-1 rounded-lg px-4 py-3 outline-none text-slate-800 placeholder:text-slate-400"
            />
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={() => setTerm(term.trim())}
              className="rounded-lg bg-slate-900 px-4 py-3 text-white"
            >
              Refresh
            </motion.button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <AnimatePresence>
            {ideas.map((idea) => (
              <motion.div
                key={idea}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <span className="font-medium text-slate-900">{idea}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => navigator.clipboard.writeText(idea)}
                    className="text-sm rounded-lg px-3 py-2 bg-slate-100 text-slate-700 hover:bg-slate-200"
                  >
                    Copy
                  </button>
                  <button
                    onClick={() => setSaved((s) => (s.includes(idea) ? s : [...s, idea]))}
                    className="text-sm rounded-lg px-3 py-2 bg-slate-900 text-white"
                  >
                    Save
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {saved.length > 0 && (
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-slate-900">Your shortlist</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {saved.map((s) => (
                <div key={s} className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-3">
                  <span className="text-slate-800">{s}</span>
                  <button
                    onClick={() => setSaved((list) => list.filter((x) => x !== s))}
                    className="text-xs text-slate-600 hover:text-slate-900"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

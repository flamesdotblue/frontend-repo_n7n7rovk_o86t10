import { motion } from 'framer-motion';
import { Rocket, Sparkles, Users, Shield } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Launch-ready names',
    desc: 'Get punchy, brandable names that look great on socials and domains.'
  },
  {
    icon: Sparkles,
    title: 'Pattern presets',
    desc: 'Mix prefixes, suffixes, and styles to match your community vibe.'
  },
  {
    icon: Users,
    title: 'Made for teams',
    desc: 'Collaborate on shortlists and gather instant feedback.'
  },
  {
    icon: Shield,
    title: 'Clash awareness',
    desc: 'Highlights similar names to help you avoid look‑alikes.'
  }
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative w-full py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Why Base X?</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Purpose-built to help communities find names that stick and scale.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-slate-900 text-white">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

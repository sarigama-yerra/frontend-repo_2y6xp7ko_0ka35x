import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative bg-slate-950 py-24">
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/20 border border-white/10" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white">About</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              I’m a frontend developer focused on creating polished user experiences. I blend solid engineering with playful interactions to make products that feel alive.
            </p>
            <p className="mt-3 text-slate-300 leading-relaxed">
              I work with startups and design teams to prototype quickly, validate ideas, and ship production quality interfaces that scale.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['React', 'TypeScript-ready', 'Tailwind', 'Radix UI', 'Framer Motion', 'Spline 3D', 'Accessibility'].map((s) => (
                <span key={s} className="text-xs bg-white/10 text-slate-200 px-2 py-1 rounded">{s}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

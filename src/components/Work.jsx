import { motion } from 'framer-motion'
import { ExternalLink, Github, Star } from 'lucide-react'

const projects = [
  {
    title: 'Interactive 3D Landing',
    description: 'Playful hero with Spline + Framer Motion. Responsive and accessible.',
    tags: ['React', 'Spline', 'Framer Motion', 'Tailwind'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Design System Starter',
    description: 'Token-based theming, components, and docs built with Radix + Tailwind.',
    tags: ['Radix', 'Tailwind', 'CVA'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Realtime Dashboard',
    description: 'WebSocket-powered charts and live status indicators with clean UX.',
    tags: ['React', 'WebSocket', 'Charts'],
    link: '#',
    repo: '#',
  },
]

export default function Work() {
  return (
    <section id="work" className="relative bg-slate-950 py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 via-slate-900/20 to-slate-900/0 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Selected Work</h2>
            <p className="mt-2 text-slate-400">A few projects that highlight my approach and capabilities.</p>
          </div>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center gap-2 text-slate-200 hover:text-white">
            <Star size={16} /> More on GitHub
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-white/0"
            >
              <div className="aspect-video bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/20" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[11px] uppercase tracking-wide bg-white/10 text-slate-200 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <a href={p.link} className="inline-flex items-center gap-1 text-slate-200 hover:text-white"><ExternalLink size={14}/> Live</a>
                  <a href={p.repo} className="inline-flex items-center gap-1 text-slate-200 hover:text-white"><Github size={14}/> Code</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

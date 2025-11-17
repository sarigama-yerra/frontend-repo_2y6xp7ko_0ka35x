import { Code2, Layout, Palette, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Layout,
    title: 'Frontend Engineering',
    desc: 'Clean, accessible, performant React apps with modern tooling and TypeScript-ready patterns.'
  },
  {
    icon: Palette,
    title: 'UI/UX Implementation',
    desc: 'Pixel-perfect, responsive interfaces from Figma to production with Tailwind and Radix.'
  },
  {
    icon: Sparkles,
    title: 'Motion & Interactions',
    desc: 'Micro-interactions and page transitions that feel delightful, powered by Framer Motion + 3D.'
  },
  {
    icon: Code2,
    title: 'Design Systems',
    desc: 'Token-driven theming, component libraries, and documentation that scale with your team.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative bg-slate-950 py-24 border-t border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Services</h2>
        <p className="mt-2 text-slate-400 max-w-2xl">From concept to polished product, I partner with founders and teams to ship fast and look great.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
              <Icon className="text-cyan-300" />
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

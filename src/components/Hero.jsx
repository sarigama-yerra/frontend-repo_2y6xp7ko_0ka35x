import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/50 to-slate-950 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-slate-200">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for freelance work
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Frontend Developer crafting playful, modern web experiences
          </h1>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            I design and build responsive interfaces with React, motion, and 3D interactions. Let’s turn ideas into delightful products.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#work" className="inline-flex items-center justify-center rounded-md bg-white text-slate-900 px-5 py-3 font-semibold shadow-sm hover:bg-slate-100">
              View my work
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white/10 text-white px-5 py-3 font-semibold border border-white/10 hover:bg-white/15">
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

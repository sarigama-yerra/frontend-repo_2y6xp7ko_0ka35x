import { useState } from 'react'
import { Send } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      // For now, mock submit. Could be wired to a backend endpoint later.
      await new Promise((r) => setTimeout(r, 800))
      setStatus('Thanks! I’ll get back to you soon.')
      e.target.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="relative bg-slate-950 py-24 border-t border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(56,189,248,0.12),transparent_60%)]" />
      <div className="relative max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s build something great</h2>
        <p className="mt-2 text-slate-400">Tell me about your project and timeline. I’ll reply within 1-2 business days.</p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          <input name="name" required placeholder="Your name" className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
          <input name="email" required type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
          <input name="company" placeholder="Company (optional)" className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
          <textarea name="message" required rows="5" placeholder="Tell me about your project" className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
          <button type="submit" className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 font-semibold px-5 py-3 rounded-md hover:bg-slate-100">
            <Send size={16} /> Send message
          </button>
          {status && <p className="text-sm text-slate-300">{status}</p>}
        </form>
      </div>
    </section>
  )
}

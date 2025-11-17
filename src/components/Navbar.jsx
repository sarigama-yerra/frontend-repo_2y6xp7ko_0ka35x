import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

function NavLink({ href, children, onClick }) {
  return (
    <a href={href} onClick={onClick} className="text-sm md:text-base text-slate-200 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group" onClick={close}>
            <div className="w-8 h-8 rounded-md bg-gradient-to-tr from-fuchsia-500 to-cyan-400 shadow-lg" />
            <span className="text-white font-semibold tracking-wide group-hover:opacity-90">YourName.dev</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#work">Work</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/10 text-slate-200 hover:text-white"><Github size={18} /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/10 text-slate-200 hover:text-white"><Linkedin size={18} /></a>
            <a href="#contact" className="ml-2 inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-md">
              <Mail size={16} /> Hire me
            </a>
          </div>

          <button className="md:hidden text-white p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="grid gap-4">
              <NavLink href="#work" onClick={close}>Work</NavLink>
              <NavLink href="#services" onClick={close}>Services</NavLink>
              <NavLink href="#about" onClick={close}>About</NavLink>
              <NavLink href="#contact" onClick={close}>Contact</NavLink>
              <div className="flex items-center gap-4 pt-2">
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/10 text-slate-200 hover:text-white"><Github size={18} /></a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/10 text-slate-200 hover:text-white"><Linkedin size={18} /></a>
                <a href="mailto:hello@example.com" className="p-2 rounded-md hover:bg-white/10 text-slate-200 hover:text-white"><Mail size={18} /></a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

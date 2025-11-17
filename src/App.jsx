import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Services />
        <About />
        <Contact />
      </main>
      <footer className="bg-slate-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 text-slate-400 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p className="opacity-80">Built with React, Tailwind, and playful 3D.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

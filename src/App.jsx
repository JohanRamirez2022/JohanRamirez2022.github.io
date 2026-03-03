// src/App.jsx
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="space-wrapper">
      {/* Tiny pixel galaxies */}
      <div className="pixel-galaxy pixel-galaxy-1" />
      <div className="pixel-galaxy pixel-galaxy-2" />
      <div className="pixel-galaxy pixel-galaxy-3" />

      {/* Star layers */}
      <div className="stars stars-1" />
      <div className="stars stars-2" />
      <div className="stars stars-3" />

      {/* Pixel shooting stars */}
      <div className="shooting-star shooting-star-1" />
      <div className="shooting-star shooting-star-2" />

      {/* Top navigation across full width */}
      <header className="top-nav">
        <nav className="top-nav-inner">
          <a href="#hero" className="nav-link">
            Hero
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#experience" className="nav-link">
            Experience
          </a>
          <a href="#skills" className="nav-link">
            Skills
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>
      </header>

      {/* Main portfolio content */}
      <main className="content">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App
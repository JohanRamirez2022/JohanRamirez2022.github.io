// src/components/Hero.jsx

function Hero() {
  const handleScrollToProjects = () => {
    const el = document.getElementById('projects')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="section hero">

      <h1 className="hero-title">Hey, I'm Johan!</h1>
      <p className="hero-subtitle">CS Student @ UNR &amp; Business Intelligence Analyst Intern</p>
      <p className="hero-text">
        I&apos;m currently in my last semester, and I'm looking to pursue a career relating to data engineering or data science.
      </p>
      <div className="hero-actions">
        <button type="button" className="hero-cta" onClick={handleScrollToProjects}>
          View my projects
        </button>
      </div>
    </section>
  )
}

export default Hero


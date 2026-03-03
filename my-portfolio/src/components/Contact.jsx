// src/components/Contact.jsx

function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact</h2>
      <p className="section-text">
        Want to say hi, talk about an internship, or share feedback about my projects?
      </p>
      <p className="section-text">
        You can reach me at{' '}
        <a href="mailto:example@email.com" className="link">
          example@email.com
        </a>{' '}
        or find me on{' '}
        <a href="https://github.com/" target="_blank" rel="noreferrer" className="link">
          GitHub
        </a>{' '}
        and{' '}
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          LinkedIn
        </a>
        . (Replace these with your real links.)
      </p>
    </section>
  )
}

export default Contact


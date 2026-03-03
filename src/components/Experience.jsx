// src/components/Experience.jsx

const experiences = [
  {
    role: 'Business Intelligence Analyst Intern',
    company: 'Your Company',
    period: '20XX – Present',
    description:
      'Working with large datasets in Google BigQuery to surface insights for engineering, product, and data teams.',
  },
  {
    role: 'Computer Science & Engineering Student',
    company: 'University of Nevada, Reno',
    period: '20XX – Present',
    description:
      'Focusing on data-related topics like data engineering, data science, and machine learning.',
  },
]

function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>
      <p className="section-text section-text-muted">
        A quick snapshot of where I&apos;ve been learning and applying what I know.
      </p>
      <div className="experience-list">
        {experiences.map((exp) => (
          <article key={exp.role} className="experience-item">
            <h3 className="experience-role">{exp.role}</h3>
            <p className="experience-meta">
              <span className="experience-company">{exp.company}</span>
              <span className="experience-dot">•</span>
              <span className="experience-period">{exp.period}</span>
            </p>
            <p className="experience-description">{exp.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience


// src/components/Projects.jsx

const projects = [
  {
    title: 'Project One',
    description:
      'A placeholder project where I practiced building a responsive UI and working with React components.',
    tags: ['React', 'CSS', 'Responsive'],
  },
  {
    title: 'Project Two',
    description:
      'An experimental app focused on state management and handling user interactions smoothly.',
    tags: ['JavaScript', 'UX', 'State'],
  },
  {
    title: 'Project Three',
    description:
      'A small tool that helped me automate a repetitive task and learn more about web APIs.',
    tags: ['API', 'Automation', 'Learning'],
  },
]

function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <p className="section-text section-text-muted">
        A few things I&apos;ve been working on recently. These are placeholders you can
        later replace with your real projects.
      </p>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects


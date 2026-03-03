// src/components/Skills.jsx

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'Problem Solving']

function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <p className="section-text section-text-muted">
        Technologies and skills I&apos;m actively learning and using.
      </p>
      <div className="skills-list">
        {skills.map((skill) => (
          <span key={skill} className="skill-pill">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Skills


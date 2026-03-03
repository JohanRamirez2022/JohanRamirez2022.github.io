// src/components/About.jsx

function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      <p className="section-text">
        I'm Johan, a CSE student at UNR. Currently my interests like in anything that relates to data! This include machine learning, 
        data science, data engineering, and data visualization.
      </p>
      <p className="section-text">
        As a business intelligence intern, I spend much of my time wrangling data in Google BigQuery, in order to pull insights that the engineering, product and DS/ML teams could all use to make more informed decisions.
      </p>
      <p className="section-text">
        My work stems well beyond just analyzing data. In my most recent project,
         I'm developing the logic needed to increase the quality of one of our most important data pipelines, 
         and creating models along with evaluating and communicating the findings of my logic to key stakeholders.
      </p>
      <p className="section-text">
         I'm also developing a system with N8N that works to automate the process of pulling and recording monthly KPI metrics for key stakeholders to view, drastically reducing the manual overhead involved in getting this numbers.
      </p>
    </section>
  )
}
export default About


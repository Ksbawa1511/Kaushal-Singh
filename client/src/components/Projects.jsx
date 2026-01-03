function Projects({ items = [] }) {
  if (!items.length) return null;

  return (
    <section className="about-section" id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="about-grid">
          {items.map((item) => (
            <div className="about-card" key={`${item.title}-${item.period}`}>
              <h3>{item.title}</h3>
              <p className="year">{item.period}</p>
              <ul>
                {item.highlights?.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;


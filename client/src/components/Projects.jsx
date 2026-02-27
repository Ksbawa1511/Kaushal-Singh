function Projects({ items = [] }) {
  if (!items.length) return null;

  return (
    <section className="about-section" id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="about-grid">
          {items.map((item) => {
            const Card = item.link ? 'a' : 'div';
            return (
              <Card
                className={`about-card ${item.link ? 'project-card' : ''}`}
                key={`${item.title}-${item.period}`}
                href={item.link || undefined}
                target={item.link ? '_blank' : undefined}
                rel={item.link ? 'noreferrer noopener' : undefined}
                aria-label={item.link ? `${item.title} (opens in new tab)` : undefined}
              >
                <h3>{item.title}</h3>
                <p className="pill">{item.period}</p>
                <ul>
                  {item.highlights?.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                {item.link ? <span className="card-hint">Open project</span> : null}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;


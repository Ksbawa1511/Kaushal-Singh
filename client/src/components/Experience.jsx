function Experience({ items = [] }) {
  if (!items.length) return null;

  return (
    <section id="experience" className="education-section">
      <div className="container">
        <h2>Experience</h2>
        <div className="education-timeline">
          {items.map((item) => (
            <div className="education-item" key={`${item.company}-${item.period}`}>
              <div className="education-content">
                <h3>{item.title}</h3>
                <p className="institution">{item.company}</p>
                <p className="year">{item.period}</p>
                {item.duration ? <p className="meta">{item.duration}</p> : null}
                {item.location ? <p className="meta">{item.location}</p> : null}
                {item.workMode ? <p className="meta">{item.workMode}</p> : null}
                {item.description ? <p className="meta">{item.description}</p> : null}
                {item.highlights?.length ? (
                  <ul>
                    {item.highlights.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

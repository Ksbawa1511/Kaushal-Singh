function Trainings({ items = [] }) {
  if (!items.length) return null;

  return (
    <section className="education-section" id="trainings">
      <div className="container">
        <h2>Trainings & Certifications</h2>
        <div className="education-timeline">
          {items.map((item) => (
            <div className="education-item" key={`${item.title}-${item.period}`}>
              <div className="education-content">
                <h3>{item.title}</h3>
                <p className="institution">{item.provider}</p>
                <p className="year">{item.period}</p>
                {item.description ? <p className="meta">{item.description}</p> : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trainings;


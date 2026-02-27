function Education({ items = [] }) {
  if (!items.length) return null;

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2>Education</h2>
        <div className="education-timeline">
          {items.map((item) => (
            <div className="education-item" key={`${item.degree}-${item.year}`}>
              <div className="education-content">
                <h3>{item.degree}</h3>
                <p className="institution">{item.institution}</p>
                <p className="year">{item.year}</p>
                {item.detail ? <p className="meta">{item.detail}</p> : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;


function About({ data }) {
  if (!data) return null;

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-grid">
          <div className="about-card">
            <h3>Career Objective</h3>
            <p className="objective">{data.objective}</p>
          </div>

          <div className="about-card">
            <h3>Contact</h3>
            <ul>
              {data.contact?.map((item) => (
                <li key={item.label}>
                  <strong>{item.label}:</strong>{' '}
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noreferrer noopener' : undefined}
                      className="muted-link"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;


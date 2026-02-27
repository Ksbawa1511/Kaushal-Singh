function Hero({ data }) {
  if (!data) return null;

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>
          Hi, I'm <span className="highlight">{data.highlight || data.name}</span>
        </h1>
        <p className="tagline">{data.tagline}</p>
        {data.typingText && <div className="typing-text">{data.typingText}</div>}
        <p className="hero-description">{data.description}</p>
        <div className="hero-actions">
          {data.resumeLink ? (
            <a className="btn primary" href={data.resumeLink} target="_blank" rel="noreferrer">
              Download Resume
            </a>
          ) : null}
          <a className="btn ghost" href="#projects">
            View Projects
          </a>
        </div>
      </div>

      {data.image ? (
        <div className="hero-image">
          <img
            src={data.image}
            alt={data.name || 'Profile'}
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 220px, 260px"
          />
        </div>
      ) : null}
    </section>
  );
}

export default Hero;


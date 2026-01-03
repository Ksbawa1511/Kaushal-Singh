function Skills({ data }) {
  if (!data) return null;

  const groups = [
    { title: 'Technical Skills', items: data.technical },
    { title: 'Soft Skills', items: data.soft },
    { title: 'Other', items: data.other }
  ].filter((group) => group.items && group.items.length);

  if (!groups.length) return null;

  return (
    <section className="about-section" id="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="about-grid">
          {groups.map((group) => (
            <div className="about-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tag-list">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;


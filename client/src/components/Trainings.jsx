import { useEffect, useRef, useState } from 'react';

function Trainings({ items = [] }) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const closeButtonRef = useRef(null);

  if (!items.length) return null;

  const activeItem = activeIndex >= 0 ? items[activeIndex] : null;

  const openCard = (idx) => {
    setActiveIndex(idx);
  };

  const closeCard = () => setActiveIndex(-1);

  useEffect(() => {
    if (activeItem) {
      const handler = (e) => {
        if (e.key === 'Escape') closeCard();
      };
      window.addEventListener('keydown', handler);
      document.body.style.overflow = 'hidden';
      closeButtonRef.current?.focus();
      return () => {
        window.removeEventListener('keydown', handler);
        document.body.style.overflow = '';
      };
    }
  }, [activeItem]);

  return (
    <section className="education-section" id="trainings">
      <div className="container">
        <h2>Trainings & Certifications</h2>
        <div className="education-timeline">
          {items.map((item, idx) => (
            <div className="education-item" key={`${item.title}-${item.period}`}>
              <button
                className="education-content education-card-button"
                onClick={() => openCard(idx)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openCard(idx);
                  }
                }}
                aria-expanded={activeIndex === idx}
              >
                <h3>{item.title}</h3>
                <p className="institution">{item.provider}</p>
                <p className="year">{item.period}</p>
                {item.description ? <p className="meta">{item.description}</p> : null}
                <span className="card-hint">View details & certificate</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {activeItem ? (
        <div className="training-modal" role="dialog" aria-modal="true" aria-labelledby="training-modal-title">
          <div className="training-modal-content">
            <div className="training-modal-header">
              <div>
                <h3 id="training-modal-title">{activeItem.title}</h3>
                <p className="institution">{activeItem.provider}</p>
                <p className="year">{activeItem.period}</p>
              </div>
              <button type="button" className="modal-close" onClick={closeCard} aria-label="Close" ref={closeButtonRef}>
                ×
              </button>
            </div>
            {activeItem.description ? <p className="meta">{activeItem.description}</p> : null}
            {activeItem.certificateImage ? (
              <div className="certificate-wrapper">
                <img
                  className="training-certificate"
                  src={activeItem.certificateImage}
                  alt={`${activeItem.title} certificate`}
                  loading="lazy"
                />
                <a
                  className="certificate-link"
                  href={activeItem.certificateImage}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open certificate in new tab
                </a>
              </div>
            ) : null}
          </div>
          <div className="training-modal-backdrop" onClick={closeCard} />
        </div>
      ) : null}
    </section>
  );
}

export default Trainings;


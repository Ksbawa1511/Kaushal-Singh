function Footer({ socialLinks = [], footer }) {
  const contactLinks = socialLinks.filter(
    (link) => link.url?.startsWith('mailto:') || link.url?.startsWith('tel:')
  );
  const mediaLinks = socialLinks.filter(
    (link) => !link.url?.startsWith('mailto:') && !link.url?.startsWith('tel:')
  );

  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Connect With Me</h3>
            {contactLinks.length ? (
              <div className="contact-links">
                {contactLinks.map((link) => (
                  <a key={link.url} href={link.url} className="contact-chip">
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
            {mediaLinks.length ? (
              <div className="social-links">
                {mediaLinks.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="social-link"
                  >
                    {link.icon ? <img src={link.icon} alt={link.label} /> : null}
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          <div className="footer-bottom">
            <p>{footer?.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


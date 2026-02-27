import { useEffect, useRef, useState } from 'react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Trainings', href: '#trainings' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];

function Navbar({ githubUrl = 'https://github.com/ksbawa1511' }) {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!open) return;

      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header>
      <nav>
        <a href="#home" className="logo" onClick={closeMenu}>
          Kaushal Singh
        </a>

        <button
          className={`hamburger ${open ? 'active' : ''}`}
          id="hamburger"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          ref={buttonRef}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <div className={`nav-links ${open ? 'active' : ''}`} id="navLinks" ref={navRef}>
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="nav-cta"
                onClick={closeMenu}
                aria-label="GitHub profile (opens in new tab)"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;


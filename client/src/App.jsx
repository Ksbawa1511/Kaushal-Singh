import { useEffect, useState } from 'react';
import About from './components/About.jsx';
import Education from './components/Education.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Trainings from './components/Trainings.jsx';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

function App() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/profile`);
        if (!response.ok) {
          throw new Error('Unable to fetch profile data');
        }

        const data = await response.json();
        setProfile(data);
      } catch (err) {
        console.error(err);
        setError('Unable to load portfolio data right now.');
      }
    };

    fetchProfile();
  }, []);

  if (error) {
    return <div className="loader error">{error}</div>;
  }

  if (!profile) {
    return <div className="loader">Loading portfolio...</div>;
  }

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero data={profile.hero} />
        <About data={profile.about} />
        <Skills data={profile.skills} />
        <Education items={profile.education} />
        <Trainings items={profile.trainings} />
        <Projects items={profile.projects} />
      </main>
      <Footer socialLinks={profile.socialLinks} footer={profile.footer} />
    </div>
  );
}

export default App;


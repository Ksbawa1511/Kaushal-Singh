import About from './components/About.jsx';
import Education from './components/Education.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Trainings from './components/Trainings.jsx';
import profile from './data/profile.js';

function App() {
  return (
    <div className="app">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar githubUrl={profile.socialLinks?.find((l) => l.label === 'GitHub')?.url} />
      <main id="main-content">
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


import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { AllProjectsPage } from './pages/AllProjectsPage';
import { MusicPage } from './pages/MusicPage';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 transition-colors">
        <Navigation
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<AllProjectsPage />} />
            <Route path="/music" element={<MusicPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

import { Download, FileText } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <Link to="/" className="text-lg font-medium hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
          Neeraj Laul
        </Link>

        <div className="flex items-center gap-8">
          {isHomePage ? (
            <>
              <button
                onClick={() => scrollToSection('home')}
                className={`hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors ${activeSection === 'home' ? 'text-neutral-900 dark:text-neutral-50' : 'text-neutral-500 dark:text-neutral-400'
                  }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors ${activeSection === 'about' ? 'text-neutral-900 dark:text-neutral-50' : 'text-neutral-500 dark:text-neutral-400'
                  }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className={`hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors ${activeSection === 'projects' ? 'text-neutral-900 dark:text-neutral-50' : 'text-neutral-500 dark:text-neutral-400'
                  }`}
              >
                Projects
              </button>
            </>
          ) : (
            <>
              <Link
                to="/"
                className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/projects"
                className={location.pathname === '/projects' ? 'text-neutral-900 dark:text-neutral-50' : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors'}
              >
                Projects
              </Link>
              <Link
                to="/music"
                className={location.pathname === '/music' ? 'text-neutral-900 dark:text-neutral-50' : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors'}
              >
                Music
              </Link>
            </>
          )}

          <a
            href="/files/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-neutral-900 dark:bg-neutral-50 hover:bg-neutral-700 dark:hover:bg-neutral-200 text-white dark:text-neutral-900 px-4 py-2 rounded transition-colors"
          >
            <FileText className="w-4 h-4" />
            Resume
          </a>

        </div>
      </div>
    </nav>
  );
}
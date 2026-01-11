import { Link } from 'react-router-dom';
import { HighlightedProjectCard } from './HighlightedProjectCard';

import { highlightedProjects } from '../data/projectsData';
import { ArrowRight } from 'lucide-react';

export function Projects() {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-3xl">Highlighted Projects</h2>
          <Link
            to="/projects"
            className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="space-y-16">
          {highlightedProjects.map((project, index) => (
            <HighlightedProjectCard key={index} {...project} index={index} />
          ))}

        </div>
      </div>
    </div>
  );
}
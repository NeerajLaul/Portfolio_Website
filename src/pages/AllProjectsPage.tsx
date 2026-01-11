import { allProjects } from '../data/projectsData';
import { ProjectCard } from '../components/ProjectCard';

export function AllProjectsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl mb-4">All Projects</h1>
            <p className="text-neutral-600 dark:text-neutral-400">
              A comprehensive collection of robotics projects spanning autonomous systems, 
              computer vision, and control algorithms.
            </p>
          </div>
          
          <div className="space-y-16">
            {allProjects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

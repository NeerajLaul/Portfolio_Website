import { Github, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  index: number;
  demo?: string;
  videoLink?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  github,
  index,
  demo,
  videoLink,
}: ProjectCardProps) {
  const isEven = index % 2 === 0;

  return (
    <div className={`grid md:grid-cols-2 gap-8 items-center ${!isEven ? 'md:grid-flow-dense' : ''}`}>
      <div className={!isEven ? 'md:col-start-2' : ''}>
        <div className="aspect-[4/3] overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      <div className={!isEven ? 'md:col-start-1 md:row-start-1' : ''}>
        <h3 className="text-2xl mb-3">{title}</h3>
        <p className="text-neutral-600 dark:text-neutral-400 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-sm rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
          >
            <Github className="w-5 h-5" />
            Code
          </a>

          {(demo || videoLink) && (
            <a
              href={demo ?? videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              {demo ? 'Demo' : 'Video'}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

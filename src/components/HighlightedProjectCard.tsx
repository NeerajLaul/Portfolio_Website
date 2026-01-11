import { Github, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HighlightedProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo?: string;
  videoLink?: string;
  videoPreview?: string; // full YT URL
  index: number;
}

function extractYouTubeId(url: string): string | null {
  try {
    const u = new URL(url);

    if (u.hostname === 'youtu.be') {
      return u.pathname.replace('/', '').trim();
    }

    const v = u.searchParams.get('v');
    if (v) return v;

    const parts = u.pathname.split('/').filter(Boolean);
    const embedIdx = parts.indexOf('embed');
    if (embedIdx >= 0 && parts[embedIdx + 1]) return parts[embedIdx + 1];

    return null;
  } catch {
    return null;
  }
}

export function HighlightedProjectCard({
  title,
  description,
  image,
  tags,
  github,
  demo,
  videoLink,
  videoPreview,
  index,
}: HighlightedProjectCardProps) {
  const isEven = index % 2 === 0;
  const videoId = videoPreview ? extractYouTubeId(videoPreview) : null;

  return (
    <div className={`grid md:grid-cols-2 gap-8 items-center ${!isEven ? 'md:grid-flow-dense' : ''}`}>
      <div className={!isEven ? 'md:col-start-2' : ''}>
        <div className="aspect-[4/3] overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800">
          {videoId ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&loop=1&playlist=${videoId}`}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          ) : (
            <ImageWithFallback
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          )}
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
            className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50"
          >
            <Github className="w-5 h-5" />
            Code
          </a>

          {(demo || videoLink) && (
            <a
              href={demo ?? videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50"
            >
              <ExternalLink className="w-5 h-5" />
              {demo ? 'Demo' : 'Watch'}

            </a>
          )}
        </div>
      </div>
    </div>
  );
}

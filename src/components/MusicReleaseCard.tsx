import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink } from 'lucide-react';
import { MusicRelease } from '../data/musicData';

export function MusicReleaseCard({ title, type, releaseDate, coverArt, description, streamingLinks }: MusicRelease) {
  // Get first available streaming link
  const firstLink = streamingLinks.spotify || streamingLinks.youtube || streamingLinks.appleMusic || streamingLinks.soundcloud || streamingLinks.bandcamp;

  return (
    <div className="bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors group">
      <div className="aspect-square overflow-hidden">
        <ImageWithFallback
          src={coverArt}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-2">
          {type} · {releaseDate}
        </p>
        <h3 className="text-xl mb-2">{title}</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
          {description}
        </p>
        <a
          href={firstLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
        >
          Listen Now
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

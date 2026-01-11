import { useEffect, useMemo, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { youtubeVideoLinks } from '../data/youtubeVideos';

type VideoCard = {
  url: string;
  videoId: string;
  title: string;
};

function extractVideoId(url: string): string | null {
  try {
    const u = new URL(url);

    if (u.hostname === 'youtu.be') {
      const id = u.pathname.replace('/', '').trim();
      return id || null;
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

async function fetchTitleViaOEmbed(videoUrl: string): Promise<string | null> {
  try {
    const oembed = `https://www.youtube.com/oembed?format=json&url=${encodeURIComponent(videoUrl)}`;
    const res = await fetch(oembed);
    if (!res.ok) return null;
    const data = await res.json();
    const title = typeof data?.title === 'string' ? data.title.trim() : '';
    return title || null;
  } catch {
    return null;
  }
}

export function MusicPage() {
  const baseCards = useMemo<VideoCard[]>(() => {
    return youtubeVideoLinks
      .map((url) => {
        const id = extractVideoId(url);
        if (!id) return null;
        return { url, videoId: id, title: 'Video' };
      })
      .filter((x): x is VideoCard => x !== null);
  }, []);

  const [cards, setCards] = useState<VideoCard[]>(baseCards);

  useEffect(() => {
    let cancelled = false;

    async function hydrateTitles() {
      const updated = await Promise.all(
        baseCards.map(async (c) => {
          const title = await fetchTitleViaOEmbed(c.url);
          return { ...c, title: title ?? c.title };
        })
      );

      if (!cancelled) setCards(updated);
    }

    hydrateTitles();

    return () => {
      cancelled = true;
    };
  }, [baseCards]);

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl mb-6">Music</h2>

        <p className="text-neutral-600 dark:text-neutral-400 mb-8">
          Releases and demos.
        </p>

        <div className="grid gap-10 grid-cols-1">
          {cards.map((v) => (
            <div
              key={v.videoId}
              className="bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
            >
              <div className="bg-neutral-100 dark:bg-neutral-900">
                <iframe
                  className="w-full block !h-[80vh] !min-h-[520px] !max-h-[900px]"
                  style={{ height: '80vh', minHeight: 520, maxHeight: 900 }}
                  src={`https://www.youtube.com/embed/${v.videoId}?rel=0&modestbranding=1`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />

              </div>


            </div>
          ))}
        </div>
      </div>
    </div >
  );
}

import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative container mx-auto px-6 flex items-center min-h-screen pt-20">
      {/* Profile Image Background */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
        <div className="relative h-full overflow-hidden">
          {/* This mask creates a fade on BOTH left and right edges of the image */}
          <div
            className="absolute inset-0 z-0"
            style={{
              WebkitMaskImage:
                'linear-gradient(to left, transparent 0%, black 14%, black 86%, transparent 100%)',
              maskImage:
                'linear-gradient(to left, transparent 0%, black 14%, black 86%, transparent 100%)',
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
              WebkitMaskSize: '100% 100%',
              maskSize: '100% 100%',
            }}
          >
            <img
              src="/images/HeroPic.jpeg"
              alt="Profile"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: '70% center', // shifts the visible crop to the right
                transform: 'translateX(48px) scale(1.05)', // nudges image right + reduces hard edge risk
                filter: 'grayscale(100%) brightness(1.9)', // forces grayscale regardless of Tailwind
                opacity: 0.4,
              }}
            />
          </div>

          {/* Your original left-side wash fade over the image */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent via-neutral-50/50 dark:via-neutral-900/50 to-neutral-50 dark:to-neutral-900 z-10" />
        </div>
      </div>

      <div className="relative z-20 max-w-2xl">
        <p className="text-neutral-600 dark:text-neutral-400 mb-4">
          Robotics Engineer, Musician, Problem Solver
        </p>

        <h1 className="text-5xl md:text-6xl mb-6">
          I build robots, write code and make music
        </h1>

        <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8">
          I like working through robotics problems by building things in simulation and seeing what breaks. I spend a lot of time writing code, and I make music on the side. You can see the kinds of problems I’ve been interested in through the projects below.
        </p>

        <div className="flex gap-4">
          <button
            onClick={scrollToProjects}
            className="px-6 py-3 bg-neutral-900 dark:bg-neutral-50 text-white dark:text-neutral-900 hover:bg-neutral-700 dark:hover:bg-neutral-200 rounded transition-colors"
          >
            View Projects
          </button>
          <a
            href="mailto:engineer@robotics.dev"
            className="px-6 py-3 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-50 rounded transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

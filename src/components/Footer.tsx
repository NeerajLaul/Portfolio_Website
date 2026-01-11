import { Github, Linkedin, Mail, Youtube, Music2, Instagram } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Github, url: 'https://github.com/NeerajLaul', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/neeraj-laul-302468197/', label: 'LinkedIn' },
    { icon: Mail, url: 'mailto:neeraj.laul@gmail.com', label: 'Email' },
    { icon: Youtube, url: 'https://www.youtube.com/@slyverity', label: 'YouTube' },
    { icon: Music2, url: 'https://open.spotify.com/artist/1FpCAH1NgeqKc8RX43ItES', label: 'SoundCloud' },
    { icon: Instagram, url: 'https://www.instagram.com/neerajlol/', label: 'Instagram' },
  ];

  return (
    <footer className="bg-neutral-900 dark:bg-black py-12 border-t border-neutral-800">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-neutral-400">
              <p>© 2026 Neeraj Laul</p>
            </div>

            <div className="flex gap-6">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-neutral-50 transition-colors"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

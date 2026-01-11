export interface MusicRelease {
  title: string;
  type: 'Single' | 'EP' | 'Album';
  releaseDate: string;
  coverArt: string;
  description: string;
  streamingLinks: {
    spotify?: string;
    appleMusic?: string;
    youtube?: string;
    soundcloud?: string;
    bandcamp?: string;
  };
}

export const musicReleases: MusicRelease[] = [
  {
    title: 'Binary Dreams',
    type: 'Single',
    releaseDate: '2025',
    coverArt: 'https://images.unsplash.com/photo-1642177255157-fe900ab513e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRpbyUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzY3ODE3MzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'An electronic exploration of the intersection between technology and emotion.',
    streamingLinks: {
      spotify: 'https://open.spotify.com',
      appleMusic: 'https://music.apple.com',
      youtube: 'https://youtube.com',
      soundcloud: 'https://soundcloud.com',
    }
  },
  {
    title: 'Midnight Sessions',
    type: 'EP',
    releaseDate: '2024',
    coverArt: 'https://images.unsplash.com/photo-1727831140213-18650ae7ef36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpY2lhbiUyMHBlcmZvcm1pbmd8ZW58MXx8fHwxNzY3ODE4Nzc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'A collection of late-night ambient tracks blending acoustic and electronic elements.',
    streamingLinks: {
      spotify: 'https://open.spotify.com',
      appleMusic: 'https://music.apple.com',
      youtube: 'https://youtube.com',
    }
  },
  {
    title: 'Frequencies',
    type: 'Single',
    releaseDate: '2024',
    coverArt: 'https://images.unsplash.com/photo-1681159191011-60fea3791166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvcmRpbmclMjBzdHVkaW8lMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY3NzcxMTg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Experimental synth-driven track exploring rhythm and texture.',
    streamingLinks: {
      spotify: 'https://open.spotify.com',
      youtube: 'https://youtube.com',
      soundcloud: 'https://soundcloud.com',
      bandcamp: 'https://bandcamp.com',
    }
  },
];

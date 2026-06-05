import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'OMDHD — Mauritanian Organization for Human Rights & Human Development',
    short_name: 'OMDHD',
    description:
      'Independent civil organization for human rights and human development in Mauritania.',
    start_url: '/ar',
    display: 'standalone',
    background_color: '#F8FAF7',
    theme_color: '#063B73',
    icons: [{ src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' }],
  };
}

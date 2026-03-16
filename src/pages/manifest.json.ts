import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const manifest = {
    short_name: 'Mylonics',
    name: 'Mylonics - Electrical Design',
    icons: [
      {
        src: '/favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/favicon/android-chrome-384x384.png',
        sizes: '384x384',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    display: 'minimal-ui',
    id: '/',
    start_url: '/',
    theme_color: '#0092ca',
    background_color: '#262626',
  };

  return new Response(JSON.stringify(manifest));
};

import ogImageSrc from '@images/social.png';
import { MYLONICS } from '../../mylonics-styles/brand/constants';

export const SITE = {
  title: MYLONICS.name,
  tagline: MYLONICS.tagline,
  description:
    'Mylonics provides professional electrical and embedded systems design services in Edmonton, Alberta. Specializing in PCB design, industrial automation, robotics, and firmware development.',
  description_short:
    'Electrical and Embedded Systems Design Services in Edmonton, Alberta.',
  url: MYLONICS.url,
  author: MYLONICS.author,
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    inLanguage: 'en-US',
    '@id': SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      '@type': 'WebSite',
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: 'en_US',
  type: 'website',
  url: SITE.url,
  title: `${SITE.title}: Electrical Design and Contracting`,
  description: SITE.description,
  image: ogImageSrc,
};

export const ORGANIZATION_LOGO_URL = `${SITE.url}/favicon/android-chrome-384x384.png`;

export const ORGANIZATION_SCHEMA = {
  '@type': 'ProfessionalService',
  '@id': `${SITE.url}/#organization`,
  name: SITE.title,
  url: SITE.url,
  description: SITE.description,
  logo: {
    '@type': 'ImageObject',
    url: ORGANIZATION_LOGO_URL,
  },
  image: ORGANIZATION_LOGO_URL,
  email: 'info@mylonics.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Edmonton',
    addressRegion: 'AB',
    addressCountry: 'CA',
  },
  areaServed: 'Edmonton, Alberta',
  sameAs: ['https://github.com/mylonics', 'https://x.com/mylonics'],
};

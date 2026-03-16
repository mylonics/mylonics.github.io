/**
 * Prepends the Astro base path to an internal route so links work correctly
 * whether the site is deployed at the root ("/") or a sub-path (e.g. "/v2/").
 *
 * External URLs, protocol-relative URLs ("//…"), anchors ("#…"), and
 * special schemes ("mailto:", "tel:", etc.) are returned unchanged.
 *
 * Usage in .astro files:
 *   import { withBase } from '@utils/path';
 *   <a href={withBase('/about')}>About</a>
 */
export const withBase = (path: string): string => {
  // Leave anything that isn't a root-relative internal path unchanged
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  const base = import.meta.env.BASE_URL; // "/" or "/v2/" depending on build
  const trimmedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  return trimmedBase + path;
};

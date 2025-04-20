import { ClientOnly } from './client';

/**
 * Generate a single route for the empty slug (/), effectively mapping all
 * routes to the same page. This page is a Server Component, prerendered into
 * static HTML.
 */

export function generateStaticParams() {
  return [{ slug: [''] }];
}

export default function Page() {
  return <ClientOnly />;
}

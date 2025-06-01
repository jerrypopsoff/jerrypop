'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';
import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { isProduction } from '../utilities/environment';
import { usePostHog } from 'posthog-js/react';

function handleMissingApiKey() {
  if (!isProduction()) {
    return;
  }

  console.error('Attempted to initialize PostHog without a valid API key.');
}

function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const posthog = usePostHog();

  useEffect(() => {
    if (!pathname || !posthog) {
      return;
    }

    const searchParamsString = searchParams.toString();
    const url =
      searchParamsString.length > 0
        ? `${window.origin}${pathname}?${searchParamsString}`
        : `${window.origin}${pathname}`;

    posthog.capture('$pageview', { $current_url: url });
  }, [pathname, searchParams, posthog]);

  return null;
}

/**
 * Wrap `PostHogPageView` in Suspense to avoid the `useSearchParams` usage from
 * de-opting the whole application into client-side rendering.
 *
 * https://nextjs.org/docs/messages/deopted-into-client-rendering
 */
function SuspendedPostHogPageView() {
  return (
    <Suspense fallback={null}>
      <PostHogPageView />
    </Suspense>
  );
}

export function PostHogProvider({
  apiKey,
  children,
}: {
  apiKey?: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (typeof apiKey !== 'string' || apiKey.length === 0) {
      handleMissingApiKey();
      return;
    }

    posthog.init(apiKey, {
      api_host: 'https://us.i.posthog.com',
      capture_exceptions: true,
      capture_heatmaps: true,
      capture_pageview: false,
      capture_performance: true,
      persistence: 'memory',
      person_profiles: 'never',
    });
  }, [apiKey]);

  return (
    <PHProvider client={posthog}>
      <SuspendedPostHogPageView />
      {children}
    </PHProvider>
  );
}

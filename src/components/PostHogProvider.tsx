'use client';

import { useEffect } from 'react';
import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { isProduction } from '../utilities/environment';

function handleMissingApiKey() {
  if (!isProduction()) {
    return;
  }

  console.error('Attempted to initialize PostHog without a valid API key.');
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
      capture_performance: true,
      persistence: 'memory',
      person_profiles: 'never',
    });
  }, [apiKey]);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}

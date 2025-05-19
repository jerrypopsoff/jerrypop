import { defineConfig } from 'cypress';

export default defineConfig({
  blockHosts: ['*google-analytics.com', '*googletagmanager.com'],
  e2e: {
    baseUrl: 'http://localhost:3000',
    defaultCommandTimeout: 2000,
    pageLoadTimeout: 5000,
  },
  projectId: 'ttcbvc',
});

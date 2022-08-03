import { defineConfig } from 'cypress';

export default defineConfig({
  blockHosts: ['*google-analytics.com', '*googletagmanager.com'],
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  projectId: 'ttcbvc',
});

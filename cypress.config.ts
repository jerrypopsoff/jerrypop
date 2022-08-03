import { defineConfig } from 'cypress';

export default defineConfig({
  blockHosts: ['*google-analytics.com', '*googletagmanager.com'],
  projectId: 'ttcbvc',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

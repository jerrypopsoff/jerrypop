import { defineConfig } from 'cypress';

export default defineConfig({
  blockHosts: ['*google-analytics.com', '*googletagmanager.com'],
  e2e: {
    setupNodeEvents(_on, _config) {
      // Implement node event listeners here.
    },
  },
  projectId: 'ttcbvc',
});

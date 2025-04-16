import { defineConfig } from 'cypress';

export default defineConfig({
  blockHosts: ['*google-analytics.com', '*googletagmanager.com'],
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(_on, _config) {
      // Implement node event listeners here.
    },
  },
  projectId: 'ttcbvc',
});

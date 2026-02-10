import { defineConfig } from 'cypress';

export default defineConfig({
  /**
   * Disable the Cypress environment variable feature, which is not supported
   * by the Cypress 15.10.0 release.
   */
  allowCypressEnv: false,
  e2e: {
    baseUrl: 'http://localhost:3000',
    defaultCommandTimeout: 2000,
    pageLoadTimeout: 5000,
  },
  projectId: 'ttcbvc',
});

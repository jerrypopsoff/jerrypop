import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: { tsconfigPaths: true },
  test: {
    /**
     * https://vitest.dev/config/#coverage
     */
    coverage: {
      include: ['src/utilities/**/*.{ts,tsx}'],
    },
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
});

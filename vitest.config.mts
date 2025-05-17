import { coverageConfigDefaults, defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    /**
     * https://vitest.dev/config/#coverage
     */
    coverage: {
      exclude: [
        // Configuration files.
        '*.config.*',

        // Modules covered by end-to-end tests.
        'src/app/**',
        'src/components/**',
        'src/hooks/**',

        // Constants and type declarations.
        'src/constants/**',
        'src/types/**',

        // Default Vitest excluded files.
        ...coverageConfigDefaults.exclude,
      ],
      extension: ['.ts', '.tsx'],
    },
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
});

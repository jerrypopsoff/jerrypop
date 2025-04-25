import globals from 'globals';
import js from '@eslint/js';
import ts from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import nextPlugin from '@next/eslint-plugin-next';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import prettierConfig from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default ts.config(
  {
    ignores: ['node_modules/', '.next/', 'build/'],
  },

  // Base ESLint recommended rules
  js.configs.recommended,

  // Base TypeScript strict rules
  ...ts.configs.strict,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
    },
  },

  // React specific configurations
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      react: react,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      'react/no-unknown-property': ['error', { ignore: ['prefix'] }],
      'react/react-in-jsx-scope': 'off',
    },
  },

  // React Hooks rules
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: reactHooks.configs.recommended.rules,
  },

  // JSX Accessibility rules
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'jsx-a11y': jsxA11y,
    },
    rules: jsxA11y.configs.recommended.rules,
  },

  // Next.js specific rules
  // Note: `eslint-config-next` often bundles many of the above rules.
  // Here we are explicitly including the plugin rules.
  // If `eslint-config-next` provides a flat config export in the future,
  // you might simplify this by directly using that export.
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      // Example: Adjust Next.js specific rules if needed
      // "@next/next/no-img-element": "warn", // Warn instead of error for <img> element
    },
    languageOptions: {
      globals: {
        // Add node globals for Next.js server-side code.
        ...globals.node,
      },
    },
  },

  // This enables the `prettier/prettier` rule.
  prettierRecommended,

  // Prettier configuration
  // IMPORTANT: Must be the LAST configuration object in the array
  // to ensure it overrides any conflicting formatting rules from other configs.
  prettierConfig,
);

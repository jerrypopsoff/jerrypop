import { includeIgnoreFile } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, '.gitignore');

const compat = new FlatCompat({
  ignorePatterns: ['.gitignore'],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier'],
  root: true,
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    'prettier/prettier': 'error',
    'sort-keys': 'error',
  },
});

const configuration = [
  includeIgnoreFile(gitignorePath),
  ...compat.extends('react-app'),
];

export default configuration;

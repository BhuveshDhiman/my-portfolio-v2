import { createEslintConfig } from '@eslint/eslintrc';
import eslintConfigPrettier from 'eslint-config-prettier';

export default createEslintConfig(
  [
    {
      ignores: ['**/.next/**', '**/node_modules/**'],
    },
    {
      files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
      extends: ['eslint:recommended', 'next', 'prettier'],
    },
    eslintConfigPrettier,
  ],
  { ignore: true }
);

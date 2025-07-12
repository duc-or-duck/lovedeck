// eslint.config.js
import tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    // 👇 Bổ sung cấu hình parser cho TypeScript
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json', // Đường dẫn đến tsconfig.json
      },
    },
    rules: {
      '@typescript-eslint/await-thenable': 'error',
    },
  },
  {
    files: ['**/*.js'],
    // 👇 Tắt các rule yêu cầu type-info cho file JS
    rules: {
      '@typescript-eslint/await-thenable': 'off',
    },
  },
];

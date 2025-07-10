import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import json from '@eslint/json';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import tailwindcssPlugin from 'eslint-plugin-tailwindcss';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  // JS 기본 설정
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
  },

  // 브라우저 환경
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: {
      globals: globals.browser,
    },
  },

  // TypeScript ESLint 설정
  tseslint.configs.recommended,

  // React 관련 설정
  pluginReact.configs.flat.recommended,

  // JSON 파일 처리
  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended'],
  },

  // React JSX 관련 규칙 보완
  {
    files: ['**/*.{jsx,tsx}'],
    rules: {
      'react/react-in-jsx-scope': 'off', // React 17+에서는 필요 없음
    },
  },

  // ✅ Prettier + Tailwind 관련 규칙
  {
    plugins: {
      prettier: pluginPrettier,
      'jsx-a11y': pluginJsxA11y,
      tailwindcss: tailwindcssPlugin,
    },
    rules: {
      'prettier/prettier': 'warn', // 💅 Prettier 스타일 강제
      'tailwindcss/classnames-order': 'warn', // 🌀 Tailwind 클래스 순서 경고
    },
  },
]);

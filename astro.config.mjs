// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isCiBuild = Boolean(process.env.GITHUB_ACTIONS || process.env.CI);

// https://astro.build/config
export default defineConfig({
	site: 'https://hp-create123.github.io',
	base: isCiBuild && repoName ? `/${repoName}` : '/',
	output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});

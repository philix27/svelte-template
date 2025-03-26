import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config.js';

export default defineConfig({
	plugins: [sveltekit(), purgeCss()]
});

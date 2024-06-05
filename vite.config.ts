import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { purgeCss } from 'vite-plugin-tailwind-purgecss';

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [svelte(), purgeCss()],
   build: {
		assetsDir: "",
		sourcemap: true,
		lib: {
			entry: "src/main.ts",
			formats: ["iife"],
			name: "jpComponentBuilder",
			fileName: "bundle",
		},
	},
});

import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [tailwindcss(), svelte()],
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

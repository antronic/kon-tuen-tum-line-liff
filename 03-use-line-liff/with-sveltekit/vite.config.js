import { sveltekit } from '@sveltejs/kit/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
	server: {
		allowedHosts: true,
	},
	plugins: [
		sveltekit(),
		tailwindcss(),
	]
})

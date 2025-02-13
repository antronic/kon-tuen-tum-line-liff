# 02 TailwindCSS with Svelte

## How to use

**Install TailwindCSS**
Install `@tailwindcss/vite` and its peer dependencies via npm.
```bash
npm install tailwindcss @tailwindcss/vite
```

**Configure Vite Plugin**
Add the `@tailwindcss/vite` plugin to your Vite configuration.
```javascript
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
// Add the tailwindcss plugin
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
  plugins: [
    // Add the tailwindcss plugin
    tailwindcss(),
    sveltekit(),
  ],
});
```

**Import TailwindCSS**
Create a `./src/app.css` file and add an `@import` that imports Tailwind CSS.
```css
@import "tailwindcss";
```
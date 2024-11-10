import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [react()],
  server: {
   watch: {
    usePolling: true,
   },
   host: true,
   strictPort: true,
 },
 css: {
  postcss: {
    plugins: [tailwindcss(), autoprefixer()],
  },
},
})
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: './', // Set the base path for the project
  plugins: [react()],
  build: {
    assetsDir: 'assets', // Specify the directory for static assets
  }
});

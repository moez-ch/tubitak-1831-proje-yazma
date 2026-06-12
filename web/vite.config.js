import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/proje-yazma/',
  server: {
    port: 5173,
    proxy: {
      '/proje-yazma/api': 'http://localhost:4000'
    }
  }
});

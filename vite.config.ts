import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 👇 Dynamic base config
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/sasrmWeb/' : '/',
  server: {
    open: true,
    fs: {
      strict: false
    }
  },
  build: {
    rollupOptions: {
      input: 'index.html'
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  },
}));

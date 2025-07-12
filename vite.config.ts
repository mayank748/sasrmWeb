// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import { fileURLToPath } from 'url';
// import { dirname, resolve } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// // 👇 Dynamic base config
// export default defineConfig(({ mode }) => ({
//   plugins: [react()],
//   base: mode === 'production' ? '/sasrmWeb/' : '/',
//   server: {
//     open: true,
//     fs: {
//       strict: false
//     }
//   },
//   build: {
//     rollupOptions: {
//       input: 'index.html'
//     }
//   },
//   resolve: {
//     alias: {
//       '@': resolve(__dirname, 'src'),
//     }
//   },
// }));

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import path from "path";
// import { componentTagger } from "lovable-tagger";

// // https://vitejs.dev/config/
// export default defineConfig(({ mode }) => ({
//   server: {
//     host: "::",
//     port: 8080,
//   },
//   plugins: [
//     react(),
//     mode === 'development' &&
//     componentTagger(),
//   ].filter(Boolean),
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// }));

// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  base: '/sasrmWeb/', // 👈 IMPORTANT
});


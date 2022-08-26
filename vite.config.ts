import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  server: {
    port: 9000,
    strictPort: true,
    open: true
  },
  build: {
    outDir: "docs"
  }
});


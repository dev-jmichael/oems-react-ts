import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, './src/pages'),
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@type': path.resolve(__dirname, './src/types'),
      '@services': path.resolve(__dirname, './src/services')
      // Add other aliases as needed
    }
  },
  server: {
    port: 3000
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: {
    // Code splitting — separates vendor libs from app code
    rollupOptions: {
      output: {
        // Vendor splitting only applies to the browser bundle; the SSR build keeps deps external
        manualChunks: isSsrBuild ? undefined : {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'motion': ['framer-motion'],
          'icons': ['react-icons'],
          'helmet': ['react-helmet-async'],
        },
      },
    },
    // Smaller chunks load faster
    chunkSizeWarningLimit: 600,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Minify for production
    minify: 'esbuild',
    // Reduce source map size in prod
    sourcemap: false,
  },
  // Optimize dependencies pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
  },
}))

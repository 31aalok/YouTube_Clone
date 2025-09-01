import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
/*export default optimizeDeps; 
  exclude: ['fsevents'],
  defineConfig({
  plugins: [react()]
  
  })*/
  export default defineConfig({
    plugins: [react()],
    optimizeDeps: {
      exclude: ['fsevents'],
    },
  })
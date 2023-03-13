import { defineConfig } from 'vite';
const path = require('path')

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      'app': path.resolve(__dirname, './src/')
    }
  }
})

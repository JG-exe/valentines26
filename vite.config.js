import { defineConfig } from 'vite'

export default defineConfig({
  base: '/valentines26/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
        question: './question.html',
        yay: './yay.html'
      }
    }
  }
})
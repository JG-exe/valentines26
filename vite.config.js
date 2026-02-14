import { defineConfig } from 'vite'

export default defineConfig({
  base: '/your-repo-name/',
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
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  //base: './',
  base: "/tailwind_v4_demo_project/",
  plugins: [react(), tailwindcss()],
})

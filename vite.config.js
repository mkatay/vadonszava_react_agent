import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  //base: './',
  base: "/vadonszava_react_agent/",
  plugins: [react(), tailwindcss()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/Calculate-Tip/', // حتماً همین شکل (حساس به بزرگ/کوچک بودن حروف)
})

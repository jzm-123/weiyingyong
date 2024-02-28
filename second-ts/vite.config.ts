import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import qiankun from 'vite-plugin-qiankun'
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => (
  {
    // base: mode === 'development' ? './' : '/',
    plugins: [react(), 
      qiankun('secondApp', { useDevMode: true })
  ],
    server: {
      host: 'localhost',
      port: 3002,
      origin: 'http://localhost:3002'
    },
  }
))

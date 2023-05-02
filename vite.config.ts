import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { config } from 'dotenv'
import basicSsl from '@vitejs/plugin-basic-ssl'
import tsconfigPaths from 'vite-tsconfig-paths'

config({ path: './.env.local' })
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), basicSsl(), tsconfigPaths()],

  server: {
    port: parseInt(process.env.PORT) || 3000,
    open: true,
    cors: {
      origin: '*',
      allowedHeaders: ['Content-Type, Authorization'],
      credentials: true,
      methods: 'GET, POST, PUT, DELETE',
    },
    // proxy: {
    //   '/api': {
    //     target: 'https://dangthuyenvuong1.com', // đổi thành địa chỉ server của bạn
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ''), // chỉnh lại nếu cần thiết
    //   },
    // },
  },
  define: {
    experimentalModules: true,
  },
})

import react from '@vitejs/plugin-react-swc'
import { defineConfig, loadEnv } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
// import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	let env = loadEnv(mode, process.cwd(), '')

	env = {
		...process.env,
		...Object.entries(env).reduce((prev, [key, val]) => {
			return {
				...prev,
				[key]: val,
			}
		}, {}),
	}

	return {
		plugins: [
			react(),
			// basicSsl(),
			tsconfigPaths(),
			// eslint({
			// 	exclude: ['/virtual:/**', 'node_modules/**'],
			// }),
		],
		build: {
			rollupOptions: {
				treeshake: true,
			},
		},
		server: {
			port: parseInt(process.env.PORT) || 3000,
			open: false,
			// cors: {
			//   origin: '*',
			//   allowedHeaders: ['Content-Type, Authorization'],
			//   credentials: true,
			//   methods: 'GET, POST, PUT, DELETE',
			// },
			// proxy: {
			//   '/api': {
			//     target: 'https://dangthuyenvuong1.com', // đổi thành địa chỉ server của bạn
			//     changeOrigin: true,
			//     rewrite: (path) => path.replace(/^\/api/, ''), // chỉnh lại nếu cần thiết
			//   },
			// },
		},
	}
})

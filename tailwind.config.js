/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx,html}',
		// './node_modules/@my-company/tailwind-components/**/*.js'
	],
	theme: {
		spacing: ({ theme }) => ({
			...theme('spacing'),
		}),
		extend: {
			spacing: {
				128: '32rem',
				144: '36rem',
			},
			colors: {
				primary: {}, // Màu chính
				accent: {}, // Màu phụ
				// gray: {},
			},
			boxShadow: {},
			animation: {},
			borderColor: {},
			borderRadius: {
				'4xl': '2rem',
			},
			screens: {
				sm: '480px',
				md: '768px',
				lg: '976px',
				xl: '1440px',
			},
			fontFamily: {
				sans: ['Graphik', 'sans-serif'],
				serif: ['Merriweather', 'serif'],
			},
			textColor: {},
			placeholderColor: {},
		},
	},

	safelist: [], // Danh sách các class không tồn tại trong tập tin content nhưng bạn muốn tailwind generate,
	blocklist: [], // Ngược lại với safelist
	plugins: [],
	darkMode: 'class',
	prefix: {},
	important: false, // True nếu muốn gắn important cho các css
	corePlugins: {
		// preflight: false, // Disable reset css
		// opacity: false, // Disable cho từng property
	},
}

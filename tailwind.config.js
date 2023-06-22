/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,html}'],
	theme: {
		extend: {
			spacing: {
				128: '32rem',
				144: '36rem',
			},
			colors: {
				primary: {
					DEFAULT: '#2374e1',
					50: '#f4f8fd',
					100: '#caddf7',
					200: '#a0c3f2',
					300: '#76a8ec',
					400: '#4c8ee6',
					500: '#2374e1',
					600: '#1c5cb4',
					700: '#154587',
					800: '#0e2e5a',
					900: '#06172c',
				},
				// accent: {}, // Màu phụ
				// gray: {},
			},
			lineHeight: {
				12: '48px',
			},
			boxShadow: {},
			animation: {},
			borderColor: {},
			borderRadius: {
				'4xl': '2rem',
			},
			maxWidth: {
				'main-content': 768,
			},
			height: {
				header: 50,
			},
			fontSize: {
				small: 10,
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

	// safelist: [], // Danh sách các class không tồn tại trong tập tin content nhưng bạn muốn tailwind generate,
	// blocklist: [], // Ngược lại với safelist
	plugins: [require('./src/assets/css/util-class.css')], // Thêm utils class
	// darkMode: 'class',
	// prefix: '',
	// important: false, // True nếu muốn gắn important cho các css
	// corePlugins: {
	// 	// preflight: false, // Disable reset css
	// 	// opacity: false, // Disable cho từng property
	// },
}

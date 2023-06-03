module.exports = {
	env: {
		browser: true,
		es2020: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:storybook/recommended',
		'react-app',
		'eslint:recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react-refresh'],
	rules: {
		'no-template-curly-in-string': 0,
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['error'],
		// 'react-refresh/only-export-components': 'warn',
	},
	overrides: [
		{
			files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
			rules: {
				// example of overriding a rule
				'storybook/hierarchy-separator': 'error',
			},
		},
	],
}

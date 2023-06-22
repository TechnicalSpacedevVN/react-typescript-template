const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('./tsconfig.json')
const { join } = require('path')

module.exports = {
	preset: 'ts-jest',
	setupFilesAfterEnv: ['./jest.setup.cjs'],
	testMatch: ['**/tests/**/*.spec.(js|jsx|ts|tsx)', '**/__tests__/*.(js|jsx|ts|tsx)'],
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'vue'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
		'^.+\\.jsx?$': [
			'babel-jest',
			{
				plugins: ['@babel/plugin-transform-modules-commonjs'],
				presets: ['@babel/preset-env', '@babel/preset-react'],
			},
		],
	},
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
		prefix: join('<rootDir>', compilerOptions.baseUrl),
	}),
	roots: ['<rootDir>/src'],
	// For security reasons, clearMocks should be set to true in most cases.
	// See https://jestjs.io/docs/configuration#clearmocks-boolean
	clearMocks: true,
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
}

const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('./tsconfig.json')
const { join } = require('path')
const fs = require('fs')

const TS_CONFIG_PATH = './tsconfig.json'

function makeModuleNameMapper(tsconfigPath) {
	// Get paths from tsconfig
	const { paths } = require(tsconfigPath).compilerOptions

	let files = fs.readdirSync('./src')

	const aliases = {}

	files.forEach(file => {
		const filePath = `./src/${file}`

		const isDirectory = fs.statSync(filePath).isDirectory()

		if (isDirectory) {
			aliases[`^@${file}/(.*)$`] = `<rootDir>\\src/${file}/$1`
		}
	})

	// Iterate over paths and convert them into moduleNameMapper format
	Object.keys(paths).forEach(item => {
		if (item !== '@*') {
			const key = item.replace('/*', '/(.*)')
			const path = paths[item][0].replace('/*', '/$1')
			aliases[`^${key}$`] = `<rootDir>\\src` + '/' + path
		}
	})
	return aliases
}

// let moduleName = pathsToModuleNameMapper(compilerOptions.paths, {
// 	prefix: join('<rootDir>', compilerOptions.baseUrl),
// })

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
	moduleNameMapper: makeModuleNameMapper(TS_CONFIG_PATH),
	roots: ['<rootDir>/src'],
	// For security reasons, clearMocks should be set to true in most cases.
	// See https://jestjs.io/docs/configuration#clearmocks-boolean
	clearMocks: true,
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
}

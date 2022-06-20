import { terser } from 'rollup-plugin-terser';
import analyze from 'rollup-plugin-analyzer';
import babel from '@rollup/plugin-babel';
import del from 'rollup-plugin-delete';
import resolve from '@rollup/plugin-node-resolve';
import ts from '@rollup/plugin-typescript';
import typescript from 'typescript';

module.exports = {
	input: {
		partition: './src/partition.ts',
	},
	output: [
		{
			dir: 'dist',
			format: 'esm',
			sourcemap: true,
		},
	],
	plugins: [
		del({ targets: [`dist/`] }),
		ts({ typescript, tsconfig: './tsconfig.json' }),
		resolve(), // so Rollup can find `ms`
		babel({
			exclude: 'node_modules/**', // only transpile our source code
		}),
		terser(),
		analyze({
			hideDeps: true,
			summaryOnly: true,
			filter: (module) => /^\/src/.test(module.id),
		}),
	],
};

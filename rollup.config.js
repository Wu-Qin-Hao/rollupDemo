import typescript from "rollup-plugin-typescript";
import sourceMaps from 'rollup-plugin-sourcemaps';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
  input: "./src/main.ts",
  plugins: [
    typescript({
      exclude: 'node_modules/**',
      typescript: require('typescript')
    }),
    sourceMaps(),
    commonjs(),
    resolve(),
    terser()
  ],
  output: [
    {
      format: "cjs",
      file: "lib/bundle.cjs.js",
      sourceMap: true
    },
    {
      format: "es",
      file: "lib/bundle.esm.js",
      sourceMap: true
    },
    {
      format: "iife",
      name: 'wqh',
      file: "lib/bundle.iife.js",
      sourceMap: true
    }
  ]
};
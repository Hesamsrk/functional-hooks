import {resolve} from 'node:path'
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tsConfigPaths from 'vite-tsconfig-paths'
import {EsLinter, linterPlugin} from 'vite-plugin-linter'

// https://vitejs.dev/config/
export default defineConfig(configEnv => ({
  plugins: [
    react(),
    tsConfigPaths(),
    linterPlugin({
      include: ['./src/**/*.{ts,tsx}'],
      linters: [new EsLinter({configEnv})],
    })
  ],
  build: {
    lib: {
      entry: resolve('lib', 'index.ts'),
      name: 'ReactFeatureFlag',
      fileName: (format) => `functional-hooks.${format}.js`,
    },
    rollupOptions: {
      external: ['react'],
    },
  },
}))


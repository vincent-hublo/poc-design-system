import { defineConfig } from '@pandacss/dev'
import { hubloPreset } from './src'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  // The output directory for your css system
  outdir: 'styled-system',

  presets: [hubloPreset],
})

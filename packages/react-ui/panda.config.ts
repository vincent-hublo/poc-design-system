import { defineConfig } from '@pandacss/dev'
import { hubloPreset } from '@hublo/panda-presets'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // The output directory for your css system
  outdir: 'styled-system',

  jsxFramework: 'react',

  outExtension: 'js',

  presets: [hubloPreset],
})

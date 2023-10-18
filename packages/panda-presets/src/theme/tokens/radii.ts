import { defineTokens } from '@pandacss/dev'

export const radii = defineTokens.radii({
  none: { value: '0' },
  '2xs': { value: '0.125rem' },
  xs: { value: '0.25rem' },
  sm: { value: '0.375rem' },
  md: { value: '0.5rem' },
  lg: { value: '0.75rem' },
  xl: { value: '1rem' },
  '2xl': { value: '1.5rem' },
  '3xl': { value: '3rem' },
  full: { value: '9999px' },
})

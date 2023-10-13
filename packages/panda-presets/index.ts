import { definePreset } from '@pandacss/dev'
import { recipes } from './recipes'

export const hubloPreset = definePreset({
    theme: {
      extend: {
        recipes
      },
    }
  })
  
import { breakpoints } from './theme/breakpoints'
import { conditions } from './conditions'
import { definePreset } from '@pandacss/dev'
import { globalCss } from './global-css'
import { keyframes } from './theme/keyframes'
import { recipes } from './theme/recipes'
import { semanticTokens } from './theme/semantic-tokens'
import { textStyles } from './theme/text-styles'
import { tokens } from './theme/tokens'

export const hubloPreset = definePreset({
  theme: {
    extend: {
      breakpoints,
      keyframes,
      recipes,
      textStyles,
      tokens,
      semanticTokens,
    },
  },
  conditions,
  globalCss,
})

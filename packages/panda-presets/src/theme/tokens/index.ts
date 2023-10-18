import {
  fontSizes,
  fontWeights,
  fonts,
  letterSpacings,
  lineHeights,
} from './typography'

import { animations } from './animations'
import { blurs } from './blurs'
import { borders } from './borders'
import { colors } from './colors'
import { defineTokens } from '@pandacss/dev'
import { durations } from './durations'
import { easings } from './easings'
import { radii } from './radii'
import { sizes } from './sizes'
import { spacing } from './spacing'
import { zIndex } from './z-index'

export const tokens = defineTokens({
  animations,
  blurs,
  borders,
  colors,
  durations,
  easings,
  fontSizes,
  fontWeights,
  fonts,
  letterSpacings,
  lineHeights,
  radii,
  sizes,
  spacing,
  zIndex,
})

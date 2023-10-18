import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const badgeFn = /* @__PURE__ */ createRecipe('badge', {
  "variant": "subtle",
  "size": "md"
}, [])

const badgeVariantMap = {
  "variant": [
    "solid",
    "subtle",
    "outline"
  ],
  "size": [
    "sm",
    "md",
    "lg"
  ]
}

const badgeVariantKeys = Object.keys(badgeVariantMap)

export const badge = /* @__PURE__ */ Object.assign(badgeFn, {
  __recipe__: true,
  __name__: 'badge',
  raw: (props) => props,
  variantKeys: badgeVariantKeys,
  variantMap: badgeVariantMap,
  splitVariantProps(props) {
    return splitProps(props, badgeVariantKeys)
  },
})
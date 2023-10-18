import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const codeFn = /* @__PURE__ */ createRecipe('code', {
  "size": "md",
  "variant": "outline"
}, [])

const codeVariantMap = {
  "variant": [
    "outline",
    "ghost"
  ],
  "size": [
    "sm",
    "md",
    "lg"
  ]
}

const codeVariantKeys = Object.keys(codeVariantMap)

export const code = /* @__PURE__ */ Object.assign(codeFn, {
  __recipe__: true,
  __name__: 'code',
  raw: (props) => props,
  variantKeys: codeVariantKeys,
  variantMap: codeVariantMap,
  splitVariantProps(props) {
    return splitProps(props, codeVariantKeys)
  },
})
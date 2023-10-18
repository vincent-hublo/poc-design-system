import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const buttonFn = /* @__PURE__ */ createRecipe('button', {
  "variant": "primary",
  "size": "md"
}, [])

const buttonVariantMap = {
  "variant": [
    "primary",
    "secondary",
    "text"
  ],
  "size": [
    "xs",
    "sm",
    "md",
    "lg",
    "xl"
  ]
}

const buttonVariantKeys = Object.keys(buttonVariantMap)

export const button = /* @__PURE__ */ Object.assign(buttonFn, {
  __recipe__: true,
  __name__: 'button',
  raw: (props) => props,
  variantKeys: buttonVariantKeys,
  variantMap: buttonVariantMap,
  splitVariantProps(props) {
    return splitProps(props, buttonVariantKeys)
  },
})
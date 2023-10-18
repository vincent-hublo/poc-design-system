import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const articleFn = /* @__PURE__ */ createRecipe('article', {
  "size": "md"
}, [])

const articleVariantMap = {
  "size": [
    "sm",
    "md",
    "lg"
  ]
}

const articleVariantKeys = Object.keys(articleVariantMap)

export const article = /* @__PURE__ */ Object.assign(articleFn, {
  __recipe__: true,
  __name__: 'article',
  raw: (props) => props,
  variantKeys: articleVariantKeys,
  variantMap: articleVariantMap,
  splitVariantProps(props) {
    return splitProps(props, articleVariantKeys)
  },
})
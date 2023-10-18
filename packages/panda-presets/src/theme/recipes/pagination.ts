import { defineSlotRecipe } from '@pandacss/dev'
import { paginationAnatomy } from '@ark-ui/anatomy'

export const pagination = defineSlotRecipe({
  className: 'pagination',
  slots: paginationAnatomy.keys(),
  jsx: ['Pagination', /Pagination\.+/],
  base: {
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '4',
    },
    list: {
      display: 'flex',
      gap: '2',
    },
    pageTrigger: {
      fontVariantNumeric: 'tabular-nums',
    },
    ellipsis: {
      alignItems: 'center',
      color: 'text.emphasized',
      display: 'inline-flex',
      fontWeight: 'semibold',
      px: '2',
    },
  },
})

import { defineSlotRecipe } from '@pandacss/dev'
import { toastAnatomy } from '@ark-ui/anatomy'

export const toast = defineSlotRecipe({
  className: 'toast',
  slots: toastAnatomy.keys(),
  jsx: ['Toast', /Toast\.+/],
  base: {
    root: {
      background: 'bg.default',
      borderRadius: 'l3',
      borderWidth: '1px',
      boxShadow: 'lg',
      minWidth: 'xs',
      p: '4',
      _open: {
        animation: 'slideInFromBottom 0.2s ease-out',
      },
      _closed: {
        animation: 'slideOutFromBottom 0.2s ease-out',
      },
    },
    group: {
      p: '4',
    },
    title: {
      fontWeight: 'semibold',
      textStyle: 'sm',
    },
    description: {
      color: 'text.muted',
      textStyle: 'sm',
    },
  },
})

import { defineSlotRecipe } from '@pandacss/dev'
import { popoverAnatomy } from '@ark-ui/anatomy'

export const popover = defineSlotRecipe({
  className: 'popover',
  slots: popoverAnatomy.keys(),
  jsx: ['Popover', /Popover\.+/],
  base: {
    positioner: {
      position: 'relative',
      zIndex: 'popover',
    },
    content: {
      background: 'bg.default',
      borderRadius: 'l3',
      borderWidth: '1px',
      boxShadow: 'md',
      display: 'flex',
      flexDirection: 'column',
      maxWidth: 'sm',

      p: '4',
      _open: {
        animation: 'fadeIn 0.25s ease-out',
      },
      _closed: {
        animation: 'fadeOut 0.2s ease-out',
      },
      _hidden: {
        display: 'none',
      },
    },
    title: {
      fontWeight: 'medium',
      textStyle: 'sm',
    },
    description: {
      color: 'text.muted',
      textStyle: 'sm',
    },
    closeTrigger: {
      color: 'text.muted',
    },
    arrow: {
      '--arrow-size': 'var(--sizes-3)',
      '--arrow-background': 'var(--colors-bg-default)',
    },
    arrowTip: {
      borderTopWidth: '1px',
      borderLeftWidth: '1px',
    },
  },
})

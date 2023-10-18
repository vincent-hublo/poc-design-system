import { defineSlotRecipe } from '@pandacss/dev'
import { segmentGroupAnatomy } from '@ark-ui/anatomy'

export const segmentGroup = defineSlotRecipe({
  className: 'segmentGroup',
  slots: segmentGroupAnatomy.keys(),
  jsx: ['SegmentGroup', /SegmentGroup\.+/],
  base: {
    root: {
      display: 'flex',
      flexDirection: {
        _horizontal: 'row',
        _vertical: 'column',
      },
      gap: {
        _horizontal: '4',
        _vertical: '1',
      },
      borderBottomWidth: {
        _horizontal: '1px',
      },
      borderLeftWidth: {
        _vertical: '1px',
      },
    },
    indicator: {
      borderBottomWidth: {
        _horizontal: '2px',
      },
      borderLeftWidth: {
        _vertical: '2px',
      },
      borderColor: 'accent.default',
      transform: {
        _horizontal: 'translateY(1px)',
        _vertical: 'translateX(-1px)',
      },
    },
    radio: {
      color: 'text.subtle',
      cursor: 'pointer',
      fontWeight: 'medium',
      transitionDuration: 'normal',
      transitionProperty: 'color',
      transitionTimingFunction: 'default',
      _hover: {
        color: 'text.muted',
      },
      _checked: {
        fontWeight: 'semibold',
        color: 'text.emphasized',
        _hover: {
          color: 'text.emphasized',
        },
      },
      _disabled: {
        color: 'text.disabled',
        cursor: 'not-allowed',
        _hover: {
          color: 'text.disabled',
        },
      },
      px: {
        _horizontal: '1',
        _vertical: '3',
      },
      pb: {
        _horizontal: '3',
      },
      py: {
        _vertical: '1.5',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: {
        radio: {
          textStyle: 'sm',
        },
      },
      md: {
        radio: {
          textStyle: 'md',
        },
      },
    },
  },
})

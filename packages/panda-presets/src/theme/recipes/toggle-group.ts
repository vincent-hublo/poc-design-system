import { defineSlotRecipe } from '@pandacss/dev'
import { toggleGroupAnatomy } from '@ark-ui/anatomy'

export const toggleGroup = defineSlotRecipe({
  className: 'toggleGroup',
  slots: toggleGroupAnatomy.keys(),
  jsx: ['ToggleGroup', /ToggleGroup\.+/],
  base: {
    root: {
      display: 'flex',
      overflow: 'hidden',
      position: 'relative',
      _vertical: {
        flexDirection: 'column',
      },
    },
    toggle: {
      alignItems: 'center',
      appearance: 'none',
      background: 'bg.default',
      cursor: 'pointer',
      color: 'text.subtle',
      display: 'inline-flex',
      fontWeight: 'semibold',
      minWidth: '0',
      justifyContent: 'center',
      outline: 'none',
      position: 'relative',
      transitionDuration: 'normal',
      transitionProperty: 'background, border-color, color, box-shadow',
      transitionTimingFunction: 'default',
      userSelect: 'none',
      verticalAlign: 'middle',
      whiteSpace: 'nowrap',
      zIndex: '1',
      _hover: {
        color: 'text.emphasized',
        background: 'bg.subtle',
      },
      _checked: {
        background: 'bg.subtle',
        color: 'text.emphasized',
      },
      _pressed: {
        background: 'bg.subtle',
        color: 'text.emphasized',
      },
      _disabled: {
        borderColor: 'border.disabled',
        color: 'text.disabled',
        cursor: 'not-allowed',
        _hover: {
          background: 'transparent',
          borderColor: 'border.disabled',
          color: 'text.disabled',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
  variants: {
    variant: {
      outline: {
        root: {
          borderWidth: '1px',
          borderRadius: 'l2',
          borderColor: 'border.emphasized',
          _horizontal: {
            divideX: '1px',
          },
          _vertical: {
            divideY: '1px',
          },
        },
        toggle: {
          borderColor: 'border.emphasized',
          _focusVisible: {
            color: 'text.emphasized',
            background: 'bg.subtle',
          },
        },
      },
      ghost: {
        root: {
          gap: '1',
        },
        toggle: {
          borderRadius: 'l2',
          _focusVisible: {
            outlineOffset: '2px',
            outline: '2px solid',
            outlineColor: 'border.outline',
          },
        },
      },
    },
    size: {
      sm: {
        toggle: {
          h: '9',
          minW: '9',
          textStyle: 'sm',
          gap: '2',
          '& svg': {
            width: '4.5',
            height: '4.5',
          },
        },
      },
      md: {
        toggle: {
          h: '10',
          minW: '10',
          textStyle: 'sm',
          gap: '2',
          '& svg': {
            width: '5',
            height: '5',
          },
        },
      },
      lg: {
        toggle: {
          h: '11',
          minW: '11',
          textStyle: 'md',
          gap: '2',
          '& svg': {
            width: '5',
            height: '5',
          },
        },
      },
    },
  },
})

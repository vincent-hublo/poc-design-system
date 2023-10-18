import { defineRecipe } from '@pandacss/dev'

export const button = defineRecipe({
  className: 'button',
  base: {
    alignItems: 'center',
    appearance: 'none',
    borderRadius: 'l2',
    cursor: 'pointer',
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
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
  variants: {
    variant: {
      primary: {
        background: 'accent.default',
        color: 'accent.fg',
        _hover: {
          background: 'accent.emphasized',
        },
        _focusVisible: {
          outlineOffset: '2px',
          outline: '2px solid',
          outlineColor: 'border.accent',
        },
        _disabled: {
          background: 'bg.disabled',
          cursor: 'not-allowed',
          _hover: {
            background: 'bg.disabled',
          },
        },
      },
      secondary: {
        borderWidth: '1px',
        borderColor: 'accent.default',
        background: 'white',
        color: 'accent.default',
        _hover: {
          background: 'accent.light',
        },
        _selected: {
          background: 'accent.default',
          borderColor: 'border.accent',
          color: 'accent.fg',
          _hover: {
            color: 'accent.fg',
            background: 'accent.default',
            borderColor: 'border.accent',
          },
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
        _focusVisible: {
          outline: '2px solid',
          outlineColor: 'black',
        },
      },
      text: {
        color: 'accent.default',
        borderColor: 'none',
        backgroundColor: 'transparent',
        _hover: {
          backgroundColor: 'accent.light',
        },
        _disabled: {
          color: 'text.disabled',
          cursor: 'not-allowed',
          _hover: {
            color: 'text.disabled',
            backgroundColor: 'transparent',
          },
        },
      },
    },
    size: {
      xs: {
        h: '10',
        minW: '10',
        textStyle: 'xs',
        px: '3',
        gap: '2',
        '& svg': {
          fontSize: 'md',
          width: '4',
          height: '4',
        },
      },
      sm: {
        h: '11',
        minW: '11',
        textStyle: 'sm',
        px: '3.5',
        gap: '2',
        '& svg': {
          width: '4',
          height: '4',
        },
      },
      md: {
        h: '12',
        minW: '12',
        textStyle: 'md',
        px: '4',
        gap: '2',
        '& svg': {
          width: '5',
          height: '5',
        },
      },
      lg: {
        h: '14',
        minW: '14',
        textStyle: 'md',
        px: '4.5',
        gap: '2',
        '& svg': {
          width: '5',
          height: '5',
        },
      },
      xl: {
        h: '16',
        minW: '16',
        textStyle: 'lg',
        px: '5',
        gap: '2.5',
        '& svg': {
          width: '5',
          height: '5',
        },
      },
    },
  },
})

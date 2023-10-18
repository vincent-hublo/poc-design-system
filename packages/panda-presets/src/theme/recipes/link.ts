import { defineRecipe } from '@pandacss/dev'

export const link = defineRecipe({
  className: 'link',
  base: {
    color: 'text.subtle',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '2',
    transitionDuration: 'normal',
    transitionProperty: 'color, font-weight',
    transitionTimingFunction: 'default',
  },
  defaultVariants: {
    variant: 'text',
  },
  variants: {
    variant: {
      text: {
        fontWeight: 'medium',
        color: 'text.default',
        textDecoration: 'underline',
      },
      toc: {
        fontWeight: 'medium',
        textStyle: 'sm',
        _hover: {
          color: 'text.muted',
        },
        _currentPage: {
          fontWeight: 'semibold',
          color: 'text.emphasized',
          _hover: {
            color: 'text.emphasized',
          },
        },
      },
      navbar: {
        fontWeight: 'semibold',
        textStyle: 'md',
        _hover: {
          color: 'text.muted',
        },
        _currentPage: {
          color: 'text.emphasized',
          _hover: {
            color: 'text.emphasized',
          },
        },
      },
    },
  },
})

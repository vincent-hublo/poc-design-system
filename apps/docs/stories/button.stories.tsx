import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@hublo/react-ui/src/button'
import { button } from '../styled-system/recipes'

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: [
        button.raw({
          variant: 'primary',
        }).variant,
        button.raw({
          variant: 'secondary',
        }).variant,
        button.raw({
          variant: 'text',
        }).variant,
      ],
    },
    size: {
      control: { type: 'radio' },
      options: [
        button.raw({
          size: 'xs',
        }).size,
        button.raw({
          size: 'sm',
        }).size,
        button.raw({
          size: 'md',
        }).size,
        button.raw({
          size: 'lg',
        }).size,
        button.raw({
          size: 'xl',
        }).size,
        button.raw({
          size: 'xxl',
        }).size,
      ],
    },
    disabled: {
      control: { type: 'radio' },
      options: [true, false],
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => <Button {...props}>Test</Button>,
  name: 'Button',
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
}

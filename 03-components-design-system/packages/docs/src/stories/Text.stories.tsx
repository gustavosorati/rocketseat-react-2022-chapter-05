import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, fuga porro quidem dolorem assumenda maiores veritatis dicta illum magnam eligendi corrupti esse perferendis ex, magni vel debitis cupiditate, ratione a.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}

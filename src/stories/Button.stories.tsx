import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Button, { ButtonProps } from '../components/atoms/Button'

export default {
  title: 'Example/Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Normal = Template.bind({})
Normal.args = {
  value: '送信',
}

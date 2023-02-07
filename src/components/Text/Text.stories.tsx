import { Meta, Story } from '@storybook/react'
import React from 'react'

import { ITextProps, Text } from './Text'

export default {
  component: Text,
  title: 'Components/Text',
} as Meta

const Template: Story<ITextProps> = (args) => <Text {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Hello World',
}

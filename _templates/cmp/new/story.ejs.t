---
to: src/components/<%=name%>/<%=name%>.stories.tsx
---
import { Meta,Story } from '@storybook/react'
import React from 'react'

import type { I<%=name%>Props } from './<%=name%>'
import { <%=name%> } from './<%=name%>'

export default {
  component: <%=name%>,
  title: 'Components/<%=name%>',
} as Meta

const Template: Story<I<%=name%>Props> = (args) => <<%=name%> {...args} />

export const Default = Template.bind({})

Default.args = {}

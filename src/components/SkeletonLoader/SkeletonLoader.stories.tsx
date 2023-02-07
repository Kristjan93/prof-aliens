import { Meta, Story } from '@storybook/react'
import React from 'react'

import { ISkeletonLoaderProps, SkeletonLoader } from './SkeletonLoader'
import { Text } from '../Text'

export default {
  component: SkeletonLoader,
  title: 'Components/SkeletonLoader',
  parameters: {
    docs: {
      description: {
        component:
          'Skeleton loader can be used inside text elements and it will scale based on text size',
      },
    },
  },
} as Meta

const Template: Story<ISkeletonLoaderProps> = (args) => (
  <SkeletonLoader {...args} />
)

export const Default = Template.bind({})

Default.args = {
  className: 'h-24 w-44',
}

export const ImageWithText = () => (
  <div className="mx-auto grid max-w-md grid-cols-3 gap-4">
    <SkeletonLoader className="h-full w-full" />
    <div className="col-span-2">
      <Text variant="h2" className="mb-2">
        <SkeletonLoader />
      </Text>
      {[...Array(5)].map((_, key) => (
        <Text key={key} className="mb-1">
          <SkeletonLoader />
        </Text>
      ))}
    </div>
  </div>
)

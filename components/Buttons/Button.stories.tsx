import React from 'react'

import { ComponentMeta } from '@storybook/react'
import Button from '.'

export default {
  title: 'Components/Buttons',
  component: Button,
} as ComponentMeta<typeof Button>

export const Primary = () => (
  <Button as="button" color="primary" variant="default">
    Primary
  </Button>
)

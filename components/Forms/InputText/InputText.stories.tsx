import React from 'react'

import InputText, { RegisterInput } from '.'
import { ComponentMeta } from '@storybook/react'
import { HiAcademicCap } from 'react-icons/hi'
import { useForm } from 'react-hook-form'

export default {
  title: 'Components/InputText',
  component: InputText,
} as ComponentMeta<typeof InputText>

export const inputText = () => {
  const { register } = useForm<RegisterInput>()
  return (
    <InputText
      name="email"
      label="Email"
      type="email"
      icon={<HiAcademicCap size={19} />}
      register={register}
    />
  )
}

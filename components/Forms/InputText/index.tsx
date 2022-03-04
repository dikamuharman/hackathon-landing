import React, { HTMLInputTypeAttribute, useState } from 'react'
import { Path, UseFormRegister } from 'react-hook-form'

type DefaultItemInput = {
  username: string
  name: string
  phone: string
  email: string
  password: string
  retype_password: string
}

export type { DefaultItemInput }

type InputProps = {
  name: Path<DefaultItemInput>
  type: HTMLInputTypeAttribute
  label: Path<string>
  addOn?: Path<string>
  icon?: Path<string> | React.ReactChild
  placeholder?: string
  register: UseFormRegister<DefaultItemInput>
}

const InputText = ({
  name,
  addOn,
  label,
  icon,
  type,
  placeholder,
  register,
}: InputProps) => {
  const [isVisible, setIsVisible] = useState(true)

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setIsVisible(!isVisible)
  }

  if (type === 'password') {
    type = isVisible ? 'password' : 'text'
  }

  return (
    <div className="mb-4 ">
      <label htmlFor="e-mail" className=" text-base ">
        {label}
      </label>
      <div className="mt-2 flex w-full items-center justify-between overflow-hidden rounded-full bg-[#EFEFEF] outline-primary">
        {addOn && (
          <span className="inline-flex h-full w-[75px] items-center rounded-l-md bg-gray-200 py-3 px-5 ">
            {addOn}
          </span>
        )}
        <input
          className="font-xs mx-2 h-full w-full bg-transparent px-3 py-3 outline-none"
          placeholder={placeholder}
          type={type}
          {...register(name)}
        />
        {icon && (
          <button
            className="flex h-full items-center p-3 pr-7"
            onClick={buttonHandler}
          >
            {icon}
          </button>
        )}
      </div>
    </div>
  )
}

export default InputText

import React, { HTMLInputTypeAttribute, useState } from 'react'
import { Path, UseFormRegister } from 'react-hook-form'

type DefaultItemInput = {
  username: string
  name: string
  phone: string
  email: string
  password: string
  retype_password: string
  namaTim: string
  anggotaTim: string
  uploadFoto: FileList
  uploadBuktiGSC: FileList
}

export type { DefaultItemInput }

interface InputProps {
  name: Path<DefaultItemInput>
  type: HTMLInputTypeAttribute
  label: Path<string>
  addOn?: Path<string>
  icon?: Path<string> | React.ReactChild
  placeholder?: string
  register: UseFormRegister<DefaultItemInput>
  helperText?: string
  accept?: string
}

const InputText = ({
  name,
  addOn,
  label,
  icon,
  type,
  placeholder,
  register,
  helperText,
  accept,
}: InputProps) => {
  const [isVisible, setIsVisible] = useState(true)

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setIsVisible(!isVisible)
  }

  if (type === 'password') {
    type = isVisible ? 'password' : 'text'
  }
  let className =
    'font-xs mx-2 h-full w-full bg-transparent px-3 py-3 outline-none'

  if (type === 'file') {
    className =
      'font-xs  h-full w-full bg-transparent  outline-none file:border-none file:h-full file:bg-secodary file:rounded file:px-3 file:py-3'
  }

  return (
    <div className="mb-4 ">
      <label htmlFor="e-mail" className=" text-md">
        {label}
      </label>
      <div className="mt-2 flex w-full items-center justify-between overflow-hidden rounded bg-[#EFEFEF] outline-primary">
        {addOn && (
          <span className="inline-flex h-full w-[75px] items-center rounded-l-md bg-gray-200 py-3 px-5 ">
            {addOn}
          </span>
        )}
        <input
          className={className}
          placeholder={placeholder}
          type={type}
          accept={accept}
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
      <span className="text-sm text-gray-400">{helperText}</span>
    </div>
  )
}

export default InputText

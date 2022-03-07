import React from 'react'
import { Menu } from '@headlessui/react'
import nookies from 'nookies'
import Router from 'next/router'

const DropdownMenu = () => {
  const onLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    nookies.destroy(null, 'token')
    Router.replace('/')
  }

  return (
    <Menu as="div" className="relative z-10 inline-flex flex-col items-end">
      <Menu.Button className="rounded bg-primary px-6 py-2 text-white">
        Account setting
      </Menu.Button>
      <Menu.Items className="absolute right-0 top-9 mt-2 flex w-56 origin-top-right flex-col divide-y divide-gray-100 rounded-md  bg-white shadow-lg focus:outline-none">
        <Menu.Item>
          {({ active }) => (
            <button
              className={`${active && 'bg-blue-500'} rounded p-4 text-right`}
              onClick={onLogout}
            >
              Logout
            </button>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}

export default DropdownMenu

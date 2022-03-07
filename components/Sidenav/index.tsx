import Link from 'next/link'
import React from 'react'
import menus from '../../data/menus'
import Button from '../Buttons'

type SidenavProps = {
  open: boolean
}

const Sidenav = ({ open }: SidenavProps) => {
  const isOpen = open ? 'opacity-100 ' : 'opacity-0 invisible'

  return (
    <nav
      className={`fixed top-0 left-0 z-10 h-screen w-screen bg-primary p-8 ${isOpen} `}
    >
      <ul className="mb-4 mt-9 flex flex-col">
        {menus.map((menu, i) => (
          <li
            key={`${i}-links`}
            className="mb-10 text-right text-2xl  text-white"
          >
            <Link href={menu.url}>{menu.name}</Link>
          </li>
        ))}
        <li className="mt-20">
          <Button
            as="link"
            href="/register"
            variant="default"
            className="block bg-white text-center text-primary"
          >
            Sign Up
          </Button>
        </li>
        <li className="mt-6">
          <Button
            as="link"
            href="/login"
            variant="outline"
            className="block border-white text-center text-white"
          >
            Login
          </Button>
        </li>
      </ul>
    </nav>
  )
}

export default Sidenav

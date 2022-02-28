import Link from 'next/link'
import React from 'react'
import menus from '../../data/menus'
import Button from '../Buttons'
import Logo from '../icons/Logo'

const Navbar = () => {
  return (
    <nav className="container mx-auto mt-2 flex flex-col px-5 pt-8 lg:mt-7 lg:h-auto lg:flex-row lg:justify-between  lg:px-20">
      <Link href="/" passHref>
        <a className="h-[24px] self-center">
          <Logo />
        </a>
      </Link>
      <div className="hidden flex-row justify-between lg:flex">
        <ul className="mb-4 flex flex-row ">
          {menus.map((menu, i) => (
            <li
              key={`${i}-links`}
              className="text-right text-primary lg:ml-7 lg:text-lg"
            >
              <Link href={menu.url}>{menu.name}</Link>
            </li>
          ))}
        </ul>
        <div className="md:ml-14">
          <Button as="link" variant="outline" type="primary" href="/">
            Login
          </Button>
          <Button
            as="link"
            variant="default"
            href="/"
            className="ml-3"
            type="primary"
          >
            Sign up
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

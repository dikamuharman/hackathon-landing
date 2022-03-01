import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Sidenav from '../components/Sidenav'
import HeroSection from '../components/Section/HeroSection'
import { HiMenu, HiX } from 'react-icons/hi'
import { useState } from 'react'
import AboutSection from '../components/Section/AboutSection'
import PrizeSection from '../components/Section/PrizeSection'
import FaqSection from '../components/Section/FaqSection'

const Home: NextPage = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Head>
        <link href="http://fonts.cdnfonts.com/css/mont" rel="stylesheet" />
      </Head>
      <Navbar />
      <Sidenav open={open} />
      <div className="fixed bottom-6 right-5 z-20 lg:hidden">
        <button
          className="rounded-full bg-primary p-4 shadow-md "
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX color="#fff" /> : <HiMenu color="#fff" />}
        </button>
      </div>
      <HeroSection />
      <AboutSection />
      {/* TODO : Disini timeline */}
      <PrizeSection />
      <FaqSection />
    </>
  )
}

export default Home

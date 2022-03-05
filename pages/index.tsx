import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Sidenav from '../components/Sidenav/Mobile'
import HeroSection from '../components/Section/HeroSection'
import { HiMenu, HiX } from 'react-icons/hi'
import { useState } from 'react'
import AboutSection from '../components/Section/AboutSection'
import PrizeSection from '../components/Section/PrizeSection'
import OfficialSection from '../components/Section/OfficialSection'
import MediaSection from '../components/Section/MediaSection'
import FaqSection from '../components/Section/FaqSection'
import SubscribeSection from '../components/Section/SubscribeSection'
import FooterSection from '../components/Section/FooterSection'
import TimelineSection from '../components/Section/TimelineSection'

const Home: NextPage = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Head>
        <link
          href="http://fonts.cdnfonts.com/css/google-sans"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Sidenav open={open} />
      <div className="fixed bottom-6 right-5 z-20 lg:hidden">
        <button
          className="rounded-full bg-primary p-4 shadow-md"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <HiX color="#fff" size={24} />
          ) : (
            <HiMenu color="#fff" size={24} />
          )}
        </button>
      </div>
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <PrizeSection />
      <OfficialSection />
      <MediaSection />
      <div className="bg-primary ">
        <FaqSection />
      </div>
      <SubscribeSection />
      <FooterSection />
    </>
  )
}

export default Home

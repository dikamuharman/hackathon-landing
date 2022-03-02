import React from 'react'
import Container from '../Container'
import Image from 'next/image'
import Button from '../Buttons'
import Countdown from '../Countdown'
import HeroImage from '../../assets/hero-image.png'

const HeroSection = () => {
  return (
    <Container
      as="section"
      className="grid grid-cols-1 grid-rows-[1fr_250px_150px] lg:mt-4 lg:grid-cols-2 lg:grid-rows-[1fr_150px]"
    >
      <div className="flex justify-center lg:order-2">
        <Image src={HeroImage} alt="Hero image" objectFit="cover" />
      </div>
      <div className="mt-6 flex flex-col items-center lg:order-1 lg:row-span-2  lg:items-start">
        <div>
          <h1 className="text-center text-3xl font-bold text-textPrimary lg:text-left lg:text-6xl">
            Hackfest <br /> Indonesia
          </h1>
          <div className="mt-4">
            <p className="w-[223px] text-center text-sm lg:w-[338px] lg:text-left lg:text-lg">
              Register your team work quickly and be a winner turn obstacles
              into opportunities with us
            </p>
          </div>
        </div>
        <div className="mt-7 lg:mt-[128px]">
          <Button
            as="link"
            href="/"
            color="secondary"
            variant="default"
            className="text-sm"
          >
            Get started
          </Button>
          <Button
            as="link"
            href="/"
            color="primary"
            variant="outline"
            className="ml-7 text-sm"
          >
            Download Guidebook
          </Button>
        </div>
      </div>
      <div className=" lg:relative lg:order-3">
        <Countdown className="-top-24 w-[100%] shadow-md lg:absolute" />
      </div>
    </Container>
  )
}

export default HeroSection

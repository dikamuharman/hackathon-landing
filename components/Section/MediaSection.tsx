import React from 'react'
import Container from '../Container'
import Image from 'next/image'
import HeroImage from '../../assets/media-partner.png'

const MediaSection = () => {
  return (
    <Container as="section" className="flex flex-col items-center">
      <h2 className="mb-7 mt-20 text-3xl font-bold text-textPrimary lg:mb-10 lg:text-5xl">
        Media Partner
      </h2>
      <div className="flex flex-col items-center rounded-lg bg-white mx-20 px-4 py-9 shadow lg:flex-row lg:justify-center lg:p-16">
        <Image src={HeroImage} alt="Hero image" objectFit="cover" />
      </div>
    </Container>
  )
}

export default MediaSection

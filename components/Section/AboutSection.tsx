import Image from 'next/image'
import React from 'react'
import Container from '../Container'
import AboutImage from '../../assets/section-image-1.png'
import Button from '../Buttons'

const AboutSection = () => {
  return (
    <Container as="section" className="mb-20 flex flex-col lg:flex-row">
      <div className="flex justify-start lg:w-1/2">
        <Image src={AboutImage} alt="About image" width={500} height={466} />
      </div>
      <div className="mt-8 text-center lg:w-1/2 lg:text-left">
        <h2 className="mb-7 text-3xl font-bold text-textPrimary lg:mb-10 lg:text-5xl">
          About Us
        </h2>
        <p className="mb-7 text-sm leading-6 lg:mb-10 lg:text-lg lg:leading-9">
          HackFest Indonesia is Indonesia’s hackathon <br />
          held by GDSC Indonesia where university students <br />
          of different skills from all over Indonesia can come <br />
          together to experiment and develop impactful <br />
          software or hardware based on <br />
          United Nation 17 SDGs.
        </p>
        <Button as="link" href="/" color="secondary">
          Learn more
        </Button>
      </div>
    </Container>
  )
}

export default AboutSection

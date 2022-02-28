import React from 'react'
import Container from '../Container'
import Image from 'next/image'
import SectionImage from '../../assets/section-image-2.png'

const PrizeSection = () => {
  return (
    <Container as="section">
      <div>
        <Image src={SectionImage} />
      </div>
    </Container>
  )
}

export default PrizeSection

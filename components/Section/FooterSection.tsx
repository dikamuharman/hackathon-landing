import React from 'react'
import Image from 'next/image'
import Container from '../Container'
import DscLogo from '../../assets/logo.png'
import { GrTwitter, GrFacebook, GrInstagram } from 'react-icons/gr'

const FooterSection = () => {
  return (
    <Container as="footer" className="mt-10 flex flex-col items-center py-16">
      <Image src={DscLogo} />
      <div className="mt-10 flex w-1/2 justify-between lg:w-1/6">
        <GrTwitter color="#405274" size={20} />
        <GrInstagram color="#405274" size={20} />
        <GrFacebook color="#405274" size={20} />
      </div>
    </Container>
  )
}

export default FooterSection

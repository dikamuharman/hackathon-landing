import React from 'react'
import Container from '../Container'
import Image from 'next/image'
import SectionImage from '../../assets/section-image-2.png'
import Champion from '../icons/Champion'
import CheckImage from '../../assets/cheklist.png'
import Button from '../Buttons'

const benefits = [
  'Mentorships from experts',
  'Prizes',
  'Feedback and inputs  from professional judges',
]

const PrizeSection = () => {
  return (
    <Container
      as="section"
      className="lg:flex lg:items-center lg:justify-between"
    >
      <div className="relative flex flex-col items-center justify-center lg:order-2 lg:w-1/2">
        <Image src={SectionImage} width={370} height={554} />
        <div className="absolute -bottom-8 flex w-[250px] items-center justify-center rounded-xl bg-white py-2 px-6 text-black shadow-md lg:right-8 ">
          <Champion />
          <div className="ml-3 flex flex-col">
            <span className="text-sm">Total Prizes</span>
            <span className="text-xl font-semibold">IDR 10.000.000</span>
          </div>
        </div>
      </div>
      <div className="mt-14 flex flex-col items-center lg:order-1  lg:items-start">
        <h2 className="mb-2 text-3xl font-bold text-textPrimary lg:mb-6 lg:text-5xl">
          Prizes & Benefits
        </h2>
        <p className="mb-2 text-black lg:mb-8 lg:text-2xl">
          The benefits you will get if you win
        </p>
        <ul className=" text-black">
          {benefits.map((benefit, i) => (
            <li
              className="my-3 flex w-[310px] items-center lg:w-[400px] "
              key={`${i}-benefits`}
            >
              <Image
                src={CheckImage}
                alt="Checklist"
                className="w-full shrink-0"
              />
              <p
                className="ml-3 break-words text-sm font-semibold lg:text-base"
                dangerouslySetInnerHTML={{ __html: benefit }}
              />
            </li>
          ))}
        </ul>
        <Button as="link" color="secondary" href="/" className="mt-5">
          Learn more
        </Button>
      </div>
    </Container>
  )
}

export default PrizeSection

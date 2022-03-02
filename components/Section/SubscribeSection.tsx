import React from 'react'
import Button from '../Buttons'
import Container from '../Container'

const SubscribeSection = () => {
  return (
    <Container as="section" className="-mt-36">
      <div className="flex flex-col items-center rounded-lg bg-white px-4 py-9 shadow lg:flex-row lg:justify-center lg:p-16">
        <div className="mb-9 lg:w-1/2">
          <h3 className="mb-3 text-center text-2xl font-bold text-textPrimary lg:text-left lg:text-4xl">
            Want to get <br className="lg:hidden" /> notification?
          </h3>
          <p className="text-xs text-[#C4C4C4] lg:text-lg">
            Put your email address and get listed
          </p>
        </div>
        <div className="flex justify-between overflow-hidden rounded-full border-2 border-primary p-1 lg:w-1/2 ">
          <input
            type="text"
            placeholder="enter email address"
            className="w-4/6 bg-white px-5 text-xs outline-none placeholder:text-primary lg:text-base"
          />
          <Button
            as="button"
            color="secondary"
            variant="default"
            className="w-2/6 !rounded-full text-xs lg:text-base"
          >
            Get listed
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default SubscribeSection

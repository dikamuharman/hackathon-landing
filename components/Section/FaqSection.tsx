import React from 'react'
import Container from '../Container'
import FAQs from '../../data/faq'
import Collapse from '../Collapse'

const FaqSection = () => {
  return (
    <Container
      as="section"
      className="mt-28 flex flex-col items-center pt-28 pb-32"
    >
      <h3 className="text-center text-3xl font-bold text-white">
        Frequently <br className="lg:hidden" /> Asked <br /> Questions
      </h3>
      <div className="mt-12 w-full lg:w-2/3">
        {FAQs.map(({ question, answer }, i) => (
          <Collapse question={question} answer={answer} key={`${i}-faq`} />
        ))}
      </div>
    </Container>
  )
}

export default FaqSection

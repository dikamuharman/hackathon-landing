import React from 'react'
import Container from '../Container'

const timeLines = [
  'Registration',
  'Techmeet',
  'Hacking time',
  'submission',
  'Showcase and awarding',
  'Special mentorship',
  'GSC Submission deadline',
]

const TimelineSection = () => {
  return (
    <Container as="section" className="flex flex-col items-center">
      <h2 className="mb-7 text-3xl font-bold text-textPrimary lg:mb-10 lg:text-5xl">
        Timeline
      </h2>
      <div className="flex w-full justify-center px-4">
        {/* <div className="mr-5 border-2 border-dotted border-primary"></div> */}
        <ul className="lg:flex">
          {timeLines.map((timeLine, i) => (
            <li className="group relative flex lg:flex-col" key={i}>
              <div className="lg:group-last::group-odd:border-primary mr-4 border-2 border-dashed group-last:border-none group-odd:border-secodary group-even:border-primary lg:mr-0 lg:group-last:border-dashed"></div>
              <div className="py-7 ">
                <div className="lg: absolute -left-2 top-0 flex h-[18px] w-[18px] items-center justify-center rounded-full group-odd:bg-secodary group-even:bg-primary lg:-top-2">
                  <div className="h-[8px] w-[8px] rounded-full bg-white"></div>
                </div>
                <div className="-mt-4 pr-5 lg:mt-0 lg:text-center">
                  <p className="font-bold">{timeLine}</p>
                  <span>(12 Mar - 18 mar)</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}

export default TimelineSection

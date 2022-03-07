import React from 'react'
import Container from '../Container'

const timeLines = [
  {
    name: 'Registration',
    date: '5 - 18 march',
  },
  {
    name: 'Opening & Technical meeting',
    date: '9 march',
  },
  {
    name: 'Tech talk',
    date: '20 march',
  },
  {
    name: 'Mentorship',
    date: '21 - 25 march',
  },
  {
    name: 'Awarding top 10 & top 5',
    date: '26 march',
  },
  {
    name: 'Showcase top 5 + awarding top 3',
    date: '27 march',
  },
  {
    name: 'Controlling Partisipant GSC',
    date: '28 march',
  },
]

const TimelineSection = () => {
  return (
    <Container as="section" className="flex flex-col items-center">
      <h2 className="mb-7 text-3xl font-bold text-textPrimary lg:mb-10 lg:text-5xl">
        Timeline
      </h2>
      <div className="flex w-full justify-center px-4">
        <ul className="lg:flex">
          {timeLines.map((timeLine, i) => (
            <li className="group relative flex lg:flex-col" key={i}>
              <div className="lg:group-last::group-odd:border-primary mr-4 border-2 border-dashed group-last:border-none group-odd:border-secodary group-even:border-primary lg:mr-0 lg:group-last:border-dashed"></div>
              <div className="py-7 ">
                <div className="lg: absolute -left-2 top-0 flex h-[18px] w-[18px] items-center justify-center rounded-full group-odd:bg-secodary group-even:bg-primary lg:-top-2">
                  <div className="h-[8px] w-[8px] rounded-full bg-white"></div>
                </div>
                <div className="-mt-4 pr-5 lg:mt-0 lg:text-center">
                  <p className="font-bold">{timeLine.name}</p>
                  <span>{timeLine.date}</span>
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

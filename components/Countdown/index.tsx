import { useState, useEffect } from 'react'
import CountdownItem from './CountdownItem'

type Count = {
  name: 'Days' | 'Hours' | 'Minutes' | 'Seconds'
  time: number
}

type CountProps = {
  className?: string
}

const Countdown = ({ className = '' }: CountProps) => {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear()

    const diference = +new Date(`03/12/${year}`) - +new Date()

    let timeLeft: Array<Count> = []

    if (diference > 0) {
      timeLeft = [
        {
          name: 'Days',
          time: Math.floor(diference / (1000 * 60 * 60 * 24)),
        },
        {
          name: 'Hours',
          time: Math.floor((diference / (1000 * 60 * 60)) % 24),
        },
        {
          name: 'Minutes',
          time: Math.floor((diference / 1000 / 60) % 60),
        },
        {
          name: 'Seconds',
          time: Math.floor((diference / 1000) % 60),
        },
      ]
    }
    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearTimeout(timer)
  })

  return (
    <div
      className={`flex justify-between rounded-2xl bg-white px-4 py-3 md:px-12 md:py-6 ${className}`}
    >
      {timeLeft.map(
        (time, i) =>
          time && (
            <CountdownItem
              time={time.time}
              type={time.name}
              key={`${i}-time`}
            />
          )
      )}
    </div>
  )
}

export default Countdown

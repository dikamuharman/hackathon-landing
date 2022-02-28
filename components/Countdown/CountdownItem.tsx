type CountdownItemProps = {
  type: 'Days' | 'Hours' | 'Minutes' | 'Seconds'
  time: number
}

const CountdownItem = ({ type, time }: CountdownItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-3xl font-bold md:text-6xl">{time}</span>
      <span className="text-xs md:text-base">{type}</span>
    </div>
  )
}

export default CountdownItem

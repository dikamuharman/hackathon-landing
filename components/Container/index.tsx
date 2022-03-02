import React from 'react'

type ContainerProps = {
  as: 'div' | 'section' | 'main' | 'footer'
  children: React.ReactNode
  className?: string
}

const Container = ({ as = 'div', children, className }: ContainerProps) => {
  const Component = as || 'div'

  return (
    <Component
      className={`container mx-auto px-5 pt-8 md:px-16 lg:px-20 ${className}`}
    >
      {children}
    </Component>
  )
}

export default Container

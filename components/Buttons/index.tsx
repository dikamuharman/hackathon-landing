import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'

type AppProps = {
  variant?: 'outline' | 'default' | 'text'
  color?: 'primary' | 'secondary'
  as?: 'link' | 'button'
  children: string
  className?: string
  href?: string
  isRounded?: boolean
}

const Button: React.VFC<AppProps> = ({
  as = 'button',
  color,
  children,
  variant = 'default',
  className = '',
  href,
  isRounded = true,
  ...rest
}: AppProps) => {
  const buttonClass = classNames(
    {
      'bg-primary text-white hover:bg-[#0355A7]':
        variant === 'default' && color === 'primary',
      'border-2': variant === 'outline',
      'border-primary text-primary hover:bg-primary hover:text-white':
        variant === 'outline' && color === 'primary',
      'border-secodary text-secodary':
        variant === 'outline' && color === 'secondary',
      'bg-secodary text-white hover:bg-[#ED8E00]':
        variant === 'default' && color === 'secondary',
    },
    `cursor-pointer rounded-xl lg:px-6 lg:py-[15px] px-4 py-[10px] hover:shadow-md transition-colors transition-shadow ${className}`
  )

  return as === 'link' ? (
    <Link href={href as string} passHref>
      <a className={buttonClass} {...rest}>
        {children}
      </a>
    </Link>
  ) : (
    <button className={buttonClass} {...rest}>
      {children}
    </button>
  )
}

export default Button

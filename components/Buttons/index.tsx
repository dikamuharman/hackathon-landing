import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'

type AppProps = {
  variant?: 'outline' | 'default' | 'text'
  type?: 'primary' | 'secondary'
  as?: 'link' | 'button'
  children: string
  className?: string
  href?: string
}

const Button: React.VFC<AppProps> = ({
  as = 'button',
  type,
  children,
  variant = 'default',
  className = '',
  href,
  ...rest
}: AppProps) => {
  const buttonClass = classNames(
    {
      'bg-primary text-white': variant === 'default' && type === 'primary',
      'border-2': variant === 'outline',
      'border-primary text-primary':
        variant === 'outline' && type === 'primary',
      'border-secodary text-secodary':
        variant === 'outline' && type === 'secondary',
      'bg-secodary text-white ': variant === 'default' && type === 'secondary',
    },
    `cursor-pointer rounded-xl lg:px-6 lg:py-[15px] px-4 py-[10px] ${className}`
  )

  return as === 'link' ? (
    <Link href={href as string} passHref>
      <a className={buttonClass} {...rest}>
        {children}
      </a>
    </Link>
  ) : (
    <button className={buttonClass} {...rest}></button>
  )
}

export default Button

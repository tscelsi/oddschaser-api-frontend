import React from 'react'
import Image from 'next/image'
import classNames from 'classnames'

type Props = {
  size?: 'small' | 'medium' | 'large'
  variant?: 'primary' | 'error'
  image?: string
  stretch?: boolean
} & React.PropsWithChildren & React.HTMLAttributes<HTMLDivElement>

const Button = ({ size = "small", variant = "primary", image, stretch, children, ...rest }: Props) => {
  return (
    <div className={classNames("text-sm flex gap-2 transition-colors hover:cursor-pointer hover:bg-violet-100 text-whyte font-medium bg-violet-300 justify-center items-center px-6 rounded-lg",
      {
        "text-sm": size === 'small',
        "text-base": size === 'medium',
        "text-lg": size === 'large',
        "h-6": size === 'small',
        "h-8": size === 'medium',
        "h-10": size === 'large',
        "w-full": stretch,
        "w-fit": !stretch,
        "bg-violet-300": variant === 'primary',
        "hover:bg-violet-100": variant === 'primary',
        "bg-red-500": variant === 'error',
        "hover:bg-red-300": variant === 'error',
        "text-darkGrhey": variant === 'error',
      })} {...rest}>
      {image && <Image src={image} height={24} width={24} alt="button-image" />}
      {children}
    </div>
  )
}

export default Button
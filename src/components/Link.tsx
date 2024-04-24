import { PropsWithChildren } from 'react'

const Link = ({
  borderWidth = undefined,
  children,
  className,
  href,
  target,
}: PropsWithChildren<LinkProps>) => {
  return (
    <a
      href={href}
      target={target}
      className={
        'group relative truncate py-1 text-violet-700 dark:text-violet-300 ' +
        (className ? ` ${className}` : '')
      }
    >
      {children}
      <span
        className={
          (borderWidth === 'narrow'
            ? 'h-px'
            : borderWidth === 'none'
              ? 'hidden'
              : borderWidth === 'huge'
                ? 'h-1'
                : 'h-[2px]') +
          ' absolute bottom-px left-0 w-full  max-w-0 bg-gradient-to-r from-fuchsia-400 to-violet-800 transition-[max-width] duration-500 ease-line group-hover:max-w-full'
        }
      ></span>
    </a>
  )
}

export interface LinkProps {
  children: PropsWithChildren
  href: string
  target: string
  borderWidth?: undefined | 'narrow' | 'none' | 'huge'
  className?: string
}

export default Link

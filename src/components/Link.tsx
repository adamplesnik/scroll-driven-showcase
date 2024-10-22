import { PropsWithChildren } from 'react'

const Link = ({ children, className, href, target }: PropsWithChildren<LinkProps>) => {
  return (
    <a
      href={href}
      target={target}
      className={
        'group relative truncate py-1 text-cyan-700 dark:text-cyan-300 ' +
        (className ? ` ${className}` : '')
      }
    >
      {children}
      <span
        className={
          'absolute bottom-px left-0 h-px w-full max-w-0 bg-gradient-to-r from-cyan-400 to-cyan-800 transition-[max-width] duration-500 ease-line group-hover:max-w-full'
        }
      ></span>
    </a>
  )
}

export interface LinkProps {
  children: PropsWithChildren
  href: string
  target: string
  className?: string
}

export default Link

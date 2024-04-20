import { PropsWithChildren } from 'react'
import { LucideIcon } from 'lucide-react'

const Link = ({
  borderWidth = undefined,
  children,
  className,
  href,
  Icon = undefined,
  iconSize = 16,
  iconStrokeWidth = 1.65,
  inline = false,
  target,
}: PropsWithChildren<LinkProps>) => {
  return (
    <a
      href={href}
      target={target}
      className={
        (inline ? 'inline ' : 'inline-flex items-center gap-1 ') +
        'relative bg-gradient-to-r from-fuchsia-400 to-violet-800 bg-[length:200%_100%] bg-clip-text text-transparent ' +
        'group whitespace-normal transition-[background-size] duration-700 hover:bg-[length:500%_1000%] dark:to-violet-700 ' +
        (className ? ` ${className}` : '')
      }
    >
      <span>{children}</span>
      {Icon ? (
        <Icon
          size={iconSize}
          absoluteStrokeWidth={true}
          strokeWidth={iconStrokeWidth}
          className={
            'ease-bounce group-hover:animate-bounce-bottom stroke-violet-600 group-hover:max-w-full'
          }
        />
      ) : (
        ''
      )}
      <span
        className={
          (borderWidth === 'narrow'
            ? 'h-px'
            : borderWidth === 'none'
              ? 'hidden'
              : borderWidth === 'huge'
                ? 'h-1'
                : 'h-[2px]') +
          ' ease-line absolute -bottom-px left-0  w-full max-w-0 bg-gradient-to-r from-fuchsia-400 to-violet-800 transition-[max-width] duration-500 group-hover:max-w-full'
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
  Icon?: LucideIcon | undefined
  iconSize?: number | 16
  iconStrokeWidth?: number | 2
  inline?: boolean
}

export default Link

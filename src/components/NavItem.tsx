import clsx from 'clsx'
import { LucideIcon } from 'lucide-react'
import { NavLink, NavLinkProps } from 'react-router-dom'

const NavItem = ({ Icon, smallIcon = false, to, className, children, ...rest }: NavItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(
          'relative flex px-2  transition-colors duration-200 hover:text-zinc-950  dark:hover:text-zinc-100',
          className,
          isActive
            ? ' text-zinc-950 dark:text-zinc-200 [&>div]:block'
            : ' text-zinc-600 dark:text-zinc-400'
        )
      }
      {...rest}
    >
      <>
        {Icon ? (
          <Icon
            strokeWidth={smallIcon ? '1.5' : '1.2'}
            className={smallIcon ? 'size-6 p-0.5' : ''}
          />
        ) : (
          ''
        )}
        {children}
        <div className="absolute -bottom-5 left-1/2 -ml-1 hidden h-1 w-2 rounded-t-full bg-current transition-transform delay-150 duration-300" />
      </>
    </NavLink>
  )
}

export type NavItemProps = {
  Icon?: LucideIcon
  smallIcon?: boolean
} & NavLinkProps

export default NavItem

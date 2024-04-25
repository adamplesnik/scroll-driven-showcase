import { LucideIcon } from 'lucide-react'
import { NavLink, NavLinkProps } from 'react-router-dom'
import { addWithSpace } from '../utils/addWithSpace'

const NavItem = ({ Icon, to, className, children, ...rest }: NavItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        'relative flex px-2  transition-colors duration-200 hover:text-zinc-950  dark:hover:text-zinc-100' +
        addWithSpace(className) +
        (isActive
          ? ' text-zinc-950 dark:text-zinc-200'
          : ' text-zinc-600 dark:text-zinc-400 [&>span]:translate-y-1')
      }
      {...rest}
    >
      <>
        {Icon ? <Icon strokeWidth={'1.2'} /> : ''}
        {children}
        <span className="absolute -bottom-6 left-1/2 -ml-1 block size-2 rounded-full bg-current transition-transform delay-150 duration-300" />
      </>
    </NavLink>
  )
}

export type NavItemProps = {
  Icon?: LucideIcon
} & NavLinkProps

export default NavItem

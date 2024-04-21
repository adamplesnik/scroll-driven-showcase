import { LucideIcon } from 'lucide-react'
import { NavLink, NavLinkProps } from 'react-router-dom'
import { addWithSpace } from '../utils/addWithSpace'

const NavItem = ({ Icon, to, className, children, ...rest }: NavItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        'relative flex px-2 text-zinc-600 transition-colors duration-200 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100' +
        addWithSpace(className) +
        (isActive ? ' text-zinc-900 dark:text-zinc-200' : ' [&>span]:opacity-0')
      }
      {...rest}
    >
      <>
        {Icon ? <Icon strokeWidth={'1.5'} /> : ''}
        {children}
        <span className="absolute size-2 rounded-full bg-fuchsia-300 transition-[opacity]" />
      </>
    </NavLink>
  )
}

export type NavItemProps = {
  Icon?: LucideIcon
} & NavLinkProps

export default NavItem

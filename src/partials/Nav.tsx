import clsx from 'clsx'
import { AlignVerticalJustifyEnd, List, Trees } from 'lucide-react'
import { HTMLAttributes } from 'react'
import { NavLink } from 'react-router-dom'
import NavItem from '../components/NavItem'
import CenterLayout from '../layouts/CenterLayout'
import DarkModeSwitch from './DarkModeSwitch'
import NotSupportedBadge from './NotSupportedBadge'
import TechInfoSwitch from './TechInfoSwitch'

const Nav = ({ className, ...rest }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={clsx(
        'border-b border-b-slate-300/70 bg-slate-100/30 shadow-2xl shadow-black/5 backdrop-blur dark:border-b-zinc-600/50 dark:bg-zinc-900/50',
        className
      )}
      {...rest}
    >
      <CenterLayout className="relative flex items-center gap-2">
        <NavLink to="/">
          <h1 className="mr-4 hidden font-semibold tracking-[-0.0175em] text-zinc-800 sm:block dark:text-zinc-200">
            Scroll-driven playground
          </h1>
        </NavLink>
        <NotSupportedBadge />
        <NavItem Icon={AlignVerticalJustifyEnd} to="/" />
        <NavItem Icon={Trees} to="/forest" />
        <NavItem Icon={List} to="/list" />
        <div className="min-w-8 flex-1" />
        <DarkModeSwitch />
        <TechInfoSwitch />
      </CenterLayout>
    </div>
  )
}

export default Nav

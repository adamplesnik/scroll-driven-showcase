import clsx from 'clsx'
import { AlignVerticalJustifyEnd, Github, Trees } from 'lucide-react'
import { HTMLAttributes } from 'react'
import NavItem from '../components/NavItem'
import CenterLayout from '../layouts/CenterLayout'
import DarkModeSwitch from './DarkModeSwitch'
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
        <h1 className="mr-4 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
          Scroll-driven Playground
        </h1>
        <NavItem Icon={AlignVerticalJustifyEnd} to="/" />
        <NavItem Icon={Trees} to="/forest" />
        <div className="min-w-8 flex-1" />
        <DarkModeSwitch />
        <TechInfoSwitch />
        <NavItem
          smallIcon
          Icon={Github}
          to="https://github.com/adamplesnik/scroll-driven-playground"
          target="_blank"
        />
      </CenterLayout>
    </div>
  )
}

export default Nav

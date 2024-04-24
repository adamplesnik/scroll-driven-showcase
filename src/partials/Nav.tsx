import { AlignVerticalJustifyEnd, Github, Trees } from 'lucide-react'
import { HTMLAttributes } from 'react'
import NavItem from '../components/NavItem'
import { addWithSpace } from '../utils/addWithSpace'
import DarkModeSwitch from './DarkModeSwitch'
import TechInfoSwitch from './TechInfoSwitch'

const Nav = ({ className, ...rest }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={
        'flex items-center gap-2 overflow-hidden bg-slate-100/40 px-4 shadow-2xl backdrop-blur md:rounded-full dark:bg-slate-400/20' +
        addWithSpace(className)
      }
      {...rest}
    >
      <NavItem Icon={AlignVerticalJustifyEnd} to="/" />
      <NavItem Icon={Trees} to="/forest" />
      <div className="min-w-8 flex-1" />
      <DarkModeSwitch />
      <TechInfoSwitch />
      <NavItem
        Icon={Github}
        to="https://github.com/adamplesnik/scroll-driven-playground"
        target="_blank"
      />
    </div>
  )
}

export default Nav

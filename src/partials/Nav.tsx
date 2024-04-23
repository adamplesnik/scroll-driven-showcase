import { Github, TentTree, Trees } from 'lucide-react'
import { HTMLAttributes } from 'react'
import NavItem from '../components/NavItem'
import { addWithSpace } from '../utils/addWithSpace'
import DarkModeSwitch from './DarkModeSwitch'

const Nav = ({ className, ...rest }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={
        'flex items-center gap-2 overflow-hidden rounded-full bg-slate-100/40 px-4 shadow-2xl backdrop-blur dark:bg-slate-400/20' +
        addWithSpace(className)
      }
      {...rest}
    >
      <NavItem Icon={TentTree} to="/" />
      <NavItem Icon={Trees} to="/forest" />
      <div className="w-4" />
      <DarkModeSwitch />
      <NavItem
        Icon={Github}
        to="https://github.com/adamplesnik/scroll-driven-playground"
        target="_blank"
      />
    </div>
  )
}

export default Nav

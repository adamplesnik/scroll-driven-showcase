import { BrainCircuit, TentTree } from 'lucide-react'
import { HTMLAttributes } from 'react'
import NavItem from '../components/NavItem'
import { addWithSpace } from '../utils/addWithSpace'
import DarkModeSwitch from './DarkModeSwitch'

const Nav = ({ className, ...rest }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={
        'flex items-center gap-4 rounded-full bg-slate-700/10 px-4 shadow-2xl backdrop-blur dark:bg-slate-400/10' +
        addWithSpace(className)
      }
      {...rest}
    >
      <NavItem Icon={TentTree} to="/" />
      <div className="w-4" />
      <DarkModeSwitch />
    </div>
  )
}

export default Nav

import { HTMLAttributes } from 'react'
import { addWithSpace } from '../utils/addWithSpace'
import DarkModeSwitch from './DarkModeSwitch'

const Nav = ({ className, ...rest }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={'flex gap-4 ' + addWithSpace(className)} {...rest}>
      nav
      <DarkModeSwitch />
    </div>
  )
}

export default Nav

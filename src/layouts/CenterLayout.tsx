import { HTMLAttributes } from 'react'
import { addWithSpace } from '../utils/addWithSpace'

const CenterLayout = ({ children, className }: CenterLayoutProps) => {
  return (
    <div
      className={'mx-auto w-full max-w-screen-lg px-6 sm:px-10 md:px-16' + addWithSpace(className)}
    >
      {children}
    </div>
  )
}

export type CenterLayoutProps = {} & HTMLAttributes<HTMLDivElement>

export default CenterLayout

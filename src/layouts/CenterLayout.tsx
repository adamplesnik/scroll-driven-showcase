import { HTMLAttributes } from 'react'
import { addWithSpace } from '../utils/addWithSpace'

const CenterLayout = ({ children, className }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={'mx-auto w-full max-w-screen-xl px-4 sm:px-8 md:px-16' + addWithSpace(className)}
    >
      {children}
    </div>
  )
}

export default CenterLayout

import { HTMLAttributes } from 'react'
import { addWithSpace } from '../utils/addWithSpace'

const CenterLayout = ({ children, className, narrow = false }: CenterLayoutProps) => {
  return (
    <div
      className={
        'mx-auto w-full px-4 sm:px-8 md:px-16' +
        (narrow ? ' max-w-screen-lg' : ' max-w-screen-xl') +
        addWithSpace(className)
      }
    >
      {children}
    </div>
  )
}

export type CenterLayoutProps = {
  narrow?: boolean
} & HTMLAttributes<HTMLDivElement>

export default CenterLayout

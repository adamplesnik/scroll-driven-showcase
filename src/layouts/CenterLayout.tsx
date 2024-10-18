import clsx from 'clsx'
import { HTMLAttributes } from 'react'

const CenterLayout = ({ children, className }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={clsx('mx-auto w-full max-w-screen-lg px-6 sm:px-10 md:px-16', className)}>
      {children}
    </div>
  )
}

export default CenterLayout

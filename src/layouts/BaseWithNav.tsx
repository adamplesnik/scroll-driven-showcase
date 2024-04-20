import { PropsWithChildren } from 'react'

const BaseWithNav = ({ children }: PropsWithChildren<BaseWithNavProps>) => {
  return (
    <div>
      {children}
      <div className="fixed bottom-4 left-4 z-50">nav</div>
    </div>
  )
}

export type BaseWithNavProps = {
  children: PropsWithChildren
}

export default BaseWithNav

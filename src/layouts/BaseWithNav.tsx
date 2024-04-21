import { PropsWithChildren } from 'react'
import Nav from '../partials/Nav'

const BaseWithNav = ({ children }: PropsWithChildren<BaseWithNavProps>) => {
  return (
    <div>
      {children}
      <Nav className="fixed bottom-8 left-6 z-50" />
    </div>
  )
}

export type BaseWithNavProps = {
  children: PropsWithChildren
}

export default BaseWithNav

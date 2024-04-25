import { PropsWithChildren } from 'react'
import Nav from '../partials/Nav'

const BaseWithNav = ({ children }: PropsWithChildren<BaseWithNavProps>) => {
  return (
    <>
      <Nav className="fixed left-0 right-0 top-0 z-50 md:left-4 md:right-auto md:top-3" />
      {children}
    </>
  )
}

export type BaseWithNavProps = {
  children: PropsWithChildren
}

export default BaseWithNav

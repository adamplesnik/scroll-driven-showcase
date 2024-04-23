import { PropsWithChildren } from 'react'
import Nav from '../partials/Nav'

const BaseWithNav = ({ children }: PropsWithChildren<BaseWithNavProps>) => {
  return (
    <>
      {children}
      <Nav className="fixed left-0 right-0 top-0 z-50 md:left-6 md:right-auto md:top-4" />
    </>
  )
}

export type BaseWithNavProps = {
  children: PropsWithChildren
}

export default BaseWithNav

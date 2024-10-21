import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from '../partials/Footer'
import Nav from '../partials/Nav'

const BaseWithNav = () => {
  return (
    <>
      <Nav className="fixed left-0 right-0 top-0 z-50" />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </>
  )
}

export default BaseWithNav

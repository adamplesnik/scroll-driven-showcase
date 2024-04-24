import { Analytics } from '@vercel/analytics/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Forest from './pages/forest/'
import Hero from './pages/hero/index.tsx'
import Circle from './pages/circle/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Circle />,
    errorElement: <Circle />,
  },
  {
    path: '/hero',
    element: <Hero />,
  },
  {
    path: '/forest',
    element: <Forest />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Analytics />
  </React.StrictMode>
)

import { Analytics } from '@vercel/analytics/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import BaseWithNav from './layouts/BaseWithNav.tsx'
import Forest from './pages/forest/'
import Hero from './pages/hero/index.tsx'
import List from './pages/list/index.tsx'
import TechInfoContextProvider from './providers/TechInfoContextProvider.tsx'

const router = createBrowserRouter([
  {
    element: <BaseWithNav />,
    children: [
      {
        path: '/',
        element: <Hero />,
      },
      {
        path: '/forest',
        element: <Forest />,
      },
      {
        path: '/list',
        element: <List />,
      },
    ],
    errorElement: <Hero />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TechInfoContextProvider>
      <RouterProvider router={router} />
      <Analytics />
    </TechInfoContextProvider>
  </React.StrictMode>
)

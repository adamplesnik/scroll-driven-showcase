import { Analytics } from '@vercel/analytics/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Home from './pages/Home.tsx'
import Forest from './pages/forest/'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Home />,
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

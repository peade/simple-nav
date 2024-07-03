import { Navigate, createBrowserRouter } from 'react-router-dom'
import Home from '@/views/Home/Home'
import { lazy } from 'react'
import { SuspenseComp } from './SuspenseComp'
import Index from '@/views/Index'

const FENav = lazy(() => import('@/views/FENav/FENav'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: <Navigate to={'/index'} />,
      },
      {
        path: '/index',
        index: true,
        element: <Index />,
      },
    ],
  },
  {
    path: '/front-end',
    element: <SuspenseComp Component={FENav} />,
  },
])

export default router

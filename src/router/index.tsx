import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from '@/views/Layout/Layout'
import { lazy } from 'react'
import { SuspenseComp } from './SuspenseComp'
import Index from '@/views/Index'

const FENav = lazy(() => import('@/views/FENav/FENav'))

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
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
  ],
  {
    basename: '/simple-nav/',
  }
)

const Routes = () => <RouterProvider router={router} />

export default Routes

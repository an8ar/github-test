import { createBrowserRouter } from 'react-router-dom'
import { RouteErrorBoundary } from './ui/route-error-boundary'
import { AppLayout } from './ui/app-layout'
import { RootPage } from '@/pages/root'
import { UserDetailsPage } from '@/pages/user-details'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      {
        index: true,
        element: <RootPage />,
      },
      {
        path: 'user/:userId',
        element: <UserDetailsPage />,
      },
    ],
  },
])

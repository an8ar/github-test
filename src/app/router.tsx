import { createBrowserRouter } from 'react-router-dom'
import { RootPage } from '@/pages/root'
import { UserDetailsPage } from '@/pages/user-details'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
  },
  {
    path: '/user/:someId',
    element: <UserDetailsPage />,
  },
])

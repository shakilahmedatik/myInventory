import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import PrivateRoute from './PrivateRoute'
import DashboardLayout from '../layouts/DashboardLayout'
import ErrorPage from '../pages/ErrorPage'
import Contact from '../pages/Contact/Contact'
export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoute>
        <Main />
      </PrivateRoute>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
  },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/contact', element: <Contact /> },
])

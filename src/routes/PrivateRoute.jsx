import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router'
import { Context } from '../context'

const PrivateRoute = ({ children }) => {
  const {
    state: { user },
    dispatch,
  } = useContext(Context)
  const location = useLocation()

  if (user) {
    return children
  }
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>
}

export default PrivateRoute

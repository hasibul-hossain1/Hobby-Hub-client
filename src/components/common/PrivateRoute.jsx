import React from 'react'
import {useUserContext} from '../contexts/FirebaseContext/UserContext'
import { Navigate, useLocation } from 'react-router'

function PrivateRoute({children}) {
  const location=useLocation()
    const [user]=useUserContext()
   if (!user.userData) {
    return <Navigate to='/login' state={location.pathname}/>
   }
   return children
}

export default PrivateRoute
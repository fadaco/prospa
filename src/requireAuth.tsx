import React from 'react';
import { Navigate } from 'react-router-dom'

function RequireAuth (Component: React.ComponentType) {
   return function () {
    const auth = sessionStorage.getItem('auth');
    if(auth) {
       return <Component/>
    }

    if(!auth) {
        return <Navigate to={'/'}/>
    }
    return <Component/>
   }
}

export default RequireAuth;
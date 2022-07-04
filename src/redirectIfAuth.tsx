import React from "react";
import { Navigate } from 'react-router-dom'


function RedirectIfAuth(Component: React.ComponentType) {
    return function () {
        const auth = sessionStorage.getItem('auth');

        if(auth) {
            return <Navigate to="/dashboard" replace={true}/>
        }

        return <Component/>
    }
}

export default RedirectIfAuth;
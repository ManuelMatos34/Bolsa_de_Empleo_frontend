import { Navigate, Outlet } from "react-router-dom";
import { useContext } from 'react'
import Context from './global/Context';

export const PrivateRoute = ({ redirectTo = "/", children }) => {
    const s = useContext(Context);
    if (s.isAuthenticated === false) {
        
        return <Navigate to={redirectTo} replace />;
    }

    return children ? children : <Outlet />;
};



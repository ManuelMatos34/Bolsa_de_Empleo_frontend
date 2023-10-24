import { Navigate, Outlet } from "react-router-dom";
import { getIsAuthenticatedCookies } from "../helpers/Helpers";

export const PrivateRoute = ({ redirectTo = "/", children }) => {
    const authedUser = getIsAuthenticatedCookies();

    if (authedUser === false) {
        return <Navigate to={redirectTo} replace />;
    }

    return children ? children : <Outlet />;
};



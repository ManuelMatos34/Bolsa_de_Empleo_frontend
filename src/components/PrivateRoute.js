import { Navigate, Outlet } from "react-router-dom";
import { getIsAuthenticatedCookies, getUserRol } from "../helpers/Helpers";

export const PrivateRoute = ({ routeRol, children }) => {
  const authedUser = getIsAuthenticatedCookies();
  const rol = getUserRol();

  if (authedUser === false) {
    return <Navigate to={"/"} />;
  }

  if (!routeRol.includes(rol)) {
    return <Navigate to={"/unauthorized"} />;
  }

  return children ? children : <Outlet />;
};

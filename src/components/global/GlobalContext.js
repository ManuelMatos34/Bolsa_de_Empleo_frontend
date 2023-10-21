import React, { useState } from "react";
import AuthContext from "./Context";

const GlobalContext = (props) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false); // state to know if the user is authenticated
    const [authUser, setAuthUser] = useState([]); // data of the authenticated user

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, authUser, setAuthUser }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default GlobalContext;
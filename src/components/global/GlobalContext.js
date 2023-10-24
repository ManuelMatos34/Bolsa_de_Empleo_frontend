import React, { useState, } from "react";
import AuthContext from "./Context";

const GlobalContext = (props) => {
    const [authUser, setAuthUser] = useState([]); 

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default GlobalContext;
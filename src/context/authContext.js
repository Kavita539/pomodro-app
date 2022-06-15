import {
    useContext,
    createContext,
    useReducer
} from "react";
import {
    authReducer
} from "../reducer";

const authContext = createContext(null);

const useAuth = () => useContext(authContext);

const AuthProvider = ({
    children
}) => {
    const localStorageToken = localStorage.getItem("token");
    const [authState, authDispatch] = useReducer(authReducer, {
        token: localStorageToken ? localStorageToken : false,
        userInfo: null,
    });

    return ( <authContext.Provider value = {
            {
                authState,
                authDispatch
            }
        } > {
            children
        } </authContext.Provider>
    );
};

export {
    AuthProvider,
    useAuth
};
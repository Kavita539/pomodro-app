import {
    useContext,
    createContext,
    useReducer,
    useEffect
} from "react";
import {
    taskReducer
} from "../reducer";
import {
    useAuth
} from "./authContext";
import {
    getTask
} from "../services"

const taskContext = createContext(null);

const useTask = () => useContext(taskContext);

const TaskProvider = ({
    children
}) => {
    const [state, dispatch] = useReducer(taskReducer, {
        tasks: []
    });
    const {
        authState: {
            token
        },
    } = useAuth();

    useEffect(() => {
        if (token) {
            getTask(token, dispatch);
        }
    }, [token]);
    return ( <taskContext.Provider value = {
        {
            state,
            dispatch
        }
    } > {
        children
    } </taskContext.Provider>);
};

export {
    TaskProvider,
    useTask
};
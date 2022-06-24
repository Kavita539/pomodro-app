import {
    createContext,
    useContext,
    useReducer
} from "react";
import {
    timeReducer
} from "../reducer";

const timerContext = createContext(null);

const useTimer = () => useContext(timerContext);

const TimerProvider = ({
        children
    }) => {
        const [timeState, timeDispatch] = useReducer(timeReducer, {
            workTimeMinutes: 25,
            breakTimeMinutes: 5,
        });
    
    return (
        <timerContext.Provider value={{ timeState, timeDispatch }}>
			{children}
		</timerContext.Provider>
    );
    };

export {
    TimerProvider,
    useTimer
};
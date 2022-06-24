import {
    timeConstants
} from "../constants";

const timeReducer = (state, action) => {
    switch (action.type) {
        case timeConstants.CHANGE_TIME:
            return {
                ...state,
                workTimeMinutes: action.payload.workMinutes,
                    breakTimeMinutes: action.payload.breakMinutes,
            };
        default:
            return state;
    }
};

export {
    timeReducer
};
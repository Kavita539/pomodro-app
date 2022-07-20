import {
    timeConstants
} from "../constants";

const timeReducer = (state, action) => {
    switch (action.type) {
        case timeConstants.CHANGE_TIME:
            return {
                ...state,
                workTimeMinutes: action.payload.workTimeMinutes,
                breakTimeMinutes: action.payload.breakTimeMinutes,
            };
        default:
            return state;
    }
};

export {
    timeReducer
};
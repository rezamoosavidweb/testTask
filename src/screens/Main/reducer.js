/*
 *
 * Home reducer
 *
 */
import produce from "immer";
import * as Types from "./constants";

export const initialState = {
    tasks: [],
};

/* eslint-disable default-case, no-param-reassign */
const mainReducer = (state = initialState, action) =>
    produce(state, (draft) => {
        switch (action.type) {
            case Types.REMOVE_TASKS:
                draft.tasks = state.tasks.filter((task) => task.id !== action.payload);
                break;
            case Types.ADD_TASKS:
                draft.tasks = [...state.tasks, action.payload];
                break;
            case Types.EDIT_TASKS:
                const taskIndex1 = state.tasks.indexOf(state.tasks.find((task) => task.id === action.payload.id));
                const array = [...state.tasks];
                array[taskIndex1] = { id: action.payload.id, ...action.payload.task, status: action.payload.status };
                draft.tasks = [...array];
                break;
            case Types.APPROVE_TASKS:
                const taskIndex2 = state.tasks.indexOf(state.tasks.find((task) => task.id === action.payload.id));
                draft.tasks[taskIndex2].status = action.payload.status;
                break;
            default:
                break;
        }
    });

export default mainReducer;

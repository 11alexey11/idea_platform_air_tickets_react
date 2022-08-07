import { ticketsActionTypes } from './actionTypes';
import { Action } from './../../models/action';

const initialState = {
    list: [],
    sortedList: [],
    isSorting: false
};

export const ticketsReducer = (state = initialState, action: Action) => {
    switch(action.type) {
        case ticketsActionTypes.getAll: {
            return {
                ...state,
                list: action.payload
            }
        }
        case ticketsActionTypes.setSortedByTransfer: {
            return {
                ...state,
                sortedList: action.payload
            }
        }
        case ticketsActionTypes.setSortingFlag: {
            return {
                ...state,
                isSorting: action.payload
            }
        }
        default:
            return state;
    }
}
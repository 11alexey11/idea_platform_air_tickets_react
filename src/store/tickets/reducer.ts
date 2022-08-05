import { ticketsActionTypes } from './actionTypes';
import { Action } from './../../models/action';

const initialState = {
    list: []
};

export const ticketsReducer = (state = initialState, action: Action) => {
    switch(action.type) {
        case ticketsActionTypes.getAll: {
            return {
                ...state,
                list: action.payload
            }
        }
        default:
            return state;
    }
}
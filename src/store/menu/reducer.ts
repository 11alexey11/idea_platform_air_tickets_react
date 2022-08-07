import { Action } from './../../models/action';
import { menuActionTypes } from './actionTypes';

const initialState = {
    currency: 'RUB'
};

export const menuReducer = (state = initialState, action: Action) => {
    switch(action.type) {
        case menuActionTypes.changeCurrency: {
            return {
                ...state,
                currency: action.payload
            }
        }
        default:
            return state;
    }
}
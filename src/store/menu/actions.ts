import { menuActionTypes } from './actionTypes';

export const changeMenuCurrency = (currency: string) => ({
    type: menuActionTypes.changeCurrency,
    payload: currency
});
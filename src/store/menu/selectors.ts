import { State } from './../../models/state';

export const getCurrencySelector = (state: State) => state.menu.currency;
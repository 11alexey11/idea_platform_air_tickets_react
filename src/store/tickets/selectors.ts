import { State } from './../../models/state';

export const getTicketsSelector = (state: State) => state.tickets.list;
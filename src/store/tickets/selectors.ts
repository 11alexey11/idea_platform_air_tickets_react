import { State } from './../../models/state';

export const getTicketsSelector = (state: State) => state.tickets.list;

export const getSortedSelector = (state: State) => state.tickets.sortedList;

export const getIsSortingFlag = (state: State) => state.tickets.isSorting;
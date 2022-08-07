
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import { TicketService } from './../../api/TicketService';
import { ticketsActionTypes } from './actionTypes';

import { Ticket } from './../../models/ticket';
import { State } from './../../models/state';

const getTicketsAction = (tickets: Ticket[]) => ({
    type: ticketsActionTypes.getAll,
    payload: tickets
});

export const getTickets = () => {
    return async (dispatch: ThunkDispatch<State, undefined, AnyAction>) => {
        const tickets = await TicketService.getAll();
        dispatch(getTicketsAction(tickets));
    }
};

export const setSortedByTransfer = (tickets: Ticket[]) => ({
    type: ticketsActionTypes.setSortedByTransfer,
    payload: tickets
});

export const setSortingFlag = (isSorting: boolean) => ({
    type: ticketsActionTypes.setSortingFlag,
    payload: isSorting
});
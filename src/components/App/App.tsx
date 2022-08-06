import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { State } from '../../models/state';
import { getTickets } from '../../store/tickets';
import { Menu } from '../Menu';
import { TicketsList } from '../TicketsList';

import './index.scss';

const App = () => {
    const dispatch: ThunkDispatch<State, undefined, AnyAction> = useDispatch();

    useEffect(() => {
        dispatch(getTickets());
    }, [dispatch]);

    return (
        <>
            <Menu />
            <TicketsList />
        </>
    )
}

export default App;
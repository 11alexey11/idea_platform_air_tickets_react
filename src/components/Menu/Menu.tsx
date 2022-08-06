import React from 'react';
import { useSelector } from 'react-redux';
import { Ticket } from '../../models/ticket';

import { getTicketsSelector } from '../../store/tickets';
import { Currency } from './Currency';
import { Transfer } from './Transfer';

import './index.scss';

const Menu = () => {
    const ticketsList: Ticket[] = useSelector(getTicketsSelector);
    const stops = ticketsList.map((transfer: Ticket) => transfer.stops);
    const maxTransfer = stops.length !== 0 ? Math.max(...stops) : 0;
    const transfers = Array.from(Array(maxTransfer).keys());

    return ( ticketsList.length !== 0 ?
        <div className='menu-container'>
            <Currency />
            <Transfer transfers={transfers} />
        </div>
        : null
    );
};

export default Menu;
import React from 'react';
import { useSelector } from 'react-redux';

import { getTicketsSelector } from '../../store/tickets';
import { TicketCard } from '../TicketCard';

import './index.scss';

const TicketsList = () => {
    const ticketsList = useSelector(getTicketsSelector);

    return (
        <div className='tickets-container'>
            {
                ticketsList.map((ticket, index) => 
                    <TicketCard key={index} ticket={ticket}/>
                )
            }
        </div>
    );
};

export default TicketsList;
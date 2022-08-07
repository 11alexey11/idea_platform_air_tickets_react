import React from 'react';
import { useSelector } from 'react-redux';

import { getIsSortingFlag, getSortedSelector, getTicketsSelector } from '../../store/tickets';
import { TicketCard } from '../TicketCard';

import './index.scss';

const TicketsList = () => {
    const ticketsList = useSelector(getTicketsSelector);
    const sortedTicketsList = useSelector(getSortedSelector);
    const isSortingFlag = useSelector(getIsSortingFlag);

    return (
        <div className='tickets-container'>
            {
                isSortingFlag
                ?
                    sortedTicketsList.map((ticket, index) => 
                        <TicketCard key={index} ticket={ticket}/>
                    )
                :
                    ticketsList.map((ticket, index) => 
                        <TicketCard key={index} ticket={ticket}/>
                    )
            }
        </div>
    );
};

export default TicketsList;
import React from 'react';

import { formateDate } from '../../../utils/formateDate';

import './index.scss';

interface TicketDateProps {
    ticketDate: {
        origin: string,
        origin_name: string,
        destination: string,
        destination_name: string,
        departure_date: string,
        departure_time: string,
        arrival_date: string,
        arrival_time: string,
    },
    alignmentLeft?: boolean
}

const TicketDate = ({ ticketDate, alignmentLeft }: TicketDateProps) => {
    return (
        <div className={`tickets-container__ticket__info-date ${alignmentLeft ? 'left': 'right'}`}>
            <div className='tickets-container__ticket__info-date-time'>
                {ticketDate.departure_time || ticketDate.arrival_time}
            </div>
            <div className='tickets-container__ticket__info-date-name'>
                {ticketDate.origin ? `${ticketDate.origin}, ${ticketDate.origin_name}` : `${ticketDate.destination_name}, ${ticketDate.destination}`}
            </div>
            <div className={'tickets-container__ticket__info-date-date'}>
                {formateDate(ticketDate.departure_date || ticketDate.arrival_date, 'ru')}
            </div>
        </div>
    );
};

export default TicketDate;
import React from 'react';
import { useSelector } from 'react-redux';

import { TicketDate } from './TicketDate';
import { TicketStops } from './TicketStops';

import { Ticket } from '../../models/ticket';
import { Currency } from '../../models/currency';
import { getCurrencySelector } from '../../store/menu';
import { currencies } from '../../mocks/currencies';
import { exchangeRate } from '../../mocks/exchangeRate';
import { formatePrice } from '../../utils/formatePrice';

import './index.scss';


interface TicketCardProps {
    ticket: Ticket
}

const TicketCard = ({ ticket }: TicketCardProps) => {
    const currency: keyof Currency = useSelector(getCurrencySelector);

    return (
        <div className='tickets-container__ticket'>
            <div className='tickets-container__ticket__buy'>
                <div className='tickets-container__ticket__buy__img'></div>
                <a className='tickets-container__ticket__buy__btn' type='button'>
                    <div className='tickets-container__ticket__buy__btn__text'>Купить</div>
                    <div className='tickets-container__ticket__buy__btn__text'>за {`${formatePrice(ticket.price, exchangeRate[currency])} ${currencies[currency]}`}</div>
                </a>
            </div>
            <div className='tickets-container__ticket__info'>
                <TicketDate ticketDate={ticket} alignmentLeft />
                <TicketStops stops={ticket.stops} />
                <TicketDate ticketDate={ticket} />
            </div>
        </div>
    );
};

export default TicketCard;
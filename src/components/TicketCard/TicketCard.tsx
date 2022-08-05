import React from "react"

import { TicketDate } from "./TicketDate";
import { TicketStops } from "./TicketStops";

import { Ticket } from "../../models/ticket";

interface TicketCardProps {
    ticket: Ticket
}

import './index.scss';

const TicketCard = ({ ticket }: TicketCardProps) => {
    return (
        <div className="tickets-container__ticket">
            <div className="tickets-container__ticket__buy">
                <div className="tickets-container__ticket__buy__img"></div>
                <input className="tickets-container__ticket__buy__btn" type="button" value={`Купить за ${ticket.price}₽`} />
            </div>
            <div className="tickets-container__ticket__info">
                <TicketDate ticketDate={ticket} alignmentLeft />
                <TicketStops stops={ticket.stops} />
                <TicketDate ticketDate={ticket} />
            </div>
        </div>
    );
};

export default TicketCard;
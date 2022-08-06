import React from "react";

import { formateWordOfTransfer } from "../../../utils/formateWordOfTransfer";

import './index.scss';

interface TicketStopsProps {
    stops: number
}

const TicketStops = ({ stops }: TicketStopsProps) => {
    return (
        <div className='tickets-container__ticket__info-stops'>
            {formateWordOfTransfer(stops)}
        </div>
    )
};

export default TicketStops;
import React from "react";

import { formateWordOfTransfer } from "../../../utils/formateWordOfTransfer";

interface TicketStopsProps {
    stops: number
}

const TicketStops = ({ stops }: TicketStopsProps) => {
    return (
        <div>{formateWordOfTransfer(stops)}</div>
    )
};

export default TicketStops;
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { State } from "../../models/state";
import { getTickets, getTicketsSelector } from "../../store/tickets";

const TicketsList = () => {
    const dispatch: ThunkDispatch<State, undefined, AnyAction> = useDispatch();

    const ticketsList = useSelector(getTicketsSelector);

    useEffect(() => {
        dispatch(getTickets());
    }, [dispatch]);

    console.log(ticketsList);

    return (
        <div></div>
    );
};

export default TicketsList;
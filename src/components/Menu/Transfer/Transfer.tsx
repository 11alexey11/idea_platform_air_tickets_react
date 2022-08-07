import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { Ticket } from '../../../models/ticket';

import { getTicketsSelector, setSortedByTransfer, setSortingFlag } from '../../../store/tickets';
import { formateWordOfTransfer } from '../../../utils/formateWordOfTransfer';

import './index.scss';

interface TransferProps {
    transfers: number[]
}

interface ICheckboxObject {
    [index: string] : boolean
}

const Transfer = ({transfers} :TransferProps) => {
    const checkboxes = transfers.reduce((prev: ICheckboxObject, cur: number) => {
        prev[cur] = true;
        return prev;
    }, { 'all': true });

    const dispatch: Dispatch<AnyAction> = useDispatch();
    const [checkboxValues, setCheckboxValues] = useState(checkboxes);
    const tickets = useSelector(getTicketsSelector);
    

    const filterTicketsByTransfer = (obj: ICheckboxObject, tickets: Ticket[]) => {
        if (obj['all']) return tickets;

        const checkedCheckboxes = Object.keys(obj).filter((key) => key !== 'all' && obj[key]).map((item) => +item);
        const sortedTickets = tickets.filter((ticket) => checkedCheckboxes.includes(ticket.stops));
        
        return sortedTickets;
    }

    const checkboxHandler = (event: React.ChangeEvent<HTMLInputElement>, value: string | number) => {
        dispatch(setSortingFlag(true));
        if (value === 'all') {
            const obj: ICheckboxObject = {};
            for (const key in checkboxValues) {
                obj[key] = (event.target as HTMLInputElement).checked;
            }
            const sortedTickets = filterTicketsByTransfer(obj, tickets);
            dispatch(setSortedByTransfer(sortedTickets));
            setCheckboxValues(obj);
        } else {
            const obj = Object.assign({} , checkboxValues, { [value]: (event.target as HTMLInputElement).checked });
            const numberOfCheckedCheckboxes = Object.entries(obj).filter(([key, value]) => {
                if (key !== 'all' && value) return value;
            }).length;
            if (numberOfCheckedCheckboxes === transfers.length) {
                obj['all'] = !obj['all'];
            } else {
                obj['all'] = false;
            }
            const sortedTickets = filterTicketsByTransfer(obj, tickets);
            dispatch(setSortedByTransfer(sortedTickets));
            setCheckboxValues(obj);
        }
    };

    return (
        <div className='menu-container__transfer'>
            <div className='menu-container__transfer__title'>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
            <div className='menu-container__transfer__btn'>
                <label className='menu-container__transfer__btn__label'>
                    <input 
                        className='menu-container__transfer__btn__input'
                        type='checkbox' 
                        name='transfer'
                        checked={checkboxValues['all']}
                        onChange={(event) => checkboxHandler(event, 'all')} 
                    />
                    <span className='menu-container__transfer__btn__text'>Все</span>
                </label>
                {
                    transfers.map((_, index) =>     
                        <label key={index} className='menu-container__transfer__btn__label'>
                            <input 
                                className='menu-container__transfer__btn__input' 
                                type='checkbox'
                                name='transfer' 
                                checked={checkboxValues[index]}
                                onChange={(event) => checkboxHandler(event, index)} 
                            />
                            <span className='menu-container__transfer__btn__text'>{index !== 0 ? formateWordOfTransfer(index) : 'Без пересадок'}</span>
                        </label>     
                    )
                }
            </div>
        </div>
    );
};

export default Transfer;
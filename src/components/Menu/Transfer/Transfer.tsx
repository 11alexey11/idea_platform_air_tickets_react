import React, { useState } from 'react';

import { formateWordOfTransfer } from '../../../utils/formateWordOfTransfer';

import './index.scss';

interface TransferProps {
    transfers: number[]
}

interface ICheckbox {
    [index: string] : boolean
}

const Transfer = ({transfers} :TransferProps) => {
    const checkboxes = transfers.reduce((prev: ICheckbox, cur: number) => {
        prev[cur] = true;
        return prev;
    }, { 'all': true });

    const [checkboxValues, setCheckboxValues] = useState(checkboxes);

    const checkboxHandler = (event: React.ChangeEvent<HTMLInputElement>, value: string | number) => {
        if (value === 'all') {
            const obj: ICheckbox = {};
            for (const key in checkboxValues) {
                obj[key] = (event.target as HTMLInputElement).checked;
            }
            setCheckboxValues(obj);
        } else {
            const obj = Object.assign({} , checkboxValues, { [value]: (event.target as HTMLInputElement).checked });
            const numberOfCheckboxes = Object.entries(obj).filter(([key, value]) => {
                if (key !== 'all' && value) return value;
            }).length;
            if (numberOfCheckboxes === transfers.length) {
                obj['all'] = !obj['all'];
            } else {
                obj['all'] = false;
            }
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
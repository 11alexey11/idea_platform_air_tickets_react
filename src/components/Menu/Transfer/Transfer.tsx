import React from 'react';

import { formateWordOfTransfer } from '../../../utils/formateWordOfTransfer';

import './index.scss';

interface TransferProps {
    transfers: number[]
}

const Transfer = ({transfers} :TransferProps) => {
    return (
        <div className='menu-container__transfer'>
            <div className='menu-container__transfer__title'>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
            <div className='menu-container__transfer__btn'>
                <label className='menu-container__transfer__btn__label'>
                    <input className='menu-container__transfer__btn__input' type='checkbox' name='transfer' />
                    <span className='menu-container__transfer__btn__text'>Все</span>
                </label>
                <label className='menu-container__transfer__btn__label'>
                    <input className='menu-container__transfer__btn__input' type='checkbox' name='transfer' />
                    <span className='menu-container__transfer__btn__text'>Без пересадок</span>
                </label>
                {
                    transfers.map((_, index) =>     
                        <label key={index + 1} className='menu-container__transfer__btn__label'>
                            <input className='menu-container__transfer__btn__input' type='checkbox' name='transfer' id={`${index + 1}_transfer`}/>
                            <span className='menu-container__transfer__btn__text'>{formateWordOfTransfer(index + 1)}</span>
                        </label>     
                    )
                }
            </div>
        </div>
    );
};

export default Transfer;
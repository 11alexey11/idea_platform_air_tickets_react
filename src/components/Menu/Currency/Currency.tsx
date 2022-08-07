import React, { createRef, RefObject, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import { changeMenuCurrency } from '../../../store/menu';

import './index.scss';

const Currency = () => {
    const rubInputRef: RefObject<HTMLAnchorElement> = createRef();
    const dispatch: Dispatch<AnyAction> = useDispatch();

    useEffect(() => {
        if (rubInputRef.current) {
            rubInputRef.current.focus();
        }
    });

    const anchorHandler = (event: React.MouseEvent<HTMLAnchorElement>, currency: string) => {
        event.preventDefault();
        console.log(currency);
        dispatch(changeMenuCurrency(currency));
    };

    return (
        <div className='menu-container__currency'>
            <div className='menu-container__currency__title'>ВАЛЮТА</div>
            <div className='menu-container__currency__btn'>
                <a 
                    tabIndex={0}
                    ref={rubInputRef}
                    className='menu-container__currency__btn__input left'
                    data-currency='RUB'
                    onClick={(e) => anchorHandler(e, 'RUB')}>RUB
                </a> 
                <a
                    tabIndex={0}
                    className='menu-container__currency__btn__input middle'
                    data-currency='USD'
                    onClick={(e) => anchorHandler(e, 'USD')}>USD
                </a>
                <a 
                    tabIndex={0}
                    className='menu-container__currency__btn__input right'
                    data-currency='EUR'
                    onClick={(e) => anchorHandler(e, 'EUR')}>EUR
                </a>
            </div>
        </div>
    );

};

export default Currency;
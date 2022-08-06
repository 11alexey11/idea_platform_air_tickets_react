import React from 'react';

import './index.scss';

const Currency = () => {
    return (
        <div className='menu-container__currency'>
            <div className='menu-container__currency__title'>ВАЛЮТА</div>
            <div className='menu-container__btn'>
                <input className='menu-container__currency__btn__input left' type='button' value='RUB' />
                <input className='menu-container__currency__btn__input middle' type='button' value='USD' />
                <input className='menu-container__currency__btn__input right' type='button' value='EUR' />
            </div>
        </div>
    );

};

export default Currency;
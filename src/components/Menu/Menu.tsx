import React from 'react';

import { Currency } from './Currency';

import './index.scss';

const Menu = () => {
    return (
        <div className='menu-container'>
            <Currency />
            <div>
                <div>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
                <div>
                    <input type='checkbox' name=''  />
                    <input type='checkbox' name=''  />
                    <input type='checkbox' name=''  />
                    <input type='checkbox' name=''  />
                    <input type='checkbox' name=''  />
                </div>
            </div>
        </div>
    );
};

export default Menu;
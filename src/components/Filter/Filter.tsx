import React from 'react';
import './Filter.scss'
const Filter = () => {
    return (
        <div className="filter">
                <p className='currency'>Валюта</p>
                <div className="block-btn">
                    <button className='currency-rub'>RUB</button>
                    <button className='currency-rub'>USD</button>
                    <button className='currency-rub'>EUR</button>
                </div>
                <p className="transfers">Количество пересадок</p>
                <div className="div-check">
                    <input className="checked" type="checkbox"/>
                    <p>Все</p>
                    <input className="checked" type="checkbox"/>
                    <p>Без пересадок</p>
                    <input className="checked" type="checkbox"/>
                    <p>1 пересадка</p>
                    <input className="checked" type="checkbox"/>
                    <p>2 пересадки</p>
                    <input className="checked" type="checkbox"/>
                    <p>3 пересадки</p>
                    <input className="checked" type="checkbox"/>
                    <p>4 пересадки</p>
                </div>
        </div>
    );
};

export default Filter;

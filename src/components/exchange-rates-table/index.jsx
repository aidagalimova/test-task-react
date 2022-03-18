import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExchangeRates } from '../../services/exchange-rates';
import ReactTooltip from 'react-tooltip';
import './index.css';
import { getCurrencyData } from '../../services/currency';
import CurrencyTable from '../currency-table';
import { setCurrencyData } from '../../store/actions/currency';

function ExchangeRatesTable() {
    const [isCurrencyTableOpen, setIsCurrencyTableOpen] = useState(false);

    const dispatch = useDispatch();
    const { exchangeRates } = useSelector((state) => state.exchangeRates);
    useEffect(() => {
        dispatch(getExchangeRates())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getCurrencyTable = (id, name) => {
        setIsCurrencyTableOpen(name)
        dispatch(getCurrencyData(id));
    }

    const closeCurrencyTable = () => {
        dispatch(setCurrencyData([]))
        setIsCurrencyTableOpen(false)
    }
    const ExchangeRates = Object.keys(exchangeRates).map((key) => {
        const rate = exchangeRates[key]
        return (
            <tr
                key={rate.ID}
                data-tip={rate.Name}
                onClick={() => getCurrencyTable(rate.ID, rate.Name)}>
                <td>{rate.NumCode}</td>
                <td>{rate.Value}</td>
                <td>{(rate.Value * 100 / rate.Previous - 100).toFixed(2)}</td>
                <td> <ReactTooltip place="bottom" type="dark" effect="float" /></td>
            </tr>)
    });
    if (!isCurrencyTableOpen) {
        return (
            <>
                <h1>Курсы валют на текущий день</h1>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Код валюты</th>
                            <th>Курс (руб)</th>
                            <th>Изменение относительно предыдущего дня (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ExchangeRates}
                    </tbody>
                </table>
            </>
        )
    } else {
        return (
            <>
                <CurrencyTable name={isCurrencyTableOpen} />
                <button
                    className='btn'
                    onClick={closeCurrencyTable}>
                    Назад
                </button>
            </>
        )
    }
}


export default ExchangeRatesTable;
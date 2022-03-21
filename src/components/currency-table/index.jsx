import React from 'react';
import { useSelector } from 'react-redux';
import './index.css';

function CurrencyTable({ name }) {
    const { currencyData } = useSelector((state) => state.currencyData);
    const CurrencyData = currencyData.map((data) => {
        return (
            <tr className='currency-el' key={data.date}>
                <td>{data.value}</td>
                <td>{new Date(data.date).toLocaleDateString()}</td>
            </tr>)
    })

    return (<>
        <h2>{name}</h2>
        <table className='table'>
            <thead>
                <tr>
                    <th>Курс</th>
                    <th>Дата</th>
                </tr>
            </thead>
            <tbody>
                {CurrencyData}
            </tbody>
        </table>
    </>)
}

export default CurrencyTable;
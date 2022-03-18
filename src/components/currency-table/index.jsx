import React from 'react';
import { useSelector } from 'react-redux';
import './index.css';

function CurrencyTable({ name }) {
    const { currencyData } = useSelector((state) => state.currencyData);

    const CurrencyData = currencyData.map((data) => {
        return (
            <tr className='currency-el' key={data.attributes.Date}>
                <td>{data.children[1].value}</td>
                <td>{data.children[0].value}</td>
                <td>{data.attributes.Date}</td>
            </tr>)
    })

    return (<>
        <h2>{name}</h2>
        <table className='table'>
            <thead>
                <tr>
                    <th>Курс</th>
                    <th>Единиц</th>
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
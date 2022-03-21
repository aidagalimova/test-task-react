import api from "../axios/cbr-daily-api";
import { setCurrencyData } from "../store/actions/currency";

export const getCurrencyData = (code, dayCount) => async (dispatch) => {
    let result = await api.get(`/archive/${getStringDate(dayCount)}/daily_json.js`).then(response => {
        if (response.status === 200) {
            return { date: response.data.Date, value: response.data.Valute[code].Value }
        }
    })
    dispatch(setCurrencyData(result))
}

const getStringDate = (i) => {
    let date = new Date();
    let d = new Date(date.setDate(date.getDate() - i)),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('/');
}
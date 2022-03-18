import api from "../axios/cbr-daily-api";
import { setExchangeRates } from "../store/actions/exchange-rates";

export const getExchangeRates = () => async (dispatch) => {
    const apiUrl = "/daily_json.js";
    const result = await api.get(apiUrl)
        .then((response) => {
            if (response.status === 200) {
                return response.data.Valute
            }
        }).catch(error => console.log(error))
    dispatch(setExchangeRates(result))
}
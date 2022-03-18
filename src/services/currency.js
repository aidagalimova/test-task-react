import api from "../axios/cbr-api";
import { setCurrencyData } from "../store/actions/currency";
import XMLParser from "react-xml-parser";

export const getCurrencyData = (id) => async (dispatch) => {
    const dayCount = 9
    const date_req2 = new Date();
    let date_req1 = new Date(date_req2);
    date_req1.setDate(date_req1.getDate() - dayCount);
   
    const params = {
        date_req1: date_req1.toLocaleDateString(),
        date_req2: date_req2.toLocaleDateString(),
        VAL_NM_RQ: id,
    }
    const result = await api.get('/XML_dynamic.asp', { params })
        .then((response) => {
            if (response.status === 200) {
                return new XMLParser().parseFromString(response.data);
            }
        }).catch(error => console.log(error))
    if (result) {
        dispatch(setCurrencyData(result.children))
    }
}
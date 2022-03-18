const initState = {
    currencyData: [],
}
export default function currencyDataReducer(state = initState, action) {
    switch (action.type) {
        case "SET_CURRENCY_DATA":
            return {
                ...state,
                currencyData: action.payload.currencyData
            }
        default:
            return state;
    }
}

const initState = {
    exchangeRates: [],
}
export default function exchangeRatesReducer(state = initState, action) {
    switch (action.type) {
        case "SET_EXCHANGE_RATES":
            return {
                ...state,
                exchangeRates: action.payload.exchangeRates
            }
        default:
            return state;
    }
}

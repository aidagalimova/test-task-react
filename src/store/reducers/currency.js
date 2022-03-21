const initState = {
    currencyData: [],
}
export default function currencyDataReducer(state = initState, action) {
    switch (action.type) {
        case "SET_CURRENCY_DATA":
            return {
                ...state,
                currencyData: [...state.currencyData, action.payload.currencyData]
            }
        case "CLEAR_CURRENCY_DATA":
            return {
                ...state,
                currencyData: []
            }
        default:
            return state;
    }
}

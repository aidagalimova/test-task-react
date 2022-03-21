export const setCurrencyData = (value) => ({
    type: "SET_CURRENCY_DATA",
    payload: {
        currencyData: value,
    },
})
export const clearCurrencyData = () => ({
    type: "CLEAR_CURRENCY_DATA"
})
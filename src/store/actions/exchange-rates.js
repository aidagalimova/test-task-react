export const setExchangeRates = (value) => ({
    type: "SET_EXCHANGE_RATES",
    payload: {
        exchangeRates: value,
    },
})
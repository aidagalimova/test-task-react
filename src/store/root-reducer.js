import { combineReducers } from 'redux';
import exchangeRatesReducer from './reducers/exchange-rates';
import currencyDataReducer from './reducers/currency';
const rootReducer = combineReducers({
    exchangeRates: exchangeRatesReducer,
    currencyData: currencyDataReducer
});

export default rootReducer;

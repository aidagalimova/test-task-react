import { Provider } from 'react-redux';
import store from "../store/store";
import ExchangeRatesTable from '../components/exchange-rates-table';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ExchangeRatesTable />
      </div>
    </Provider >
  );
}

export default App;

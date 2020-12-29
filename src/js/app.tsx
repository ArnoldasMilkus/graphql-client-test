import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MergeRequestsContainer from './merge-requests/MergeRequestsContainer';
import CurrencyRatesContainer from "./merge-requests/CurrencyRatesContainer";
import CurrencyRatesDisplay from "./merge-requests/CurrencyRatesDisplay";
import CurrencyRatesDisplayWithHook from "./merge-requests/CurrencyRatesDisplayWithHook";
import MainPage from "./merge-requests/MainPage";

// render(<ExchangeRates />, document.getElementById('dashboard-app'));
// render(<MergeRequestsContainer />, document.getElementById('dashboard-app'));
// render(<CurrencyRatesContainer />, document.getElementById('dashboard-app'));
render(
    <BrowserRouter>
        <MainPage />
    </BrowserRouter>,
    document.getElementById('dashboard-app')
);
// render(<CurrencyRatesDisplayWithHook />, document.getElementById('dashboard-app'));

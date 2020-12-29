import React, { Component } from 'react';
import { NetworkStatus } from '@apollo/client';
import getCurrencyRates from '../api/currency-rates-api';
import CurrencyRatesDisplay from './CurrencyRatesDisplay';
import { CurrencyRatesStateInterface } from '../interfaces/CurrencyRatesStateInterface';
// import { withRouter } from 'react-router';

export default class CurrencyRatesContainer extends Component<{}, CurrencyRatesStateInterface> {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            data: {data: {rates: []}, loading: true, networkStatus: NetworkStatus.loading},
            count: 0,
        };

        this.getCurrencyRatesData = this.getCurrencyRatesData.bind(this);
    }

    componentDidMount(): void {
        this.getCurrencyRatesData();

        // refresh data every 5 min
        const period = 5 * 60 * 1000;
        setInterval(this.getCurrencyRatesData, period);
    }

    componentDidUpdate(): void {
        console.log('update');
    }

    setCount(number: number): void {
        this.setState({
            count: number,
        });
    }

    getCurrencyRatesData(): void {
        this.setState({
            isLoaded: false,
        });
        console.log('ts');

        getCurrencyRates('USD').then((data) => {
            this.setState({
                data,
                isLoaded: true,
            });
        });
    }

    render(): React.ReactElement {
        return (
            <div>
                {/*<Route path="/movies" component={MoviesIndex} />*/}
                <p>You clicked {this.state.count} times</p>
                <button onClick={(): void => this.setCount(this.state.count + 1)}>
                    Click me component
                </button>
                <CurrencyRatesDisplay {...this.state} key='CurrencyRates' />
            </div>
        );
    }
}

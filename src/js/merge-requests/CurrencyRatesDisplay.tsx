import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PageLoader from '../components/PageLoader';
import { CurrencyRate } from '../interfaces/CurrencyRateInterface';

export default function CurrencyRatesDisplay(props): JSX.Element {
    const [count, setCount] = useState(0);
    const [fakeCurrentDate, setFakeCurrentDate] = useState(new Date()); // default value can be anything you want
    const { isLoaded, data } = props;

    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times1`;
        console.log(count);
        // setTimeout(() => setFakeCurrentDate(new Date()), 60000);
    });

    return (
        <div>
            <div>
                <p>{fakeCurrentDate.toString()}</p>
                <p>You clicked {count} times</p>
                <button onClick={(): void => setCount(count + 1)}>
                    Click me
                </button>
            </div>
            <PageLoader {...props} />
            {data.data.rates !== undefined && (
                <table>
                    <thead>
                    <tr>
                        <th>Currency rate</th>
                        <th>Currency name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.data.rates.map((rate: CurrencyRate) => (
                        // eslint-disable-next-line no-underscore-dangle
                        <tr key={rate.__typename + rate.currency}>
                            <td>{rate.rate}</td>
                            <td>{rate.currency}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

CurrencyRatesDisplay.propTypes = {
    isLoaded: PropTypes.bool.isRequired,
    data: PropTypes.object.isRequired,
};

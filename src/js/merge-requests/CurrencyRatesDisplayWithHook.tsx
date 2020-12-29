import React, { useEffect, useState } from 'react';
import { ApolloClient, gql, InMemoryCache, useQuery } from '@apollo/client';
import PageLoader from "../components/PageLoader";

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

interface CurrencyRate {
    rate: number;
    currency: string;
    __typename: string;
}

interface CurrencyRatesData {
    rates: CurrencyRate[];
}

const client1 = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    cache: new InMemoryCache(),
});

export default function CurrencyRatesDisplayWithHook(): JSX.Element {
    const [count, setCount] = useState(0);
    const [fakeCurrentDate, setFakeCurrentDate] = useState(new Date()); // default value can be anything you want

    const { loading, data } = useQuery<CurrencyRatesData>(
        EXCHANGE_RATES,
        {client: client1}
    );

    const arr = {
        'isLoaded': false
    };

    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
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
            {loading && <PageLoader {...arr} />}
            {data?.rates !== undefined && (
                <table>
                    <thead>
                    <tr>
                        <th>Currency rate</th>
                        <th>Currency name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.rates.map((rate: CurrencyRate) => (
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

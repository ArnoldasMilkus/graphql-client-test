import { ApolloClient, InMemoryCache, gql, ApolloQueryResult } from '@apollo/client';
import { createHttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { CurrencyRatesData } from '../interfaces/CurrencyRatesDataInterface';

export default function getCurrencyRates(currency: string): Promise<ApolloQueryResult<CurrencyRatesData>> {
    const client1 = new ApolloClient({
        uri: 'https://graphql-weather-api.herokuapp.com/',
        cache: new InMemoryCache(),
    });
    const EXCHANGE_RATES1 = gql`
{
  getCityByName(name: "Kaunas"){
    id,
    name,
    weather {
      summary {
        title,
        description,
        icon
      }
      temperature {
        actual,
        feelsLike,
        min,
        max
      }
      timestamp
    }
  }
}
`;
    const result1 = client1.query({
        query: EXCHANGE_RATES1,
        // variables: {
        //     currency: 2222,
        // },
    });
    console.log(result1);


    const httpLink = createHttpLink({
        uri: 'https://48p1r2roz4.sse.codesandbox.io',
        fetchOptions: {
            mode: 'no-cors',
        },
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    });
    const errorLink = onError(({ networkError }) => {
        console.log(networkError);
        console.log('error');
    });
    const link = errorLink.concat(httpLink);
console.log(link);
    const client = new ApolloClient({
        link: (link as any),
        // uri: 'https://48p1r2roz4.sse.codesandbox.io',
        cache: new InMemoryCache(),
    });

//     const EXCHANGE_RATES = gql`
//   query GetExchangeRates($currency: String) {
//     rates(currency: $currency) {
//       currency
//       rate
//     }
//   }
// `;
    const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;
    const result = client.query({
        query: EXCHANGE_RATES,
        // variables: {
        //     currency: 2222,
        // },
    });
    console.log(result);
    console.log('resultatas');
    return result;
}

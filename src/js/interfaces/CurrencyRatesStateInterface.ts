import { ApolloQueryResult } from "@apollo/client";
import { CurrencyRatesData } from "./CurrencyRatesDataInterface";

export interface CurrencyRatesStateInterface {
    isLoaded: boolean;
    data: ApolloQueryResult<CurrencyRatesData>;
    count: number;
}

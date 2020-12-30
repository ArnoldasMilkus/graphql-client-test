import React, { Component } from "react";
import { Route, Link, Switch, NavLink } from 'react-router-dom';
import CurrencyRatesContainer from "./CurrencyRatesContainer";
import Error from "./Error";
import TestComp from "./TestComp";

export interface MainPageInterface {
    count: number;
}

// const RouterPage: any = (
//     props: { pageComponent: JSX.Element } & RouteComponentProps
// ) => props.pageComponent;


export default class MainPage extends Component<{}, MainPageInterface> {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };
    }

    setCount(number: number): void {
        this.setState({
            count: number,
        });
    }

    render(): React.ReactElement {
        return (
            <div>
                <Switch>
                    <Route
                        path='/public'
                        render={(): React.ReactElement => (
                            <div>
                                <h2>Hello home page</h2>
                            </div>
                        )}
                        exact
                    />
                    {/*<RouterPage path="/public/currencies" pageComponent={CurrencyRatesContainer} />*/}
                    {/*<RouterPage path="/public/currencies" pageComponent={Error} />*/}
                    <Route path="/public/currencies" component={TestComp} />
                    <Route component={Error} />
                </Switch>
                <div>
                    <Link to="/public">Home </Link>
                    <Link to="/public/currencies">About Us </Link>
                </div>
                {/*<a href="/public/currencies">Currencies</a>*/}
                <p>You clicked {this.state.count} times</p>
                <button onClick={(): void => this.setCount(this.state.count + 1)}>
                    Click me component
                </button>
            </div>
        );
    }
}

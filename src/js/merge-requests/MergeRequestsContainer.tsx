import React, { Component } from 'react';
import { MergeRequestInterface } from '../interfaces';
import getMergeRequests from '../api/merge-requests-api';
import MergeRequestsDisplay from './MergeRequestsDisplay';

interface MergeRequestsStateInterface {
    mergeRequests: MergeRequestInterface[];
    isLoaded: boolean;
}

export default class MergeRequestsContainer extends Component<{}, MergeRequestsStateInterface> {
    constructor(props) {
        console.log(props);
        super(props);

        this.state = {
            mergeRequests: [],
            isLoaded: false,
        };

        this.getMRData = this.getMRData.bind(this);
    }

    componentDidMount(): void {
        this.getMRData();

        // refresh data every 5 min
        const period = 5 * 60 * 1000;
        setInterval(this.getMRData, period);
    }

    getMRData(): void {
        this.setState({
            isLoaded: false,
        });

        getMergeRequests().then((data: MergeRequestInterface[]) => {
            this.setState({
                mergeRequests: data,
                isLoaded: true,
            });
        });
    }

    render(): React.ReactElement {
        return <MergeRequestsDisplay {...this.state} />;
    }
}

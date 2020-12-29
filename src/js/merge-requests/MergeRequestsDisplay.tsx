import React from 'react';
import PropTypes from 'prop-types';
import { MergeRequestInterface } from '../interfaces';
import timestampToDate from '../lib/date-helper';
import PageLoader from '../components/PageLoader';
import '../../scss/merge-requests.scss';

export default function MergeRequestsDisplay(props): JSX.Element {
    const { mergeRequests } = props;

    return (
        <div>
            <PageLoader {...props} />
            {mergeRequests.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>MR name</th>
                            <th>UP</th>
                            <th>Down</th>
                            <th>Name</th>
                            <th>Comments</th>
                            <th>Can be merged</th>
                            <th>Updated</th>
                            <th>Participants</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mergeRequests.map((mergeRequest: MergeRequestInterface) => (
                            <tr key={mergeRequest.mrName}>
                                <td>{mergeRequest.mrName}</td>
                                <td>{mergeRequest.upVotes}</td>
                                <td>{mergeRequest.downVotes}</td>
                                <td>{mergeRequest.name}</td>
                                <td>{mergeRequest.commentsCount}</td>
                                <td>{mergeRequest.canBeMerged}</td>
                                <td>{timestampToDate(mergeRequest.updatedAt)}</td>
                                <td>{mergeRequest.participants}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

MergeRequestsDisplay.propTypes = {
    isLoaded: PropTypes.bool.isRequired,
    mergeRequests: PropTypes.arrayOf(PropTypes.object).isRequired,
};

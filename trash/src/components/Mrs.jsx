import * as React from 'react';
import PropTypes from 'prop-types';
import Mr from './Mr';
import { withFetch } from '../hoc/withFetch';
import { withRouter } from 'react-router';

const Mrs = ({ isFetching, items, match }) =>
    isFetching ? (
        <div>is loading</div>
    ) : (
        <div className="">
            {items.map((item, index) => (
                <Mr key={item.url} {...item} number={index + ((Number(match.params.page) || 1) - 1) * 30 + 1} />
            ))}
        </div>
    );

Mrs.propTypes = {
    match: PropTypes.any,
    location: PropTypes.any,
    history: PropTypes.any,
    items: PropTypes.arrayOf(PropTypes.any),
    isFetching: PropTypes.bool,
};

export default withRouter(withFetch(Mrs, ({ match }) => `/${match.params.page || 1}`));

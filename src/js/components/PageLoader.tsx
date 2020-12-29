import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/page-loader.scss';

export default function PageLoader(props): JSX.Element {
    const { isLoaded } = props;

    return (
        <div className={`page-loader ${isLoaded ? '' : 'is-active'}`}>
            <div className='loading-background' />
            <div className='loading-spinner'>
                <div className='lds-ellipsis'>
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
            </div>
        </div>
    );
}

PageLoader.propTypes = {
    isLoaded: PropTypes.bool.isRequired,
};

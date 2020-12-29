import * as React from 'react';
import PropTypes from 'prop-types';
import Cards from '../components/Cards';
import CardsAnswers from '../components/CardsAnswers';
import Pager from '../components/Pager';

const Ask = props => (
    <main>
        <section className="section">
            <CardsAnswers />
        </section>
        <section className="section">
            <Pager maxPages={2} dataType="ask" page={props.match.params.page} />
        </section>
    </main>
);

Ask.propTypes = {
    match: PropTypes.any,
};

export default Ask;

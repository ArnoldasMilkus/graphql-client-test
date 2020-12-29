import * as React from 'react';
import PropTypes from 'prop-types';
import Comments from './Comments';

class Mr extends React.Component {
    constructor(props) {
        super(props);

        this.handleCommentsClick = this.handleCommentsClick.bind(this);
        this.state = {
            isCommentsVisible: false,
        };
    }

    render() {
        const { mr_name, up_votes, down_votes, name, comments_count, can_be_merged, updated_at, participants } = this.props;
        return (
            <div className="columns">
                <div className="columns is-mobile">
                    <div className="column is-narrow">
                        <span className="tag is-rounded is-large">{mr_name}</span>
                        <span className="tag is-rounded is-large">{up_votes}</span>
                        <span className="tag is-rounded is-large">{down_votes}</span>
                        <span className="tag is-rounded is-large">{name}</span>
                    </div>
                    <div className="column">
                        <div className="columns">
                            <div className="column">
                                <strong>
                                    <a rel="noopener noreferrer" target="_blank" href={updated_at}>
                                        {can_be_merged}
                                    </a>
                                </strong>
                            </div>
                            <div className="column">
                                some time ago&nbsp;
                                <a href={`#by${updated_at}`}>{`by ${participants}`}</a>
                            </div>
                        </div>
                    </div>
                    <div className="column is-narrow">
                        <a onClick={this.handleCommentsClick}>
                            <span className="icon">
                                <i className="fas fa-comments" />
                            </span>
                            <span>{comments_count}</span>
                        </a>
                    </div>
                </div>
                {/*{this.state.isCommentsVisible && <Comments itemId={id} />}*/}
            </div>
        );
    }

    handleCommentsClick() {
        this.setState({
            isCommentsVisible: !this.state.isCommentsVisible,
        });
    }
}

Mr.propTypes = {
    mr_name: PropTypes.string,
    up_votes: PropTypes.number,
    down_votes: PropTypes.number,
    name: PropTypes.string,
    comments_count: PropTypes.number,
    can_be_merged: PropTypes.string,
    updated_at: PropTypes.string,
    participants: PropTypes.string,
};

export default Mr;

import React, { Component } from 'react';
import {Card, CardBody, CardHeader, Col, Progress, Row, Table} from 'reactstrap';

import PropTypes from "prop-types";

class UserMain extends Component {

  render() {
    const { mr_name, up_votes, down_votes, name, comments_count, can_be_merged, updated_at, participants } = this.props;
    const approvePercentage = up_votes >= 2 ? 100 : up_votes >= 1 ? 50 : 0;
    const mergeSymbolStyle = {
      color: 'red',
      fontSize: '18px',
      fontWeight: '600'
    };
    const canBeMerged = can_be_merged === '-' ? <div className="small text-muted">{can_be_merged}</div> : <div className="small" style={mergeSymbolStyle}>{can_be_merged}</div>;
    return (

        <tr>
            <td>
                <div>{mr_name}</div>
                <div className="small text-muted">
                    <span>{updated_at}</span> | test
                </div>
            </td>
            <td className="text-center">
                <div className="clearfix">
                    <div className="float-left">
                        <strong>{approvePercentage}%</strong>
                    </div>
                    <div className="float-right">
                        <small className="text-muted">{up_votes}</small>
                    </div>
                </div>
                <Progress className="progress-xs" color="success" value={approvePercentage} />
            </td>
            <td>
                <div>{name}</div>
            </td>
            <td>
                <div className="small text-muted">Comments count</div>
                <strong>{comments_count}</strong>
            </td>
            <td>
                {canBeMerged}
            </td>
            <td>
                <div className="small text-muted">{participants}</div>
            </td>
        </tr>


    );
  }
}

UserMain.propTypes = {
    mr_name: PropTypes.string,
    up_votes: PropTypes.number,
    down_votes: PropTypes.number,
    name: PropTypes.string,
    comments_count: PropTypes.number,
    can_be_merged: PropTypes.string,
    updated_at: PropTypes.string,
    participants: PropTypes.string,
};

export default UserMain;

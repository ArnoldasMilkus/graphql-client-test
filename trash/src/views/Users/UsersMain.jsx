import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import usersData from './UsersData'
import PropTypes from "prop-types";
import {withFetch} from "../../hoc/withFetch";
import { withRouter } from 'react-router';
import UserMain from "./UserMain";

function UserRow(props) {
  const user = props.user
  const userLink = `/users/${user.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    <tr key={user.id.toString()}>
      <th scope="row"><Link to={userLink}>{user.id}</Link></th>
      <td><Link to={userLink}>{user.name}</Link></td>
      <td>{user.registered}</td>
      <td>{user.role}</td>
      <td><Link to={userLink}><Badge color={getBadge(user.status)}>{user.status}</Badge></Link></td>
    </tr>
  )
}


const UsersMain = ({ isFetching, items, match }) =>
    isFetching ? (
        <div>is loading</div>
    ) : (


        <div className="animated fadeIn">
            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                            Merge requests
                        </CardHeader>
                        <CardBody>
                            <br />
                            <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                                <thead className="thead-light">
                                <tr>
                                    <th>Mr name</th>
                                    <th width="20%" className="text-center">Approves</th>
                                    <th width="10%">Creator</th>
                                    <th width="10%">Comments</th>
                                    <th width="10%" className="text-center">Can be merged</th>
                                    <th className="user-participants">Participants</th>
                                </tr>
                                </thead>
                                <tbody>
                                {items.map((item, index) => (
                                    <UserMain key={item.mr_name} {...item} number={index + ((Number(match.params.page) || 1) - 1) * 30 + 1} />
                                ))}
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>



    );

UsersMain.propTypes = {
    match: PropTypes.any,
    location: PropTypes.any,
    history: PropTypes.any,
    items: PropTypes.arrayOf(PropTypes.any),
    isFetching: PropTypes.bool,
};

export default withRouter(withFetch(UsersMain, ({ match }) => `/${match.params.page || 1}`));

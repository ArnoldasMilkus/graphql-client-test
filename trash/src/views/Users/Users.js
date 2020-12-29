import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import usersData from './UsersData'
import PropTypes from "prop-types";
import {withFetch} from "../../hoc/withFetch";
import { withRouter } from 'react-router';
import User from './User';

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

// class Users extends Component {
//
//   render() {
//
//     const userList = usersData.filter((user) => user.id < 10)
//
//     return (
//       <div className="animated fadeIn">
//         <Row>
//           <Col xl={6}>
//             <Card>
//               <CardHeader>
//                 <i className="fa fa-align-justify"></i> Users <small className="text-muted">example</small>
//               </CardHeader>
//               <CardBody>
//                 <Table responsive hover>
//                   <thead>
//                     <tr>
//                       <th scope="col">id</th>
//                       <th scope="col">name</th>
//                       <th scope="col">registered</th>
//                       <th scope="col">role</th>
//                       <th scope="col">status</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {userList.map((user, index) =>
//                       <UserRow key={index} user={user}/>
//                     )}
//                   </tbody>
//                 </Table>
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//       </div>
//     )
//   }
// }

const Users = ({ isFetching, items, match }) =>
    isFetching ? (
        <div>is loading</div>
    ) : (


        <div className="animated fadeIn">
            <Row>
                <Col xl={6}>
                    <Card>
                        <CardHeader>
                            <i className="fa fa-align-justify"></i> Users <small className="text-muted">example</small>
                        </CardHeader>
                        <CardBody>
                            <Table responsive hover>
                                <thead>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">name</th>
                                    <th scope="col">registered</th>
                                    <th scope="col">role</th>
                                    <th scope="col">status</th>
                                </tr>
                                </thead>
                                <tbody>
                                {/*<div className="">*/}


                                    {/*<div className="animated fadeIn">*/}
                                        {/*<Row>*/}
                                            {/*<Col lg={6}>*/}
                                                {/*<Card>*/}
                                                    {/*<CardHeader>*/}
                                                        {/*<strong><i className="icon-info pr-1"></i>User id: 1</strong>*/}
                                                    {/*</CardHeader>*/}
                                                    {/*<CardBody>*/}
                                                        {/*<Table responsive striped hover>*/}
                                                            {/*<tbody>*/}
                                                            {/*{items.map((item, index) => (*/}
                                                                {/*<User key={item.url} {...item} number={index + ((Number(match.params.page) || 1) - 1) * 30 + 1} />*/}
                                                            {/*))}*/}
                                                            {/*</tbody>*/}
                                                        {/*</Table>*/}
                                                    {/*</CardBody>*/}
                                                {/*</Card>*/}
                                            {/*</Col>*/}
                                        {/*</Row>*/}
                                    {/*</div>*/}


                                    {items.map((item, index) => (
                                        <User key={item.url} {...item} number={index + ((Number(match.params.page) || 1) - 1) * 30 + 1} />
                                    ))}



                                {/*</div>*/}
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>



    );

Users.propTypes = {
    match: PropTypes.any,
    location: PropTypes.any,
    history: PropTypes.any,
    items: PropTypes.arrayOf(PropTypes.any),
    isFetching: PropTypes.bool,
};

export default withRouter(withFetch(Users, ({ match }) => `/${match.params.page || 1}`));

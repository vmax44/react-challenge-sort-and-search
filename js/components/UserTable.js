import React, { Component } from 'react';
import UserRow from './UserRow';

export default class UserTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const userData = this.props.userData;
    let userRows = [];

    if(userData) {
      userData.map((user) => {
        const userRow = (
          <UserRow
            user={user}
            key={user.get('id')}
            activeUserChanged={this.props.activeUserChanged.bind(this)}
          />
        );
        userRows.push(userRow);
      });
    }

    const isDataLoaded = !this.props.isFetching;
    const loading = <span>Loading...</span>;

    return isDataLoaded? (
      <table className="user-list table table-striped">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {userRows}
        </tbody>
      </table>
    ) : (loading);
  }
}

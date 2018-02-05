import React, { Component } from 'react';
import UserList from '../Containers/UserList';

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          Username List:
        </h1>
        <UserList />
        <h2>
          User Details:
        </h2>
      </div>
    );
  }
}

export default App;

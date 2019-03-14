import React, { Component } from 'react';
import Header from '../header';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <div className="wcc-dashboard"> Dashboard...</div>
      </div>
    );
  }
}

export default Dashboard;

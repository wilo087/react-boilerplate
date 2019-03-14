import React, { Component } from 'react';
import Header from '../Header';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <div className="wcc-aboutus"> About us...</div>
      </div>
    );
  }
}

export default Dashboard;

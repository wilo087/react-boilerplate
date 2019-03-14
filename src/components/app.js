import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

export default class App extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <BrowserRouter>
        <div className="wcc-page">
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
// import Routes from '../routes';
// import Layout from './Layout';

export default class App extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <BrowserRouter>
        <div className="wcc-page">
          This is my react app
          {/* // <Routes /> */}
        </div>
      </BrowserRouter>
    );
  }
}

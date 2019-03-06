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
          <img alt="header" src="/public/images/1.jpg" className="app-header" />
          This is my react app
          {/* // <Routes /> */}
        </div>
      </BrowserRouter>
    );
  }
}

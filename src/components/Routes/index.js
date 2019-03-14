import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from './Dashboard';
import AboutUs from './AboutUs';

export default () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/about-us" exact component={AboutUs} />
  </Switch>
);

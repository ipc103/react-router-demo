import React from 'react';
import { Switch, Route } from 'react-router-dom'

import About from '../About'
import Contact from '../Contact'
import PeopleListContainer from '../../containers/PeopleListContainer'

export default () => (
  <Switch>
    <Route exact path="/" />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/people" component={PeopleListContainer} />
  </Switch>
);

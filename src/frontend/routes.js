import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Item from './pages/Item';
import SearchResults from './pages/SearchResults';

const routes = () => (
  <Switch>
    <Route path='/items/:id' component={Item} />
    <Route path='/items' component={SearchResults} />
    <Route path='/' component={Home} />
  </Switch>
);

export default routes;

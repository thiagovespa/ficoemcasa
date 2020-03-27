import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Categories from './pages/Categories'
import Login from './pages/Login'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/categorias" exact component={Categories} />
      </Switch>
    </BrowserRouter>
  );
}
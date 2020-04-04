import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Example from './pages/Example'
import Categories from './pages/Categories'
import Login from './pages/Login'
import OnBoarding from './pages/OnBoarding'

export default function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Example} />
        <Route path='/bem-vindo' exact component={OnBoarding} />
        <Route path='/categorias' exact component={Categories} />
        <Route path='/login' exact component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

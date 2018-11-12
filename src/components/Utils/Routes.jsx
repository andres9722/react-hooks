import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Error404 from '../Error404/Error404'
import Dashboard from '../Dashboard/Dashboard'
import StateHooks from '../Pages/StateHooks'
import CustomHooks from '../Pages/CustomHooks'
import UseEffect from '../Pages/UseEffect'

const Routes = () => (
  <Switch>
    <Route path='/' exact component={Dashboard} />
    <Route path='/state-hook' exact component={StateHooks} />
    <Route path='/custom-hook' exact component={CustomHooks} />
    <Route path='/use-effect' exact component={UseEffect} />
    <Route component={Error404} />
  </Switch>
)

export default Routes

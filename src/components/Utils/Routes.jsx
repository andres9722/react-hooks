import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ToDoList from '../ToDoList/ToDoList'
import Error404 from '../Error404/Error404'
import Dashboard from '../Dashboard/Dashboard'

const Routes = () => (
  <Switch>
    <Route path='/' exact component={Dashboard} />
    <Route path='/todos' exact component={ToDoList} />
    <Route component={Error404} />
  </Switch>
)

export default Routes

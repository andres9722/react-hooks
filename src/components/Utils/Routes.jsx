import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ToDoList from '../ToDoList/ToDoList'
import Error404 from '../Error404/Error404'
import Dashboard from '../Dashboard/Dashboard'
import StateHooks from '../Pages/StateHooks'

const Routes = () => (
  <Switch>
    <Route path='/' exact component={Dashboard} />
    <Route path='/state-hook' exact component={StateHooks} />
    <Route path='/todo-list' exact component={ToDoList} />
    <Route component={Error404} />
  </Switch>
)

export default Routes

import React from 'react'
import Counter from '../Counter/Counter'
import ToDoList from '../ToDoList/ToDoList'
import './StateHooks.scss'
import StopWatch from '../StopWatch/StopWatch'
import StopWatchUseReducer from '../StopWatchUseReducer/StopWatchUseReducer'

const StateHooks = () => (
  <div className='state-hooks l-container'>
    <Counter />
    <ToDoList />
    <StopWatch />
    <StopWatchUseReducer />
  </div>
)

export default StateHooks

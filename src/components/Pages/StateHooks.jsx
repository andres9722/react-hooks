import React from 'react'
import Counter from '../Counter/Counter'
import ToDoList from '../ToDoList/ToDoList'
import './StateHooks.scss'
import StopWatch from '../StopWatch/StopWatch'
import StopWatchUseReducer from '../StopWatchUseReducer/StopWatchUseReducer'
import StopWatchUseReducerSimplify
  from '../StopWatchUseReducerSimplify/StopWatchUseReducerSimplify'

const StateHooks = () => (
  <div className='state-hooks l-container'>
    <Counter />
    <ToDoList />
    <StopWatch />
    <StopWatchUseReducer />
    <StopWatchUseReducerSimplify />
  </div>
)

export default StateHooks

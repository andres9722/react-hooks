import React from 'react'
import UseCounter from './UseCounter'
import '../Counter/Counter.scss'

const Counter = () => {
  const { count, increment } = UseCounter(5, 2)

  return (
    <div className='counter section'>
      <h1 className='section__title'> Counter</h1>
      <span className='section__description'>
        Share Logic Across Multiple React Components with Custom Hooks
      </span>
      <button className='counter__button' onClick={increment}> {count} </button>
    </div>
  )
}

export default Counter

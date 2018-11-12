import React, { useEffect } from 'react'
import '../Counter/Counter.scss'
import UseCounter from '../CustomHook/UseCounter'

const Counter = () => {
  const initialCount = () => Number(window.localStorage.getItem('count')) || 0

  const { count, increment } = UseCounter(initialCount, 2)

  useEffect(
    () => {
      window.localStorage.setItem('count', count)
    },
    [count]
  )

  return (
    <div className='counter section'>
      <h1 className='section__title'>Counter </h1>
      <span className='section__description'>
        Store Values in localStorage with the React useEffect Hook
      </span>
      <button className='counter__button' onClick={increment}> {count} </button>
    </div>
  )
}

export default Counter

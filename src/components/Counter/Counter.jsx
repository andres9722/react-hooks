import React, { useState } from 'react'
import './Counter.scss'

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)

  return (
    <div className='counter section'>
      <h1 className='section__title'>Counter</h1>
      <button className='counter__button' onClick={increment}> {count} </button>
    </div>
  )
}

export default Counter

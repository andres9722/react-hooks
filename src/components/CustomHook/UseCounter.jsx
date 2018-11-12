import { useState } from 'react'

const UseCounter = (initialState, step) => {
  const [count, setCount] = useState(initialState)
  const increment = () => setCount(count + step)

  return {
    count,
    increment
  }
}

export default UseCounter

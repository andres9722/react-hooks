import React, { useReducer, useRef, useEffect } from 'react'
import '../StopWatch/StopWatch.scss'

const reducer = (currentState, newstate) => {
  return { ...currentState, ...newstate }
}

const StopWatchUseReducerSimplify = () => {
  const [{ running, lapse }, setState] = useReducer(reducer, {
    running: false,
    lapse: 0
  })

  const intervalRef = useRef(null)

  useEffect(() => {
    return () => clearInterval(intervalRef.current)
  }, [])

  const handleRunClick = () => {
    if (running) {
      clearInterval(intervalRef.current)
    } else {
      const startTime = Date.now() - lapse
      intervalRef.current = setInterval(() => {
        setState({ lapse: Date.now() - startTime })
      }, 0)
    }

    setState({ running: !running })
  }

  const handleClearClick = () => {
    clearInterval(intervalRef.current)
    setState({ running: false, lapse: 0 })
  }

  return (
    <div className='watch section'>
      <h1 className='section__title'>StopWatch UseReducer simplify</h1>
      <span className='watch__lapse'> {lapse}ms </span>
      <button onClick={handleRunClick} className='watch__button'>
        {running ? 'Stop' : 'Start'}
      </button>
      <button onClick={handleClearClick} className='watch__button'>
        Clear
      </button>
    </div>
  )
}

export default StopWatchUseReducerSimplify

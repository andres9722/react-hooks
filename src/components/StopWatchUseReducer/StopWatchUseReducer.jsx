import React, { useReducer, useRef, useEffect } from 'react'
import '../StopWatch/StopWatch.scss'

const reducer = (state, action) => {
  switch (action.type) {
    case 'LAPSE':
      return {
        ...state,
        lapse: action.now - action.startTime
      }
    case 'TOGGLE_RUNNING':
      return {
        ...state,
        running: !state.running
      }
    case 'CLEAR':
      return {
        ...state,
        lapse: 0,
        running: false
      }
    default:
      return state
  }
}

const StopWatchUseReducer = () => {
  const [{ running, lapse }, dispatch] = useReducer(reducer, {
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
        dispatch({ type: 'LAPSE', now: Date.now(), startTime })
      }, 0)
    }

    dispatch({ type: 'TOGGLE_RUNNING' })
  }

  const handleClearClick = () => {
    clearInterval(intervalRef.current)
    dispatch({ type: 'CLEAR' })
  }

  return (
    <div className='watch section'>
      <h1 className='section__title'>StopWatch UseReducer</h1>
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

export default StopWatchUseReducer

import React, { useState, useRef, useEffect } from 'react'
import './StopWatch.scss'

const StopWatch = () => {
  const [lapse, setLapse] = useState(0)
  const [running, setRunning] = useState(false)
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
        setLapse(Date.now() - startTime)
      }, 0)
    }

    setRunning(!running)
  }

  const handleClearClick = () => {
    clearInterval(intervalRef.current)
    setLapse(0)
    setRunning(false)
  }

  return (
    <div className='watch section'>
      <h1 className='section__title'>StopWatch</h1>
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

export default StopWatch

import React, { useRef, useEffect, Fragment } from 'react'
import VanillaTilt from 'vanilla-tilt'
import './Tilt.scss'

const Tilt = () => {
  const tiltRef = useRef()

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5
    })

    // return () => tiltRef.current.VanillaTilt.destroy()
  }, [])

  return (
    <Fragment>
      <div ref={tiltRef} className='tilt-root section'>
        <div className='tilt-child'>
          <span>Vanilla tilt</span>
        </div>
      </div>
      <span className='section__description'>
        Access and Modify a DOM Node with the React useRef and useEffect Hooks
      </span>
    </Fragment>
  )
}

export default Tilt

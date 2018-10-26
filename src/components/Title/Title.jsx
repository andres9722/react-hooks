import React from 'react'
import './Title.scss'

const Title = ({ children, theme }) => {
  return (
    <h1 className={theme ? `title title--${theme}` : 'title'}>
      {children}
    </h1>
  )
}

export default Title

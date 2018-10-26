import React, { useEffect } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Routes from './components/Utils/Routes'
import './App.scss'
import Title from './components/Title/Title'

const App = () => {
  useEffect(() => {
    document.title = `react hooks ⚛️`
  })

  return (
    <Router>
      <div className='app'>
        <header className='header'>
          <Link to='/'>
            <Title theme='light'> react hooks </Title>
          </Link>
        </header>
        <Routes />
      </div>
    </Router>
  )
}

export default App

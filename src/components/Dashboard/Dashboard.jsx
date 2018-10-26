import React from 'react'
import Menu from '../Menu/Menu'
import logo from '../../logo.svg'
import './Dashboard.scss'

const Dashboard = () => (
  <div className='dashboard l-container'>
    <div className='content'>
      <img src={logo} alt='Logo' className='content__logo' />
      <p className='content__text'>just for fun</p>
    </div>
    <Menu />
  </div>
)

export default Dashboard

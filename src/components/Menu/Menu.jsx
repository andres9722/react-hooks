import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.scss'

const Menu = () => (
  <nav className='nav'>
    <ul className='menu'>
      <li className='menu__item'>
        <Link className='menu__link' to='/state-hook'>use state hook</Link>
      </li>
      <li className='menu__item'>
        <Link className='menu__link' to='/state'>
          state custom hooks
        </Link>
      </li>
      <li className='menu__item'>
        <Link className='menu__link' to='/effect'>use effect hook</Link>
      </li>
      <li className='menu__item'>
        <Link className='menu__link' to='/memo'>react memo</Link>
      </li>
      <li className='menu__item'>
        <Link className='menu__link' to='/lazy'>react lazy</Link>
      </li>
    </ul>
  </nav>
)

export default Menu

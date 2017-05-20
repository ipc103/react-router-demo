import React from 'react'
import './Header.css'

import { Link } from 'react-router-dom'

export default () => {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Welcome to React</h2>
      </div>
      <nav className='navbar'>
        <li className='navbar-item'><Link to="/" >Home</Link></li>
        <li className='navbar-item'><Link to="/about" >About</Link></li>
        <li className='navbar-item'><Link to="/contact">Contact</Link></li>
        <li className='navbar-item'><Link to="/people">People</Link></li>
      </nav>
    </div>
  )
}

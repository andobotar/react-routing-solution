import React from 'react';
import { Link } from 'react-router-dom'

import '../App.css';

export default () => {
  return (
    <div className="navbar">
      <Link to="/" className='navbar-link'>Main Page</Link>
      <Link to="second" className='navbar-link'>Second Page</Link>
      <Link to="third" className='navbar-link'>Third Page</Link>
    </div>
  )
}

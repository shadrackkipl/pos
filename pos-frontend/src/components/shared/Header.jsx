import React from 'react'
import {FaSearch} from 'react-icons/fa'
import {FaUserCircle} from 'react-icons/fa'
import { FaBell } from 'react-icons/fa'
import './Header.css'

const Header = () => {
  return (
   <header className="header">
    <div className="logo-container">
        {/*logo*/}
        
        <h1 className='Restro'>Restro</h1>
      </div>

      {/*SEARCH BAR*/}
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input className="search-input" type="text" placeholder="Search..." />
      </div>

      {/*LOGGED USER DETAILS*/}
      <div className="user-details">
        <button className="notification-button" type="button" aria-label="View notifications">
          <FaBell className="notification-icon" />
        </button>
        <div className="user-icon-container" aria-hidden="true">
          <FaUserCircle className="user-icon" />
        </div>
        <div className="user-copy">
          <span className="user-name">Shadrack Kiplagat</span>
          <span className="user-role">Admin</span>
        </div>
      </div>
   </header>
  )
}

export default Header
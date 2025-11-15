import React from 'react'
import './Navbar.css'

const Navbar = ({ onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <div className="code-icon">
            <span className="code-symbol">&lt;/&gt;</span>
          </div>
          <span className="brand-text">HCL Healthcare</span>
        </div>
        
        <ul className="navbar-menu">
          <li><a href="#" className="nav-link active">Home</a></li>
          <li><a href="#" className="nav-link">Appointments</a></li>
          <li><a href="#" className="nav-link">Profile</a></li>
          <li><a href="#" className="nav-link">Settings</a></li>
        </ul>
        
        <button className="logout-button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Navbar


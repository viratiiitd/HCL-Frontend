import React, { useState } from 'react'
import './Login.css'

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simple validation - will be replaced with API call later
    if (username && password) {
      onLogin()
    } else {
      alert('Please enter username and password')
    }
  }

  return (
    <div className="login-container">
      <div className="login-header">
        <span className="registration-text">Registeration</span>
        <div className="code-icon">
          <span className="code-symbol">&lt;/&gt;</span>
        </div>
      </div>
      
      <div className="login-content">
        <h1 className="login-title">Login</h1>
        
        <div className="login-card">
          <h2 className="details-heading">DETAILS</h2>
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="**********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <button type="submit" className="login-button">
              LOGIN
            </button>
          </form>
          
          <div className="register-link">
            <span className="register-text">ALREADY REGISTERED?</span>
            <a href="#" className="register-here">REGISTER HERE</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login


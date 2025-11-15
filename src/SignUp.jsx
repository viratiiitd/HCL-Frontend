import React, { useState } from 'react'
import './SignUp.css'

const SignUp = ({ onSignUp, onNavigateToLogin }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    userType: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simple validation - will be replaced with API call later
    if (!formData.fullName || !formData.username || !formData.email || !formData.userType || !formData.password || !formData.confirmPassword) {
      alert('Please fill in all fields')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match')
      return
    }

    if (formData.password.length < 6) {
      alert('Password must be at least 6 characters long')
      return
    }

    // If validation passes, call onSignUp
    onSignUp()
  }

  return (
    <div className="signup-container">
      <div className="signup-header">
        <span className="registration-text">Registration</span>
        <div className="code-icon">
          <span className="code-symbol">&lt;/&gt;</span>
        </div>
      </div>
      
      <div className="signup-content">
        <h1 className="signup-title">Sign Up</h1>
        
        <div className="signup-card">
          <h2 className="details-heading">DETAILS</h2>
          
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="userType">I am a</label>
              <select
                id="userType"
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select...</option>
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="**********"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="**********"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            
            <button type="submit" className="signup-button">
              SIGN UP
            </button>
          </form>
          
          <div className="login-link">
            <span className="login-text">ALREADY HAVE AN ACCOUNT?</span>
            <a href="#" className="login-here" onClick={(e) => {
              e.preventDefault()
              onNavigateToLogin()
            }}>
              LOGIN HERE
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp


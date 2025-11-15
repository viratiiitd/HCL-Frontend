import React, { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'
import theme from './theme'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
    setShowSignUp(false)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setShowSignUp(false)
  }

  const handleNavigateToSignUp = () => {
    setShowSignUp(true)
  }

  const handleNavigateToLogin = () => {
    setShowSignUp(false)
  }

  const handleSignUp = () => {
    // After successful signup, redirect to login
    setShowSignUp(false)
    // Optionally auto-login or show success message
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        {isLoggedIn ? (
          <Home onLogout={handleLogout} />
        ) : showSignUp ? (
          <SignUp onSignUp={handleSignUp} onNavigateToLogin={handleNavigateToLogin} />
        ) : (
          <Login onLogin={handleLogin} onNavigateToSignUp={handleNavigateToSignUp} />
        )}
      </div>
    </ThemeProvider>
  )
}

export default App


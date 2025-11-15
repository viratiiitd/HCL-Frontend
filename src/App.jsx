import React, { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Login from './components/Login'
import Home from './components/Home'
import theme from './theme'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        {isLoggedIn ? (
          <Home onLogout={handleLogout} />
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </ThemeProvider>
  )
}

export default App


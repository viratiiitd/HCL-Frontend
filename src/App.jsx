import React, { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'
import BookAppointment from './components/BookAppointment'
import Profile from './components/Profile'
import Navbar from './components/Navbar'
import theme from './theme'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedDoctor, setSelectedDoctor] = useState(null)
  const [showSignUp, setShowSignUp] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
    setCurrentPage('home')
    setShowSignUp(false)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setCurrentPage('home')
    setSelectedDoctor(null)
    setShowSignUp(false)
  }

  const handleBookAppointment = (doctor) => {
    setSelectedDoctor(doctor)
    setCurrentPage('book')
  }

  const handleBackToHome = () => {
    setCurrentPage('home')
    setSelectedDoctor(null)
  }

  const handleNavigate = (page) => {
    setCurrentPage(page)
  }

  const handleBookingSubmit = (bookingData) => {
    console.log('Booking submitted:', bookingData)
    // Will be replaced with API call later
    alert('Appointment booked successfully!')
    handleBackToHome()
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
    alert('Registration successful! Please login.')
  }

  const renderPage = () => {
    if (!isLoggedIn) {
      if (showSignUp) {
        return <SignUp onSignUp={handleSignUp} onNavigateToLogin={handleNavigateToLogin} />
      }
      return <Login onLogin={handleLogin} onNavigateToSignUp={handleNavigateToSignUp} />
    }

    switch (currentPage) {
      case 'book':
        return (
          <>
            <Navbar onLogout={handleLogout} onNavigate={handleNavigate} currentPage={currentPage} />
            <BookAppointment
              doctor={selectedDoctor}
              onBack={handleBackToHome}
              onSubmit={handleBookingSubmit}
            />
          </>
        )
      case 'profile':
        return (
          <>
            <Navbar onLogout={handleLogout} onNavigate={handleNavigate} currentPage={currentPage} />
            <Profile onBack={handleBackToHome} />
          </>
        )
      case 'home':
      default:
        return (
          <>
            <Navbar onLogout={handleLogout} onNavigate={handleNavigate} currentPage={currentPage} />
            <Home onLogout={handleLogout} onBookAppointment={handleBookAppointment} />
          </>
        )
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        {renderPage()}
      </div>
    </ThemeProvider>
  )
}

export default App


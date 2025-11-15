import React, { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Login from './components/Login'
import Home from './components/Home'
import BookAppointment from './components/BookAppointment'
import Navbar from './components/Navbar'
import theme from './theme'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedDoctor, setSelectedDoctor] = useState(null)

  const handleLogin = () => {
    setIsLoggedIn(true)
    setCurrentPage('home')
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setCurrentPage('home')
    setSelectedDoctor(null)
  }

  const handleBookAppointment = (doctor) => {
    setSelectedDoctor(doctor)
    setCurrentPage('book')
  }

  const handleBackToHome = () => {
    setCurrentPage('home')
    setSelectedDoctor(null)
  }

  const handleBookingSubmit = (bookingData) => {
    console.log('Booking submitted:', bookingData)
    // Will be replaced with API call later
    alert('Appointment booked successfully!')
    handleBackToHome()
  }

  const renderPage = () => {
    if (!isLoggedIn) {
      return <Login onLogin={handleLogin} />
    }

    switch (currentPage) {
      case 'book':
        return (
          <>
            <Navbar onLogout={handleLogout} />
            <BookAppointment
              doctor={selectedDoctor}
              onBack={handleBackToHome}
              onSubmit={handleBookingSubmit}
            />
          </>
        )
      case 'home':
      default:
        return <Home onLogout={handleLogout} onBookAppointment={handleBookAppointment} />
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


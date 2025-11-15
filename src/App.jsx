import React, { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Login from './components/Login'
import SignUp from './components/SignUp'
import PatientDetailsForm from './components/PatientDetailsForm'
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
  const [showPatientDetails, setShowPatientDetails] = useState(false)

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
    setShowPatientDetails(false)
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
    // After successful signup, show patient details form
    setShowSignUp(false)
    setShowPatientDetails(true)
  }

  const handlePatientDetailsSubmit = (patientData) => {
    console.log('Patient details submitted:', patientData)
    // Will be replaced with API call later
    // After submitting patient details, redirect to login
    setShowPatientDetails(false)
    alert('Registration completed successfully! Please login to continue.')
  }

  const handleSkipPatientDetails = () => {
    // Allow user to skip patient details and go directly to login
    setShowPatientDetails(false)
    alert('Registration successful! You can add your details later. Please login to continue.')
  }

  const renderPage = () => {
    if (!isLoggedIn) {
      if (showPatientDetails) {
        return (
          <PatientDetailsForm
            onSubmit={handlePatientDetailsSubmit}
            onSkip={handleSkipPatientDetails}
          />
        )
      }
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


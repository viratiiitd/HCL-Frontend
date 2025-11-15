import React from 'react'
import Navbar from './Navbar'
import AppointmentCards from './AppointmentCards'
import './Home.css'

const Home = ({ onLogout }) => {
  return (
    <div className="home-container">
      <Navbar onLogout={onLogout} />
      <div className="home-content">
        <h1 className="home-title">Book Your Appointment</h1>
        <p className="home-subtitle">Select a doctor to schedule your appointment</p>
        <AppointmentCards />
      </div>
    </div>
  )
}

export default Home


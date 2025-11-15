import React from 'react'
import { Container, Typography, Box } from '@mui/material'
import Navbar from './Navbar'
import AppointmentCards from './AppointmentCards'

const Home = ({ onLogout, onBookAppointment }) => {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Navbar onLogout={onLogout} />
      <Container maxWidth="lg" sx={{ py: 5, px: { xs: 2, sm: 3 } }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            color: 'primary.main',
            fontWeight: 700,
            textAlign: 'center',
            mb: 1,
          }}
        >
          Book Your Appointment
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            textAlign: 'center',
            mb: 4,
          }}
        >
          Select a doctor to schedule your appointment
        </Typography>
        <AppointmentCards onBookAppointment={onBookAppointment} />
      </Container>
    </Box>
  )
}

export default Home


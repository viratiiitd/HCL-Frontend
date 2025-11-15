import React from 'react'
import { Grid, Card, CardContent, CardActions, Typography, Button, Box, Chip, Rating } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'

const AppointmentCards = ({ onBookAppointment }) => {
  // Sample doctor data - will be replaced with API data later
  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialization: 'Cardiologist',
      experience: '10 years',
      rating: 4.8,
      availableSlots: ['9:00 AM', '11:00 AM', '2:00 PM']
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialization: 'Dermatologist',
      experience: '8 years',
      rating: 4.9,
      availableSlots: ['10:00 AM', '1:00 PM', '3:00 PM']
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialization: 'Pediatrician',
      experience: '12 years',
      rating: 4.7,
      availableSlots: ['9:30 AM', '11:30 AM', '4:00 PM']
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      specialization: 'Orthopedic',
      experience: '15 years',
      rating: 4.9,
      availableSlots: ['8:00 AM', '12:00 PM', '5:00 PM']
    },
    {
      id: 5,
      name: 'Dr. Lisa Anderson',
      specialization: 'Neurologist',
      experience: '9 years',
      rating: 4.6,
      availableSlots: ['10:30 AM', '2:30 PM', '4:30 PM']
    },
    {
      id: 6,
      name: 'Dr. Robert Taylor',
      specialization: 'General Physician',
      experience: '7 years',
      rating: 4.8,
      availableSlots: ['9:00 AM', '1:00 PM', '3:30 PM']
    }
  ]

  const handleBookAppointment = (doctor) => {
    if (onBookAppointment) {
      onBookAppointment(doctor)
    }
  }

  return (
    <Grid container spacing={3} sx={{ mt: 2 }}>
      {doctors.map((doctor) => (
        <Grid item xs={12} sm={6} md={4} key={doctor.id}>
          <Card
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'box-shadow 0.3s',
              '&:hover': {
                boxShadow: '0 4px 16px rgba(11, 91, 168, 0.2)',
              },
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2, pb: 2, borderBottom: '1px solid #eee' }}>
                <Typography variant="h6" component="h3" sx={{ color: '#0B5BA8', fontWeight: 600 }}>
                  {doctor.name}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    bgcolor: '#f0f8ff',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: '20px',
                  }}
                >
                  <Typography variant="body2" sx={{ color: '#0B5BA8', fontWeight: 600 }}>
                    {doctor.rating}
                  </Typography>
                  <StarIcon sx={{ color: '#ffa500', fontSize: 16 }} />
                </Box>
              </Box>
              
              <Typography variant="body1" sx={{ fontWeight: 500, mb: 1 }}>
                {doctor.specialization}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Experience: {doctor.experience}
              </Typography>
              
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" sx={{ fontWeight: 500, mb: 1, color: '#666' }}>
                  Available Slots:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {doctor.availableSlots.map((slot, index) => (
                    <Chip
                      key={index}
                      label={slot}
                      size="small"
                      sx={{
                        bgcolor: '#e8f4f8',
                        color: '#0B5BA8',
                        border: '1px solid #0B5BA8',
                        fontWeight: 500,
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </CardContent>
            
            <CardActions sx={{ p: 2, pt: 0 }}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => handleBookAppointment(doctor)}
              >
                Book Appointment
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default AppointmentCards

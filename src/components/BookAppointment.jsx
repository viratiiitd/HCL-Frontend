import React, { useState } from 'react'
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Grid,
  Divider,
  Chip,
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const BookAppointment = ({ doctor, onBack, onSubmit }) => {
  const [formData, setFormData] = useState({
    patientName: '',
    email: '',
    phone: '',
    date: '',
    selectedSlot: '',
    reason: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSlotSelect = (slot) => {
    setFormData({
      ...formData,
      selectedSlot: slot,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.selectedSlot) {
      alert('Please select an available time slot')
      return
    }
    console.log('Booking appointment:', { doctor, ...formData })
    // Will be replaced with API call later
    if (onSubmit) {
      onSubmit({ doctor, ...formData })
    }
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Container maxWidth="md" sx={{ py: 4, px: { xs: 2, sm: 3 } }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={onBack}
          sx={{ mb: 3, color: 'primary.main' }}
        >
          Back
        </Button>

        <Typography variant="h4" component="h1" sx={{ color: 'primary.main', fontWeight: 600, mb: 1 }}>
          Book Appointment
        </Typography>

        {doctor && (
          <Card sx={{ mb: 3, bgcolor: '#f0f8ff' }}>
            <CardContent>
              <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 600, mb: 1 }}>
                {doctor.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {doctor.specialization}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>
                Available Time Slots:
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {doctor.availableSlots && doctor.availableSlots.length > 0 ? (
                  doctor.availableSlots.map((slot, index) => (
                    <Chip
                      key={index}
                      label={slot}
                      onClick={() => handleSlotSelect(slot)}
                      sx={{
                        bgcolor: formData.selectedSlot === slot ? 'primary.main' : '#e8f4f8',
                        color: formData.selectedSlot === slot ? 'white' : 'primary.main',
                        border: '1px solid',
                        borderColor: formData.selectedSlot === slot ? 'primary.main' : 'primary.main',
                        fontWeight: 500,
                        cursor: 'pointer',
                        '&:hover': {
                          bgcolor: formData.selectedSlot === slot ? 'primary.dark' : '#d0e8f0',
                        },
                      }}
                    />
                  ))
                ) : (
                  <Typography variant="body2" color="text.secondary">
                    No available slots
                  </Typography>
                )}
              </Box>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 3, color: '#2c3e50', fontWeight: 600 }}>
              Patient Details
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Patient Name"
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleChange}
                    required
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <Divider sx={{ my: 1 }} />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="body2" sx={{ mb: 1, fontWeight: 500, color: '#666' }}>
                    Select Time Slot *
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {doctor && doctor.availableSlots && doctor.availableSlots.length > 0 ? (
                      doctor.availableSlots.map((slot, index) => (
                        <Chip
                          key={index}
                          label={slot}
                          onClick={() => handleSlotSelect(slot)}
                          sx={{
                            bgcolor: formData.selectedSlot === slot ? 'primary.main' : '#e8f4f8',
                            color: formData.selectedSlot === slot ? 'white' : 'primary.main',
                            border: '1px solid',
                            borderColor: 'primary.main',
                            fontWeight: 500,
                            cursor: 'pointer',
                            fontSize: '0.875rem',
                            height: '36px',
                            '&:hover': {
                              bgcolor: formData.selectedSlot === slot ? 'primary.dark' : '#d0e8f0',
                            },
                          }}
                        />
                      ))
                    ) : (
                      <Typography variant="body2" color="error">
                        No available slots for this doctor
                      </Typography>
                    )}
                  </Box>
                  {formData.selectedSlot && (
                    <Typography variant="caption" sx={{ mt: 1, display: 'block', color: 'primary.main' }}>
                      Selected: {formData.selectedSlot}
                    </Typography>
                  )}
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Reason for Visit"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    multiline
                    rows={3}
                    placeholder="Brief description of your symptoms or reason for appointment"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                    <Button
                      variant="outlined"
                      onClick={onBack}
                      sx={{ flex: 1 }}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      sx={{ flex: 1 }}
                    >
                      Confirm Booking
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}

export default BookAppointment


import React, { useState } from 'react'
import {
  Container,
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Grid,
  MenuItem,
  Stepper,
  Step,
  StepLabel,
  Divider,
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const PatientDetailsForm = ({ onSubmit, onSkip }) => {
  const [activeStep, setActiveStep] = useState(0)
  const [formData, setFormData] = useState({
    // Basic Details
    age: '',
    mobileNo: '',
    gender: '',
    occupation: '',
    city: '',
    country: '',
    pinCode: '',
    // Health Details
    weight: '',
    height: '',
    bmi: '',
    anyDisease: '',
    historyOfDisease: '',
    allergies: '',
    currentMedications: '',
  })

  const [errors, setErrors] = useState({})

  const steps = ['Basic Details', 'Health Details']

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    
    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      })
    }

    // Auto-calculate BMI if both weight and height are provided
    if (name === 'weight' || name === 'height') {
      const weight = name === 'weight' ? value : formData.weight
      const height = name === 'height' ? value : formData.height
      if (weight && height) {
        const heightInMeters = parseFloat(height) / 100
        const weightInKg = parseFloat(weight)
        if (heightInMeters > 0 && weightInKg > 0) {
          const bmi = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2)
          setFormData((prev) => ({
            ...prev,
            bmi: bmi,
          }))
        }
      }
    }
  }

  const validateBasicDetails = () => {
    const newErrors = {}
    
    if (!formData.age) newErrors.age = 'Age is required'
    else if (parseInt(formData.age) < 1 || parseInt(formData.age) > 150) {
      newErrors.age = 'Please enter a valid age'
    }
    
    if (!formData.mobileNo) newErrors.mobileNo = 'Mobile number is required'
    else if (!/^[0-9]{10}$/.test(formData.mobileNo)) {
      newErrors.mobileNo = 'Please enter a valid 10-digit mobile number'
    }
    
    if (!formData.gender) newErrors.gender = 'Gender is required'
    
    if (!formData.occupation) newErrors.occupation = 'Occupation is required'
    
    if (!formData.city) newErrors.city = 'City is required'
    
    if (!formData.country) newErrors.country = 'Country is required'
    
    if (!formData.pinCode) newErrors.pinCode = 'Pin code is required'
    else if (!/^[0-9]{6}$/.test(formData.pinCode)) {
      newErrors.pinCode = 'Please enter a valid 6-digit pin code'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateHealthDetails = () => {
    const newErrors = {}
    
    if (!formData.weight) newErrors.weight = 'Weight is required'
    else if (parseFloat(formData.weight) <= 0 || parseFloat(formData.weight) > 500) {
      newErrors.weight = 'Please enter a valid weight (in kg)'
    }
    
    if (!formData.height) newErrors.height = 'Height is required'
    else if (parseFloat(formData.height) <= 0 || parseFloat(formData.height) > 300) {
      newErrors.height = 'Please enter a valid height (in cm)'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (activeStep === 0) {
      if (validateBasicDetails()) {
        setActiveStep((prevStep) => prevStep + 1)
      }
    } else if (activeStep === 1) {
      if (validateHealthDetails()) {
        handleSubmit()
      }
    }
  }

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1)
  }

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(formData)
    }
  }

  const renderBasicDetails = () => (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ color: '#2c3e50', fontWeight: 600, mb: 1 }}>
          Personal Information
        </Typography>
        <Divider sx={{ mb: 3 }} />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Age"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          error={!!errors.age}
          helperText={errors.age}
          required
          inputProps={{ min: 1, max: 150 }}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Mobile Number"
          name="mobileNo"
          type="tel"
          value={formData.mobileNo}
          onChange={handleChange}
          error={!!errors.mobileNo}
          helperText={errors.mobileNo}
          required
          placeholder="10-digit mobile number"
          inputProps={{ maxLength: 10 }}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          select
          label="Gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          error={!!errors.gender}
          helperText={errors.gender}
          required
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="other">Other</MenuItem>
          <MenuItem value="prefer-not-to-say">Prefer not to say</MenuItem>
        </TextField>
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Occupation"
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
          error={!!errors.occupation}
          helperText={errors.occupation}
          required
          placeholder="e.g., Software Engineer, Teacher, etc."
        />
      </Grid>

      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          label="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
          error={!!errors.city}
          helperText={errors.city}
          required
        />
      </Grid>

      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          label="Country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          error={!!errors.country}
          helperText={errors.country}
          required
        />
      </Grid>

      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          label="Pin Code"
          name="pinCode"
          type="tel"
          value={formData.pinCode}
          onChange={handleChange}
          error={!!errors.pinCode}
          helperText={errors.pinCode}
          required
          placeholder="6-digit pin code"
          inputProps={{ maxLength: 6 }}
        />
      </Grid>
    </Grid>
  )

  const renderHealthDetails = () => (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ color: '#2c3e50', fontWeight: 600, mb: 1 }}>
          Health Information
        </Typography>
        <Divider sx={{ mb: 3 }} />
      </Grid>

      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          label="Weight (kg)"
          name="weight"
          type="number"
          value={formData.weight}
          onChange={handleChange}
          error={!!errors.weight}
          helperText={errors.weight}
          required
          inputProps={{ step: '0.1', min: 1, max: 500 }}
        />
      </Grid>

      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          label="Height (cm)"
          name="height"
          type="number"
          value={formData.height}
          onChange={handleChange}
          error={!!errors.height}
          helperText={errors.height}
          required
          inputProps={{ step: '0.1', min: 1, max: 300 }}
        />
      </Grid>

      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          label="BMI"
          name="bmi"
          value={formData.bmi || 'Auto-calculated'}
          InputProps={{
            readOnly: true,
          }}
          helperText="Automatically calculated from weight and height"
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Any Disease"
          name="anyDisease"
          value={formData.anyDisease}
          onChange={handleChange}
          multiline
          rows={2}
          placeholder="List any current diseases or conditions (if none, leave blank)"
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          fullWidth
          label="History of Any Other Disease"
          name="historyOfDisease"
          value={formData.historyOfDisease}
          onChange={handleChange}
          multiline
          rows={2}
          placeholder="List any past diseases or medical history (if none, leave blank)"
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Allergies"
          name="allergies"
          value={formData.allergies}
          onChange={handleChange}
          multiline
          rows={2}
          placeholder="List any allergies (if none, leave blank)"
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Current Medications"
          name="currentMedications"
          value={formData.currentMedications}
          onChange={handleChange}
          multiline
          rows={2}
          placeholder="List any current medications (if none, leave blank)"
        />
      </Grid>
    </Grid>
  )

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0B5BA8 0%, #094a8a 100%)',
        padding: 2,
        py: 4,
      }}
    >
      <Container maxWidth="md">
        <Card sx={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)' }}>
          <CardContent sx={{ p: { xs: 3, sm: 5 } }}>
            <Typography
              variant="h4"
              component="h1"
              sx={{
                color: 'primary.main',
                fontWeight: 700,
                textAlign: 'center',
                mb: 4,
              }}
            >
              Patient Details
            </Typography>

            <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            <Box sx={{ mb: 4 }}>
              {activeStep === 0 ? renderBasicDetails() : renderHealthDetails()}
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
              <Button
                variant="outlined"
                startIcon={activeStep === 0 ? null : <ArrowBackIcon />}
                onClick={activeStep === 0 ? onSkip : handleBack}
                sx={{ minWidth: 120 }}
              >
                {activeStep === 0 ? 'Skip' : 'Back'}
              </Button>

              <Button
                variant="contained"
                endIcon={activeStep === steps.length - 1 ? null : <ArrowForwardIcon />}
                onClick={handleNext}
                sx={{ minWidth: 120 }}
              >
                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}

export default PatientDetailsForm


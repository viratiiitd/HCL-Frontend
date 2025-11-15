import React from 'react'
import './AppointmentCards.css'

const AppointmentCards = () => {
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

  const handleBookAppointment = (doctorId) => {
    console.log('Booking appointment with doctor:', doctorId)
    // Will be replaced with API call later
  }

  return (
    <div className="appointment-cards-container">
      {doctors.map((doctor) => (
        <div key={doctor.id} className="appointment-card">
          <div className="card-header">
            <h3 className="doctor-name">{doctor.name}</h3>
            <div className="rating">
              <span className="rating-value">{doctor.rating}</span>
              <span className="rating-star">★</span>
            </div>
          </div>
          
          <div className="card-body">
            <p className="specialization">{doctor.specialization}</p>
            <p className="experience">Experience: {doctor.experience}</p>
            
            <div className="available-slots">
              <p className="slots-label">Available Slots:</p>
              <div className="slots-list">
                {doctor.availableSlots.map((slot, index) => (
                  <span key={index} className="slot-badge">{slot}</span>
                ))}
              </div>
            </div>
          </div>
          
          <button 
            className="book-button"
            onClick={() => handleBookAppointment(doctor.id)}
          >
            Book Appointment
          </button>
        </div>
      ))}
    </div>
  )
}

export default AppointmentCards


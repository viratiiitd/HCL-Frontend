import React, { useState } from 'react'
import { Box, Container, Card, CardContent, TextField, Button, Typography, Link } from '@mui/material'
import CodeIcon from '@mui/icons-material/Code'

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simple validation - will be replaced with API call later
    if (username && password) {
      onLogin()
    } else {
      alert('Please enter username and password')
    }
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0B5BA8 0%, #094a8a 100%)',
        padding: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: { xs: '15px 20px', sm: '20px 30px' },
        }}
      >
        <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
          Registeration
        </Typography>
        <Box
          sx={{
            width: 40,
            height: 40,
            bgcolor: 'rgba(255, 255, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 1,
          }}
        >
          <CodeIcon sx={{ color: 'white', fontSize: 20 }} />
        </Box>
      </Box>
      
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 'calc(100vh - 120px)',
          padding: { xs: '20px', sm: '40px 20px' },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: 'white',
            fontSize: { xs: '48px', sm: '72px' },
            fontWeight: 700,
            mb: 5,
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
          }}
        >
          Login
        </Typography>
        
        <Card sx={{ maxWidth: 450, width: '100%', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)' }}>
          <CardContent sx={{ p: { xs: 3, sm: 5 } }}>
            <Typography variant="h5" sx={{ color: '#2c3e50', fontWeight: 600, mb: 3 }}>
              DETAILS
            </Typography>
            
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                fullWidth
                label="Username"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              
              <TextField
                fullWidth
                label="Password"
                type="password"
                id="password"
                placeholder="**********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 1 }}
              >
                LOGIN
              </Button>
            </Box>
            
            <Box sx={{ mt: 3, textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="body2" sx={{ color: '#2c3e50' }}>
                ALREADY REGISTERED?
              </Typography>
              <Link href="#" sx={{ color: '#0B5BA8', fontWeight: 600 }} underline="hover">
                REGISTER HERE
              </Link>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}

export default Login

import React from 'react'
import { AppBar, Toolbar, Typography, Button, Avatar, Box, Container } from '@mui/material'
import CodeIcon from '@mui/icons-material/Code'

const Navbar = ({ onLogout, onNavigate, currentPage = 'home' }) => {
  const handleNavClick = (page) => {
    if (onNavigate) {
      onNavigate(page)
    }
  }

  return (
    <AppBar position="sticky" sx={{ bgcolor: '#0B5BA8' }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 1, sm: 2 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                bgcolor: 'rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 1,
                cursor: 'pointer',
              }}
              onClick={() => handleNavClick('home')}
            >
              <CodeIcon sx={{ color: 'white', fontSize: 20 }} />
            </Box>
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ fontWeight: 600, cursor: 'pointer' }}
              onClick={() => handleNavClick('home')}
            >
              HCL Healthcare
            </Typography>
          </Box>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            <Button 
              color="inherit" 
              sx={{ 
                borderBottom: currentPage === 'home' ? '2px solid white' : 'none',
                borderRadius: 0 
              }}
              onClick={() => handleNavClick('home')}
            >
              Home
            </Button>
            <Button color="inherit">Appointments</Button>
            <Button 
              color="inherit"
              sx={{ 
                borderBottom: currentPage === 'profile' ? '2px solid white' : 'none',
                borderRadius: 0 
              }}
              onClick={() => handleNavClick('profile')}
            >
              Profile
            </Button>
            <Button color="inherit">Settings</Button>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Avatar
              src="https://ui-avatars.com/api/?name=User&background=0B5BA8&color=fff&size=128"
              alt="Profile"
              sx={{ 
                width: 40, 
                height: 40, 
                border: '2px solid rgba(255, 255, 255, 0.3)',
                cursor: 'pointer',
              }}
              onClick={() => handleNavClick('profile')}
            />
            <Button
              variant="outlined"
              onClick={onLogout}
              sx={{
                color: 'white',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                bgcolor: 'rgba(255, 255, 255, 0.2)',
                '&:hover': {
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                  bgcolor: 'rgba(255, 255, 255, 0.3)',
                },
              }}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar

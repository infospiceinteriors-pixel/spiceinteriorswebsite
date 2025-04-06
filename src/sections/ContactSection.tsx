import { useState } from 'react';
import { Box, Typography, TextField, Button, MenuItem, useTheme, useMediaQuery, Snackbar, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import emailjs from 'emailjs-com';

const services = [
  'Wardrobe Decluttering',
  'Wardrobe Design Consultation',
  'Shopping Companion',
];

const ContactSectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.default,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(to right, transparent, rgba(197, 153, 123, 0.3), transparent)',
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(5, 0, 4),
  },
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '1600px',
  margin: '0 auto',
  padding: theme.spacing(0, 4),
  boxSizing: 'border-box',
  [theme.breakpoints.up('xl')]: {
    maxWidth: '1800px',
    padding: theme.spacing(0, 6),
  },
  [theme.breakpoints.between('lg', 'xl')]: {
    padding: theme.spacing(0, 5),
  },
  [theme.breakpoints.between('md', 'lg')]: {
    padding: theme.spacing(0, 4),
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(0, 3),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0, 2.5),
  },
}));

const FormContainer = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(30, 30, 30, 0.8)',
  padding: theme.spacing(5, 5.5),
  maxWidth: 1000,
  margin: '0 auto',
  '& input:-webkit-autofill, & input:-webkit-autofill:hover, & input:-webkit-autofill:focus, & textarea:-webkit-autofill, & textarea:-webkit-autofill:hover, & textarea:-webkit-autofill:focus, & select:-webkit-autofill, & select:-webkit-autofill:hover, & select:-webkit-autofill:focus': {
    '-webkit-text-fill-color': theme.palette.text.primary,
    '-webkit-box-shadow': `0 0 0px 1000px ${theme.palette.background.paper} inset`,
    transition: 'background-color 5000s ease-in-out 0s',
    caretColor: theme.palette.secondary.main,
  },
  '@-moz-document url-prefix()': {
    '& input:-moz-autofill, & input:-moz-autofill-preview': {
      filter: 'none',
      background: 'transparent !important',
      color: `${theme.palette.text.primary} !important`,
    }
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3.5, 1.5),
    backgroundColor: 'rgba(30, 30, 30, 0.75)',
  },
}));

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // EmailJS parameters
    const templateParams = {
      to_email: 'wardrob.in@gmail.com',
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: formData.phone,
      address: formData.address,
      service: formData.service,
      message: formData.message,
    };
    
    // Using environment variables for EmailJS credentials
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userId = import.meta.env.VITE_EMAILJS_USER_ID;
    
    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setSnackbar({
          open: true,
          message: 'Your message has been sent! We will get back to you soon.',
          severity: 'success',
        });
        
        // Reset form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          service: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setSnackbar({
          open: true,
          message: 'There was an error sending your message. Please try again later.',
          severity: 'error',
        });
      });
  };
  
  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <ContactSectionWrapper id="contact">
      <ContentWrapper>
        <FormContainer>
          <Typography 
            variant={isMobile ? "h4" : "h3"} 
            align="center" 
            gutterBottom 
            sx={{ 
              mb: { xs: 2.5, md: 5 },
              fontSize: {
                xs: '1.5rem',
                sm: '1.75rem',
                md: '2.25rem',
                lg: '2.5rem'
              },
              color: 'secondary.main'
            }}
          >
            Contact Us
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 1.5, md: 3 } }}>
              <Box sx={{ flex: '1 1 calc(50% - 16px)', minWidth: { xs: '100%', sm: 'calc(50% - 16px)' } }}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  size={isMobile ? "small" : "medium"}
                  margin={isMobile ? "dense" : "normal"}
                  variant="standard"
                  sx={{ 
                    mb: 1,
                    input: { 
                      color: 'text.primary',
                      fontSize: { xs: '0.95rem', md: '1.05rem' },
                      paddingBottom: '8px',
                      letterSpacing: '0.015em'
                    },
                    label: { 
                      color: 'secondary.main',
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      fontWeight: 300,
                      letterSpacing: '0.02em',
                      '&.Mui-focused': {
                        color: 'secondary.light'
                      }
                    },
                    '& .MuiInput-underline:before': { 
                      borderBottomColor: 'rgba(197, 153, 123, 0.3)',
                      borderBottomWidth: '1px'
                    },
                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': { 
                      borderBottomColor: 'rgba(197, 153, 123, 0.5)',
                      borderBottomWidth: '1px'
                    },
                    '& .MuiInput-underline:after': { 
                      borderBottomColor: 'secondary.main',
                      borderBottomWidth: '2px'
                    },
                    '& .MuiInputLabel-shrink': {
                      transform: 'translate(0, -1.5px) scale(0.85)',
                      transformOrigin: 'top left'
                    }
                  }}
                />
              </Box>
              <Box sx={{ flex: '1 1 calc(50% - 16px)', minWidth: { xs: '100%', sm: 'calc(50% - 16px)' } }}>
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  size={isMobile ? "small" : "medium"}
                  margin={isMobile ? "dense" : "normal"}
                  variant="standard"
                  sx={{ 
                    mb: 1,
                    input: { 
                      color: 'text.primary',
                      fontSize: { xs: '0.95rem', md: '1.05rem' },
                      paddingBottom: '8px',
                      letterSpacing: '0.015em'
                    },
                    label: { 
                      color: 'secondary.main',
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      fontWeight: 300,
                      letterSpacing: '0.02em',
                      '&.Mui-focused': {
                        color: 'secondary.light'
                      }
                    },
                    '& .MuiInput-underline:before': { 
                      borderBottomColor: 'rgba(197, 153, 123, 0.3)',
                      borderBottomWidth: '1px'
                    },
                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': { 
                      borderBottomColor: 'rgba(197, 153, 123, 0.5)',
                      borderBottomWidth: '1px'
                    },
                    '& .MuiInput-underline:after': { 
                      borderBottomColor: 'secondary.main',
                      borderBottomWidth: '2px'
                    },
                    '& .MuiInputLabel-shrink': {
                      transform: 'translate(0, -1.5px) scale(0.85)',
                      transformOrigin: 'top left'
                    }
                  }}
                />
              </Box>
              <Box sx={{ flex: '1 1 calc(50% - 16px)', minWidth: { xs: '100%', sm: 'calc(50% - 16px)' } }}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  size={isMobile ? "small" : "medium"}
                  margin={isMobile ? "dense" : "normal"}
                  variant="standard"
                  sx={{ 
                    mb: 1,
                    input: { 
                      color: 'text.primary',
                      fontSize: { xs: '0.95rem', md: '1.05rem' },
                      paddingBottom: '8px',
                      letterSpacing: '0.015em'
                    },
                    label: { 
                      color: 'secondary.main',
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      fontWeight: 300,
                      letterSpacing: '0.02em',
                      '&.Mui-focused': {
                        color: 'secondary.light'
                      }
                    },
                    '& .MuiInput-underline:before': { 
                      borderBottomColor: 'rgba(197, 153, 123, 0.3)',
                      borderBottomWidth: '1px'
                    },
                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': { 
                      borderBottomColor: 'rgba(197, 153, 123, 0.5)',
                      borderBottomWidth: '1px'
                    },
                    '& .MuiInput-underline:after': { 
                      borderBottomColor: 'secondary.main',
                      borderBottomWidth: '2px'
                    },
                    '& .MuiInputLabel-shrink': {
                      transform: 'translate(0, -1.5px) scale(0.85)',
                      transformOrigin: 'top left'
                    }
                  }}
                />
              </Box>
              <Box sx={{ flex: '1 1 calc(50% - 16px)', minWidth: { xs: '100%', sm: 'calc(50% - 16px)' } }}>
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  size={isMobile ? "small" : "medium"}
                  margin={isMobile ? "dense" : "normal"}
                  variant="standard"
                  sx={{ 
                    mb: 1,
                    input: { 
                      color: 'text.primary',
                      fontSize: { xs: '0.95rem', md: '1.05rem' },
                      paddingBottom: '8px',
                      letterSpacing: '0.015em'
                    },
                    label: { 
                      color: 'secondary.main',
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      fontWeight: 300,
                      letterSpacing: '0.02em',
                      '&.Mui-focused': {
                        color: 'secondary.light'
                      }
                    },
                    '& .MuiInput-underline:before': { 
                      borderBottomColor: 'rgba(197, 153, 123, 0.3)',
                      borderBottomWidth: '1px'
                    },
                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': { 
                      borderBottomColor: 'rgba(197, 153, 123, 0.5)',
                      borderBottomWidth: '1px'
                    },
                    '& .MuiInput-underline:after': { 
                      borderBottomColor: 'secondary.main',
                      borderBottomWidth: '2px'
                    },
                    '& .MuiInputLabel-shrink': {
                      transform: 'translate(0, -1.5px) scale(0.85)',
                      transformOrigin: 'top left'
                    }
                  }}
                />
              </Box>
              <Box sx={{ flex: '1 1 calc(50% - 16px)', minWidth: { xs: '100%', sm: 'calc(50% - 16px)' } }}>
                <TextField
                  fullWidth
                  label="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  size={isMobile ? "small" : "medium"}
                  margin={isMobile ? "dense" : "normal"}
                  variant="standard"
                  sx={{ 
                    mb: 1,
                    input: { 
                      color: 'text.primary',
                      fontSize: { xs: '0.95rem', md: '1.05rem' },
                      paddingBottom: '8px',
                      letterSpacing: '0.015em'
                    },
                    label: { 
                      color: 'secondary.main',
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      fontWeight: 300,
                      letterSpacing: '0.02em',
                      '&.Mui-focused': {
                        color: 'secondary.light'
                      }
                    },
                    '& .MuiInput-underline:before': { 
                      borderBottomColor: 'rgba(197, 153, 123, 0.3)',
                      borderBottomWidth: '1px'
                    },
                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': { 
                      borderBottomColor: 'rgba(197, 153, 123, 0.5)',
                      borderBottomWidth: '1px'
                    },
                    '& .MuiInput-underline:after': { 
                      borderBottomColor: 'secondary.main',
                      borderBottomWidth: '2px'
                    },
                    '& .MuiInputLabel-shrink': {
                      transform: 'translate(0, -1.5px) scale(0.85)',
                      transformOrigin: 'top left'
                    }
                  }}
                />
              </Box>
              <Box sx={{ flex: '1 1 calc(50% - 16px)', minWidth: { xs: '100%', sm: 'calc(50% - 16px)' } }}>
                <TextField
                  fullWidth
                  select
                  label="Service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  size={isMobile ? "small" : "medium"}
                  margin={isMobile ? "dense" : "normal"}
                  variant="standard"
                  sx={{ 
                    mb: 1,
                    '.MuiSelect-select': { 
                      color: 'text.primary',
                      fontSize: { xs: '0.95rem', md: '1.05rem' },
                      paddingBottom: '8px',
                      letterSpacing: '0.015em'
                    },
                    label: { 
                      color: 'secondary.main',
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      fontWeight: 300,
                      letterSpacing: '0.02em',
                      '&.Mui-focused': {
                        color: 'secondary.light'
                      }
                    },
                    '& .MuiInput-underline:before': { 
                      borderBottomColor: 'rgba(197, 153, 123, 0.3)',
                      borderBottomWidth: '1px'
                    },
                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': { 
                      borderBottomColor: 'rgba(197, 153, 123, 0.5)',
                      borderBottomWidth: '1px'
                    },
                    '& .MuiInput-underline:after': { 
                      borderBottomColor: 'secondary.main',
                      borderBottomWidth: '2px'
                    },
                    '& .MuiInputLabel-shrink': {
                      transform: 'translate(0, -1.5px) scale(0.85)',
                      transformOrigin: 'top left'
                    },
                    '& .MuiSelect-icon': {
                      color: 'secondary.main'
                    }
                  }}
                >
                  {services.map((service) => (
                    <MenuItem key={service} value={service} sx={{ 
                      color: 'text.primary',
                      fontSize: { xs: '0.95rem', md: '1.05rem' },
                      '&:hover': { backgroundColor: 'rgba(197, 153, 123, 0.1)' },
                      '&.Mui-selected': { 
                        backgroundColor: 'rgba(197, 153, 123, 0.2)',
                        '&:hover': { backgroundColor: 'rgba(197, 153, 123, 0.3)' }
                      }
                    }}>
                      {service}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
              <Box sx={{ width: '100%', mt: { xs: 0.5, md: 1.5 } }}>
                <TextField
                  fullWidth
                  multiline
                  rows={isMobile ? 4 : 5}
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  margin={isMobile ? "dense" : "normal"}
                  variant="standard"
                  sx={{ 
                    textarea: { 
                      color: 'text.primary',
                      fontSize: { xs: '0.95rem', md: '1.05rem' },
                      letterSpacing: '0.015em',
                      lineHeight: '1.6'
                    },
                    label: { 
                      color: 'secondary.main',
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      fontWeight: 300,
                      letterSpacing: '0.02em',
                      '&.Mui-focused': {
                        color: 'secondary.light'
                      }
                    },
                    '& .MuiInput-underline:before': { 
                      borderBottomColor: 'rgba(197, 153, 123, 0.3)',
                      borderBottomWidth: '1px'
                    },
                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': { 
                      borderBottomColor: 'rgba(197, 153, 123, 0.5)',
                      borderBottomWidth: '1px'
                    },
                    '& .MuiInput-underline:after': { 
                      borderBottomColor: 'secondary.main',
                      borderBottomWidth: '2px'
                    },
                    '& .MuiInputLabel-shrink': {
                      transform: 'translate(0, -1.5px) scale(0.85)',
                      transformOrigin: 'top left'
                    }
                  }}
                />
              </Box>
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: { xs: 3, md: 5 } }}>
                <Button
                  type="submit"
                  variant="outlined"
                  color="secondary"
                  size={isMobile ? "medium" : "large"}
                  sx={{ 
                    px: { xs: 5, md: 8 },
                    py: { xs: 1.25, md: 1.75 },
                    fontSize: { xs: '0.875rem', md: '1rem', lg: '1.125rem' },
                    borderRadius: 0,
                    borderWidth: '2px',
                    fontWeight: 400,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    borderColor: 'secondary.main',
                    color: 'secondary.main',
                    '&:hover': {
                      borderWidth: '2px',
                      backgroundColor: 'rgba(197, 153, 123, 0.1)',
                      borderColor: 'secondary.light',
                      color: 'secondary.light'
                    }
                  }}
                >
                  Send Request
                </Button>
              </Box>
            </Box>
          </form>
        </FormContainer>
      </ContentWrapper>
      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          sx={{ 
            width: '100%',
            fontWeight: 400,
            fontSize: { xs: '0.875rem', md: '1rem' }
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </ContactSectionWrapper>
  );
};

export default ContactSection;
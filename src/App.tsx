import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HeroSection from './sections/HeroSection';
import ServicesSection from './sections/ServicesSection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import FaqSection from './sections/FaqSection';

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#1A1A1A', // Almost black for sophistication
      light: '#2C2C2C',
      dark: '#000000',
    },
    secondary: {
      main: '#C5997B', // Warm copper/bronze
      light: '#D4B08C',
      dark: '#B6876C',
    },
    background: {
      default: '#121212', // Dark background
      paper: '#1E1E1E',  // Dark paper
    },
    text: {
      primary: '#FFFFFF', // White text for dark backgrounds
      secondary: '#CCCCCC', // Light gray for secondary text
    },
  },
  typography: {
    fontFamily: '"Cormorant Garamond", "Times New Roman", serif',
    h1: {
      fontFamily: '"Cormorant Garamond", "Times New Roman", serif',
      fontWeight: 300,
      fontSize: '4.5rem',
      letterSpacing: '0.02em',
    },
    h2: {
      fontFamily: '"Cormorant Garamond", "Times New Roman", serif',
      fontWeight: 300,
      fontSize: '3.5rem',
      letterSpacing: '0.02em',
    },
    h3: {
      fontFamily: '"Cormorant Garamond", "Times New Roman", serif',
      fontWeight: 400,
      fontSize: '2.5rem',
    },
    subtitle1: {
      fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
      fontSize: '1.125rem',
      letterSpacing: '0.02em',
    },
    button: {
      fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
      textTransform: 'none',
      letterSpacing: '0.05em',
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0, // Remove rounded corners for all buttons
        },
        outlined: {
          borderColor: '#C5997B',
          color: '#C5997B',
          borderWidth: '2px',
          padding: '12px 32px',
          '&:hover': {
            borderColor: '#D4B08C',
            backgroundColor: 'transparent',
            borderWidth: '2px',
          },
        },
        contained: {
          backgroundColor: '#C5997B',
          color: '#FFFFFF',
          padding: '12px 32px',
          '&:hover': {
            backgroundColor: '#D4B08C',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(197, 153, 123, 0.3)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(197, 153, 123, 0.5)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#C5997B',
            },
          },
          '& .MuiInput-underline:before': { 
            borderBottomColor: 'rgba(197, 153, 123, 0.3)',
            borderBottomWidth: '1px',
            transition: 'border-bottom-color 0.2s ease-in-out'
          },
          '& .MuiInput-underline:hover:not(.Mui-disabled):before': { 
            borderBottomColor: 'rgba(197, 153, 123, 0.5)',
            borderBottomWidth: '1px'
          },
          '& .MuiInput-underline:after': { 
            borderBottomColor: '#C5997B',
            borderBottomWidth: '2px'
          },
          '& .MuiInputLabel-root': {
            color: '#C5997B',
            fontSize: '0.95rem',
            fontWeight: 300,
            letterSpacing: '0.02em',
            '&.Mui-focused': {
              color: '#D4B08C'
            }
          },
          '& .MuiInputLabel-shrink': {
            transform: 'translate(0, -1.5px) scale(0.85)',
            transformOrigin: 'top left'
          },
          '& .MuiSelect-icon': {
            color: '#C5997B'
          },
          '& .MuiInput-input, & .MuiOutlinedInput-input, & .MuiFilledInput-input': {
            color: '#FFFFFF',
            fontSize: '1.05rem',
            letterSpacing: '0.015em'
          },
          // Handle autofill styling
          '& input:-webkit-autofill, & input:-webkit-autofill:hover, & input:-webkit-autofill:focus, & textarea:-webkit-autofill, & textarea:-webkit-autofill:hover, & textarea:-webkit-autofill:focus, & select:-webkit-autofill, & select:-webkit-autofill:hover, & select:-webkit-autofill:focus': {
            '-webkit-text-fill-color': '#FFFFFF',
            '-webkit-box-shadow': '0 0 0px 1000px #1E1E1E inset',
            transition: 'background-color 5000s ease-in-out 0s'
          }
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        width: '100%', 
        maxWidth: '100%',
        minHeight: '100vh', 
        margin: 0, 
        padding: 0, 
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        '& > *:first-of-type': {
          paddingTop: { xs: '56px', sm: '64px' }, // Add padding equal to AppBar height
        },
        '& *, & *::before, & *::after': {
          boxSizing: 'border-box'
        }
      }}>
        <BrowserRouter>
          <MainLayout>
            <HeroSection />
            <ServicesSection />
            <AboutSection />
            <ContactSection />
            <FaqSection />
          </MainLayout>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;

import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ItemDetailPage from './pages/ItemDetailPage';
import PortfolioPage from './pages/PortfolioPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
// import JournalPage from './pages/JournalPage'; // Temporarily removed
import ImagePreloader from './components/ImagePreloader';

// Create a theme instance for Spice Interior Design Studio
const theme = createTheme({
  palette: {
    primary: {
      main: '#2C2C2C', // Deep charcoal for sophistication
      light: '#4A4A4A',
      dark: '#1A1A1A',
    },
    secondary: {
      main: '#D4A574', // Warm beige/gold
      light: '#E6C396',
      dark: '#B8945A',
    },
    background: {
      default: '#FAFAFA', // Light cream background
      paper: '#FFFFFF',  // Pure white paper
    },
    text: {
      primary: '#2C2C2C', // Dark charcoal for readability
      secondary: '#6B6B6B', // Medium gray for secondary text
    },
  },
  typography: {
    fontFamily: '"Playfair Display", "Georgia", serif',
    h1: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontWeight: 400,
      fontSize: '2.2rem',
      letterSpacing: '0.01em',
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontWeight: 400,
      fontSize: '1.7rem',
      letterSpacing: '0.01em',
      lineHeight: 1.3,
    },
    h3: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontWeight: 400,
      fontSize: '1.3rem',
      letterSpacing: '0.01em',
    },
    h4: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontWeight: 400,
      fontSize: '1.1rem',
      letterSpacing: '0.01em',
    },
    h5: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontWeight: 400,
      fontSize: '1rem',
      letterSpacing: '0.01em',
    },
    h6: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontWeight: 400,
      fontSize: '0.95rem',
      letterSpacing: '0.01em',
    },
    subtitle1: {
      fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
      fontSize: '0.98rem',
      letterSpacing: '0.01em',
      lineHeight: 1.5,
    },
    subtitle2: {
      fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
      fontSize: '0.92rem',
      letterSpacing: '0.01em',
      lineHeight: 1.4,
    },
    body1: {
      fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
      fontSize: '0.98rem',
      letterSpacing: '0.01em',
      lineHeight: 1.5,
    },
    body2: {
      fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
      fontSize: '0.89rem',
      letterSpacing: '0.01em',
      lineHeight: 1.4,
    },
    button: {
      fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
      textTransform: 'none',
      letterSpacing: '0.04em',
      fontWeight: 500,
      fontSize: '0.98rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 700,
          fontSize: '1rem',
          textTransform: 'none',
          padding: '12px 0',
        },
        contained: {
          backgroundColor: '#111',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#222',
          },
        },
        outlined: {
          borderColor: '#222',
          color: '#222',
          background: '#fff',
          '&:hover': {
            borderColor: '#111',
            background: '#fafafa',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            background: '#fff',
            fontSize: '1rem',
            padding: 0,
            '& fieldset': {
              borderColor: '#222',
              borderWidth: 1,
            },
            '&:hover fieldset': {
              borderColor: '#111',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#111',
            },
            '& input, & textarea': {
              fontFamily: 'Inter, Helvetica, Arial, sans-serif',
              fontSize: '1rem',
              color: '#222',
              padding: '14px 16px',
            },
          },
          '& .MuiInputBase-input::placeholder': {
            color: '#888',
            opacity: 1,
            fontWeight: 400,
            fontSize: '1rem',
          },
          marginBottom: '16px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
          '&:hover': {
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
          },
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
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        '& *, & *::before, & *::after': {
          boxSizing: 'border-box'
        }
      }}>
        <BrowserRouter future={{ v7_relativeSplatPath: true }}>
          <ImagePreloader />
          <MainLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/shop/item/:id" element={<ItemDetailPage />} />
              {/* <Route path="/journal" element={<JournalPage />} /> */}
              {/* <Route path="/journal/:slug" element={<JournalPage />} /> */}
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </MainLayout>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;

import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import PortfolioProjectPage from './pages/PortfolioProjectPage';
import ContactPage from './pages/ContactPage';
import IntroductorySessionPage from './pages/IntroductorySessionPage';
import LinktreePage from './pages/LinktreePage';
// import JournalPage from './pages/JournalPage'; // Temporarily removed
import ImagePreloader from './components/ImagePreloader';
import GoogleAnalytics from './components/GoogleAnalytics';
import { lovableTokens as t } from './theme/lovableTokens';

// Create a theme instance aligned with the Lovable design system
const theme = createTheme({
  palette: {
    primary: {
      main: t.primary,
      contrastText: t.primaryForeground,
    },
    secondary: {
      main: t.accent,
      contrastText: t.accentForeground,
    },
    background: {
      default: t.background,
      paper: t.card,
    },
    text: {
      primary: t.foreground,
      secondary: t.mutedForeground,
    },
    divider: t.border,
  },
  typography: {
    fontFamily: t.fontSerif,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    h1: {
      fontFamily: t.fontSerif,
      fontWeight: 400,
      fontSize: '2.5rem',
      letterSpacing: '-0.01em',
      lineHeight: 1.1,
    },
    h2: {
      fontFamily: t.fontSerif,
      fontWeight: 400,
      fontSize: '2rem',
      letterSpacing: '-0.01em',
      lineHeight: 1.15,
    },
    h3: {
      fontFamily: t.fontSerif,
      fontWeight: 400,
      fontSize: '1.5rem',
      letterSpacing: '0',
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: t.fontSerif,
      fontWeight: 400,
      fontSize: '1.25rem',
      letterSpacing: '0',
    },
    h5: {
      fontFamily: t.fontSerif,
      fontWeight: 400,
      fontSize: '1.1rem',
      letterSpacing: '0',
    },
    h6: {
      fontFamily: t.fontSerif,
      fontWeight: 400,
      fontSize: '1rem',
      letterSpacing: '0',
    },
    subtitle1: {
      fontFamily: t.fontSans,
      fontSize: '1rem',
      letterSpacing: '0.01em',
      lineHeight: 1.6,
      fontWeight: 300,
    },
    subtitle2: {
      fontFamily: t.fontSans,
      fontSize: '0.875rem',
      letterSpacing: '0.04em',
      lineHeight: 1.5,
      fontWeight: 300,
    },
    body1: {
      fontFamily: t.fontSans,
      fontSize: '1rem',
      letterSpacing: '0.01em',
      lineHeight: 1.7,
      fontWeight: 300,
    },
    body2: {
      fontFamily: t.fontSans,
      fontSize: '0.9375rem',
      letterSpacing: '0.01em',
      lineHeight: 1.65,
      fontWeight: 300,
    },
    button: {
      fontFamily: t.fontSans,
      textTransform: 'uppercase',
      letterSpacing: '0.16em',
      fontWeight: 500,
      fontSize: '0.8125rem',
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: t.background,
          color: t.foreground,
          fontFamily: t.fontSans,
          fontWeight: 300,
          WebkitFontSmoothing: 'antialiased',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: t.radius,
          fontWeight: 500,
          fontSize: '0.8125rem',
          textTransform: 'uppercase',
          letterSpacing: '0.16em',
          padding: '14px 28px',
        },
        contained: {
          backgroundColor: t.primary,
          color: t.primaryForeground,
          '&:hover': {
            backgroundColor: t.accent,
            color: t.accentForeground,
          },
        },
        outlined: {
          borderColor: t.foreground,
          color: t.foreground,
          background: 'transparent',
          '&:hover': {
            borderColor: t.accent,
            background: 'rgba(175, 99, 64, 0.06)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: t.radius,
            background: t.background,
            fontSize: '1rem',
            padding: 0,
            '& fieldset': {
              borderColor: t.border,
              borderWidth: 1,
            },
            '&:hover fieldset': {
              borderColor: t.foreground,
            },
            '&.Mui-focused fieldset': {
              borderColor: t.accent,
            },
            '& input, & textarea': {
              fontFamily: t.fontSans,
              fontSize: '1rem',
              color: t.foreground,
              padding: '14px 16px',
            },
          },
          '& .MuiInputBase-input::placeholder': {
            color: t.mutedForeground,
            opacity: 1,
            fontWeight: 300,
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
          <GoogleAnalytics />
          <ImagePreloader />
          <MainLayout>
            <Routes>
              <Route path="/" element={<IntroductorySessionPage />} />
              <Route path="/studio" element={<HomePage />} />
              <Route path="/links" element={<LinktreePage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/portfolio/:slug" element={<PortfolioProjectPage />} />
              <Route path="/services" element={<Navigate to="/studio" replace />} />
              <Route path="/introductory-session" element={<Navigate to="/" replace />} />
              <Route path="/shop" element={<Navigate to="/" replace />} />
              <Route path="/shop/item/:id" element={<Navigate to="/" replace />} />
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

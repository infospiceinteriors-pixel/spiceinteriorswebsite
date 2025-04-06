import { Box, Typography, Button, Grid, Card, CardContent, CardMedia, Container, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

const HeroSection = styled(Box)({
  height: '100vh',
  width: '100%',
  position: 'relative',
  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("/@hero_image.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#FFFFFF',
  textAlign: 'center',
});

const ScrollIndicator = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 40,
  left: '50%',
  transform: 'translateX(-50%)',
  width: 30,
  height: 50,
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: 15,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 6,
    left: '50%',
    width: 4,
    height: 4,
    backgroundColor: theme.palette.secondary.main,
    transform: 'translateX(-50%)',
    borderRadius: '50%',
    animation: 'scroll 2s infinite',
  },
  '@keyframes scroll': {
    '0%': {
      opacity: 1,
      top: 6,
    },
    '100%': {
      opacity: 0,
      top: 30,
    },
  },
  [theme.breakpoints.down('sm')]: {
    bottom: 20,
  },
}));

const ServiceSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(15, 0),
  backgroundColor: theme.palette.background.default,
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
    padding: theme.spacing(10, 0),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(8, 0),
  },
}));

const CategoryCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  
  return (
    <Box>
      <HeroSection>
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 4 } }}>
          <Typography 
            variant={isMobile ? "h3" : "h1"} 
            component="h1" 
            sx={{ 
              mb: { xs: 2, md: 3 },
              fontWeight: 300,
              textShadow: '0 2px 4px rgba(0,0,0,0.1)',
              fontSize: {
                xs: '2.5rem',
                sm: '3.5rem',
                md: '4.5rem'
              }
            }}
          >
            Elevate Your Style
          </Typography>
          <Typography 
            variant="subtitle1" 
            sx={{ 
              mb: { xs: 4, md: 6 }, 
              maxWidth: 600, 
              mx: 'auto',
              color: 'rgba(255,255,255,0.9)',
              textShadow: '0 1px 2px rgba(0,0,0,0.1)',
              fontSize: {
                xs: '1rem',
                md: '1.125rem'
              },
              px: { xs: 2, sm: 0 }
            }}
          >
            Bespoke wardrobe solutions for Delhi's most discerning clientele
          </Typography>
          <Button 
            variant="outlined" 
            component={RouterLink} 
            to="/contact"
            sx={{ 
              color: '#FFFFFF', 
              borderColor: '#FFFFFF',
              '&:hover': {
                borderColor: 'rgba(255,255,255,0.8)',
                backgroundColor: 'rgba(255,255,255,0.1)',
              },
              px: { xs: 4, md: 6 },
              py: { xs: 1, md: 1.5 }
            }}
          >
            Contact Us
          </Button>
        </Container>
        <ScrollIndicator />
      </HeroSection>

      <ServiceSection>
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 4 } }}>
          <Typography 
            variant={isMobile ? "h3" : "h2"} 
            align="center" 
            sx={{ 
              mb: { xs: 4, md: 8 },
              fontSize: {
                xs: '2rem',
                sm: '2.75rem',
                md: '3.5rem'
              }
            }}
          >
            Our Services
          </Typography>
          {/* Service carousel will be added here */}
        </Container>
      </ServiceSection>
    </Box>
  );
};

export default HomePage; 
import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroSectionWrapper = styled(Box)(({ theme }) => ({
  minHeight: 'calc(100vh - 0px)',
  height: 'calc(100vh - 0px)',
  width: '100vw',
  maxWidth: '100%',
  position: 'relative',
  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("/hero_image.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#FFFFFF',
  textAlign: 'center',
  boxSizing: 'border-box',
  margin: 0,
  marginTop: '56px',
  padding: 0,
  [theme.breakpoints.up('sm')]: {
    marginTop: '64px',
  },
  [theme.breakpoints.down('sm')]: {
    backgroundAttachment: 'scroll',
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

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSectionWrapper id="home">
      <ContentWrapper>
        <Box sx={{ maxWidth: '1200px', mx: 'auto', position: 'relative', zIndex: 2 }}>
          <Typography 
            variant={isMobile ? "h3" : "h1"} 
            component="h1" 
            sx={{ 
              mb: { xs: 2, md: 3 },
              fontWeight: 300,
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              fontSize: {
                xs: '2.5rem',
                sm: '3.5rem',
                md: '4.5rem',
                lg: '5.5rem'
              }
            }}
          >
            Elevate Your Style
          </Typography>
          <Typography 
            variant="subtitle1" 
            sx={{ 
              mb: { xs: 4, md: 6 }, 
              maxWidth: 800, 
              mx: 'auto',
              color: 'rgba(255,255,255,0.9)',
              textShadow: '0 1px 2px rgba(0,0,0,0.2)',
              fontSize: {
                xs: '1rem',
                md: '1.125rem',
                lg: '1.25rem'
              },
              px: { xs: 2, sm: 0 }
            }}
          >
            Bespoke wardrobe solutions for Delhi's most discerning clientele
          </Typography>
          <Button 
            variant="outlined" 
            onClick={() => scrollToSection('contact')}
            sx={{ 
              color: '#FFFFFF', 
              borderColor: '#FFFFFF',
              borderWidth: '2px',
              borderRadius: 0,
              '&:hover': {
                borderColor: 'rgba(255,255,255,0.8)',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderWidth: '2px',
              },
              px: { xs: 4, md: 6 },
              py: { xs: 1, md: 1.5 },
              fontSize: { xs: '0.875rem', md: '1rem', lg: '1.125rem' }
            }}
          >
            Contact Us
          </Button>
        </Box>
      </ContentWrapper>
      <ScrollIndicator />
    </HeroSectionWrapper>
  );
};

export default HeroSection; 
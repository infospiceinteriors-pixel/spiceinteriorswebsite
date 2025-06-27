import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
}

const HeroContainer = styled(Box)(() => ({
  position: 'relative',
  height: '90vh',
  minHeight: 600,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 1,
  },
}));

const HeroContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  textAlign: 'center',
  color: '#FFFFFF',
  maxWidth: 800,
  padding: theme.spacing(0, 3),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  margin: '0 auto',
}));

const HeroSection = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  ctaText = "Explore Our Collection",
  ctaLink = "/shop"
}: HeroSectionProps) => {
  return (
    <HeroContainer
      sx={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <Container maxWidth="xl" sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <HeroContent>
          <Typography 
            variant="h1" 
            sx={{ 
              mb: 3,
              fontWeight: 400,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              lineHeight: 1.2,
              letterSpacing: '0.02em',
            }}
          >
            {title}
          </Typography>
          <Typography 
            variant="subtitle1" 
            sx={{ 
              mb: 4,
              fontSize: { xs: '1rem', md: '1.125rem' },
              lineHeight: 1.6,
              letterSpacing: '0.02em',
              opacity: 0.9,
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            {subtitle}
          </Typography>
          {ctaText && (
            <Button 
              variant="contained" 
              size="large"
              href={ctaLink}
              sx={{ 
                px: 4, 
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 500,
                backgroundColor: '#000000',
                color: '#FFFFFF',
                '&:hover': {
                  backgroundColor: '#333333',
                },
              }}
            >
              {ctaText}
            </Button>
          )}
        </HeroContent>
      </Container>
    </HeroContainer>
  );
};

export default HeroSection; 
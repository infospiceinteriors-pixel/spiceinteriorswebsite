import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const BannerWrapper = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  height: '100vh',
  width: '100vw',
  maxWidth: '100%',
  position: 'relative',
  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/hero_image.jpg")',
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
  padding: 0,
  [theme.breakpoints.down('sm')]: {
    backgroundAttachment: 'scroll',
    minHeight: '80vh',
    height: '80vh',
  },
}));

const ContentContainer = styled(Container)(({ theme }) => ({
  maxWidth: '800px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: theme.spacing(0, 4),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(0, 3),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0, 2),
  },
}));

const BannerTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Playfair Display, Georgia, serif',
  fontWeight: 600,
  fontSize: '4.5rem',
  lineHeight: 1.1,
  letterSpacing: '-0.01em',
  marginBottom: theme.spacing(3),
  color: '#FFFFFF',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  [theme.breakpoints.down('md')]: {
    fontSize: '3.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.8rem',
    marginBottom: theme.spacing(2),
  },
}));

const BannerSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  fontWeight: 400,
  lineHeight: 1.5,
  marginBottom: theme.spacing(4),
  color: '#FFFFFF',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.4)',
  maxWidth: '600px',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.1rem',
    marginBottom: theme.spacing(3),
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    marginBottom: theme.spacing(3),
  },
}));

const BannerButton = styled(Button)(({ theme }) => ({
  borderColor: '#FFFFFF',
  border: '1px solid #FFFFFF',
  color: '#FFFFFF',
  backgroundColor: 'transparent',
  textTransform: 'none',
  fontSize: '0.9rem',
  fontWeight: 400,
  padding: '8px 24px',
  borderRadius: theme.spacing(1),
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    color: theme.palette.primary.main,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.85rem',
    padding: '8px 20px',
  },
}));

interface FullWidthBannerProps {
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

const FullWidthBanner = ({
  backgroundImage = '/hero_image.jpg',
  title = 'Curated for you',
  subtitle = 'Interior items curated by the best in the business. Leveling up your space has never been easier.',
  buttonText = 'Shop Now',
  buttonLink = '/shop'
}: FullWidthBannerProps) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (buttonLink.startsWith('http')) {
      window.open(buttonLink, '_blank');
    } else {
      navigate(buttonLink);
      // Scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 0);
    }
  };

  return (
    <BannerWrapper
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("${backgroundImage}")`,
      }}
    >
      <ContentContainer>
        <BannerTitle variant="h1">
          {title}
        </BannerTitle>
        <BannerSubtitle variant="h5">
          {subtitle}
        </BannerSubtitle>
        <BannerButton
          onClick={handleButtonClick}
          variant="contained"
        >
          {buttonText}
        </BannerButton>
      </ContentContainer>
    </BannerWrapper>
  );
};

export default FullWidthBanner;

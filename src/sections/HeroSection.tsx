import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroSectionWrapper = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  height: '100vh',
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
  padding: 0,
  paddingTop: 0,
  [theme.breakpoints.down('sm')]: {
    backgroundAttachment: 'scroll',
    paddingTop: 0,
  },
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '1400px',
  margin: '0 auto',
  padding: theme.spacing(0, 4),
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  [theme.breakpoints.up('xl')]: {
    maxWidth: '1400px',
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
    minHeight: '100vh',
  },
}));

const ScrollIndicator = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 120,
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
    bottom: 140,
  },
}));

const HeroSection = () => {
  // Unused variables commented out to fix build errors
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // const scrollToSection = (sectionId: string) => {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     section.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <HeroSectionWrapper id="home">
      <ContentWrapper>
        {/* Empty content wrapper - no text or buttons */}
      </ContentWrapper>
      <ScrollIndicator />
    </HeroSectionWrapper>
  );
};

export default HeroSection; 
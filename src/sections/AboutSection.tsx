import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';

const AboutSectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 0),
  backgroundColor: theme.palette.background.default,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: 'auto',
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
    padding: theme.spacing(5, 0),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 0),
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

const Section = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  position: 'relative',
  padding: theme.spacing(1, 0),
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(4),
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(3),
  },
}));

const AboutSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <AboutSectionWrapper id="about">
      <ContentWrapper>
        <Section>
          <Typography 
            variant={isMobile ? "h4" : "h3"} 
            align="center" 
            gutterBottom 
            sx={{ 
              mb: { xs: 3, md: 5 },
              fontSize: {
                xs: '1.5rem',
                sm: '1.75rem',
                md: '2.25rem',
                lg: '2.5rem'
              },
              color: 'secondary.main'
            }}
          >
            Our Story
          </Typography>
          <Typography 
            variant="subtitle1" 
            align="center" 
            sx={{ 
              maxWidth: 900, 
              mx: 'auto', 
              mb: 4,
              fontSize: {
                xs: '0.95rem',
                md: '1.1rem',
                lg: '1.25rem'
              },
              px: { xs: 1, sm: 0 },
              color: 'text.primary'
            }}
          >
            Founded in 2023, Wardrob emerged from a vision to transform the way Delhi's elite approach their personal style and wardrobe management. Our journey began with a simple observation: the need for sophisticated, personalized wardrobe solutions that reflect the refined tastes of our discerning clientele.
          </Typography>
          <Typography 
            variant="subtitle1" 
            align="center" 
            sx={{ 
              maxWidth: 900, 
              mx: 'auto',
              fontSize: {
                xs: '0.95rem',
                md: '1.1rem',
                lg: '1.25rem'
              },
              px: { xs: 1, sm: 0 },
              color: 'text.secondary'
            }}
          >
            Today, we stand as Delhi's premier wardrobe consultancy, offering bespoke services that combine luxury, functionality, and aesthetic excellence. Our commitment to quality and attention to detail has earned us the trust of some of the city's most influential personalities.
          </Typography>
        </Section>

        <Section sx={{ mb: { xs: 0, sm: 0, md: 0 } }}>
          <Typography 
            variant={isMobile ? "h4" : "h3"} 
            align="center" 
            gutterBottom 
            sx={{ 
              mb: { xs: 3, md: 5 },
              fontSize: {
                xs: '1.5rem',
                sm: '1.75rem',
                md: '2.25rem',
                lg: '2.5rem'
              },
              color: 'secondary.main'
            }}
          >
            Our Philosophy
          </Typography>
          <Typography 
            variant="subtitle1" 
            align="center" 
            sx={{ 
              maxWidth: 900, 
              mx: 'auto',
              fontSize: {
                xs: '0.95rem',
                md: '1.1rem',
                lg: '1.25rem'
              },
              px: { xs: 1, sm: 0 },
              color: 'text.primary'
            }}
          >
            At Wardrob, we believe that a well-curated wardrobe is more than just a collection of clothes—it's a reflection of one's personality, lifestyle, and aspirations. Our approach combines timeless elegance with modern functionality, ensuring that every client's wardrobe is as unique as they are.
          </Typography>
        </Section>
      </ContentWrapper>
    </AboutSectionWrapper>
  );
};

export default AboutSection; 
import { Box, Typography, Button, useTheme, useMediaQuery, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const services = [
  {
    id: 1,
    title: 'Wardrobe Decluttering',
    description: 'Transform your closet into a curated collection of pieces that truly reflect your lifestyle and personal style.',
    benefits: [
      'Personalized assessment of your existing wardrobe',
      'Organization by color, season, and occasion',
      'Recommendations for keeping, donating, or altering items'
    ],
    image: '/wardrobe_declutter.jpg'
  },
  {
    id: 2,
    title: 'Wardrobe Design Consultation',
    description: 'Expert guidance in creating a bespoke wardrobe space that combines luxury, functionality, and aesthetic excellence.',
    benefits: [
      'Customized storage solutions for your specific needs',
      'Material and finish recommendations for your space',
      'Detailed plans for optimal organization and accessibility'
    ],
    image: '/wardrobe_design.jpg'
  },
  {
    id: 3,
    title: 'Shopping Companion',
    description: 'Personal shopping experience with our style experts to curate the perfect additions to your wardrobe.',
    benefits: [
      'Personalized style profile creation',
      'Access to exclusive brands and boutiques',
      'Expert advice on fit, fabric, and quality'
    ],
    image: '/personal_shopping.jpg'
  },
];

const ServiceSectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
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
  [theme.breakpoints.up('xl')]: {
    padding: theme.spacing(10, 0),
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(5, 0),
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

const ServiceRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  marginBottom: theme.spacing(10),
  position: 'relative',
  width: '100%',
  boxSizing: 'border-box',
  '&:last-child': {
    marginBottom: 0,
  },
  [theme.breakpoints.up('xl')]: {
    marginBottom: theme.spacing(12),
  },
  [theme.breakpoints.between('lg', 'xl')]: {
    marginBottom: theme.spacing(11),
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    marginBottom: theme.spacing(8),
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(6),
  },
}));

const ServiceImage = styled(Box)(({ theme }) => ({
  width: '50%',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  minHeight: 500,
  position: 'relative',
  overflow: 'hidden',
  boxSizing: 'border-box',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(18, 18, 18, 0.4)',
    transition: 'background-color 0.4s ease',
    zIndex: 1,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'linear-gradient(to top, rgba(18, 18, 18, 0.8) 0%, rgba(18, 18, 18, 0.2) 40%, rgba(18, 18, 18, 0) 60%)',
    zIndex: 2,
  },
  '&:hover::before': {
    backgroundColor: 'rgba(18, 18, 18, 0.2)',
  },
  '& .service-image': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    transition: 'transform 0.8s ease',
  },
  '&:hover .service-image': {
    transform: 'scale(1.08)',
  },
  [theme.breakpoints.up('xl')]: {
    minHeight: 600,
  },
  [theme.breakpoints.between('lg', 'xl')]: {
    minHeight: 550,
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    minHeight: 350,
    order: 1,
  },
  [theme.breakpoints.down('sm')]: {
    minHeight: 250,
  },
  [theme.breakpoints.down('xs')]: {
    minHeight: 200,
  },
}));

const ServiceContent = styled(Box)(({ theme }) => ({
  width: '50%',
  padding: theme.spacing(6, 8),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.paper,
  boxSizing: 'border-box',
  [theme.breakpoints.up('xl')]: {
    padding: theme.spacing(8, 10),
  },
  [theme.breakpoints.between('lg', 'xl')]: {
    padding: theme.spacing(7, 9),
  },
  [theme.breakpoints.between('md', 'lg')]: {
    padding: theme.spacing(5, 6),
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    padding: theme.spacing(4, 5),
    order: 2,
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3, 3),
  },
}));

const CheckListItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(0.75, 0),
}));

const ServicesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ServiceSectionWrapper id="services">
      <Typography 
        variant={isMobile ? "h4" : "h3"} 
        align="center" 
        sx={{ 
          mb: { xs: 6, md: 8, lg: 10, xl: 12 },
          fontSize: {
            xs: '1.5rem',
            sm: '1.75rem',
            md: '2.25rem',
            lg: '2.5rem'
          },
          px: { xs: 2, sm: 4, md: 5 },
          color: 'secondary.main'
        }}
      >
        Our Services
      </Typography>
      
      <ContentWrapper>
        {services.map((service, index) => (
          <ServiceRow key={service.id}>
            {(index % 2 === 0) ? (
              <>
                <ServiceImage>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="service-image" 
                    loading="lazy"
                  />
                </ServiceImage>
                <ServiceContent>
                  <Typography 
                    variant={isMobile ? "h5" : "h4"}
                    sx={{ 
                      mb: { xs: 2, sm: 2.5, md: 3 },
                      color: 'secondary.main',
                      fontSize: {
                        xs: '1.5rem',
                        sm: '1.6rem',
                        md: '1.75rem',
                        lg: '2rem',
                        xl: '2.25rem'
                      },
                      fontWeight: 300
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography 
                    variant="body1"
                    sx={{ 
                      mb: 3,
                      color: 'text.secondary',
                      fontSize: {
                        xs: '1rem',
                        md: '1.1rem',
                        lg: '1.2rem'
                      },
                      maxWidth: '90%'
                    }}
                  >
                    {service.description}
                  </Typography>
                  
                  <List sx={{ mb: 4 }}>
                    {service.benefits.map((benefit, index) => (
                      <CheckListItem key={index} disableGutters>
                        <ListItemIcon sx={{ minWidth: 36, color: 'secondary.main' }}>
                          <CheckCircleOutlineIcon />
                        </ListItemIcon>
                        <ListItemText 
                          primary={benefit} 
                          primaryTypographyProps={{ 
                            variant: 'body2', 
                            sx: { 
                              fontSize: { xs: '0.95rem', md: '1rem', lg: '1.05rem' },
                              color: 'text.primary'
                            } 
                          }} 
                        />
                      </CheckListItem>
                    ))}
                  </List>
                  
                  <Button
                    variant="outlined"
                    color="secondary"
                    size={isMobile ? "medium" : "large"}
                    onClick={() => scrollToSection('contact')}
                    sx={{ 
                      alignSelf: 'flex-start',
                      fontWeight: 400,
                      fontSize: { xs: '0.875rem', md: '0.9rem', lg: '1rem' },
                      borderRadius: 0,
                      borderWidth: '2px',
                      px: { xs: 3, md: 4 },
                      py: { xs: 0.75, md: 1 },
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      '&:hover': {
                        borderWidth: '2px'
                      }
                    }}
                  >
                    Enquire Now
                  </Button>
                </ServiceContent>
              </>
            ) : (
              <>
                <ServiceContent>
                  <Typography 
                    variant={isMobile ? "h5" : "h4"}
                    sx={{ 
                      mb: { xs: 2, sm: 2.5, md: 3 },
                      color: 'secondary.main',
                      fontSize: {
                        xs: '1.5rem',
                        sm: '1.6rem',
                        md: '1.75rem',
                        lg: '2rem',
                        xl: '2.25rem'
                      },
                      fontWeight: 300
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography 
                    variant="body1"
                    sx={{ 
                      mb: 3,
                      color: 'text.secondary',
                      fontSize: {
                        xs: '1rem',
                        md: '1.1rem',
                        lg: '1.2rem'
                      },
                      maxWidth: '90%'
                    }}
                  >
                    {service.description}
                  </Typography>
                  
                  <List sx={{ mb: 4 }}>
                    {service.benefits.map((benefit, index) => (
                      <CheckListItem key={index} disableGutters>
                        <ListItemIcon sx={{ minWidth: 36, color: 'secondary.main' }}>
                          <CheckCircleOutlineIcon />
                        </ListItemIcon>
                        <ListItemText 
                          primary={benefit} 
                          primaryTypographyProps={{ 
                            variant: 'body2', 
                            sx: { 
                              fontSize: { xs: '0.95rem', md: '1rem', lg: '1.05rem' },
                              color: 'text.primary'
                            } 
                          }} 
                        />
                      </CheckListItem>
                    ))}
                  </List>
                  
                  <Button
                    variant="outlined"
                    color="secondary"
                    size={isMobile ? "medium" : "large"}
                    onClick={() => scrollToSection('contact')}
                    sx={{ 
                      alignSelf: 'flex-start',
                      fontWeight: 400,
                      fontSize: { xs: '0.875rem', md: '0.9rem', lg: '1rem' },
                      borderRadius: 0,
                      borderWidth: '2px',
                      px: { xs: 3, md: 4 },
                      py: { xs: 0.75, md: 1 },
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      '&:hover': {
                        borderWidth: '2px'
                      }
                    }}
                  >
                    Enquire Now
                  </Button>
                </ServiceContent>
                <ServiceImage>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="service-image" 
                    loading="lazy"
                  />
                </ServiceImage>
              </>
            )}
          </ServiceRow>
        ))}
      </ContentWrapper>
    </ServiceSectionWrapper>
  );
};

export default ServicesSection; 
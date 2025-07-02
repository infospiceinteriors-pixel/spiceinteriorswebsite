import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const services = [
  {
    id: 1,
    title: 'Interior Design Consultation',
    description: 'Transform your living spaces with expert interior design guidance. From concept development to material selection, I provide comprehensive consultation services to create beautiful, functional interiors that reflect your personal style and meet your lifestyle needs.',
    image: '/placeholder.jpg'
  },
  {
    id: 2,
    title: 'House Renovation Consultation',
    description: 'Navigate your renovation project with confidence through expert consultation. I provide strategic planning, design coordination, and project management guidance to ensure your renovation achieves your vision while staying on budget and timeline.',
    image: '/placeholder.jpg'
  },
  {
    id: 3,
    title: 'Structural Changes Consultation',
    description: 'Expert guidance for structural modifications and improvements. Whether you\'re planning to remove walls, add extensions, or make significant structural changes, I provide technical expertise to ensure safety, compliance, and optimal design outcomes.',
    image: '/placeholder.jpg'
  },
  {
    id: 4,
    title: 'Custom Fabrication and Contracting',
    description: 'Bring your unique design visions to life with custom fabrication services. From bespoke furniture and built-in storage solutions to specialized architectural elements, I coordinate with skilled craftspeople to deliver high-quality custom work.',
    image: '/placeholder.jpg'
  }
];

const ServiceSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(4),
  marginBottom: theme.spacing(4),
  '&:nth-of-type(even)': {
    flexDirection: 'row-reverse',
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column !important',
    gap: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

const ServiceImage = styled('img')(({ theme }) => ({
  width: '50%',
  height: '300px',
  objectFit: 'cover',
  borderRadius: '4px',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: '250px',
  },
}));

const ServiceContent = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    padding: 0,
    textAlign: 'center',
  },
}));

const ServicesPage = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ py: 3, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h2" 
              sx={{ 
                mb: 2,
                color: 'primary.main',
                fontWeight: 400,
              }}
            >
              Services
            </Typography>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.5,
                fontSize: { xs: '0.9rem', md: '0.95rem', lg: '1rem' },
              }}
            >
              Comprehensive design and consultation services 
              for your home and renovation projects
            </Typography>
          </Box>

          {/* Services Sections */}
          {services.map((service, index) => (
            <ServiceSection key={service.id}>
              <ServiceImage
                src={service.image}
                alt={service.title}
              />
              <ServiceContent>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 1,
                    color: 'primary.main',
                    fontFamily: 'Playfair Display',
                    fontWeight: 600,
                    fontSize: { xs: '0.9rem', md: '0.95rem', lg: '1rem' },
                    textTransform: 'uppercase',
                    letterSpacing: 0,
                    lineHeight: 1.2,
                  }}
                >
                  {service.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'text.secondary',
                    lineHeight: 1.4,
                    fontSize: { xs: '0.65rem', md: '0.7rem', lg: '0.75rem' },
                  }}
                >
                  {service.description}
                </Typography>
              </ServiceContent>
            </ServiceSection>
          ))}
        </Container>
      </Box>

      {/* Contact CTA Section */}
      <Box sx={{ py: 6, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography 
              variant="h3" 
              sx={{ 
                mb: 2,
                color: 'primary.main',
                fontWeight: 400,
                fontSize: { xs: '1.2rem', md: '1.3rem', lg: '1.4rem' },
              }}
            >
              Ready to Start Your Project?
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'text.secondary',
                maxWidth: 500,
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: { xs: '0.8rem', md: '0.85rem', lg: '0.9rem' },
              }}
            >
              Get in touch to discuss your project needs and discover how I can help 
              bring your vision to life with expert design consultation and guidance.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ServicesPage; 
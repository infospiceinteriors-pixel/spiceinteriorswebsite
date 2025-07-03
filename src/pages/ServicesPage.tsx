import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect } from 'react';

const services = [
  {
    id: 2,
    title: 'Rental Property Optimization',
    description: 'Navigate the Dutch rental market with confidence. Our strategic advisory service maximizes your property\'s potential under the new government point system, ensuring optimal returns and regulatory compliance.',
    examples: [
      'Market analysis: Free market vs. rent-controlled sector positioning',
      'Municipal compliance: Complete documentation and approval support',
      'Revenue optimization: Space efficiency and unit maximization strategies',
      'Cost-effective luxury conversions with high-impact, budget-conscious solutions'
    ],
    image: '/rental-01.jpg'
  },
  {
    id: 1,
    title: 'Interior Design Consultation',
    description: 'Elevate your space with strategic design expertise. From concept to completion, we craft interiors that seamlessly blend your personal aesthetic with functional brilliance—saving you time, money, and costly mistakes.',
    examples: [
      'Space curation: Transform your collected treasures into cohesive design stories',
      'Precision planning: Detailed layouts and specifications prevent expensive purchasing errors',
      'Curated sourcing: Expert furniture selection eliminates endless vendor research',
      'Turnkey solutions: Stress-free move-in while you focus on what matters most'
    ],
    image: '/services-01.jpeg'
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

const ExamplesList = styled('ul')(({ theme }) => ({
  margin: theme.spacing(2, 0, 0, 0),
  paddingLeft: theme.spacing(2),
  '& li': {
    marginBottom: theme.spacing(1),
    fontSize: 'inherit',
    lineHeight: 1.4,
    color: theme.palette.text.secondary,
  },
  [theme.breakpoints.down('md')]: {
    textAlign: 'left',
    paddingLeft: theme.spacing(3),
  },
}));

const ServicesPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <Box>
      {/* Services Sections */}
      <Box sx={{ py: 3, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          {services.map((service) => (
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
                    mb: 2,
                  }}
                >
                  {service.description}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'primary.main',
                    fontWeight: 600,
                    fontSize: { xs: '0.65rem', md: '0.7rem', lg: '0.75rem' },
                    mb: 1,
                  }}
                >
                  Key Services:
                </Typography>
                <ExamplesList>
                  {service.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex}>
                      <Typography 
                        variant="body2" 
                        component="span"
                        sx={{ 
                          fontSize: { xs: '0.6rem', md: '0.65rem', lg: '0.7rem' },
                        }}
                      >
                        {example}
                      </Typography>
                    </li>
                  ))}
                </ExamplesList>
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
              Let's Transform Your Vision Into Reality
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
              Ready to unlock your space's potential? Connect with us to discuss your project 
              and discover how strategic design expertise can elevate your property and lifestyle.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ServicesPage; 
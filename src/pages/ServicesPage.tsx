import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const services = [
  {
    id: 1,
    title: 'Interior Design Consultation',
    description: 'Transform your living spaces with expert interior design guidance. From concept development to material selection, we provide comprehensive consultation services to create beautiful, functional interiors that reflect your personal style and meet your lifestyle needs.',
    examples: [
      'We help you choreograph all the belongings you have collected over the years in your new space by means of mood boards.',
      'We help you save 1000s of Euros by preparing a floor layout with list of furniture with dimensions, so you don\'t buy something that doesn\'t fit.',
      'Save your time by letting us pick the right furniture for you instead of weeks and months of chasing vendors on Instagram or Markplaats.',
      'Hire us for a stress free move-in. We will get your apartment ready while you focus on what\'s important to you - your business.'
    ],
    image: '/services-01.jpg'
  },
  {
    id: 2,
    title: 'Rental Property Optimization',
    description: 'Make the best out of your rental property with our advise on the new point system introduced by the Dutch government.',
    examples: [
      'Check the viability of your rental property for the free market vs the rent controlled sector.',
      'Get approvals from the municipality while we support you with all the necessary documentation of your property - floor plans and photographs',
      'Maximize rental profitability by maximizing the usable space and number of units',
      'Convert your property into a luxury apartment with budget friendly tips and tricks.'
    ],
    image: '/placeholder.jpg'
  },
  {
    id: 3,
    title: 'House Renovation Consultation',
    description: 'Navigate your renovation project with confidence through expert consultation. I provide strategic planning, design coordination, and project management guidance to ensure your renovation achieves your vision while staying on budget and timeline.',
    examples: [
      'Bought a renovation property (Kluswoning) or a 1 Euro home in Italy? We can help you plan and execute your project.',
      'Save yourself from expensive mistakes and money sinks when planning to renovate your property with our expert guidance.',
      'We help you manage the project by defining phases that matches your requirements and budget.'
    ],
    image: '/services-03.jpg'
  },
  {
    id: 4,
    title: 'Structural Changes Consultation',
    description: 'Expert guidance for structural modifications and layout improvements. Whether you\'re planning to remove walls, add extensions, or make significant structural changes, we work with experts to ensure safety, compliance, and optimal design outcomes.',
    examples: [
      'Want to maximize your carpet area by removing a wall? We can provide you insights into how to make the most with minimal altercations.',
      'Want to add a skylight? We can provide you best available options for your situation.',
      'Want to add a house extension (Aanbouw)? We can customize a design that is eclectic and unique to your home.'
    ],
    image: '/placeholder.jpg'
  },
  {
    id: 5,
    title: 'Full service architecture',
    description: 'Bring your unique design visions to life with our turnkey offer. We will be with you until your house is ready for you to move-in.',
    examples: [
      'We help you get your house approved by the local municipality, so you can build your dream (holiday) home and start your new life.',
      'Planning a project abroad? We are the right partner with our extensive network of local architects in EU, Middle East, Asia and Canada.',
      'We are licensed to practice architecture in India and work with local partners in Netherlands, Spain, Italy, Dubai, Taiwan and UAE to realize your dream home.'
    ],
    image: '/services-05.jpg'
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
              for your business or your home.
            </Typography>
          </Box>

          {/* Services Sections */}
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
                  Examples:
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
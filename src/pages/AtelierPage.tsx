import { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Button, 
  Card, 
  CardMedia, 
  CardContent,
  Avatar,
  Paper,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import StarIcon from '@mui/icons-material/Star';

// Dummy data for projects
const projects = [
  {
    id: '1',
    title: 'Modern Amsterdam Apartment',
    description: 'Complete transformation of a 120m² apartment in the heart of Amsterdam. Modern minimalist design with premium finishes.',
    image: '/placeholder.jpg',
    category: 'Residential'
  },
  {
    id: '2',
    title: 'Boutique Hotel Lobby',
    description: 'Luxury hotel lobby redesign featuring custom furniture and statement lighting. Created an inviting atmosphere for guests.',
    image: '/placeholder.jpg',
    category: 'Commercial'
  },
  {
    id: '3',
    title: 'Scandinavian Family Home',
    description: 'Family home renovation with focus on functionality and style. Open plan living with natural materials throughout.',
    image: '/placeholder.jpg',
    category: 'Residential'
  },
  {
    id: '4',
    title: 'Co-working Space',
    description: 'Modern co-working space design with flexible furniture solutions and inspiring work environments.',
    image: '/placeholder.jpg',
    category: 'Commercial'
  }
];

// Process steps
const processSteps = [
  {
    step: '01',
    title: 'Initial Consultation',
    description: 'We begin with a comprehensive consultation to understand your vision, lifestyle, and requirements.'
  },
  {
    step: '02',
    title: 'Concept Development',
    description: 'Our team creates detailed design concepts, mood boards, and 3D visualizations for your approval.'
  },
  {
    step: '03',
    title: 'Design Refinement',
    description: 'We refine the design based on your feedback, ensuring every detail meets your expectations.'
  },
  {
    step: '04',
    title: 'Implementation',
    description: 'Our experienced team oversees the entire implementation process, from procurement to final styling.'
  }
];

// Deliverable examples
const deliverables = [
  {
    title: 'Complete Design Package',
    description: 'Comprehensive design documentation including floor plans, furniture layouts, color schemes, and material specifications.',
    price: '€2,500-€5,000'
  },
  {
    title: 'Furniture Selection',
    description: 'Curated furniture selection with detailed specifications, pricing, and procurement timeline.',
    price: '€1,200-€3,000'
  },
  {
    title: 'Lighting Design',
    description: 'Complete lighting plan including fixture selection, placement, and control systems.',
    price: '€800-€2,000'
  }
];

// Testimonials
const testimonials = [
  {
    name: 'Sarah van der Berg',
    role: 'Homeowner',
    rating: 5,
    text: 'Spice transformed our apartment into a beautiful, functional space that perfectly reflects our style. The attention to detail was incredible.',
    avatar: '/placeholder.jpg'
  },
  {
    name: 'Michael Chen',
    role: 'Restaurant Owner',
    rating: 5,
    text: 'The team at Spice created an amazing atmosphere for our restaurant. The design exceeded our expectations and our customers love it.',
    avatar: '/placeholder.jpg'
  },
  {
    name: 'Emma Johnson',
    role: 'Property Developer',
    rating: 5,
    text: 'Working with Spice was a pleasure from start to finish. They delivered a stunning design that added significant value to our property.',
    avatar: '/placeholder.jpg'
  }
];

const ProjectCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
  },
}));

const AtelierPage = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <Box>
      {/* Projects Carousel */}
      <Box sx={{ py: 3, backgroundColor: 'background.default' }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h2" 
              sx={{ 
                mb: 2,
                color: 'primary.main',
                fontWeight: 400,
              }}
            >
              Featured Projects
            </Typography>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              Explore our portfolio of completed projects, showcasing our expertise in creating 
              beautiful and functional spaces for our clients.
            </Typography>
          </Box>

          <Box sx={{ position: 'relative', mb: 4 }}>
            <Grid container spacing={4}>
              {projects.map((project, index) => (
                <Grid item xs={12} md={6} lg={3} key={project.id}>
                  <ProjectCard>
                    <CardMedia
                      component="img"
                      height="250"
                      image={project.image}
                      alt={project.title}
                    />
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          color: 'secondary.main',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          fontWeight: 500,
                          mb: 1,
                          display: 'block'
                        }}
                      >
                        {project.category}
                      </Typography>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          mb: 2,
                          fontFamily: 'Playfair Display',
                          fontWeight: 400,
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: 'text.secondary',
                          lineHeight: 1.6
                        }}
                      >
                        {project.description}
                      </Typography>
                    </CardContent>
                  </ProjectCard>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Process Section */}
      <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
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
              Our Process
            </Typography>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              We follow a structured approach to ensure every project meets our high standards 
              and exceeds your expectations.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {processSteps.map((step, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography 
                    variant="h1" 
                    sx={{ 
                      color: 'secondary.main',
                      fontSize: '3rem',
                      fontWeight: 300,
                      mb: 2
                    }}
                  >
                    {step.step}
                  </Typography>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      mb: 2,
                      color: 'primary.main',
                      fontFamily: 'Playfair Display',
                      fontWeight: 400,
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'text.secondary',
                      lineHeight: 1.6
                    }}
                  >
                    {step.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Deliverables Section */}
      <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
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
              What You'll Receive
            </Typography>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
                mb: 4
              }}
            >
              Our comprehensive deliverables ensure you have everything needed to bring your vision to life.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {deliverables.map((deliverable, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper 
                  elevation={0}
                  sx={{ 
                    p: 4, 
                    height: '100%',
                    border: '1px solid rgba(212, 165, 116, 0.2)',
                    backgroundColor: 'background.paper',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <Box>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        mb: 2,
                        color: 'primary.main',
                        fontFamily: 'Playfair Display',
                        fontWeight: 400,
                      }}
                    >
                      {deliverable.title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: 'text.secondary',
                        lineHeight: 1.6,
                        mb: 3
                      }}
                    >
                      {deliverable.description}
                    </Typography>
                  </Box>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: 'secondary.main',
                      fontWeight: 500,
                    }}
                  >
                    {deliverable.price}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button 
              variant="contained" 
              size="large"
              href="/contact"
              sx={{ 
                px: 4, 
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 500,
              }}
            >
              Get in Touch
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
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
              Client Testimonials
            </Typography>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              Hear from our satisfied clients about their experience working with Spice Interior Design Studio.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper 
                  elevation={0}
                  sx={{ 
                    p: 4, 
                    height: '100%',
                    border: '1px solid rgba(212, 165, 116, 0.2)',
                    backgroundColor: 'background.default',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Avatar
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      sx={{ width: 60, height: 60, mr: 2 }}
                    />
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 500 }}>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', mb: 2 }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} sx={{ color: 'secondary.main', fontSize: 20 }} />
                    ))}
                  </Box>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      fontStyle: 'italic'
                    }}
                  >
                    "{testimonial.text}"
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default AtelierPage; 
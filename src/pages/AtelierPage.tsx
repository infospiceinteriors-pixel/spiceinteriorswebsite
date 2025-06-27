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
  useTheme,
  IconButton
} from '@mui/material';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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

const ProjectCard = styled(Card)(() => ({
  boxShadow: 'none',
  border: 'none',
  borderRadius: 0,
  display: 'flex',
  flexDirection: 'column',
  background: 'none',
  transition: 'none',
  height: 'auto',
  width: '100%',
  maxWidth: '100%',
  '&:hover': {
    boxShadow: 'none',
    background: 'none',
  },
}));

const ImageWrapper = styled('div')({
  position: 'relative',
  width: '100%',
  aspectRatio: '1 / 1', // This ensures square images
  overflow: 'hidden',
});

const ProjectImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const ProjectGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: 0,
  width: '100%',
  '& > *': {
    minWidth: 0, // Prevent grid items from expanding beyond their allocated space
    maxWidth: '100%'
  },
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
}));

const AtelierPage = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const theme = useTheme();

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
              Portfolio
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
            <ProjectGrid>
              {projects.map((project) => (
                <ProjectCard key={project.id}>
                  <ImageWrapper>
                    <ProjectImage
                      src={project.image}
                      alt={project.title}
                    />
                  </ImageWrapper>
                  <CardContent sx={{ 
                    p: 2, 
                    pb: 3, 
                    pt: 3, 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'flex-start', 
                    justifyContent: 'flex-start', 
                    width: '100%',
                    minHeight: '80px',
                    flex: '0 0 auto',
                    overflow: 'hidden'
                  }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontFamily: 'Playfair Display',
                        fontWeight: 600,
                        fontSize: { xs: '1.1rem', md: '1.15rem', lg: '1.2rem' },
                        textAlign: 'left',
                        width: '100%',
                        textTransform: 'uppercase',
                        letterSpacing: 0,
                        lineHeight: 1.2,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        display: 'block',
                        mb: 1
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'text.secondary',
                        lineHeight: 1.6,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical'
                      }}
                    >
                      {project.description}
                    </Typography>
                  </CardContent>
                </ProjectCard>
              ))}
            </ProjectGrid>
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
              Testimonials
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

          <Box sx={{ position: 'relative', overflow: 'hidden' }}>
            <Box 
              sx={{ 
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                gap: 3,
                transition: 'opacity 0.3s ease-in-out'
              }}
            >
              {testimonials
                .slice(currentTestimonial * 3, currentTestimonial * 3 + 3)
                .map((testimonial, index) => (
                <Paper 
                  key={currentTestimonial * 3 + index}
                  elevation={0}
                  sx={{ 
                    p: 4, 
                    height: '100%',
                    border: '1px solid rgba(212, 165, 116, 0.2)',
                    backgroundColor: 'background.default',
                    textAlign: 'center'
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                    <Avatar
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      sx={{ width: 60, height: 60, mr: 2 }}
                    />
                    <Box sx={{ textAlign: 'left' }}>
                      <Typography variant="h6" sx={{ fontWeight: 500 }}>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} sx={{ color: 'secondary.main', fontSize: 20 }} />
                    ))}
                  </Box>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      fontStyle: 'italic',
                      fontSize: '1rem'
                    }}
                  >
                    "{testimonial.text}"
                  </Typography>
                </Paper>
              ))}
            </Box>

            {/* Navigation Dots */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 1 }}>
              {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    backgroundColor: index === currentTestimonial ? 'secondary.main' : 'rgba(212, 165, 116, 0.3)',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                    '&:hover': {
                      backgroundColor: index === currentTestimonial ? 'secondary.main' : 'rgba(212, 165, 116, 0.5)',
                    }
                  }}
                />
              ))}
            </Box>

            {/* Navigation Arrows - Only show if there are more than 3 testimonials */}
            {testimonials.length > 3 && (
              <>
                <IconButton
                  onClick={() => setCurrentTestimonial((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3))}
                  sx={{
                    position: 'absolute',
                    left: -20,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'background.paper',
                    border: '1px solid rgba(212, 165, 116, 0.2)',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                      backgroundColor: 'background.paper',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    }
                  }}
                >
                  <ArrowBackIosIcon sx={{ fontSize: 20, color: 'primary.main' }} />
                </IconButton>
                <IconButton
                  onClick={() => setCurrentTestimonial((prev) => (prev + 1) % Math.ceil(testimonials.length / 3))}
                  sx={{
                    position: 'absolute',
                    right: -20,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'background.paper',
                    border: '1px solid rgba(212, 165, 116, 0.2)',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                      backgroundColor: 'background.paper',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    }
                  }}
                >
                  <ArrowForwardIosIcon sx={{ fontSize: 20, color: 'primary.main' }} />
                </IconButton>
              </>
            )}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default AtelierPage; 
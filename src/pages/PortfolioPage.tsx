import { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent,
  Avatar,
  Paper,
  IconButton
} from '@mui/material';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const projects = [
    {
      id: '4',
      title: 'Naraina house, Delhi (MOFA stdios)',
      description: 'Early in my career, I was involved in the design and execution of high-end luxury residences, where architecture and interior design were seamlessly integrated to reflect refined living. These projects demanded meticulous attention to detail, from spatial planning to material selection, with a strong emphasis on craftsmanship and elegance. My role included translating bespoke client visions into cohesive design solutions that balanced functionality with timeless aesthetics.',
      images: ['/naraina-02.jpeg', '/naraina-01.jpeg', '/naraina-04.png'],
      category: 'Residential'
    },
    {
      id: '5',
      title: 'Hatsoff accessories, Delhi',
      description: 'I designed a retail interior for Hatsoff Accessories\' shoe store, drawing inspiration from mid-century Scandinavian wall units known for their clean lines, modularity, and warmth. The display system was crafted to feel like an extension of refined home furniture—elevating the retail experience while maintaining a minimalist, approachable atmosphere. Natural wood tones, thoughtful lighting, and flexible shelving allowed the shoes to be presented as curated objects, balancing function with an inviting, timeless aesthetic.',
      images: ['/hatsoff-01.jpeg', '/hatsoff-02.jpeg', '/hatsoff-04.png'],
      category: 'Retail'
    },
  {
    id: '1',
    title: 'Holocaust Name Monument, Amsterdam (AIP)',
    description: 'For the Holocaust Name Monument in Amsterdam, I developed a digital design model that allowed for highly customized components to be produced efficiently at scale. This approach enabled a bespoke, tailored design solution while dramatically accelerating the fabrication process—reducing production time by nearly fivefold. My role ensured each element was precisely crafted to fit the project\'s unique vision, while still meeting the demands of large-scale production.',
    images: ['/HNM-07.jpg', '/HNM-05.jpg', '/HNM-06.jpg'],
    category: 'Architecture'
  },
  {
    id: '2',
    title: 'CiWoCo, Amsterdam (GAAGA)',
    description: 'In the experimental circular district of Buiksloterham in Amsterdam-Noord, GAAGA designed a flexible, demountable live-work building that can adapt to future changes without major structural alterations. Developed in close collaboration with a resident-led construction group, the project embraces circular construction principles from design to execution. To support this innovative approach, I contributed by creating precise technical 3D drawings that clarified how the various circular building components come together—ensuring seamless coordination between design intent and construction.',
    images: ['/buiksloterham-01.jpg', '/buiksloterham-02.jpg', '/buiksloterham-03.jpg'],
    category: 'Circular Design'
  },
  {
    id: '3',
    title: 'De Hallen, Amsterdam (GAAGA)',
    description: 'Block B5, located at the corner of Bilderdijkkade and Kwakersstraat near De Hallen in Amsterdam Oud-West, is a unique five-story residential project developed in collaboration with a construction group of private individuals. The building features nine distinct apartments, each with its own layout and size, tailored to the needs of its residents—visible in the varied facade with alternating steel balconies and bay windows. To support this high level of customization, I created detailed technical 3D drawings that helped clarify how the bespoke components of the building come together, ensuring precise coordination and an efficient fabrication and construction process.',
    images: ['/dehallen-01.jpg', '/dehallen-02.jpg', '/GAAGA_De-Hallen-B5_10.jpg'],
    category: 'Residential'
  }
];

// Testimonials
const testimonials = [
  {
    name: 'Nikoletta Christidi',
    role: 'PhD candidate at TU Delft',
    rating: 5,
    text: 'Ankur often goes above and beyond to come up with the best solution, focusing on functionality, aesthetics and efficiency. His contribution improved greatly the quality of several projects. Even after working hard on client projects, he had the energy to explore new tools and automate processes. He is creative, diligent and driven.',
    avatar: '/nikoletta.jpeg'
  },
  {
    name: 'Leah Dierker Vilk',
    role: 'Product Manager',
    rating: 5,
    text: 'I worked for almost a year and a half with Ankur at White Lioness technologies. He is a very dedicated, hard worker who cares about producing high-quality work. He\'s a creative problem-solver, good at thinking of out-of-the-box solutions to difficult problems, and a very kind and helpful person.',
    avatar: '/leah.jpeg'
  },
  {
    name: 'Milou Klein',
    role: 'Engineering and Software Development',
    rating: 5,
    text: 'Ankur is a hard working and dedicated colleague who shows creativity and curiosity in his work. His technical expertise in Rhinoceros and Grasshopper contributed greatly to high quality solutions. He has great teaching skills and is enthusiastic to share his knowledge.',
    avatar: '/Milou Klein.jpeg'
  },
  {
    name: 'Twan (Antoine) Goossens',
    role: 'Computational Designer Infrastructure at Haskoning',
    rating: 5,
    text: 'It\'s rare to find anyone with the same technical expertise, curiosity and drive as Ankur. He went above and beyond in designing software architecture, creating excellent user experiences, and building low-maintenance solutions. Ankur is also a great trainer, always looking for better ways of working and happy to share his knowledge.',
    avatar: '/twan.jpeg'
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

// New styled components for the custom layout
const ProjectImageGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: '1fr 1fr',
  gap: '8px',
  height: '400px',
  width: '100%',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    height: '300px',
  },
  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: 'auto auto',
    gap: '6px',
  },
}));

const VerticalImageWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  gridColumn: '1',
  gridRow: '1 / 3',
  width: '100%',
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    gridColumn: '1 / 3', // Span both columns on mobile
    gridRow: '1',
    aspectRatio: '16 / 9', // More horizontal aspect ratio
  },
}));

const SquareImageWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    aspectRatio: '1 / 1',
    height: 'auto',
  },
}));

const ProjectImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const ProjectGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(6),
  width: '100%',
  '& > *': {
    minWidth: 0,
    maxWidth: '100%'
  },
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
    maxWidth: '600px',
    margin: '0 auto',
  },
}));

const PortfolioPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <Box>
      {/* Projects Section */}
      <Box sx={{ py: 3, backgroundColor: 'background.default' }}>
        <Container maxWidth="xl">

          <Box sx={{ position: 'relative', mb: 4 }}>
            <ProjectGrid>
              {projects.map((project) => (
                <ProjectCard key={project.id}>
                  <ProjectImageGrid>
                    <VerticalImageWrapper>
                      <ProjectImage
                        src={project.images[0]}
                        alt={project.title}
                      />
                    </VerticalImageWrapper>
                    <SquareImageWrapper>
                      <ProjectImage
                        src={project.images[1]}
                        alt={project.title}
                      />
                    </SquareImageWrapper>
                    <SquareImageWrapper>
                      <ProjectImage
                        src={project.images[2]}
                        alt={project.title}
                      />
                    </SquareImageWrapper>
                  </ProjectImageGrid>
                  <CardContent sx={{ 
                    p: 2, 
                    pb: 3, 
                    pt: 3, 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'flex-start', 
                    justifyContent: 'flex-start', 
                    width: '100%',
                    flex: '0 0 auto'
                  }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontFamily: 'Playfair Display',
                        fontWeight: 600,
                        fontSize: { xs: '0.9rem', md: '0.95rem', lg: '1rem' },
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
                        lineHeight: 1.4,
                        fontSize: { xs: '0.65rem', md: '0.7rem', lg: '0.75rem' },
                        textAlign: 'left',
                        width: '100%'
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
              Read what people say after working with me.
            </Typography>
          </Box>

          <Box sx={{ position: 'relative', overflow: 'hidden' }}>
            <Box 
              sx={{ 
                display: 'flex',
                width: `${Math.ceil(testimonials.length / 3) * 100}%`,
                transition: 'transform 0.5s ease-in-out',
                transform: `translateX(-${currentTestimonial * (100 / Math.ceil(testimonials.length / 3))}%)`
              }}
            >
              {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, slideIndex) => (
                <Box
                  key={slideIndex}
                  sx={{
                    width: `${100 / Math.ceil(testimonials.length / 3)}%`,
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                    gap: 3,
                    flexShrink: 0
                  }}
                >
                  {testimonials
                    .slice(slideIndex * 3, slideIndex * 3 + 3)
                    .map((testimonial, index) => (
                      <Paper 
                        key={slideIndex * 3 + index}
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
                            sx={{ width: 45, height: 45, mr: 2 }}
                          />
                          <Box sx={{ textAlign: 'left' }}>
                            <Typography variant="h6" sx={{ 
                              fontWeight: 500,
                              fontSize: { xs: '0.85rem', md: '0.9rem', lg: '0.95rem' }
                            }}>
                              {testimonial.name}
                            </Typography>
                            <Typography variant="body2" sx={{ 
                              color: 'text.secondary',
                              fontSize: { xs: '0.65rem', md: '0.7rem', lg: '0.75rem' }
                            }}>
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
                            lineHeight: 1.4,
                            fontStyle: 'italic',
                            fontSize: { xs: '0.65rem', md: '0.7rem', lg: '0.75rem' }
                          }}
                        >
                          "{testimonial.text}"
                        </Typography>
                      </Paper>
                    ))}
                </Box>
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
                    left: 10,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'background.paper',
                    border: '1px solid rgba(212, 165, 116, 0.2)',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    zIndex: 2,
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
                    right: 10,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'background.paper',
                    border: '1px solid rgba(212, 165, 116, 0.2)',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    zIndex: 2,
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

export default PortfolioPage; 
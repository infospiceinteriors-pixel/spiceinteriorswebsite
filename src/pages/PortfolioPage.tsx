import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent
} from '@mui/material';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import ImageSlideshow from '../components/ImageSlideshow';
import TestimonialsSection from '../components/TestimonialsSection';
import { portfolioTestimonials } from '../utils/testimonials';

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
    title: 'Holocaust Name Monument, Amsterdam (Libeskind studio, AIP)',
    description: 'For the Holocaust Name Monument in Amsterdam, I developed a digital design model that allowed for highly customized components to be produced efficiently at scale. This approach enabled a bespoke, tailored design solution while dramatically accelerating the fabrication process—reducing production time by nearly fivefold. My role ensured each element was precisely crafted to fit the project\'s unique vision, while still meeting the demands of large-scale production.',
    images: ['/HNM-06.jpg', '/HNM-05.jpg', '/HNM-07.jpg'],
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
  cursor: 'pointer',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
  },
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
  const [slideshowOpen, setSlideshowOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (project: typeof projects[0], imageIndex: number) => {
    setSelectedProject(project);
    setSelectedImageIndex(imageIndex);
    setSlideshowOpen(true);
  };

  const handleCloseSlideshow = () => {
    setSlideshowOpen(false);
    setSelectedProject(null);
    setSelectedImageIndex(0);
    
    // Comprehensive scroll restoration
    setTimeout(() => {
      const body = document.body;
      const html = document.documentElement;
      
      // Clear all potential scroll-blocking styles
      body.style.cssText = body.style.cssText
        .replace(/position:[^;]*;?/gi, '')
        .replace(/top:[^;]*;?/gi, '')
        .replace(/left:[^;]*;?/gi, '')
        .replace(/width:[^;]*;?/gi, '')
        .replace(/height:[^;]*;?/gi, '')
        .replace(/overflow:[^;]*;?/gi, '');
      
      html.style.overflow = '';
      
      // Force multiple reflows to ensure scrollbar restoration
      body.offsetHeight;
      html.offsetHeight;
      
      // Try to trigger scroll event
      window.dispatchEvent(new Event('resize'));
    }, 100);
  };



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
                        onClick={() => handleImageClick(project, 0)}
                      />
                    </VerticalImageWrapper>
                    <SquareImageWrapper>
                      <ProjectImage
                        src={project.images[1]}
                        alt={project.title}
                        onClick={() => handleImageClick(project, 1)}
                      />
                    </SquareImageWrapper>
                    <SquareImageWrapper>
                      <ProjectImage
                        src={project.images[2]}
                        alt={project.title}
                        onClick={() => handleImageClick(project, 2)}
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
      <TestimonialsSection 
        title="Testimonials"
        description="Read what people say after working with me."
        testimonials={portfolioTestimonials}
        backgroundColor="background.paper"
      />

      {/* Image Slideshow */}
      {selectedProject && (
        <ImageSlideshow
          images={selectedProject.images}
          projectTitle={selectedProject.title}
          isOpen={slideshowOpen}
          initialIndex={selectedImageIndex}
          onClose={handleCloseSlideshow}
        />
      )}
    </Box>
  );
};

export default PortfolioPage; 
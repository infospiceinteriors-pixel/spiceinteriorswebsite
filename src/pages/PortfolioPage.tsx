import { 
  Box, 
  Typography, 
  Card, 
  CardContent,
} from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import TestimonialsSection from '../components/TestimonialsSection';
import SectionLabel from '../components/SectionLabel';
import { portfolioTestimonials } from '../utils/testimonials';
import { getPortfolioProjectSlug, portfolioProjects, PortfolioFilterGroup } from '../utils/portfolioProjects';
import { trackPortfolioClick } from '../utils/analytics';
import { lovableSpacing as sp, lovableTokens as t, lovableTypography as type, maxContent } from '../theme/lovableTokens';


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

const FILTER_LABELS: Record<string, string> = {
  commercial: 'Commercial',
  residential: 'Residential',
  public: 'Public',
};

const PortfolioPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const filterParam = searchParams.get('filter') as PortfolioFilterGroup | null;

  const visibleProjects = filterParam
    ? portfolioProjects.filter((p) => p.filterGroup === filterParam)
    : portfolioProjects;

  const openProject = (project: (typeof portfolioProjects)[number]) => {
    const slug = getPortfolioProjectSlug(project);
    trackPortfolioClick({ slug, title: project.title });
    navigate(`/portfolio/${slug}`);
  };

  return (
    <Box>
      {/* Projects Section */}
      <Box sx={{ py: sp.sectionPy, bgcolor: t.background }}>
        <Box sx={{ ...maxContent, px: sp.pagePx }}>
          {filterParam && (
            <SectionLabel sx={{ mb: 3 }}>
              {FILTER_LABELS[filterParam]} Projects
            </SectionLabel>
          )}

          <Box sx={{ position: 'relative', mb: 4 }}>
            <ProjectGrid>
              {visibleProjects.map((project) => (
                <ProjectCard key={project.id}>
                  <ProjectImageGrid>
                    <VerticalImageWrapper>
                      <ProjectImage
                        src={project.images[0]}
                        alt={project.title}
                        onClick={() => openProject(project)}
                      />
                    </VerticalImageWrapper>
                    <SquareImageWrapper>
                      <ProjectImage
                        src={project.images[1]}
                        alt={project.title}
                        onClick={() => openProject(project)}
                      />
                    </SquareImageWrapper>
                    <SquareImageWrapper>
                      <ProjectImage
                        src={project.images[2]}
                        alt={project.title}
                        onClick={() => openProject(project)}
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
                    <Typography sx={{ ...type.caption, color: t.accent, letterSpacing: '0.12em' }}>
                      {project.category}
                    </Typography>
                    <Typography
                      sx={{
                        ...type.h3,
                        fontSize: { xs: '1.125rem', md: '1.25rem' },
                        textAlign: 'left',
                        width: '100%',
                        lineHeight: 1.2,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        display: 'block',
                        mt: 0.5,
                        mb: 1,
                        cursor: 'pointer',
                        color: t.foreground,
                      }}
                      onClick={() => openProject(project)}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      sx={{
                        ...type.body,
                        fontSize: '1rem',
                        color: t.mutedForeground,
                        lineHeight: 1.5,
                        textAlign: 'left',
                        width: '100%',
                      }}
                    >
                      {project.description}
                    </Typography>
                  </CardContent>
                </ProjectCard>
              ))}
            </ProjectGrid>
          </Box>
        </Box>
      </Box>

      {/* Testimonials Section */}
      <TestimonialsSection 
        title="Client Feedback"
        description="Feedback from collaborators and clients across design and delivery projects."
        testimonials={portfolioTestimonials}
        backgroundColor="card"
        showContactCta
        ctaTrackingSection="portfolio_testimonials"
      />
    </Box>
  );
};

export default PortfolioPage; 
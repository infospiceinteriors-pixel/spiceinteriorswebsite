import { Box, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ImageSlideshow from '../components/ImageSlideshow';
import SectionLabel from '../components/SectionLabel';
import { getPortfolioProjectBySlug } from '../utils/portfolioProjects';
import { trackNavigation } from '../utils/analytics';
import {
  lovableSpacing as sp,
  lovableTokens as t,
  lovableTypography as type,
  maxContent,
} from '../theme/lovableTokens';

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [slideshowOpen, setSlideshowOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const project = slug ? getPortfolioProjectBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [slug]);

  if (!project) {
    return (
      <Box sx={{ py: sp.sectionPy, bgcolor: t.background }}>
        <Box sx={{ ...maxContent, px: sp.pagePx }}>
          <Typography sx={{ ...type.h2, mb: 2, color: t.foreground }}>Project not found</Typography>
          <Button
            variant="outlined"
            onClick={() => {
              trackNavigation({
                label: 'Back to Projects',
                destination: '/portfolio',
                location: 'header',
              });
              navigate('/portfolio');
            }}
          >
            Back to Projects
          </Button>
        </Box>
      </Box>
    );
  }

  const handleImageClick = (imageIndex: number) => {
    setSelectedImageIndex(imageIndex);
    setSlideshowOpen(true);
  };

  const handleCloseSlideshow = () => {
    setSlideshowOpen(false);
  };

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: t.background }}>
      <Box sx={{ ...maxContent, px: sp.pagePx }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'minmax(280px, 360px) minmax(0, 1fr)' },
            gap: { xs: 4, md: 6 },
            alignItems: 'start',
          }}
        >
          <Box sx={{ position: { md: 'sticky' }, top: { md: 96 } }}>
            <SectionLabel sx={{ mb: 1 }}>{project.category}</SectionLabel>
            <Typography component="h1" sx={{ ...type.h2, mb: 2.5, color: t.foreground }}>
              {project.title}
            </Typography>
            <Typography sx={{ ...type.body, color: t.mutedForeground, mb: 3 }}>
              {project.description}
            </Typography>

            <Box sx={{ display: 'grid', gap: 2.5, mb: 4 }}>
              <Box>
                <Typography sx={{ ...type.label, fontSize: '0.7rem', color: t.mutedForeground, mb: 0.5 }}>
                  Location
                </Typography>
                <Typography sx={{ ...type.body, fontSize: '1rem', color: t.foreground }}>
                  {project.location}
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ ...type.label, fontSize: '0.7rem', color: t.mutedForeground, mb: 0.5 }}>
                  Project Type
                </Typography>
                <Typography sx={{ ...type.body, fontSize: '1rem', color: t.foreground }}>
                  {project.category}
                </Typography>
              </Box>
              {project.scope && project.scope.length > 0 && (
                <Box>
                  <Typography sx={{ ...type.label, fontSize: '0.7rem', color: t.mutedForeground, mb: 0.5 }}>
                    Scope
                  </Typography>
                  <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                    {project.scope.map((scopeItem) => (
                      <Box key={scopeItem} component="li" sx={{ mb: 0.75 }}>
                        <Typography sx={{ ...type.body, fontSize: '1rem', color: t.foreground }}>
                          {scopeItem}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              )}
            </Box>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
              gap: 2,
            }}
          >
            {project.images.map((image, index) => (
              <Box
                key={image}
                onClick={() => handleImageClick(index)}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  bgcolor: t.card,
                  cursor: 'pointer',
                  aspectRatio: index === 0 ? '16 / 10' : '4 / 5',
                  gridColumn: index === 0 ? { sm: '1 / -1' } : 'auto',
                }}
              >
                <Box
                  component="img"
                  src={image}
                  alt={`${project.title} view ${index + 1}`}
                  sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <ImageSlideshow
        images={project.images}
        projectTitle={project.title}
        isOpen={slideshowOpen}
        initialIndex={selectedImageIndex}
        onClose={handleCloseSlideshow}
      />
    </Box>
  );
};

export default ProjectDetailPage;

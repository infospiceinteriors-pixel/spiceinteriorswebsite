import { Box, Button, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { homeRoi } from '../../utils/homePageContent';
import { analyticsButtons, trackCtaClick } from '../../utils/analytics';
import {
  lovableSpacing as sp,
  lovableTokens as t,
  lovableTypography as type,
  maxContent,
} from '../../theme/lovableTokens';

const HomeRoiSection = () => (
  <Box component="section" sx={{ bgcolor: t.background, py: sp.sectionPy }}>
    <Box
      sx={{
        ...maxContent,
        px: sp.pagePx,
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', lg: '1.1fr 0.9fr' },
        gap: { xs: 4, lg: 8 },
        alignItems: 'center',
      }}
    >
      <Box>
        <Typography component="h2" sx={{ ...type.h2, color: t.foreground, mb: 3 }}>
          {homeRoi.title}
        </Typography>
        {homeRoi.paragraphs.map((paragraph) => (
          <Typography key={paragraph.slice(0, 24)} sx={{ ...type.body, color: t.mutedForeground, mb: 2 }}>
            {paragraph}
          </Typography>
        ))}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: { xs: 3, md: 4 } }}>
          <Button
            component={RouterLink}
            to={analyticsButtons.introSession.destination}
            variant="contained"
            onClick={() =>
              trackCtaClick({
                buttonId: analyticsButtons.introSession.id,
                name: analyticsButtons.introSession.name,
                section: 'home_about',
                destinationUrl: analyticsButtons.introSession.destination,
              })
            }
            sx={{ ...type.button, borderRadius: t.radius, bgcolor: t.primary, color: t.primaryForeground, px: 4, py: 2, '&:hover': { bgcolor: t.accent, color: t.accentForeground } }}
          >
            Introductory session
          </Button>
          <Button
            component={RouterLink}
            to={analyticsButtons.projects.destination}
            variant="outlined"
            onClick={() =>
              trackCtaClick({
                buttonId: analyticsButtons.projects.id,
                name: analyticsButtons.projects.name,
                section: 'home_about',
                destinationUrl: analyticsButtons.projects.destination,
              })
            }
            sx={{
              ...type.button,
              borderRadius: t.radius,
              borderColor: t.foreground,
              color: t.foreground,
              px: 4,
              py: 2,
              '&:hover': { borderColor: t.accent, color: t.accent, bgcolor: 'rgba(175, 99, 64, 0.06)' },
            }}
          >
            Projects
          </Button>
        </Box>
      </Box>
      <Box
        component="img"
        src={homeRoi.image}
        alt={homeRoi.imageAlt}
        loading="lazy"
        sx={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover', display: 'block' }}
      />
    </Box>
  </Box>
);

export default HomeRoiSection;

import { Box, Button, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SectionLabel from '../SectionLabel';
import { homeHero } from '../../utils/homePageContent';
import { analyticsButtons, trackCtaClick } from '../../utils/analytics';
import {
  lovableSpacing as sp,
  lovableTokens as t,
  lovableTypography as type,
  maxContent,
} from '../../theme/lovableTokens';

const HomeHeroSection = () => (
  <Box
    component="section"
    sx={{
      position: 'relative',
      overflow: 'hidden',
      minHeight: { xs: '85vh', md: '80vh' },
    }}
  >
    <Box
      component="img"
      src={homeHero.image}
      alt={homeHero.imageAlt}
      loading="eager"
      sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
    />
    <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(33, 25, 18, 0.28)' }} />
    <Box sx={{ position: 'absolute', inset: 0, background: t.heroGradient }} />
    <Box
      sx={{
        ...maxContent,
        position: 'relative',
        zIndex: 1,
        minHeight: { xs: '85vh', md: '80vh' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        px: sp.pagePx,
        pt: { xs: 12, md: 0 },
        pb: { xs: 5, md: 12 },
      }}
    >
      <Box sx={{ maxWidth: 720 }}>
        <SectionLabel tone="onDark" sx={{ mb: { xs: 2, md: 3 } }}>
          {homeHero.eyebrow}
        </SectionLabel>
        <Typography component="h1" sx={{ ...type.h1, color: t.onDark, maxWidth: 640 }}>
          {homeHero.headline}{' '}
          <Box component="span" sx={{ fontStyle: 'italic' }}>
            {homeHero.headlineAccent}
          </Box>
        </Typography>
        <Typography
          sx={{
            mt: { xs: 3, md: 4 },
            ...type.body,
            fontSize: { xs: '1rem', md: '1.125rem' },
            color: t.onDarkSoft,
            maxWidth: 560,
          }}
        >
          {homeHero.description}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'stretch', sm: 'center' },
            gap: { xs: 2, sm: 3 },
            mt: { xs: 3, md: 4 },
          }}
        >
          <Button
            component={RouterLink}
            to={analyticsButtons.introSession.destination}
            variant="contained"
            onClick={() =>
              trackCtaClick({
                buttonId: analyticsButtons.introSession.id,
                name: analyticsButtons.introSession.name,
                section: 'home_hero',
                destinationUrl: analyticsButtons.introSession.destination,
              })
            }
            sx={{
              ...type.button,
              bgcolor: t.background,
              color: t.foreground,
              px: 3,
              py: 1.5,
              '&:hover': { bgcolor: t.accent, color: t.accentForeground },
            }}
          >
            Introduction session
          </Button>
          <Button
            component={RouterLink}
            to={analyticsButtons.projects.destination}
            variant="outlined"
            onClick={() =>
              trackCtaClick({
                buttonId: analyticsButtons.projects.id,
                name: analyticsButtons.projects.name,
                section: 'home_hero',
                destinationUrl: analyticsButtons.projects.destination,
              })
            }
            sx={{
              ...type.button,
              borderColor: t.onDark,
              color: t.onDark,
              px: 3,
              py: 1.5,
              '&:hover': { borderColor: t.accent, color: t.accentForeground, bgcolor: 'transparent' },
            }}
          >
            Projects
          </Button>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 2, sm: 4 }, mt: 5 }}>
          {homeHero.stats.map((stat) => (
            <Typography key={stat} sx={{ ...type.caption, color: t.onDarkMuted, letterSpacing: '0.12em' }}>
              {stat}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  </Box>
);

export default HomeHeroSection;

import { Box, Typography } from '@mui/material';
import BookSessionCtaButton from '../BookSessionCtaButton';
import SectionLabel from '../SectionLabel';
import { homeHero } from '../../utils/homePageContent';
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
      bgcolor: t.background,
      pt: { xs: 10, md: 12 },
      pb: { xs: 8, md: 10 },
    }}
  >
    <Box sx={{ ...maxContent, px: sp.pagePx }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: 'repeat(12, 1fr)' },
          gap: { xs: 6, lg: 8 },
          alignItems: 'center',
        }}
      >
        <Box sx={{ gridColumn: { lg: 'span 6' } }}>
          <SectionLabel sx={{ mb: 3 }}>{homeHero.eyebrow}</SectionLabel>

          <Typography
            component="h1"
            sx={{
              ...type.h1,
              color: t.foreground,
              mb: 3,
              maxWidth: 640,
            }}
          >
            {homeHero.headline}{' '}
            <Box
              component="span"
              sx={{
                ...type.serif,
                fontStyle: 'italic',
                color: t.accent,
              }}
            >
              {homeHero.headlineAccent}
            </Box>
          </Typography>

          <Typography
            sx={{
              ...type.body,
              color: t.mutedForeground,
              maxWidth: 520,
              mb: 4,
            }}
          >
            {homeHero.description}
          </Typography>

          <BookSessionCtaButton trackingSection="home_hero" />

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: { xs: 2, sm: 4 },
              mt: 5,
            }}
          >
            {homeHero.stats.map((stat) => (
              <Typography
                key={stat}
                sx={{
                  ...type.caption,
                  color: t.mutedForeground,
                  letterSpacing: '0.12em',
                }}
              >
                {stat}
              </Typography>
            ))}
          </Box>
        </Box>

        <Box sx={{ gridColumn: { lg: 'span 6' } }}>
          <Box
            sx={{
              overflow: 'hidden',
              borderRadius: '2rem',
              boxShadow: '0 8px 32px rgba(33, 25, 18, 0.08)',
            }}
          >
            <Box
              component="img"
              src={homeHero.image}
              alt={homeHero.imageAlt}
              loading="eager"
              sx={{
                width: '100%',
                height: { xs: 280, sm: 360, md: 420, lg: 480 },
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default HomeHeroSection;

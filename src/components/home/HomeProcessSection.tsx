import { Box, Button, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SectionLabel from '../SectionLabel';
import { homeProcess } from '../../utils/homePageContent';
import { analyticsButtons, trackCtaClick } from '../../utils/analytics';
import {
  lovableSpacing as sp,
  lovableTokens as t,
  lovableTypography as type,
  maxContent,
} from '../../theme/lovableTokens';

const HomeProcessSection = () => (
  <Box
    component="section"
    sx={{
      bgcolor: t.secondary,
      pt: 0,
      pb: sp.sectionPy,
    }}
  >
    <Box sx={{ ...maxContent, px: sp.pagePx }}>
      <Box sx={{ maxWidth: 560, mb: { xs: 6, md: 8 } }}>
        <SectionLabel>{homeProcess.label}</SectionLabel>
        <Typography component="h2" sx={{ ...type.h2, color: t.foreground, mb: 2 }}>
          {homeProcess.title}
        </Typography>
        <Typography sx={{ ...type.body, color: t.mutedForeground }}>
          {homeProcess.intro}
        </Typography>
      </Box>

      <Box
        component="ol"
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
          gap: 2,
          listStyle: 'none',
          m: 0,
          p: 0,
        }}
      >
        {homeProcess.steps.map((step) => (
          <Box
            component="li"
            key={step.number}
            sx={{
              bgcolor: t.card,
              border: `1px solid ${t.border}`,
              borderRadius: '22px',
              p: { xs: 3, md: 3.5 },
            }}
          >
            <Typography
              sx={{
                display: 'block',
                mb: 2,
                color: t.accent,
                ...type.number,
                fontSize: '1.25rem',
              }}
            >
              {step.number}
            </Typography>
            <Typography
              component="h3"
              sx={{
                fontFamily: t.fontSans,
                fontWeight: 400,
                fontSize: '1.0625rem',
                color: t.foreground,
                mb: 1.5,
              }}
            >
              {step.title}
            </Typography>
            <Typography
              sx={{
                ...type.body,
                fontSize: '0.9375rem',
                color: t.mutedForeground,
                lineHeight: 1.6,
              }}
            >
              {step.description}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: { xs: 6, md: 8 } }}>
        <Button
          component={RouterLink}
          to={analyticsButtons.introSession.destination}
          variant="contained"
          onClick={() =>
            trackCtaClick({
              buttonId: analyticsButtons.introSession.id,
              name: analyticsButtons.introSession.name,
              section: 'home_process',
              destinationUrl: analyticsButtons.introSession.destination,
            })
          }
          sx={{ ...type.button, borderRadius: t.radius, bgcolor: t.primary, color: t.primaryForeground, px: 4, py: 2, '&:hover': { bgcolor: t.accent } }}
        >
          Introduction session
        </Button>
        <Button
          component={RouterLink}
          to={analyticsButtons.contact.destination}
          variant="outlined"
          onClick={() =>
            trackCtaClick({
              buttonId: analyticsButtons.contact.id,
              name: analyticsButtons.contact.name,
              section: 'home_process',
              destinationUrl: analyticsButtons.contact.destination,
            })
          }
          sx={{
            ...type.button,
            borderRadius: t.radius,
            borderColor: t.foreground,
            color: t.foreground,
            px: 4,
            py: 2,
            '&:hover': { borderColor: t.accent, color: t.accent, bgcolor: 'transparent' },
          }}
        >
          Get in Touch
        </Button>
      </Box>
    </Box>
  </Box>
);

export default HomeProcessSection;

import { Box, Button, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SectionLabel from '../SectionLabel';
import { homeServices } from '../../utils/homePageContent';
import { analyticsButtons, trackCtaClick } from '../../utils/analytics';
import {
  lovableSpacing as sp,
  lovableTokens as t,
  lovableTypography as type,
  maxContent,
} from '../../theme/lovableTokens';

const serviceCardRadius = '22px';

const HomeServicesSection = () => (
  <Box
    component="section"
    sx={{
      bgcolor: t.secondary,
      py: sp.sectionPy,
    }}
  >
    <Box sx={{ ...maxContent, px: sp.pagePx }}>
      <Box sx={{ maxWidth: 560, mb: { xs: 6, md: 8 } }}>
        <SectionLabel>{homeServices.label}</SectionLabel>
        <Typography component="h2" sx={{ ...type.h2, color: t.foreground, mb: 2 }}>
          {homeServices.title}
        </Typography>
        <Typography sx={{ ...type.body, color: t.mutedForeground }}>
          {homeServices.intro}
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
          gap: 2,
        }}
      >
        {homeServices.items.map((service) => {
          const Icon = service.icon;
          return (
            <Box
              key={service.title}
              sx={{
                bgcolor: t.card,
                border: `1px solid ${t.border}`,
                borderRadius: serviceCardRadius,
                p: { xs: 3, md: 3.5 },
              }}
            >
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  bgcolor: t.muted,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2.5,
                  color: t.foreground,
                }}
              >
                <Icon size={20} strokeWidth={1.5} />
              </Box>
              <Typography
                component="h3"
                sx={{
                  fontFamily: t.fontSans,
                  fontWeight: 400,
                  fontSize: '1.0625rem',
                  color: t.foreground,
                  mb: 1,
                }}
              >
                {service.title}
              </Typography>
              <Typography
                sx={{
                  ...type.body,
                  fontSize: '0.9375rem',
                  color: t.mutedForeground,
                  lineHeight: 1.6,
                }}
              >
                {service.description}
              </Typography>
            </Box>
          );
        })}
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
              section: 'home_services',
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
              section: 'home_services',
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

export default HomeServicesSection;

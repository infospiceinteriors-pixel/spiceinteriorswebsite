import { Box, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { trackNavigation } from '../utils/analytics';
import { INTRO_SESSION_WHATSAPP_NUMBER } from '../utils/introSessionContent';
import {
  lovableSpacing as sp,
  lovableTokens as t,
  lovableTypography as type,
  maxContent,
} from '../theme/lovableTokens';

const CONTACT_EMAIL = 'info@spice-interiors.com';
const CONTACT_PHONE_DISPLAY = '+31 6 83142404';
const CONTACT_PHONE_HREF = `+${INTRO_SESSION_WHATSAPP_NUMBER}`;

const contactLinkSx = {
  ...type.body,
  fontSize: '0.9375rem',
  color: t.foreground,
  textDecoration: 'none',
  transition: 'color 0.2s',
  '&:hover': { color: t.accent },
};

const SiteFooter = () => (
  <Box
    component="footer"
    sx={{
      borderTop: `1px solid ${t.border}`,
      bgcolor: t.background,
    }}
  >
    <Box
      sx={{
        ...maxContent,
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { xs: 'flex-start', sm: 'center' },
        justifyContent: 'space-between',
        gap: 2,
        px: sp.pagePx,
        py: 4,
      }}
    >
      <Link
        component={RouterLink}
        to="/"
        underline="none"
        onClick={() => trackNavigation({ label: 'Home', destination: '/', location: 'footer' })}
        sx={{
          fontFamily: t.fontBrand,
          fontSize: '1.125rem',
          fontWeight: 400,
          color: t.foreground,
        }}
      >
        Spice Interiors
      </Link>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 0.5,
          alignItems: { xs: 'flex-start', sm: 'center' },
        }}
      >
        <Link href={`mailto:${CONTACT_EMAIL}`} underline="none" sx={contactLinkSx}>
          {CONTACT_EMAIL}
        </Link>
        <Link href={`tel:${CONTACT_PHONE_HREF}`} underline="none" sx={contactLinkSx}>
          {CONTACT_PHONE_DISPLAY}
        </Link>
      </Box>

      <Typography sx={{ ...type.caption, letterSpacing: '0.16em', color: t.mutedForeground }}>
        © {new Date().getFullYear()} — Interior consultation, Netherlands
      </Typography>
    </Box>
  </Box>
);

export default SiteFooter;

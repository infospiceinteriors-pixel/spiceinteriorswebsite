import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { defaultGoDestination, goRedirects } from '../utils/linkPageContent';
import { lovableTokens as t } from '../theme/lovableTokens';

const GoRedirectPage = () => {
  const { pathname } = useLocation();
  const destination = goRedirects[pathname] ?? defaultGoDestination;

  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Opening Instagram — Spice Interiors';
    window.location.replace(destination);
    return () => {
      document.title = previousTitle;
    };
  }, [destination]);

  return (
    <Box sx={{ minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center', px: 3 }}>
      <Typography sx={{ fontFamily: t.fontSans, color: t.mutedForeground, fontSize: '0.9375rem' }}>
        Opening Instagram…
      </Typography>
    </Box>
  );
};

export default GoRedirectPage;

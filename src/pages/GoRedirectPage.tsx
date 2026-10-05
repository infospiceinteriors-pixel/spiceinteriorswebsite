import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { defaultGoDestination, goRedirects } from '../utils/linkPageContent';
import { trackNewsletterClick } from '../utils/analytics';
import { lovableTokens as t } from '../theme/lovableTokens';

const GoRedirectPage = () => {
  const { pathname, search } = useLocation();
  const redirect = goRedirects[pathname];
  const destination = redirect?.destinationUrl ?? defaultGoDestination;
  const defaultCampaign = redirect?.defaultCampaign ?? 'newsletter';

  useEffect(() => {
    const params = new URLSearchParams(search);
    trackNewsletterClick({
      campaign: params.get('utm_campaign') || defaultCampaign,
      linkContent: params.get('utm_content') || 'unknown',
      destinationUrl: destination,
    });
    window.location.replace(destination);
  }, [defaultCampaign, destination, search]);

  return (
    <Box sx={{ minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center', px: 3 }}>
      <Typography sx={{ fontFamily: t.fontSans, color: t.mutedForeground, fontSize: '0.9375rem' }}>
        Opening Instagram…
      </Typography>
    </Box>
  );
};

export default GoRedirectPage;

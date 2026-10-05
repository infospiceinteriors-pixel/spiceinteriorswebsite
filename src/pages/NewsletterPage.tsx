import { useEffect } from 'react';
import { Box } from '@mui/material';
import CollectorNewsletter from '../components/CollectorNewsletter';
import { lovableTokens as t } from '../theme/lovableTokens';

const NewsletterPage = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Newsletter — Spice Interiors';
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <Box
      component="section"
      sx={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        bgcolor: t.background,
        py: { xs: 3, md: 12 },
        minHeight: { xs: 'calc(100dvh - 120px)', md: 'calc(100vh - 200px)' },
      }}
    >
      <CollectorNewsletter expandMobile titleComponent="h1" />
    </Box>
  );
};

export default NewsletterPage;

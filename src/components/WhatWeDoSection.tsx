import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { trackCtaClick } from '../utils/analytics';
import {
  lovableSpacing as sp,
  lovableTokens as t,
  lovableTypography as type,
  maxContent,
} from '../theme/lovableTokens';

const WhatWeDoSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: t.card,
        borderTop: `1px solid ${t.border}`,
        borderBottom: `1px solid ${t.border}`,
        textAlign: 'center',
      }}
    >
      <Box sx={{ ...maxContent, px: sp.pagePx }}>
        <Typography
          sx={{
            ...type.body,
            color: t.foreground,
            maxWidth: 640,
            mx: 'auto',
            mb: 3,
            '& strong': { fontWeight: 500 },
          }}
        >
          We design elevated interiors with{' '}
          <strong>bespoke layouts, curated material palettes, and meticulous execution</strong>.
          From concept to styling, every decision is tailored to deliver a refined, high-value result.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            onClick={() => {
              trackCtaClick({ name: 'View Projects', section: 'what_we_do' });
              navigate('/portfolio');
            }}
            sx={{ px: 3 }}
          >
            View Projects
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              trackCtaClick({ name: 'Book Consultation', section: 'what_we_do' });
              navigate('/#book');
            }}
            sx={{ px: 3 }}
          >
            Book Consultation
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default WhatWeDoSection;

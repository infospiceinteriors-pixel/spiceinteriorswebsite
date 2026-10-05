import { Box, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { linkProfile, linkTopics, type LinkTopic } from '../utils/linkPageContent';
import { lovableTokens as t, lovableTypography as type } from '../theme/lovableTokens';
import { useEffect } from 'react';

const destinationFor = (topic: LinkTopic) => topic.path ?? `/coming-soon/${topic.id}`;

const LinkPage = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Spice Interiors — Links';
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: t.background,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: 2.5,
        py: { xs: 5, sm: 8 },
      }}
    >
      <Link component={RouterLink} to="/" underline="none" sx={{ mb: 2 }}>
        <Box
          component="img"
          src={linkProfile.image}
          alt={linkProfile.imageAlt}
          sx={{ width: 88, height: 88, borderRadius: '50%', objectFit: 'cover', border: `1px solid ${t.border}` }}
        />
      </Link>
      <Typography sx={{ fontFamily: t.fontSerif, fontSize: '1.5rem', color: t.foreground, mb: 0.5 }}>
        {linkProfile.name}
      </Typography>
      <Typography sx={{ ...type.sans, fontSize: '0.875rem', color: t.mutedForeground, textAlign: 'center', mb: 4, maxWidth: 320 }}>
        {linkProfile.tagline}
      </Typography>
      <Box sx={{ width: '100%', maxWidth: 420, display: 'flex', flexDirection: 'column', gap: 1.25 }}>
        {linkTopics.map((topic) => {
          const destination = destinationFor(topic);
          const external = Boolean(topic.external || destination.startsWith('http'));
          return (
            <Box
              key={topic.id}
              component={external ? 'a' : RouterLink}
              href={external ? destination : undefined}
              to={external ? undefined : destination}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                p: 1.25,
                textDecoration: 'none',
                color: 'inherit',
                bgcolor: t.card,
                border: `1px solid ${t.border}`,
                borderRadius: t.radius,
                '&:hover': { borderColor: t.accent },
              }}
            >
              <Box
                component="img"
                src={topic.imageSrc}
                alt=""
                sx={{ width: 56, height: 56, objectFit: 'cover', borderRadius: t.radius, flexShrink: 0 }}
              />
              <Box sx={{ minWidth: 0, flex: 1 }}>
                <Typography sx={{ ...type.button, fontSize: '0.75rem', lineHeight: 1.25, color: t.foreground }}>
                  {topic.label}
                </Typography>
                <Typography sx={{ ...type.sans, fontSize: '0.75rem', color: t.mutedForeground, mt: 0.25 }}>
                  {topic.subtitle}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default LinkPage;

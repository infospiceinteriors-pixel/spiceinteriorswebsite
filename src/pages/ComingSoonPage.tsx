import { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link as RouterLink, Navigate, useParams } from 'react-router-dom';
import { findLinkTopic } from '../utils/linkPageContent';
import { sendSiteEmail } from '../utils/sendSiteEmail';
import { trackComingSoonView, trackFormSubmit, trackLinkEmailSignup } from '../utils/analytics';
import { lovableTokens as t, lovableTypography as type } from '../theme/lovableTokens';

const ComingSoonPage = () => {
  const { topicId } = useParams();
  const topic = findLinkTopic(topicId);
  const comingSoon = topic?.comingSoon;
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!topic) return;
    trackComingSoonView({ topicId: topic.id, topicLabel: topic.label });
  }, [topic]);

  if (!topic || !comingSoon) {
    return <Navigate to="/link" replace />;
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    try {
      await sendSiteEmail({
        to_email: 'info@spice-interiors.com',
        from_name: 'Link page visitor',
        from_email: email,
        topic_id: topic.id,
        topic_label: topic.label,
        service: topic.label,
        source: 'link_page',
        page_url: window.location.href,
        submitted_at: new Date().toISOString(),
        message: `New link page signup for ${topic.label}`,
      });
      const destination = `/coming-soon/${topic.id}`;
      trackFormSubmit({
        formName: `link_${topic.id}_signup`,
        success: true,
        buttonId: topic.id,
        buttonName: topic.label,
        destinationUrl: destination,
      });
      trackLinkEmailSignup({
        topicId: topic.id,
        topicLabel: topic.label,
        source: 'coming_soon_page',
        destination,
      });
      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Coming soon signup failed', error);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: t.background, px: 2.5, py: { xs: 4, sm: 8 } }}>
      <Box sx={{ maxWidth: 480, mx: 'auto' }}>
        <Button
          component={RouterLink}
          to="/link"
          sx={{ ...type.button, fontSize: '0.7rem', color: t.mutedForeground, mb: 3, px: 1.5 }}
        >
          Back
        </Button>
        <Box sx={{ textAlign: 'center' }}>
          <Box
            component="img"
            src={topic.imageSrc}
            alt=""
            sx={{ width: 72, height: 72, objectFit: 'cover', borderRadius: t.radius, border: `1px solid ${t.border}`, mb: 3 }}
          />
          <Typography sx={{ ...type.caption, color: t.accent, mb: 2.5 }}>
            {comingSoon.eyebrow} · Coming soon
          </Typography>
          <Typography component="h1" sx={{ ...type.serif, fontSize: { xs: '1.75rem', md: '2.25rem' }, lineHeight: 1.1, color: t.foreground, mb: 2 }}>
            {comingSoon.title}
          </Typography>
          <Typography sx={{ ...type.body, color: t.mutedForeground, mb: 1.5 }}>{comingSoon.description}</Typography>
          <Typography sx={{ ...type.sans, fontSize: '0.875rem', color: t.mutedForeground, mb: 3 }}>{comingSoon.detail}</Typography>
          <Box
            component="form"
            onSubmit={status === 'success' ? undefined : handleSubmit}
            sx={{ p: 2.5, bgcolor: t.card, border: `1px solid ${t.border}`, borderRadius: t.radius, textAlign: 'left' }}
          >
            {status === 'success' ? (
              <>
                <Typography sx={{ ...type.serif, fontSize: '1.25rem', color: t.foreground, mb: 1 }}>You're on the list</Typography>
                <Typography sx={{ ...type.sans, color: t.mutedForeground }}>Thank you. I'll keep you posted when this is ready.</Typography>
              </>
            ) : (
              <>
                <Typography sx={{ ...type.serif, fontSize: '1.25rem', color: t.foreground, mb: 1 }}>Get notified first</Typography>
                <Typography sx={{ ...type.sans, color: t.mutedForeground, mb: 2 }}>
                  Leave your email and I'll send updates when this is ready.
                </Typography>
                <TextField
                  fullWidth
                  required
                  type="email"
                  placeholder="Email"
                  value={email}
                  disabled={status === 'submitting'}
                  onChange={(event) => setEmail(event.target.value)}
                />
                {status === 'error' && (
                  <Typography sx={{ ...type.sans, fontSize: '0.875rem', color: t.accent, mt: 1 }}>{errorMessage}</Typography>
                )}
                <Button
                  type="submit"
                  fullWidth
                  disabled={status === 'submitting'}
                  sx={{ mt: 2, borderRadius: t.radius, bgcolor: t.primary, color: t.primaryForeground, ...type.button, '&:hover': { bgcolor: t.accent } }}
                >
                  {status === 'submitting' ? 'Sending…' : 'Notify me'}
                </Button>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ComingSoonPage;

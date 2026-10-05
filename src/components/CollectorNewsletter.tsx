import { useRef, useState } from 'react';
import { Box, Button, Input, Typography } from '@mui/material';
import { homeNewsletter } from '../utils/collectedHomeContent';
import { sendSiteEmail } from '../utils/sendSiteEmail';
import {
  lovableSpacing as sp,
  lovableTokens as t,
  lovableTypography as type,
  maxContent,
} from '../theme/lovableTokens';

interface CollectorNewsletterProps {
  expandMobile?: boolean;
  titleComponent?: 'h1' | 'h2';
  emailInputId?: string;
  source?: string;
  embedded?: boolean;
}

const CollectorNewsletter = ({
  expandMobile = false,
  titleComponent = 'h2',
  emailInputId = 'home-newsletter-email',
  source = 'home_page',
  embedded = false,
}: CollectorNewsletterProps) => {
  const startedRef = useRef(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');
    try {
      await sendSiteEmail({
        to_email: 'info@spice-interiors.com',
        from_name: 'Newsletter subscriber',
        from_email: email,
        topic_id: 'newsletter-signup',
        topic_label: 'Newsletter signup',
        service: 'Spice Interiors newsletter',
        source,
        page_url: window.location.href,
        submitted_at: new Date().toISOString(),
        message: 'New newsletter signup',
      });
      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Newsletter signup failed', error);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  const card = (
    <Box
      sx={{
        bgcolor: '#a34d38',
        border: '2px solid #fff',
        outline: '1px solid #a34d38',
        outlineOffset: { xs: expandMobile ? '4px' : '6px', md: '6px' },
        p: { xs: expandMobile ? 5 : 3, md: 4 },
        ...(expandMobile
          ? { display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: { xs: 'min(72vh, 560px)', md: 0 } }
          : null),
      }}
    >
      <Box sx={{ maxWidth: 560, mx: 'auto', textAlign: 'center', color: '#fff', width: '100%' }}>
        <Typography sx={{ ...type.label, color: 'rgba(255,255,255,0.85)', mb: 1.5 }}>
          {homeNewsletter.eyebrow}
        </Typography>
        {status === 'success' ? (
          <>
            <Typography component={titleComponent} sx={{ ...type.h2, fontSize: { xs: '1.75rem', md: '3rem' }, color: '#fff', mb: 1.5, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              {homeNewsletter.successTitle}
            </Typography>
            <Typography sx={{ ...type.sans, fontSize: { xs: '0.9375rem', md: '1.0625rem' }, color: 'rgba(255,255,255,0.9)' }}>
              {homeNewsletter.successMessage}
            </Typography>
          </>
        ) : (
          <>
            <Typography component={titleComponent} sx={{ ...type.h2, fontSize: { xs: '1.75rem', md: '3rem' }, color: '#fff', mb: 2, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              {homeNewsletter.title}
            </Typography>
            <Typography sx={{ ...type.sans, fontSize: { xs: '0.9375rem', md: '1.0625rem' }, color: 'rgba(255,255,255,0.9)', mb: 3 }}>
              {homeNewsletter.description}
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'stretch', sm: 'flex-end' }, gap: { xs: 2, sm: 3 } }}>
              <Box sx={{ flex: 1, textAlign: 'left' }}>
                <Typography component="label" htmlFor={emailInputId} sx={{ ...type.sans, display: 'block', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.9)', mb: 0.75 }}>
                  {homeNewsletter.emailLabel}
                </Typography>
                <Input
                  id={emailInputId}
                  type="email"
                  required
                  value={email}
                  disabled={status === 'submitting'}
                  onChange={(event) => {
                    if (!startedRef.current) startedRef.current = true;
                    setEmail(event.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  sx={{
                    width: '100%',
                    color: '#fff',
                    fontFamily: t.fontSans,
                    fontSize: '1rem',
                    '&::before': { borderBottomColor: 'rgba(255,255,255,0.45)' },
                    '&:hover:not(.Mui-disabled)::before': { borderBottomColor: '#fff' },
                    '&::after': { borderBottomColor: '#fff' },
                  }}
                />
              </Box>
              <Button type="submit" disabled={status === 'submitting'} sx={{ flexShrink: 0, bgcolor: '#fff', color: t.foreground, borderRadius: 0, px: 3, py: 1.25, minWidth: 140, ...type.button, fontWeight: 700, '&:hover': { bgcolor: 'rgba(255,255,255,0.92)' } }}>
                {status === 'submitting' ? 'Sending…' : homeNewsletter.submitLabel}
              </Button>
            </Box>
            {status === 'error' && (
              <Typography sx={{ ...type.sans, fontSize: '0.875rem', color: '#f5d0c5', mt: 2 }}>{errorMessage}</Typography>
            )}
          </>
        )}
      </Box>
    </Box>
  );

  if (embedded) {
    return <Box sx={{ ...maxContent, px: sp.pagePx, width: '100%' }}>{card}</Box>;
  }

  return (
    <Box component="section" sx={{ bgcolor: t.background, py: { xs: 6, md: 8 } }}>
      <Box sx={{ ...maxContent, px: sp.pagePx }}>{card}</Box>
    </Box>
  );
};

export default CollectorNewsletter;

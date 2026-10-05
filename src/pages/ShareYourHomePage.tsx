import { useRef, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { sendSiteEmail } from '../utils/sendSiteEmail';
import { analyticsButtons, trackFormStart, trackFormSubmit } from '../utils/analytics';
import { lovableTokens as t, lovableTypography as type } from '../theme/lovableTokens';

const emptyForm = { name: '', email: '', whatsapp: '', country: '' };
const FORM_NAME = 'share_your_home';

const ShareYourHomePage = () => {
  const startedRef = useRef(false);
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const updateField = (field: keyof typeof emptyForm, value: string) => {
    if (!startedRef.current) {
      startedRef.current = true;
      trackFormStart({
        formName: FORM_NAME,
        buttonId: analyticsButtons.shareYourHomeForm.id,
        buttonName: analyticsButtons.shareYourHomeForm.name,
      });
    }
    setForm((prev) => ({ ...prev, [field]: value }));
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    try {
      await sendSiteEmail({
        to_email: 'info@spice-interiors.com',
        from_name: form.name,
        from_email: form.email,
        phone: form.whatsapp,
        whatsapp: form.whatsapp,
        country: form.country,
        source: 'share_your_home_page',
        service: 'Share your home with Spice Interiors',
        page_url: window.location.href,
        submitted_at: new Date().toISOString(),
        message: `Home submission from ${form.name} (${form.country}). WhatsApp: ${form.whatsapp}`,
      });
      trackFormSubmit({
        formName: FORM_NAME,
        success: true,
        buttonId: analyticsButtons.shareYourHomeForm.id,
        buttonName: analyticsButtons.shareYourHomeForm.name,
        destinationUrl: analyticsButtons.shareYourHomeForm.destination,
      });
      setStatus('success');
      setForm(emptyForm);
    } catch (error) {
      console.error('Share your home failed', error);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: t.background, px: 2.5, py: { xs: 4, sm: 8 } }}>
      <Box sx={{ maxWidth: 480, mx: 'auto', textAlign: 'center' }}>
        <Button component={RouterLink} to="/link" sx={{ ...type.button, fontSize: '0.7rem', color: t.mutedForeground, mb: 3 }}>
          Back
        </Button>
        <Box
          component="img"
          src="/hero-image-3.jpg"
          alt=""
          sx={{ width: 72, height: 72, objectFit: 'cover', borderRadius: t.radius, border: `1px solid ${t.border}`, mb: 3 }}
        />
        <Typography component="h1" sx={{ ...type.serif, fontSize: { xs: '1.75rem', md: '2.25rem' }, lineHeight: 1.15, color: t.foreground, mb: 1.5 }}>
          Share your home with Spice Interiors
        </Typography>
        <Typography sx={{ ...type.sans, color: t.mutedForeground, mb: 3, maxWidth: 360, mx: 'auto' }}>
          Tell us a little about yourself and we will get back to you within one business day.
        </Typography>
        <Box
          component="form"
          onSubmit={status === 'success' ? undefined : handleSubmit}
          sx={{ p: 2.5, bgcolor: t.card, border: `1px solid ${t.border}`, borderRadius: t.radius, textAlign: 'left' }}
        >
          {status === 'success' ? (
            <Typography sx={{ ...type.sans, color: t.foreground }}>
              We have received your details and will get back to you within one business day.
            </Typography>
          ) : (
            <>
              <TextField fullWidth required name="name" placeholder="Name" value={form.name} disabled={status === 'submitting'} onChange={(event) => updateField('name', event.target.value)} sx={{ mb: 2 }} />
              <TextField fullWidth required type="email" name="email" placeholder="Email" value={form.email} disabled={status === 'submitting'} onChange={(event) => updateField('email', event.target.value)} sx={{ mb: 2 }} />
              <TextField fullWidth required name="whatsapp" placeholder="WhatsApp number" value={form.whatsapp} disabled={status === 'submitting'} onChange={(event) => updateField('whatsapp', event.target.value)} sx={{ mb: 2 }} />
              <TextField fullWidth required name="country" placeholder="Country" value={form.country} disabled={status === 'submitting'} onChange={(event) => updateField('country', event.target.value)} />
              {status === 'error' && (
                <Typography sx={{ ...type.sans, fontSize: '0.875rem', color: t.accent, mt: 1 }}>{errorMessage}</Typography>
              )}
              <Button type="submit" fullWidth disabled={status === 'submitting'} sx={{ mt: 2, borderRadius: t.radius, bgcolor: t.primary, color: t.primaryForeground, ...type.button, '&:hover': { bgcolor: t.accent } }}>
                {status === 'submitting' ? 'Sending…' : 'Send'}
              </Button>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ShareYourHomePage;

import { useRef, useState } from 'react';
import { trackFormStart, trackFormSubmit } from '../utils/analytics';
import { Box, Link, Typography, TextField, Button } from '@mui/material';
import SectionLabel from '../components/SectionLabel';
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
  color: t.foreground,
  textDecoration: 'none',
  transition: 'color 0.2s',
  '&:hover': { color: t.accent },
};

const FORM_NAME = 'contact';

const ContactPage = () => {
  const formStartedRef = useRef(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleFormStart = () => {
    if (formStartedRef.current) return;
    formStartedRef.current = true;
    trackFormStart({ formName: FORM_NAME });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    handleFormStart();
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackFormSubmit({ formName: FORM_NAME, success: true });
    console.log('Form submitted:', formData);
  };

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '70vh',
        py: sp.sectionPy,
        bgcolor: t.background,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ ...maxContent, px: sp.pagePx, width: '100%', maxWidth: 640 }}>
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <SectionLabel sx={{ textAlign: 'center' }}>Contact</SectionLabel>
          <Typography component="h1" sx={{ ...type.h2, color: t.foreground, mb: 2 }}>
            Tell me about your space.
          </Typography>
          <Typography sx={{ ...type.body, color: t.mutedForeground, maxWidth: 520, mx: 'auto' }}>
            Offices, cafés, restaurants, or homes — share what you are working on, your timeline,
            and what needs to be clearer. I will reply within one business day.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'center',
            alignItems: 'center',
            gap: { xs: 2, sm: 5 },
            mb: 5,
            pb: 5,
            borderBottom: `1px solid ${t.border}`,
          }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Typography sx={{ ...type.caption, color: t.mutedForeground, mb: 0.75 }}>
              Email
            </Typography>
            <Link href={`mailto:${CONTACT_EMAIL}`} sx={contactLinkSx}>
              {CONTACT_EMAIL}
            </Link>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography sx={{ ...type.caption, color: t.mutedForeground, mb: 0.75 }}>
              Phone
            </Typography>
            <Link href={`tel:${CONTACT_PHONE_HREF}`} sx={contactLinkSx}>
              {CONTACT_PHONE_DISPLAY}
            </Link>
          </Box>
        </Box>

        <Box component="form" onSubmit={handleSubmit} autoComplete="off">
          <Box sx={{ display: 'flex', gap: 2, mb: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
            <TextField
              fullWidth
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              onFocus={handleFormStart}
              required
              variant="outlined"
              InputLabelProps={{ shrink: false }}
            />
            <TextField
              fullWidth
              placeholder="Email *"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              onFocus={handleFormStart}
              required
              variant="outlined"
              InputLabelProps={{ shrink: false }}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              placeholder="Phone number *"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              onFocus={handleFormStart}
              required
              variant="outlined"
              InputLabelProps={{ shrink: false }}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              placeholder="Message *"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              onFocus={handleFormStart}
              required
              variant="outlined"
              InputLabelProps={{ shrink: false }}
            />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Button type="submit" variant="contained" sx={{ minWidth: 140, px: 4, py: 1.5 }}>
              Send
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactPage;

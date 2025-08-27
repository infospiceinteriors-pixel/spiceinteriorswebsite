import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
  CircularProgress
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { trackEvent } from './GoogleAnalytics';

interface NewsletterSignupProps {
  variant?: 'full' | 'compact';
  placement?: 'homepage' | 'footer' | 'shop' | 'item-detail';
}

const NewsletterContainer = styled(Paper)<{ variant?: string }>(({ theme, variant }) => ({
  padding: variant === 'compact' ? theme.spacing(3) : theme.spacing(4),
  textAlign: 'center',
  backgroundColor: '#f8f8f8',
  borderRadius: theme.spacing(2),
  border: 'none',
  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
  marginBottom: theme.spacing(3),
}));

const EmailForm = styled('form')({
  display: 'flex',
  gap: '12px',
  marginTop: '16px',
  flexDirection: 'column',
  alignItems: 'center',
  '@media (min-width: 600px)': {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const EmailInput = styled(TextField)(({ theme }) => ({
  minWidth: '280px',
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'white',
    borderRadius: theme.spacing(1),
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  padding: '12px 24px',
  borderRadius: theme.spacing(1),
  textTransform: 'none',
  fontWeight: 600,
  minWidth: '140px',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  '&:disabled': {
    backgroundColor: theme.palette.grey[400],
  },
}));

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ 
  variant = 'full', 
  placement = 'homepage' 
}) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: 'success' | 'error';
  }>({ open: false, message: '', severity: 'success' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setSnackbar({
        open: true,
        message: 'Please enter a valid email address',
        severity: 'error'
      });
      return;
    }

    setLoading(true);

    try {
      // Track newsletter signup
      trackEvent('newsletter_signup', 'engagement', placement, 1);

      // Here you can integrate with your preferred email service
      // Options: EmailJS, Google Sheets API, Mailchimp, ConvertKit, etc.
      await submitEmail(email, placement);

      setSnackbar({
        open: true,
        message: 'Thank you! You\'ve been subscribed to our newsletter.',
        severity: 'success'
      });
      
      setEmail('');
    } catch (error) {
      console.error('Newsletter signup error:', error);
      setSnackbar({
        open: true,
        message: 'Something went wrong. Please try again.',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const submitEmail = async (email: string, source: string) => {
    // OPTION 1: Store locally (for testing)
    const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
    const newSubscriber = {
      email,
      source,
      timestamp: new Date().toISOString(),
      id: Date.now().toString()
    };
    
    // Check if email already exists
    if (subscribers.some((sub: any) => sub.email === email)) {
      throw new Error('Email already subscribed');
    }
    
    subscribers.push(newSubscriber);
    localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));

    // OPTION 2: Send to Google Sheets (you can uncomment and configure this)
    // await sendToGoogleSheets(email, source);

    // OPTION 3: Send to email service (you can uncomment and configure this)
    // await sendToEmailService(email, source);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  // Uncomment and configure this function to send to Google Sheets
  /*
  const sendToGoogleSheets = async (email: string, source: string) => {
    const response = await fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        source,
        timestamp: new Date().toISOString()
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit');
    }
  };
  */

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <>
      <NewsletterContainer variant={variant} elevation={0}>
        <Typography 
          variant={variant === 'compact' ? 'h6' : 'h5'} 
          component="h3"
          sx={{ 
            fontFamily: 'Playfair Display',
            fontWeight: 600,
            mb: 1,
            color: 'primary.main'
          }}
        >
          Weekly Vintage Finds
        </Typography>
        
        <Typography 
          variant="body1" 
          sx={{ 
            color: 'text.secondary',
            mb: variant === 'compact' ? 1 : 2,
            fontSize: variant === 'compact' ? '0.9rem' : '1rem'
          }}
        >
          Get exclusive access to our weekly newsletter featuring great deals on vintage furniture 
          and unique finds from sellers across Western Europe.
        </Typography>

        <EmailForm onSubmit={handleSubmit}>
          <EmailInput
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            size={variant === 'compact' ? 'small' : 'medium'}
            disabled={loading}
            required
          />
          <SubmitButton
            type="submit"
            variant="contained"
            disabled={loading}
            size={variant === 'compact' ? 'small' : 'medium'}
          >
            {loading ? <CircularProgress size={20} color="inherit" /> : 'Subscribe'}
          </SubmitButton>
        </EmailForm>

        <Typography 
          variant="caption" 
          sx={{ 
            display: 'block',
            mt: 1,
            color: 'text.secondary',
            fontSize: '0.75rem'
          }}
        >
          No spam, unsubscribe at any time. We respect your privacy.
        </Typography>
      </NewsletterContainer>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default NewsletterSignup;


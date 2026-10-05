import { Box, Tooltip, Fab } from '@mui/material';
import { styled } from '@mui/material/styles';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { trackCtaClick } from '../utils/analytics';

// Replace with your actual WhatsApp number
const WHATSAPP_NUMBER = '+31683142404';
const WHATSAPP_MESSAGE = 'Hello! I\'m interested in your interior design services. Could you please provide me with more information about your process, pricing, and available services?';

const FloatingButton = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  right: 24,
  bottom: 24,
  backgroundColor: theme.palette.primary.main, // Deep charcoal from theme
  color: '#fff',
  boxShadow: '0 4px 16px rgba(44, 44, 44, 0.15)', // Subtle shadow matching theme
  border: `2px solid ${theme.palette.secondary.main}`, // Warm beige accent border
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.secondary.main, // Warm beige on hover
    color: theme.palette.primary.main, // Dark text on light background
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(44, 44, 44, 0.2)',
  },
  '&:active': {
    transform: 'translateY(0px)',
  },
  zIndex: 1000,
  [theme.breakpoints.down('sm')]: {
    right: 16,
    bottom: 16,
  },
}));

const WhatsAppButton = () => {
  const handleClick = () => {
    trackCtaClick({ buttonId: 'whatsapp-floating', name: 'WhatsApp Floating', section: 'floating_button' });
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Box>
      <Tooltip 
        title="Chat on WhatsApp" 
        arrow 
        placement="left"
        componentsProps={{
          tooltip: {
            sx: {
              backgroundColor: 'primary.main',
              color: 'white',
              fontSize: '0.8rem',
              fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
              borderRadius: '8px',
              boxShadow: '0 4px 16px rgba(44, 44, 44, 0.15)',
            }
          },
          arrow: {
            sx: {
              color: 'primary.main',
            }
          }
        }}
      >
        <FloatingButton
          aria-label="chat on whatsapp"
          onClick={handleClick}
        >
          <WhatsAppIcon />
        </FloatingButton>
      </Tooltip>
    </Box>
  );
};

export default WhatsAppButton; 
import { Box, Tooltip, Fab } from '@mui/material';
import { styled } from '@mui/material/styles';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// Replace with your actual WhatsApp number
const WHATSAPP_NUMBER = '+31683142404';
const WHATSAPP_MESSAGE = 'Hello! I\'m interested in your wardrobe styling services. Could you please provide me with more information?';

const FloatingButton = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  right: 24,
  bottom: 24,
  backgroundColor: '#25D366', // WhatsApp green color
  color: '#fff',
  '&:hover': {
    backgroundColor: '#128C7E', // WhatsApp darker green on hover
  },
  zIndex: 1000,
  [theme.breakpoints.down('sm')]: {
    right: 16,
    bottom: 16,
  },
}));

const WhatsAppButton = () => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Box>
      <Tooltip title="Chat on WhatsApp" arrow placement="left">
        <FloatingButton
          color="primary"
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
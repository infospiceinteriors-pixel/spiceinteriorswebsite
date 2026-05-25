import { Box, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Instagram, WhatsApp, WorkOutline } from '@mui/icons-material';
import { FaYoutube } from 'react-icons/fa';
import { getIntroSessionWhatsAppUrl, introSessionContent } from '../utils/introSessionContent';
import { trackLinktreeButtonClick } from '../utils/analytics';

// Styled components for the Linktree layout
const LinktreeContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  position: 'relative',
  padding: theme.spacing(2, 2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  // Background image with blur effect
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url(/intro-hero.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    filter: 'blur(1px)', // Add blur effect
    zIndex: 0,
  },
  // Add overlay for better text readability
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(250, 250, 250, 0.15)', // Light overlay
    zIndex: 1,
  },
  // Ensure content is above overlay and background
  '& > *': {
    position: 'relative',
    zIndex: 2,
  },
  [theme.breakpoints.down('sm')]: {
    // Account for mobile header: logo (45px) + padding (16px top + 12px bottom) = ~73px
    minHeight: 'calc(100vh - 73px)',
    padding: theme.spacing(2, 1.5),
    paddingTop: theme.spacing(3), // Add some space from the header
    '&::before': {
      backgroundAttachment: 'scroll', // Better performance on mobile
    },
  },
}));


const LinksContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: 320, // Smaller max width for desktop
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
  margin: '0 auto', // Center the container
  [theme.breakpoints.down('sm')]: {
    maxWidth: 320,
    gap: theme.spacing(1.2),
  },
}));

const LinkButton = styled(Button)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(1.2, 2.5), // Smaller padding for desktop
  borderRadius: 50, // Fully rounded
  fontSize: '0.95rem', // Smaller font size for desktop
  fontWeight: 600,
  textTransform: 'none',
  backgroundColor: '#FFF8E7',
  color: theme.palette.primary.main,
  border: '2px solid transparent',
  boxShadow: '4px 4px 0px rgba(0, 0, 0, 0.25)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  justifyContent: 'center', // Keep text centered
  position: 'relative',
  '& .MuiButton-startIcon': {
    position: 'absolute',
    left: theme.spacing(2.5), // Adjust icon position for smaller buttons
    marginRight: 0,
    marginLeft: 0,
    '& svg': {
      fontSize: '1.2rem', // Smaller icons for desktop
    },
  },
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    transform: 'translateY(-2px)',
    boxShadow: '6px 6px 0px rgba(0, 0, 0, 0.3)',
    border: `2px solid ${theme.palette.primary.main}`,
  },
  '&:active': {
    transform: 'translateY(0)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.4, 2.5), // Larger padding for mobile
    fontSize: '1rem', // Larger font for mobile
    '& .MuiButton-startIcon': {
      left: theme.spacing(2.5),
      '& svg': {
        fontSize: '1.4rem', // Larger icons for mobile
      },
    },
  },
}));

// Custom TikTok icon component
const TikTokIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.10z"/>
  </svg>
);

// Link data
const linkData = [
  {
    id: 'intro-session',
    title: introSessionContent.hero.ctaLabel,
    url: getIntroSessionWhatsAppUrl(),
    icon: <WhatsApp />,
  },
  {
    id: 'portfolio',
    title: 'Projects',
    description: 'Commercial, residential and public interiors',
    url: '/portfolio',
    icon: <WorkOutline />,
  },
  {
    id: 'vintage-market',
    title: 'Italian Vintage Market',
    description: 'Behind the scenes of our sourcing journey',
    url: 'https://www.youtube.com/watch?v=VFQLaf7NKG4&list=PLzvHlGsDCM3nc2S0PxUMUC1jfPjE3sWO6&index=2',
    icon: <FaYoutube />,
  },
  {
    id: 'tiktok',
    title: 'TikTok',
    description: 'Follow us on TikTok',
    url: 'https://www.tiktok.com/@spice_interiors',
    icon: <TikTokIcon />,
  },
  {
    id: 'instagram',
    title: 'Instagram',
    description: 'Follow us on Instagram',
    url: 'https://www.instagram.com/spice_interior/',
    icon: <Instagram />,
  },
];

const LinktreePage = () => {
  const handleLinkClick = (url: string, buttonTitle: string, buttonId: string) => {
    trackLinktreeButtonClick({
      buttonId,
      buttonName: buttonTitle,
      destinationUrl: url,
    });

    // Navigate to the URL
    if (url.startsWith('http')) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = url;
    }
  };

  return (
    <LinktreeContainer>
      <Container maxWidth="sm">

        {/* Links Section */}
        <LinksContainer>
          {linkData.map((link) => (
            <LinkButton
              key={link.id}
              onClick={() => handleLinkClick(link.url, link.title, link.id)}
              startIcon={link.icon}
            >
              {link.title}
            </LinkButton>
          ))}
        </LinksContainer>


      </Container>
    </LinktreeContainer>
  );
};

export default LinktreePage;

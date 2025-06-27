import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

interface HeroSectionProps {
  backgroundImage: string;
}

const HeroContainer = styled(Box)(() => ({
  position: 'relative',
  height: '90vh',
  minHeight: 600,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}));

const HeroSection = ({ backgroundImage }: HeroSectionProps) => {
  return (
    <HeroContainer
      sx={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    />
  );
};

export default HeroSection; 
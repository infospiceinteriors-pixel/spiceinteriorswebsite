import { Box, Button, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const WhatWeDoContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5, 0),
  marginTop: theme.spacing(0),
  background: 'linear-gradient(135deg, #E8E4DF 0%, #D4C4B0 100%)',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    marginTop: theme.spacing(0),
    padding: theme.spacing(4, 0),
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(0),
    padding: theme.spacing(3, 0),
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2.5),
  color: theme.palette.primary.main,
  fontWeight: 400,
  fontFamily: '"Playfair Display", "Georgia", serif',
  fontSize: '1.7rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.3rem',
  },
}));

const StatementText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '1.1rem',
  lineHeight: 1.5,
  marginBottom: theme.spacing(3),
  fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
  fontWeight: 400,
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.95rem',
  },
  '& strong': {
    fontWeight: 700,
  },
}));

const DownloadButton = styled(Button)(({ theme }) => ({
  borderRadius: 50,
  borderColor: theme.palette.primary.main,
  color: theme.palette.primary.main,
  textTransform: 'none',
  fontSize: '0.9rem',
  padding: '10px 28px',
  fontWeight: 700,
  '&:hover': {
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.85rem',
    padding: '8px 20px',
  },
}));

const WhatWeDoSection = () => {
  const handleDownloadCatalog = () => {
    window.open('https://drive.google.com/file/d/1TpqFcGeGyu6A1kv7j1OU6bYoOP693M2v/view?usp=drive_link', '_blank');
  };

  return (
    <WhatWeDoContainer>
      <Container maxWidth="md">
        <SectionTitle variant="h2">
          What we do
        </SectionTitle>
        <StatementText variant="body1">
          We source high-end <strong>mid-century furniture</strong> from Europe, giving timeless pieces a second life through our <strong>circular and sustainable</strong> approach
        </StatementText>
        <DownloadButton
          variant="outlined"
          onClick={handleDownloadCatalog}
        >
          Our Catalog
        </DownloadButton>
      </Container>
    </WhatWeDoContainer>
  );
};

export default WhatWeDoSection;


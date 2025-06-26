import { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: 'Which locations are you active in?',
    answer: 'We currently serve the entire Delhi NCR region, including South Delhi, Central Delhi, Gurgaon, and Noida. Our services are available for both residential and commercial spaces.',
  },
  {
    question: 'How much does it cost?',
    answer: 'Our pricing is tailored to each client\'s specific needs and the scope of the project. We only offer premium solutions, and the cost of the decluttering service starts at INR 1,09,000 and varies based on the size of the wardrobe, and the complexity of the project. Please contact us for a non-binding consultation via contact form.',
  },
  {
    question: 'How can we connect?',
    answer: 'You can reach us through our contact form, email, or phone. We typically respond within 24 hours to schedule a consultation at your convenience.',
  },
  {
    question: 'Do you also provide wardrobe organisers?',
    answer: 'Yes, we offer a range of premium wardrobe organisers and storage solutions. These can be customized to fit your specific needs and space requirements.',
  },
  {
    question: 'Are wardrobe organisers included in the cost?',
    answer: 'Wardrobe organisers are available as an additional service. The cost will be discussed during the consultation and can be included in the overall project quote.',
  },
];

const FaqSectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.default,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(to right, transparent, rgba(197, 153, 123, 0.3), transparent)',
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(5, 0),
  },
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '1600px',
  margin: '0 auto',
  padding: theme.spacing(0, 4),
  boxSizing: 'border-box',
  [theme.breakpoints.up('xl')]: {
    maxWidth: '1800px',
    padding: theme.spacing(0, 6),
  },
  [theme.breakpoints.between('lg', 'xl')]: {
    padding: theme.spacing(0, 5),
  },
  [theme.breakpoints.between('md', 'lg')]: {
    padding: theme.spacing(0, 4),
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(0, 3),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0, 2.5),
  },
}));

const FaqContainer = styled(Box)(() => ({
  maxWidth: 1000,
  margin: '0 auto',
  position: 'relative',
}));

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  marginBottom: theme.spacing(2.5),
  borderBottom: `1px solid rgba(197, 153, 123, 0.2)`,
  borderLeft: 'none',
  borderRadius: 0,
  '&:before': {
    display: 'none',
  },
  '&.Mui-expanded': {
    margin: theme.spacing(2.5, 0),
    backgroundColor: 'transparent',
  },
  '& .MuiAccordionSummary-root': {
    padding: 0,
    minHeight: 'auto',
    '&:focus': {
      outline: 'none',
    },
    '&.Mui-focused': {
      outline: 'none',
      backgroundColor: 'transparent',
    },
  },
  '& .MuiAccordionDetails-root': {
    padding: theme.spacing(1, 0, 3),
  },
  '&.Mui-focused': {
    outline: 'none',
  },
  '& .MuiAccordionSummary-content.Mui-expanded': {
    margin: '16px 0',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '& .MuiButtonBase-root': {
    '&::after': {
      display: 'none',
    },
  },
  transition: 'all 0.3s ease',
}));

const FaqSection = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Override MUI styles globally for this component
  // This will remove all focus outlines and borders
  const globalStyles = {
    '.MuiAccordion-root': {
      '&.Mui-expanded': {
        border: 'none',
        outline: 'none',
      },
      '&.Mui-focused': {
        border: 'none',
        outline: 'none',
      },
      '&:focus': {
        border: 'none',
        outline: 'none',
      },
    },
    '.MuiButtonBase-root': {
      '&:focus': {
        outline: 'none',
      },
    },
  };

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <FaqSectionWrapper id="faq">
      <ContentWrapper>
        <FaqContainer sx={globalStyles}>
          <Typography 
            variant={isMobile ? "h4" : "h3"} 
            align="center" 
            gutterBottom 
            sx={{ 
              mb: { xs: 6, md: 8 },
              fontSize: {
                xs: '1.5rem',
                sm: '1.75rem',
                md: '2.25rem',
                lg: '2.5rem'
              },
              color: 'secondary.main'
            }}
          >
            Frequently Asked Questions
          </Typography>
          {faqs.map((faq, index) => (
            <StyledAccordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              disableGutters
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: 'secondary.main', fontSize: '1.5rem' }} />}
                disableRipple
                sx={{
                  '& .MuiAccordionSummary-content': {
                    margin: '16px 0',
                  },
                  padding: '0',
                  minHeight: '48px',
                  '&.Mui-expanded': {
                    minHeight: '48px',
                  },
                  '&:focus': {
                    outline: 'none',
                    backgroundColor: 'transparent',
                  },
                  '&.Mui-focused': {
                    outline: 'none',
                    backgroundColor: 'transparent',
                  },
                }}
              >
                <Typography 
                  variant={isMobile ? "subtitle1" : "h6"} 
                  sx={{ 
                    color: 'secondary.main',
                    fontSize: {
                      xs: '1rem',
                      md: '1.25rem',
                      lg: '1.35rem'
                    },
                    fontWeight: 500,
                    letterSpacing: '0.02em'
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'text.primary',
                    fontSize: {
                      xs: '0.9rem',
                      md: '1rem',
                      lg: '1.1rem'
                    },
                    pl: 0.5
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </StyledAccordion>
          ))}
        </FaqContainer>
      </ContentWrapper>
    </FaqSectionWrapper>
  );
};

export default FaqSection; 
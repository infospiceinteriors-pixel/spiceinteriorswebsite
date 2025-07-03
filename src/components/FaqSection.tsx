import { 
  Box, 
  Typography, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Container 
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface FAQItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title: string;
  subtitle?: string;
  faqs: FAQItem[];
}

const StyledAccordion = styled(Accordion)(() => ({
  border: 'none',
  boxShadow: 'none',
  borderBottom: '1px solid rgba(212, 165, 116, 0.2)',
  marginBottom: '0px',
  '&:before': {
    display: 'none',
  },
  '&.Mui-expanded': {
    margin: 0,
  },
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  padding: theme.spacing(1.5, 0),
  '& .MuiAccordionSummary-content': {
    margin: 0,
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    color: theme.palette.secondary.main,
  },
  '&.Mui-expanded': {
    minHeight: 40,
  },
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0, 0, 1.5, 0),
}));

const FaqSection = ({ title, faqs }: FaqSectionProps) => {
  return (
    <Box sx={{ py: 5, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              mb: 0,
              color: 'primary.main',
              fontWeight: 400,
            }}
          >
            {title}
          </Typography>
        </Box>

        <Box sx={{ maxWidth: 600, mx: 'auto' }}>
          {faqs.map((faq, index) => (
            <StyledAccordion key={index}>
              <StyledAccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`faq-content-${index}`}
                id={`faq-header-${index}`}
              >
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontFamily: 'Playfair Display',
                    fontWeight: 400,
                    color: 'primary.main',
                  }}
                >
                  {faq.question}
                </Typography>
              </StyledAccordionSummary>
              <StyledAccordionDetails>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'text.secondary',
                    lineHeight: 1.7,
                  }}
                >
                  {faq.answer}
                </Typography>
              </StyledAccordionDetails>
            </StyledAccordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FaqSection; 
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

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  border: 'none',
  boxShadow: 'none',
  borderBottom: '1px solid rgba(212, 165, 116, 0.2)',
  '&:before': {
    display: 'none',
  },
  '&.Mui-expanded': {
    margin: 0,
  },
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  padding: theme.spacing(3, 0),
  '& .MuiAccordionSummary-content': {
    margin: 0,
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    color: theme.palette.secondary.main,
  },
  '&.Mui-expanded': {
    minHeight: 48,
  },
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0, 0, 3, 0),
}));

const FaqSection = ({ title, subtitle, faqs }: FaqSectionProps) => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              mb: 2,
              color: 'primary.main',
              fontWeight: 400,
            }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography 
              variant="subtitle1" 
              sx={{ 
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>

        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
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
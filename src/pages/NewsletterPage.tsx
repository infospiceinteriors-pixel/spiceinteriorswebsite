import { Box } from '@mui/material';
import CollectorNewsletter from '../components/CollectorNewsletter';
import { lovableTokens as t } from '../theme/lovableTokens';

const NewsletterPage = () => {
  return (
    <Box
      component="section"
      sx={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        bgcolor: t.background,
        py: { xs: 3, md: 12 },
        minHeight: { xs: 'calc(100dvh - 120px)', md: 'calc(100vh - 200px)' },
      }}
    >
      <CollectorNewsletter
        expandMobile
        embedded
        titleComponent="h1"
        formName="newsletter_page"
        emailSource="newsletter_page"
        placement="newsletter_page"
        destinationUrl="/newsletter"
        emailInputId="newsletter-page-email"
      />
    </Box>
  );
};

export default NewsletterPage;

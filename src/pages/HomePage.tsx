import { Box, Typography, Button, Container, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
// import ItemsSection from '../components/ItemsSection';
import FaqSection from '../components/FaqSection';
// import { getNewItems } from '../utils/data';

// Dummy FAQ data
const faqs = [
  {
    question: "What services does Spice Interior Design Studio offer?",
    answer: "We offer comprehensive interior design services including space planning, furniture selection, color consultation, lighting design, and complete room transformations. We also provide rental services for events and temporary styling needs."
  },
  {
    question: "How do I schedule a consultation?",
    answer: "You can schedule a consultation by contacting us through our website, calling us directly, or reaching out via WhatsApp. We offer both in-person and virtual consultations to accommodate your needs."
  },
  {
    question: "What is your design process?",
    answer: "Our design process begins with an initial consultation to understand your vision and requirements. We then create a detailed design concept, present it for your approval, and oversee the implementation from start to finish."
  },
  {
    question: "Do you work with specific budgets?",
    answer: "Yes, we work with various budgets and can tailor our services to meet your financial requirements. We'll discuss your budget during the initial consultation and provide options that align with your investment level."
  },
  {
    question: "Can you help with small spaces?",
    answer: "Absolutely! We specialize in maximizing the potential of small spaces through smart design solutions, multifunctional furniture, and strategic layout planning. Every space has potential, regardless of size."
  },
  {
    question: "What areas do you serve?",
    answer: "We primarily serve the Amsterdam metropolitan area and surrounding regions. For larger projects, we may consider locations throughout the Netherlands. Contact us to discuss your specific location."
  }
];

const featuresData = [
  {
    id: 1,
    image: '/services-01.jpg',
    title: 'Brutalist Collection',
    description: 'Discover our curated selection of modern and vintage furniture pieces. From statement sofas to elegant dining sets, each piece is carefully chosen for quality and design.',
    buttonText: 'Shop Furniture',
    linkTo: '/shop'
  },
  {
    id: 2,
    image: '/services-03.jpg',
    title: 'Lighting & Decor',
    description: 'Illuminate your space with our collection of designer lighting and decorative accessories. Find the perfect pieces to add personality and warmth to any room.',
    buttonText: 'Shop Lighting',
    linkTo: '/shop'
  },
  {
    id: 3,
    image: '/services-05.jpg',
    title: 'Textiles & Rugs',
    description: 'Complete your interior with our selection of luxury textiles, rugs, and soft furnishings. Add texture, color, and comfort to create the perfect atmosphere.',
    buttonText: 'Shop Textiles',
    linkTo: '/shop'
  }
];

// Styled components for the features section
const FeaturesSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: 'background.paper',
}));

const FeaturesGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  },
}));

const FeatureCard = styled(Card)(() => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: 'none',
  border: 'none',
  borderRadius: 0,
  backgroundColor: 'transparent',
  '&:hover': {
    boxShadow: 'none',
    transform: 'none',
    backgroundColor: 'transparent',
  },
}));

const FeatureImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '300px',
  objectFit: 'cover',
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    height: '250px',
  },
}));

const FeatureContent = styled(CardContent)(({ theme }) => ({
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  '&:last-child': {
    paddingBottom: 0,
  },
}));

const FeatureTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: 'primary.main',
  fontFamily: 'Playfair Display',
  fontWeight: 600,
  fontSize: '1.25rem',
  lineHeight: 1.2,
  textAlign: 'center',
}));

const FeatureDescription = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  color: 'text.secondary',
  lineHeight: 1.6,
  fontSize: '0.9rem',
  flexGrow: 1,
  textAlign: 'center',
}));

const FeatureButton = styled(Button)(({ theme }) => ({
  alignSelf: 'center',
  textTransform: 'none',
  fontSize: '0.9rem',
  padding: '8px 24px',
}));

const SectionHeader = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(6),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: 'primary.main',
  fontWeight: 400,
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  color: 'text.secondary',
  maxWidth: 600,
  margin: '0 auto',
  lineHeight: 1.6,
}));

const HomePage = () => {
  const navigate = useNavigate();
  // Get items from centralized data
  // const newItems = getNewItems();

  const handleFeatureClick = (linkTo: string) => {
    navigate(linkTo);
  };

  return (
    <Box>
      <HeroSection />
      
      {/* Features Section */}
      <FeaturesSection>
        <Container maxWidth="lg">
          <SectionHeader>
            <SectionTitle variant="h2">
              Shop my curated collection
            </SectionTitle>
            <SectionSubtitle variant="body1">
              Explore our carefully hand-picked collection of furniture, lighting, and decor. 
              Each piece is selected from travels in Europe and Asia for its exceptional design, quality craftsmanship, 
              and ability to transform your living spaces.
            </SectionSubtitle>
          </SectionHeader>
          
          <FeaturesGrid>
            {featuresData.map((feature) => (
              <FeatureCard key={feature.id}>
                <FeatureImage
                  src={feature.image}
                  alt={feature.title}
                />
                <FeatureContent>
                  <FeatureTitle variant="h5">
                    {feature.title}
                  </FeatureTitle>
                  <FeatureDescription variant="body1">
                    {feature.description}
                  </FeatureDescription>
                  <FeatureButton
                    variant="outlined"
                    onClick={() => handleFeatureClick(feature.linkTo)}
                  >
                    {feature.buttonText}
                  </FeatureButton>
                </FeatureContent>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </Container>
      </FeaturesSection>
      
      {/* Temporarily removed items section */}
      {/* <ItemsSection
        title="New In"
        items={newItems}
        showViewAll={true}
        viewAllPath="/shop"
        maxItems={6}
      /> */}
      
      <FaqSection
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services and process."
        faqs={faqs}
      />
    </Box>
  );
};

export default HomePage; 
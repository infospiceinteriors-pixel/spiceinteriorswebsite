import { Box, Typography, Button, Container, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom'; // Temporarily removed with postcards
// import { useState, useEffect } from 'react'; // Temporarily removed with postcards
import HeroSection from '../components/HeroSection';
// import ItemsSection from '../components/ItemsSection';
import FaqSection from '../components/FaqSection';
// import CachedImage from '../components/CachedImage'; // Temporarily removed with postcards
// import { getNewItems } from '../utils/data';

// Journal entry interface - Temporarily removed with postcards
// interface JournalEntry {
//   filename: string;
//   title: string;
//   date: string;
//   excerpt: string;
//   slug: string;
//   images?: string[];
// }

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
    image: '/collection-04.jpg',
    title: 'Art Deco Collection',
    description: 'Bold geometric patterns and luxurious materials define our Art Deco collection. Discover statement pieces that bring glamour and sophistication to modern interiors with timeless elegance.',
    buttonText: 'Explore Art Deco',
    linkTo: 'https://www.instagram.com/spice_int/'
  },
  {
    id: 2,
    image: '/collection-02.jpg',
    title: 'Lighting & Decor',
    description: 'Transform your space with our curated selection of designer lighting and sculptural decor. Each piece is chosen to create ambiance and add personality to your home.',
    buttonText: 'Shop Lighting',
    linkTo: 'https://www.instagram.com/spice_int/'
  },
  {
    id: 3,
    image: '/collection-03.jpg',
    title: 'Scandinavian Collection',
    description: 'Embrace the beauty of simplicity with our Scandinavian-inspired pieces. Clean lines, natural materials, and functional design create spaces that feel both cozy and refined.',
    buttonText: 'Browse Collection',
    linkTo: 'https://www.instagram.com/spice_int/'
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

const FeatureContent = styled(CardContent)(() => ({
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
  fontSize: '0.9rem',
  lineHeight: 1.2,
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    fontSize: '0.95rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1rem',
  },
}));

const FeatureDescription = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  color: 'text.secondary',
  lineHeight: 1.4,
  fontSize: '0.65rem',
  flexGrow: 1,
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    fontSize: '0.7rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '0.75rem',
  },
}));

const FeatureButton = styled(Button)(({ theme }) => ({
  alignSelf: 'center',
  textTransform: 'none',
  fontSize: '0.65rem',
  padding: '8px 24px',
  [theme.breakpoints.up('md')]: {
    fontSize: '0.7rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '0.75rem',
  },
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
  lineHeight: 1.5,
  fontSize: '0.9rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '0.95rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1rem',
  },
}));

// Styled components for postcards section - Temporarily removed with postcards
// const PostcardsSection = styled(Box)(({ theme }) => ({
//   padding: theme.spacing(8, 0),
//   backgroundColor: 'background.default',
// }));

// const PostcardsGrid = styled(Box)(({ theme }) => ({
//   display: 'grid',
//   gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
//   gap: theme.spacing(4),
//   marginBottom: theme.spacing(4),
//   width: '100%',
//   [theme.breakpoints.down('lg')]: {
//     gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
//   },
//   [theme.breakpoints.down('md')]: {
//     gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
//   },
//   [theme.breakpoints.down('sm')]: {
//     gridTemplateColumns: 'minmax(0, 1fr)',
//   },
// }));

// const PostcardCard = styled('div')(() => ({
//   display: 'flex',
//   flexDirection: 'column',
//   width: '100%',
//   cursor: 'pointer',
//   textDecoration: 'none',
//   color: 'inherit',
//   minWidth: 0, // Allow content to shrink
// }));

// const PostcardImageContainer = styled('div')(() => ({
//   width: '100%',
//   aspectRatio: '9 / 16',
//   overflow: 'hidden',
//   marginBottom: '16px',
//   position: 'relative',
// }));

// const PostcardContent = styled('div')(() => ({
//   padding: '8px 0 24px 0',
//   display: 'flex',
//   flexDirection: 'column',
//   flexGrow: 1,
//   width: '100%',
//   minWidth: 0, // Allow content to shrink
// }));

// const PostcardTitle = styled(Typography)(({ theme }) => ({
//   marginBottom: theme.spacing(1),
//   color: 'primary.main',
//   fontFamily: 'Playfair Display',
//   fontWeight: 600,
//   lineHeight: 1.2,
//   textAlign: 'left',
//   textTransform: 'uppercase',
//   letterSpacing: 0,
//   overflow: 'hidden',
//   textOverflow: 'ellipsis',
//   whiteSpace: 'nowrap',
//   width: '100%',
//   minWidth: 0,
//   fontSize: '0.9rem',
//   [theme.breakpoints.up('md')]: {
//     fontSize: '0.95rem',
//   },
//   [theme.breakpoints.up('lg')]: {
//     fontSize: '1rem',
//   },
// }));

// const PostcardDate = styled(Typography)(({ theme }) => ({
//   marginBottom: theme.spacing(2),
//   color: 'text.secondary',
//   textAlign: 'left',
//   width: '100%',
//   minWidth: 0,
//   fontSize: '0.6rem',
//   [theme.breakpoints.up('md')]: {
//     fontSize: '0.65rem',
//   },
//   [theme.breakpoints.up('lg')]: {
//     fontSize: '0.7rem',
//   },
// }));

// const PostcardExcerpt = styled(Typography)(({ theme }) => ({
//   color: 'text.secondary',
//   lineHeight: 1.4,
//   textAlign: 'left',
//   flexGrow: 1,
//   width: '100%',
//   minWidth: 0,
//   overflow: 'hidden',
//   fontSize: '0.65rem',
//   [theme.breakpoints.up('md')]: {
//     fontSize: '0.7rem',
//   },
//   [theme.breakpoints.up('lg')]: {
//     fontSize: '0.75rem',
//   },
// }));

// const ViewAllButton = styled(Button)(({ theme }) => ({
//   alignSelf: 'center',
//   textTransform: 'none',
//   fontSize: '0.9rem',
//   padding: '12px 32px',
//   marginTop: theme.spacing(2),
// }));

const HomePage = () => {
  const navigate = useNavigate();
  // Temporarily removed with postcards
  // const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([]);
  // const [loading, setLoading] = useState(true);

  // Load journal entries on component mount - Temporarily removed with postcards
  // useEffect(() => {
  //   const loadJournalEntries = async () => {
  //     try {
  //       const indexResponse = await fetch('/journal/index.json');
  //       if (!indexResponse.ok) {
  //         throw new Error('Failed to load journal index');
  //       }
  //       const indexData = await indexResponse.json();
        
  //       const entries: JournalEntry[] = indexData.map((entry: any) => ({
  //         filename: entry.filename,
  //         title: entry.title,
  //         date: entry.date,
  //         excerpt: entry.excerpt,
  //         slug: entry.slug,
  //         images: entry.images || []
  //       }));
        
  //       // Sort by date (newest first) and take first 4
  //       const sortedEntries = entries
  //         .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  //         .slice(0, 4);
        
  //       setJournalEntries(sortedEntries);
  //     } catch (err) {
  //       console.error('Error loading journal entries:', err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   loadJournalEntries();
  // }, []);

  const handleFeatureClick = (linkTo: string) => {
    if (linkTo.startsWith('http')) {
      window.open(linkTo, '_blank');
    } else {
      navigate(linkTo);
    }
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

      {/* Temporarily removed Postcards Section */}
      {/* <PostcardsSection>
        <Container maxWidth="lg">
          <SectionHeader>
            <SectionTitle variant="h2">
              Postcards
            </SectionTitle>
            <SectionSubtitle variant="body1">
              Insights, inspirations, and stories from my design journey. 
              Exploring the intersection of culture, sustainability, and beautiful living spaces.
            </SectionSubtitle>
          </SectionHeader>
          
          {!loading && journalEntries.length > 0 && (
            <>
              <PostcardsGrid>
                {journalEntries.map((entry) => (
                  <Link 
                    key={entry.slug}
                    to={`/journal/${entry.slug}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <PostcardCard>
                      <PostcardImageContainer>
                        <CachedImage
                          src={entry.images?.[0] || '/placeholder.jpg'}
                          alt={`${entry.title} - Main Image`}
                          width="100%"
                          height="100%"
                          objectFit="cover"
                          loading="lazy"
                        />
                      </PostcardImageContainer>
                      
                      <PostcardContent>
                        <PostcardTitle variant="h6">
                          {entry.title}
                        </PostcardTitle>
                        <PostcardDate variant="body2">
                          {new Date(entry.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </PostcardDate>
                        <PostcardExcerpt variant="body2">
                          {entry.excerpt}
                        </PostcardExcerpt>
                      </PostcardContent>
                    </PostcardCard>
                  </Link>
                ))}
              </PostcardsGrid>
              
              <Box sx={{ textAlign: 'center' }}>
                <ViewAllButton
                  variant="outlined"
                  onClick={() => navigate('/journal')}
                >
                  View All Postcards
                </ViewAllButton>
              </Box>
            </>
          )}
        </Container>
      </PostcardsSection> */}
      
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
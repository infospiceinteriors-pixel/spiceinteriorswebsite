import { Box, Typography, Button, Container, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom'; // Temporarily removed with postcards
import { getNewItems } from '../utils/data';
import CategorySection from '../components/CategorySection';
// import ItemsSection from '../components/ItemsSection';
import ItemsCarousel from '../components/ItemsCarousel';
import TestimonialsSection from '../components/TestimonialsSection';
import ImageHeroSection from '../components/ImageHeroSection';
import { testimonials } from '../utils/testimonials';
// import FaqSection from '../components/FaqSection'; // Replaced with testimonials
// import CachedImage from '../components/CachedImage'; // Temporarily removed with postcards

// Journal entry interface - Temporarily removed with postcards
// interface JournalEntry {
//   filename: string;
//   title: string;
//   date: string;
//   excerpt: string;
//   slug: string;
//   images?: string[];
// }


const featuresData = [
  {
    id: 1,
    image: '/products/objects/2/2_1.jpg',
    title: 'Art Deco Collection',
    description: 'Bold geometric patterns and luxurious materials define our Art Deco collection. Discover statement pieces that bring glamour and sophistication to modern interiors with timeless elegance.',
    buttonText: 'Shop Art Deco',
    linkTo: '/shop?tag=artdeco'
  },
  {
    id: 2,
    image: '/products/tables/2/2_1.jpg',
    title: 'Mid-Century Modern',
    description: 'Iconic designs from the 1950s and 60s featuring clean lines, functional beauty, and innovative materials. Perfect pieces that blend seamlessly with contemporary living.',
    buttonText: 'Shop Mid-Century',
    linkTo: '/shop?tag=midcenturymodern'
  },
  {
    id: 3,
    image: '/products/tables/1/1_1.jpg',
    title: 'Hollywood Regency',
    description: 'Glamorous and sophisticated pieces inspired by the golden age of Hollywood. Luxurious materials and dramatic styling that make every room feel like a movie set.',
    buttonText: 'Shop Hollywood Regency',
    linkTo: '/shop?tag=hollywoodregency'
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
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(4), // Reduce margin on mobile
  },
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
      {/* Hero Section with 4 Images */}
      <ImageHeroSection 
        onImageClick={(word) => {
          // Optional: Add click tracking or navigation
          console.log(`Clicked on: ${word}`);
        }}
      />
      
      {/* New Items Carousel */}
      <ItemsCarousel
        title="New Arrivals"
        items={getNewItems()}
        showViewAll={true}
        viewAllPath="/shop?category=New Arrivals"
        maxItems={8}
      />
      
      {/* Category Section */}
      <CategorySection />
      
      {/* Vintage style section */}
      <FeaturesSection>
        <Container maxWidth="lg">
          <SectionHeader>
            <SectionTitle variant="h2">
              Shop by style
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
      
      {/* Testimonials Section */}
      <TestimonialsSection testimonials={testimonials} />
    </Box>
  );
};

export default HomePage; 
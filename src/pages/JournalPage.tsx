import { Box, Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState, useEffect, useCallback } from 'react';
import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import CachedImage from '../components/CachedImage';
import ImagePreloader from '../components/ImagePreloader';

// Journal entry interface
interface JournalEntry {
  filename: string;
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  images?: string[];
  content?: string;
}

// Styled components for the journal
const JournalContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1, 0),
  backgroundColor: 'background.default',
  minHeight: '90vh',
}));

const JournalGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
  gap: '32px',
  marginBottom: theme.spacing(6),
  width: '100%',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: '24px',
  },
}));

const JournalCard = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  cursor: 'pointer',
  textDecoration: 'none',
  color: 'inherit',
}));





const JournalTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  color: 'primary.main',
  fontFamily: 'Playfair Display',
  fontWeight: 600,
  lineHeight: 1.2,
  textAlign: 'left',
  width: '100%',
  textTransform: 'uppercase',
  letterSpacing: 0,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  display: 'block',
}));

const JournalDate = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: 'text.secondary',
  textAlign: 'left',
  width: '100%',
}));

const JournalExcerpt = styled(Typography)(() => ({
  color: 'text.secondary',
  lineHeight: 1.4,
  textAlign: 'left',
  width: '100%',
  flexGrow: 1,
}));

// Styled components for markdown content
const MarkdownContainer = styled(Box)(({ theme }) => ({
  maxWidth: '800px',
  margin: '0 auto',
  '& h1': {
    color: theme.palette.primary.main,
    fontFamily: 'Playfair Display',
    fontWeight: 600,
    fontSize: '2.5rem',
    lineHeight: 1.2,
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
  },
  '& h2': {
    color: theme.palette.primary.main,
    fontFamily: 'Playfair Display',
    fontWeight: 600,
    fontSize: '1.5rem',
    lineHeight: 1.3,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  '& p': {
    color: theme.palette.text.secondary,
    lineHeight: 1.7,
    fontSize: '1rem',
    marginBottom: theme.spacing(2),
  },
  '& ul, & ol': {
    color: theme.palette.text.secondary,
    lineHeight: 1.7,
    fontSize: '1rem',
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(3),
  },
  '& li': {
    marginBottom: theme.spacing(0.5),
    '& strong': {
      color: theme.palette.primary.main,
      fontWeight: 600,
    },
  },
  '& a': {
    display: 'inline-block',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    textDecoration: 'none',
    padding: theme.spacing(1, 3),
    borderRadius: 0,
    fontSize: '0.9rem',
    fontWeight: 500,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      transform: 'translateY(-1px)',
    },
  },
}));

const BackButton = styled(Button)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  textTransform: 'none',
  fontSize: '0.9rem',
  border: 'none',
  backgroundColor: 'transparent',
  color: theme.palette.text.primary,
  '&:hover': {
    backgroundColor: 'transparent',
    border: 'none',
  },
}));

const LoadingMessage = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  color: 'text.secondary',
  marginTop: theme.spacing(4),
}));

const JournalPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([]);
  const [selectedEntry, setSelectedEntry] = useState<JournalEntry | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load markdown content for selected entry
  const loadEntryContent = useCallback(async (entry: JournalEntry) => {
    try {
      const response = await fetch(`/journal/${entry.filename}`);
      if (!response.ok) {
        throw new Error('Failed to load journal entry');
      }
      const content = await response.text();
      setSelectedEntry({ ...entry, content });
    } catch (err) {
      setError('Failed to load journal entry content');
      console.error('Error loading journal entry:', err);
    }
  }, []);

  // Prevent Google indexing of this page
  useEffect(() => {
    // Add robots meta tag to prevent indexing
    const robotsMetaTag = document.createElement('meta');
    robotsMetaTag.name = 'robots';
    robotsMetaTag.content = 'noindex, nofollow';
    document.head.appendChild(robotsMetaTag);

    // Cleanup function to remove the meta tag when component unmounts
    return () => {
      document.head.removeChild(robotsMetaTag);
    };
  }, []);

  // Load journal entries on component mount
  useEffect(() => {
    const loadJournalEntries = async () => {
      try {
        setLoading(true);
        // Fetch the index file
        const indexResponse = await fetch('/journal/index.json');
        if (!indexResponse.ok) {
          throw new Error('Failed to load journal index');
        }
        const entries: JournalEntry[] = await indexResponse.json();
        setJournalEntries(entries);
        
        // If there's a slug in the URL, load that specific entry
        if (slug) {
          const entry = entries.find(e => e.slug === slug);
          if (entry) {
            await loadEntryContent(entry);
          } else {
            setError('Journal entry not found');
          }
        } else {
          // Clear selected entry when on main journal page
          setSelectedEntry(null);
        }
      } catch (err) {
        setError('Failed to load journal entries');
        console.error('Error loading journal entries:', err);
      } finally {
        setLoading(false);
      }
    };

    loadJournalEntries();
  }, [slug, loadEntryContent]);

  // Custom renderer for images and links
  const MarkdownComponents = {
    img: ({ src, alt }: { src?: string; alt?: string }) => {
      return (
        <span style={{ display: 'block', textAlign: 'center', margin: '16px 0' }}>
          <CachedImage
            src={src || ''}
            alt={alt || ''}
            style={{
              width: '100%',
              maxWidth: '600px',
              height: 'auto',
            }}
            objectFit="cover"
            loading="lazy"
          />
        </span>
      );
    },
    p: ({ children }: { children?: React.ReactNode }) => {
      // Check if the paragraph contains only an image
      const isImageOnly = React.Children.toArray(children).every(child => 
        React.isValidElement(child) && child.type === 'img'
      );
      
      // If it's image-only, render as a div to avoid nesting issues
      if (isImageOnly) {
        return <div style={{ margin: '16px 0' }}>{children}</div>;
      }
      
      // Otherwise render as normal paragraph
      return <p style={{ margin: '16px 0', lineHeight: 1.7 }}>{children}</p>;
    },
    a: ({ href, children }: { href?: string; children?: React.ReactNode }) => (
      <Button
        component="a"
        href={href}
        variant="contained"
        sx={{
          textTransform: 'none',
          borderRadius: 0,
          mr: 1,
          mb: 1,
        }}
      >
        {children}
      </Button>
    ),
  };

  if (loading) {
    return (
      <JournalContainer>
        <Container maxWidth="lg">
          <LoadingMessage variant="h6">
            Loading postcards...
          </LoadingMessage>
        </Container>
      </JournalContainer>
    );
  }

  if (error) {
    return (
      <JournalContainer>
        <Container maxWidth="lg">
          <LoadingMessage variant="h6" color="error">
            {error}
          </LoadingMessage>
        </Container>
      </JournalContainer>
    );
  }

  if (selectedEntry) {
    return (
      <JournalContainer>
        <Container maxWidth="lg">
          <BackButton
            variant="text"
            onClick={() => navigate('/journal')}
          >
                            ← Back to Postcards
          </BackButton>
          
          <MarkdownContainer>
            {selectedEntry.content ? (
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={MarkdownComponents}
              >
                {selectedEntry.content}
              </ReactMarkdown>
            ) : (
              <LoadingMessage>Loading article...</LoadingMessage>
            )}
          </MarkdownContainer>
        </Container>
      </JournalContainer>
    );
  }

  return (
    <JournalContainer>
      <ImagePreloader />
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              mb: 1,
              color: 'primary.main',
              fontWeight: 400,
            }}
          >
                                Postcards
          </Typography>
          <Typography 
            variant="subtitle1" 
            sx={{ 
              color: 'text.secondary',
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Insights, inspirations, and stories from my design journey. 
            Exploring the intersection of culture, sustainability, and beautiful living spaces.
          </Typography>
        </Box>

        {journalEntries.length === 0 ? (
                          <LoadingMessage>No postcards found.</LoadingMessage>
        ) : (
          <JournalGrid>
            {journalEntries.map((entry) => (
              <Link 
                key={entry.slug}
                to={`/journal/${entry.slug}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <JournalCard>
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '9 / 16',
                    overflow: 'hidden',
                    marginBottom: '16px',
                  }}
                >
                  <CachedImage
                    src={entry.images?.[0] || '/placeholder.jpg'}
                    alt={`${entry.title} - Main Image`}
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    loading="lazy"
                  />
                </div>
                
                <div style={{ padding: '8px 0 24px 0' }}>
                  <JournalTitle 
                    variant="h6"
                    sx={{ 
                      fontSize: { xs: '0.9rem', md: '0.95rem', lg: '1rem' }
                    }}
                  >
                    {entry.title}
                  </JournalTitle>
                  <JournalDate 
                    variant="body2"
                    sx={{ 
                      fontSize: { xs: '0.6rem', md: '0.65rem', lg: '0.7rem' }
                    }}
                  >
                    {new Date(entry.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </JournalDate>
                  <JournalExcerpt 
                    variant="body2"
                    sx={{ 
                      fontSize: { xs: '0.65rem', md: '0.7rem', lg: '0.75rem' }
                    }}
                  >
                    {entry.excerpt}
                  </JournalExcerpt>
                </div>
                </JournalCard>
              </Link>
            ))}
          </JournalGrid>
        )}
      </Container>
    </JournalContainer>
  );
};

export default JournalPage; 
import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Paper, Avatar, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Testimonial } from '../utils/testimonials';

interface TestimonialsSectionProps {
  title?: string;
  description?: string;
  testimonials: Testimonial[];
  backgroundColor?: string;
}

// Styled components
const TestimonialsContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: 'background.default',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4, 0), // Reduce padding on mobile
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

const CarouselContainer = styled(Box)(() => ({
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
}));

const CarouselTrack = styled(Box)<{ translateX: number }>(({ translateX }) => ({
  display: 'flex',
  transition: 'transform 0.5s ease-in-out',
  transform: `translateX(${translateX}%)`,
  width: '100%',
}));

const CarouselSlide = styled(Box)(({ theme }) => ({
  minWidth: '100%',
  display: 'flex',
  gap: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    gap: theme.spacing(2), // Reduce gap between cards on mobile
    justifyContent: 'center', // Center single testimonial on mobile
  },
}));

const CarouselNavigation = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '16px',
  marginTop: '32px',
  [theme.breakpoints.down('md')]: {
    marginTop: '24px', // Reduce margin on mobile
    gap: '12px', // Reduce gap on mobile
  },
}));

const NavButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '50%',
  width: 48,
  height: 48,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:disabled': {
    opacity: 0.3,
  },
}));

const CarouselDots = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '8px',
  marginTop: '24px',
}));

const Dot = styled(Box)<{ active: boolean }>(({ theme, active }) => ({
  width: 12,
  height: 12,
  borderRadius: '50%',
  backgroundColor: active ? theme.palette.primary.main : theme.palette.divider,
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: active ? theme.palette.primary.main : theme.palette.action.hover,
  },
}));

const TestimonialCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: 'none',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 0,
  backgroundColor: 'background.paper',
  flex: '0 0 calc(50% - 16px)', // Each card takes 50% width minus gap
  [theme.breakpoints.down('md')]: {
    flex: '0 0 100%', // Full width on mobile
    padding: theme.spacing(2), // Further reduce padding on mobile
    height: 'auto', // Let content determine height on mobile
    minHeight: 'unset', // Remove any minimum height constraints
  },
}));

const TestimonialHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '24px',
  [theme.breakpoints.down('md')]: {
    marginBottom: '12px', // Further reduce margin on mobile
  },
}));

const TestimonialInfo = styled(Box)(() => ({
  marginLeft: '16px',
  flex: 1,
}));

const TestimonialName = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '0.9rem',
  color: 'text.primary',
  [theme.breakpoints.up('md')]: {
    fontSize: '0.95rem',
  },
}));

const TestimonialStars = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginBottom: '16px',
  [theme.breakpoints.down('md')]: {
    marginBottom: '8px', // Further reduce margin on mobile
  },
}));

const TestimonialText = styled(Typography)(({ theme }) => ({
  fontSize: '0.75rem',
  lineHeight: 1.6,
  color: 'text.secondary',
  fontStyle: 'italic',
  flexGrow: 1,
  [theme.breakpoints.up('md')]: {
    fontSize: '0.8rem',
  },
  [theme.breakpoints.down('md')]: {
    lineHeight: 1.4, // Tighter line height on mobile
    fontSize: '0.8rem', // Slightly larger font on mobile for readability
  },
}));

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  title = "What People Say",
  description,
  testimonials,
  backgroundColor = 'background.default'
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile breakpoint
  useEffect(() => {
    const checkMobile = () => {
      const newIsMobile = window.innerWidth < 900; // md breakpoint
      if (newIsMobile !== isMobile) {
        setIsMobile(newIsMobile);
        setCurrentSlide(0); // Reset slide when switching between mobile/desktop
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile]);

  // Calculate slides: 2 testimonials per slide on desktop, 1 on mobile
  const testimonialsPerSlide = isMobile ? 1 : 2;
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <TestimonialsContainer sx={{ backgroundColor }}>
      <Container maxWidth="lg">
        <SectionHeader>
          <SectionTitle variant="h2">
            {title}
          </SectionTitle>
          {description && (
            <SectionSubtitle variant="body1">
              {description}
            </SectionSubtitle>
          )}
        </SectionHeader>

        <CarouselContainer>
          <CarouselTrack translateX={-currentSlide * 100}>
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <CarouselSlide key={slideIndex}>
                {testimonials
                  .slice(slideIndex * testimonialsPerSlide, slideIndex * testimonialsPerSlide + testimonialsPerSlide)
                  .map((testimonial, index) => (
                    <TestimonialCard key={index}>
                      <TestimonialHeader>
                        <Avatar
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          sx={{
                            width: 50,
                            height: 50,
                            '@media (max-width: 900px)': {
                              width: 40,
                              height: 40,
                            }
                          }}
                        />
                        <TestimonialInfo>
                          <TestimonialName>
                            {testimonial.name}
                          </TestimonialName>
                        </TestimonialInfo>
                      </TestimonialHeader>

                      <TestimonialStars>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <StarIcon key={i} sx={{
                            color: '#00B67A',
                            fontSize: 18,
                            '@media (max-width: 900px)': {
                              fontSize: 16,
                            }
                          }} />
                        ))}
                      </TestimonialStars>

                      <TestimonialText>
                        "{testimonial.text}"
                      </TestimonialText>
                    </TestimonialCard>
                  ))}
              </CarouselSlide>
            ))}
          </CarouselTrack>
        </CarouselContainer>

        {totalSlides > 1 && (
          <CarouselNavigation>
            <NavButton onClick={prevSlide} disabled={currentSlide === 0}>
              <ArrowBackIosIcon sx={{ fontSize: 20 }} />
            </NavButton>

            <CarouselDots>
              {Array.from({ length: totalSlides }).map((_, index) => (
                <Dot
                  key={index}
                  active={index === currentSlide}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </CarouselDots>

            <NavButton onClick={nextSlide} disabled={currentSlide === totalSlides - 1}>
              <ArrowForwardIosIcon sx={{ fontSize: 20 }} />
            </NavButton>
          </CarouselNavigation>
        )}
      </Container>
    </TestimonialsContainer>
  );
};

export default TestimonialsSection;

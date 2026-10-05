import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Paper, Avatar, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link as RouterLink } from 'react-router-dom';
import { Testimonial } from '../utils/testimonials';
import BookSessionCtaButton from './BookSessionCtaButton';
import { analyticsButtons, trackCtaClick } from '../utils/analytics';
import SectionLabel from './SectionLabel';
import {
  lovableSpacing as sp,
  lovableTokens as t,
  lovableTypography as type,
  maxContent,
} from '../theme/lovableTokens';

interface TestimonialsSectionProps {
  title?: string;
  description?: string;
  testimonials: Testimonial[];
  backgroundColor?: 'default' | 'card';
  showBookSessionCta?: boolean;
  showContactCta?: boolean;
  ctaTrackingSection?: string;
}

const resolveBackground = (backgroundColor: TestimonialsSectionProps['backgroundColor']) =>
  backgroundColor === 'card' ? t.card : t.background;

const TestimonialsContainer = styled(Box)(() => ({
  position: 'relative',
}));

const SectionHeader = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(6),
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(4),
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

const NavButton = styled(IconButton)(() => ({
  backgroundColor: t.card,
  border: `1px solid ${t.border}`,
  borderRadius: '50%',
  width: 48,
  height: 48,
  color: t.foreground,
  '&:hover': {
    backgroundColor: t.muted,
    color: t.accent,
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

const Dot = styled(Box)<{ active: boolean }>(({ active }) => ({
  width: 12,
  height: 12,
  borderRadius: '50%',
  backgroundColor: active ? t.accent : t.border,
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: active ? t.accent : t.muted,
  },
}));

const TestimonialCard = styled(Paper)(() => ({
  padding: 32,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: 'none',
  border: `1px solid ${t.border}`,
  borderRadius: 0,
  backgroundColor: t.background,
  flex: '0 0 calc(50% - 16px)',
  '@media (max-width: 900px)': {
    flex: '0 0 100%',
    padding: 16,
    height: 'auto',
    minHeight: 'unset',
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

const TestimonialName = styled(Typography)(() => ({
  ...type.body,
  fontSize: '1rem',
  fontWeight: 500,
  color: t.foreground,
}));

const TestimonialStars = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginBottom: '16px',
  [theme.breakpoints.down('md')]: {
    marginBottom: '8px', // Further reduce margin on mobile
  },
}));

const TestimonialText = styled(Typography)(({ theme }) => ({
  fontFamily: t.fontSerif,
  fontWeight: 400,
  fontStyle: 'italic',
  fontSize: '1rem',
  lineHeight: 1.4,
  color: t.mutedForeground,
  flexGrow: 1,
  [theme.breakpoints.up('md')]: {
    fontSize: '1.125rem',
  },
}));

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  title = "What People Say",
  description,
  testimonials,
  backgroundColor = 'default',
  showBookSessionCta = false,
  showContactCta = false,
  ctaTrackingSection = 'testimonials',
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
    <TestimonialsContainer sx={{ py: sp.sectionPy, bgcolor: resolveBackground(backgroundColor) }}>
      <Box sx={{ ...maxContent, px: sp.pagePx }}>
        <SectionHeader>
          <SectionLabel sx={{ textAlign: 'center' }}>Testimonials</SectionLabel>
          <Typography component="h2" sx={{ ...type.h2, color: t.foreground, mb: 2 }}>
            {title}
          </Typography>
          {description && (
            <Typography sx={{ ...type.body, color: t.mutedForeground, maxWidth: 600, mx: 'auto' }}>
              {description}
            </Typography>
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

        {showBookSessionCta && (
          <Box sx={{ mt: { xs: 6, md: 8 } }}>
            <BookSessionCtaButton trackingSection={ctaTrackingSection} />
          </Box>
        )}
        {showContactCta && (
          <Box sx={{ mt: { xs: 6, md: 8 }, display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Button
              component={RouterLink}
              to={analyticsButtons.contact.destination}
              variant="contained"
              onClick={() =>
                trackCtaClick({
                  buttonId: analyticsButtons.contact.id,
                  name: analyticsButtons.contact.name,
                  section: ctaTrackingSection,
                  destinationUrl: analyticsButtons.contact.destination,
                })
              }
              sx={{
                ...type.button,
                borderRadius: t.radius,
                bgcolor: t.primary,
                color: t.primaryForeground,
                px: 4,
                py: 2,
                '&:hover': { bgcolor: t.accent, color: t.accentForeground },
              }}
            >
              Get in Touch
            </Button>
            <Button
              component={RouterLink}
              to={analyticsButtons.projects.destination}
              variant="outlined"
              onClick={() =>
                trackCtaClick({
                  buttonId: analyticsButtons.projects.id,
                  name: analyticsButtons.projects.name,
                  section: ctaTrackingSection,
                  destinationUrl: analyticsButtons.projects.destination,
                })
              }
              sx={{
                borderRadius: t.radius,
                ...type.button,
                borderColor: t.primary,
                color: t.primary,
                px: 4,
                py: 2,
                '&:hover': { borderColor: t.accent, color: t.accent, bgcolor: 'transparent' },
              }}
            >
              Projects
            </Button>
          </Box>
        )}
      </Box>
    </TestimonialsContainer>
  );
};

export default TestimonialsSection;




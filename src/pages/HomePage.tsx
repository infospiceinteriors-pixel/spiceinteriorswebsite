import { useEffect } from 'react';
import { Box } from '@mui/material';
import TestimonialsSection from '../components/TestimonialsSection';
import HomeHeroSection from '../components/home/HomeHeroSection';
import HomeServicesSection from '../components/home/HomeServicesSection';
import HomeProcessSection from '../components/home/HomeProcessSection';
import HomeRoiSection from '../components/home/HomeRoiSection';
import { testimonials } from '../utils/testimonials';

const HomePage = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Consultation — Spice Interiors';
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <Box>
      <HomeHeroSection />
      <HomeServicesSection />
      <HomeProcessSection />
      <HomeRoiSection />
      <TestimonialsSection
        testimonials={testimonials}
        backgroundColor="card"
        showContactCta
        ctaTrackingSection="home_testimonials"
      />
    </Box>
  );
};

export default HomePage;

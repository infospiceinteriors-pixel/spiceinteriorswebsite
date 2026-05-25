import { Box } from '@mui/material';
import TestimonialsSection from '../components/TestimonialsSection';
import HomeHeroSection from '../components/home/HomeHeroSection';
import HomeServicesSection from '../components/home/HomeServicesSection';
import HomeProcessSection from '../components/home/HomeProcessSection';
import { testimonials } from '../utils/testimonials';

const HomePage = () => (
  <Box>
    <HomeHeroSection />
    <HomeServicesSection />
    <HomeProcessSection />
    <TestimonialsSection
      testimonials={testimonials}
      showBookSessionCta
      ctaTrackingSection="home_testimonials"
    />
  </Box>
);

export default HomePage;

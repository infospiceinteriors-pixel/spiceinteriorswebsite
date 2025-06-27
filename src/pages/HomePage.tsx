import { Box } from '@mui/material';
import HeroSection from '../components/HeroSection';
import ItemsSection from '../components/ItemsSection';
import FaqSection from '../components/FaqSection';
import { getNewItems } from '../utils/data';

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

const HomePage = () => {
  // Get items from centralized data
  const newItems = getNewItems();

  return (
    <Box>
      <HeroSection
        backgroundImage="/hero_image.jpg"
      />
      
      <ItemsSection
        title="New In"
        items={newItems}
        showViewAll={true}
        viewAllPath="/shop"
        maxItems={6}
      />
      
      <FaqSection
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services and process."
        faqs={faqs}
      />
    </Box>
  );
};

export default HomePage; 
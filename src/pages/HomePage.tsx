import { Box } from '@mui/material';
import HeroSection from '../components/HeroSection';
import ItemsSection from '../components/ItemsSection';
import FaqSection from '../components/FaqSection';

// Dummy data for new items
const newItems = [
  {
    id: '1',
    name: 'Modern Dining Chair',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€450',
    category: 'Furniture'
  },
  {
    id: '2',
    name: 'Art Deco Side Table',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€320',
    category: 'Furniture'
  },
  {
    id: '3',
    name: 'Scandinavian Sofa',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€1,200',
    category: 'Furniture'
  },
  {
    id: '4',
    name: 'Industrial Pendant Light',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€180',
    category: 'Lighting'
  },
  {
    id: '5',
    name: 'Bohemian Rug',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€280',
    category: 'Textiles'
  },
  {
    id: '6',
    name: 'Mid-Century Coffee Table',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€390',
    category: 'Furniture'
  }
];

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
  return (
    <Box>
      <HeroSection
        title="Spice Interior Design Studio"
        subtitle="Creating bespoke spaces that reflect your unique style and elevate your living experience. Discover our curated collection of premium furniture and accessories."
        backgroundImage="/placeholder.jpg"
        ctaText="Explore Our Collection"
        ctaLink="/shop"
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
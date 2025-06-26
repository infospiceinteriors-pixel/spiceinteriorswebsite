import { Box } from '@mui/material';
import HeroSection from '../components/HeroSection';
import ItemsSection from '../components/ItemsSection';
import FaqSection from '../components/FaqSection';

// Dummy data for new items
const newItems = [
  {
    id: '1',
    name: 'Modern Dining Chair',
    description: 'Elegant dining chair with clean lines and premium upholstery. Perfect for contemporary dining spaces.',
    price: '€450',
    image: '/placeholder.jpg',
    category: 'Furniture'
  },
  {
    id: '2',
    name: 'Art Deco Side Table',
    description: 'Vintage-inspired side table with brass accents and marble top. Adds sophistication to any room.',
    price: '€320',
    image: '/placeholder.jpg',
    category: 'Furniture'
  },
  {
    id: '3',
    name: 'Scandinavian Sofa',
    description: 'Minimalist sofa with premium fabric and comfortable seating. Ideal for modern living rooms.',
    price: '€1,200',
    image: '/placeholder.jpg',
    category: 'Furniture'
  },
  {
    id: '4',
    name: 'Industrial Pendant Light',
    description: 'Statement pendant light with exposed bulb design. Perfect for kitchen islands or dining areas.',
    price: '€180',
    image: '/placeholder.jpg',
    category: 'Lighting'
  },
  {
    id: '5',
    name: 'Bohemian Rug',
    description: 'Hand-woven rug with intricate patterns and natural fibers. Adds warmth and texture to any space.',
    price: '€280',
    image: '/placeholder.jpg',
    category: 'Textiles'
  },
  {
    id: '6',
    name: 'Mid-Century Coffee Table',
    description: 'Timeless coffee table with walnut wood and clean design. A perfect centerpiece for living rooms.',
    price: '€390',
    image: '/placeholder.jpg',
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
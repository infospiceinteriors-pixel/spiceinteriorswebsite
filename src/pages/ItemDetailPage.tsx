import { Box, Typography, Chip } from '@mui/material';
import { useParams } from 'react-router-dom';
import { WhatsApp } from '@mui/icons-material';
import { getAllItems } from '../utils/data';
import CachedImage from '../components/CachedImage';
import ItemsSection from '../components/ItemsSection';

const ItemDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const allItems = getAllItems();
  const item = allItems.find(item => item.id === id);

  if (!item) {
    return (
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4">Item not found</Typography>
      </Box>
    );
  }

  const handleWhatsAppClick = () => {
    const message = `Hi! I am interested in this item: ${item.name} (${item.price})`;
    const whatsappUrl = `https://wa.me/31626268470?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Get related items from the same category, excluding the current item
  const relatedItems = allItems.filter(relatedItem => 
    relatedItem.category === item.category && relatedItem.id !== item.id
  );

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#fafafa' }}>
      {/* Mobile Layout */}
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        {/* Mobile Images - Two Column Grid */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: 2,
          p: 1
        }}>
          <Box sx={{ 
            width: '100%', 
            aspectRatio: '0.75',
            overflow: 'hidden'
          }}>
            <CachedImage
              src={item.images[0]}
              alt={item.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </Box>
          {item.images[1] && (
            <Box sx={{ 
              width: '100%', 
              aspectRatio: '0.75',
              overflow: 'hidden'
            }}>
              <CachedImage
                src={item.images[1]}
                alt={`${item.name} alternate view`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </Box>
          )}
          {item.images[2] && (
            <Box sx={{ 
              width: '100%', 
              aspectRatio: '0.75',
              overflow: 'hidden',
              gridColumn: '1 / -1'
            }}>
              <CachedImage
                src={item.images[2]}
                alt={`${item.name} detail view`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </Box>
          )}
        </Box>

        {/* Mobile Content */}
        <Box sx={{ p: 3, backgroundColor: 'white' }}>
          <Typography variant="h3" sx={{ mb: 2, fontFamily: 'Playfair Display' }}>
            {item.name}
          </Typography>
          
          <Typography variant="h6" sx={{ mb: 2 }}>Description</Typography>
          <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
            {item.description || `Elegant ${item.category?.toLowerCase()} piece from the 1940s with clean, geometric lines and understated charm. Recently reupholstered in a soft, neutral fabric, it rests on wooden block feet. A timeless piece that blends comfort with refined modernist design.`}
          </Typography>

          <Typography variant="h6" sx={{ mb: 2 }}>Details</Typography>
          <Box component="ul" sx={{ mb: 3, pl: 2 }}>
            <li>Creator: {item.creator || 'Danish Cabinetmaker'}</li>
            <li>Date of Manufacture: {item.dateOfManufacture || '1940s'}</li>
            <li>Origin: {item.origin || 'Denmark'}</li>
            <li>Period: {item.period || 'Art Deco'}</li>
            <li>Materials: {item.materials || 'Beech and Velour'}</li>
            <li>Condition: {item.condition || 'In good condition consistent with age. Newly reupholstered and restored.'}</li>
          </Box>

          <Typography variant="h6" sx={{ mb: 2 }}>Category</Typography>
          <Box sx={{ mb: 3, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {item.category && <Chip label={item.category} size="small" />}
            {item.featured && <Chip label="Featured" size="small" color="secondary" />}
          </Box>

          <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
            {item.price}
          </Typography>

          <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
            Please contact <strong>info@spice-interiors.com</strong> if you have any enquiries
          </Typography>

          <Box
            onClick={handleWhatsAppClick}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              backgroundColor: '#25D366',
              color: 'white',
              py: 2,
              px: 3,
              borderRadius: 2,
              cursor: 'pointer',
              fontWeight: 600,
              '&:hover': { backgroundColor: '#128C7E' }
            }}
          >
            <WhatsApp />
            Inquire via WhatsApp
          </Box>
        </Box>
      </Box>

      {/* Desktop Layout */}
      <Box sx={{ 
        display: { xs: 'none', md: 'flex' }, 
        minHeight: '100vh',
        px: 4
      }}>
        {/* Left Side - Images (60% width) */}
        <Box sx={{ width: '60%', display: 'flex', flexDirection: 'column', pr: 2 }}>
          {/* Top Row - Two images side by side with 0.75 aspect ratio */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box sx={{ 
              width: '50%', 
              aspectRatio: '0.75',
              overflow: 'hidden'
            }}>
              <CachedImage
                src={item.images[0]}
                alt={item.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </Box>
            <Box sx={{ 
              width: '50%', 
              aspectRatio: '0.75',
              overflow: 'hidden'
            }}>
              <CachedImage
                src={item.images[1] || item.images[0]}
                alt={`${item.name} alternate view`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </Box>
          </Box>
          
          {/* Bottom Row - Third image if available */}
          {item.images[2] && (
            <Box sx={{ 
              aspectRatio: '0.75', 
              mt: 2,
              overflow: 'hidden'
            }}>
              <CachedImage
                src={item.images[2]}
                alt={`${item.name} detail view`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </Box>
          )}
        </Box>

        {/* Right Side - Content (40% width) */}
        <Box sx={{ 
          width: '40%', 
          backgroundColor: 'white',
          p: 4,
          pl: 2,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <Typography 
            variant="h3" 
            sx={{ 
              mb: 2, 
              fontFamily: 'Playfair Display',
              fontSize: '2.2rem',
              fontWeight: 400
            }}
          >
            {item.name}
          </Typography>
          
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Description
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 4, 
              color: 'text.secondary',
              lineHeight: 1.6
            }}
          >
            {item.description || `Elegant ${item.category?.toLowerCase()} piece from the 1940s with clean, geometric lines and understated charm. Recently reupholstered in a soft, neutral fabric, it rests on wooden block feet. A timeless piece that blends comfort with refined modernist design.`}
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Details
          </Typography>
          
          <Box component="ul" sx={{ mb: 4, pl: 2, listStyle: 'disc' }}>
            <Box component="li" sx={{ mb: 0.5, color: 'text.secondary' }}>
              Creator: {item.creator || 'Danish Cabinetmaker'}
            </Box>
            <Box component="li" sx={{ mb: 0.5, color: 'text.secondary' }}>
              Date of Manufacture: {item.dateOfManufacture || '1940s'}
            </Box>
            <Box component="li" sx={{ mb: 0.5, color: 'text.secondary' }}>
              Origin: {item.origin || 'Denmark'}
            </Box>
            <Box component="li" sx={{ mb: 0.5, color: 'text.secondary' }}>
              Period: {item.period || 'Art Deco'}
            </Box>
            <Box component="li" sx={{ mb: 0.5, color: 'text.secondary' }}>
              Materials: {item.materials || 'Beech and Velour'}
            </Box>
            <Box component="li" sx={{ mb: 0.5, color: 'text.secondary' }}>
              Condition: {item.condition || 'In good condition consistent with age. Newly reupholstered and restored.'}
            </Box>
            <Box component="li" sx={{ mb: 0.5, color: 'text.secondary' }}>
              Worldwide shipping - please request a shipping quote before buying.
            </Box>
          </Box>

          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Category
          </Typography>
          <Box sx={{ mb: 4, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {item.category && (
              <Chip 
                label={item.category} 
                size="small"
                sx={{ backgroundColor: '#f5f5f5' }}
              />
            )}
            {item.featured && (
              <Chip 
                label="Featured" 
                size="small"
                sx={{ backgroundColor: '#D4A574', color: 'white' }}
              />
            )}
          </Box>

          <Typography 
            variant="h4" 
            sx={{ 
              mb: 3, 
              fontWeight: 600,
              fontSize: '1.8rem'
            }}
          >
            {item.price}
          </Typography>

          <Typography 
            variant="body2" 
            sx={{ 
              mb: 3, 
              color: 'text.secondary'
            }}
          >
            Please contact <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>info@spice-interiors.com</Box> if you have any enquiries
          </Typography>

          <Box
            onClick={handleWhatsAppClick}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              backgroundColor: '#25D366',
              color: 'white',
              py: 2,
              px: 3,
              borderRadius: 2,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontWeight: 600,
              fontSize: '1rem',
              '&:hover': {
                backgroundColor: '#128C7E',
                transform: 'translateY(-1px)',
              }
            }}
          >
            <WhatsApp sx={{ fontSize: '1.2rem' }} />
            Inquire via WhatsApp
          </Box>
        </Box>
      </Box>

      {/* Related Items Section */}
      {relatedItems.length > 0 && (
        <ItemsSection
          title="Related Items"
          items={relatedItems}
          showViewAll={relatedItems.length > 4}
          viewAllPath={`/shop?category=${item.category}`}
          maxItems={4}
        />
      )}
    </Box>
  );
};

export default ItemDetailPage;
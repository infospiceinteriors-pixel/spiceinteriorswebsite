import { useEffect } from 'react';
import { Box, Button, Link, Typography } from '@mui/material';
import { FaInstagram } from 'react-icons/fa';
import ImageHeroSection from '../components/ImageHeroSection';
import CollectorNewsletter from '../components/CollectorNewsletter';
import { openIntroSessionWhatsApp } from '../utils/introSessionContent';
import {
  designHelp,
  HOME_SEO_TITLE,
  instagramHome,
  shopEpisode,
} from '../utils/collectedHomeContent';
import {
  lovableSpacing as sp,
  lovableTokens as t,
  lovableTypography as type,
  maxContent,
} from '../theme/lovableTokens';

const sectionTitleSx = {
  fontFamily: t.fontSerif,
  fontWeight: 400,
  fontSize: { xs: '1.5rem', md: '1.75rem' },
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  textAlign: 'center',
  color: t.foreground,
} as const;

const CollectedHomePage = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = HOME_SEO_TITLE;
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <Box>
      <ImageHeroSection />

      <Box component="section" sx={{ bgcolor: t.background, pt: { xs: 6, md: 8 }, pb: { xs: 2, md: 3 } }}>
        <Box sx={{ ...maxContent, px: sp.pagePx }}>
          <Typography component="h2" sx={{ ...sectionTitleSx, mb: { xs: 4, md: 5 } }}>
            {instagramHome.heading}
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(2, minmax(0, 1fr))', md: 'repeat(4, minmax(0, 1fr))' },
              gap: { xs: 2, md: 3 },
            }}
          >
            {instagramHome.tours.map((tour) => (
              <Link
                key={tour.id}
                href={tour.postUrl}
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
                aria-label={tour.overlayTitle}
                sx={{
                  display: 'block',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  color: 'inherit',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 8px 24px rgba(33, 25, 18, 0.12)' },
                }}
              >
                <Box sx={{ position: 'relative', aspectRatio: '9 / 16', bgcolor: t.muted }}>
                  <Box
                    component="img"
                    src={tour.image}
                    alt={tour.imageAlt}
                    loading="lazy"
                    sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.25,
                      px: 1.5,
                      py: 1.25,
                      bgcolor: 'rgba(253, 250, 244, 0.92)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    <Box
                      component="img"
                      src={instagramHome.profileImage}
                      alt=""
                      sx={{
                        width: 28,
                        height: 28,
                        borderRadius: '50%',
                        objectFit: 'cover',
                        flexShrink: 0,
                        border: `1px solid ${t.border}`,
                      }}
                    />
                    <Box sx={{ minWidth: 0 }}>
                      <Typography sx={{ fontFamily: t.fontSans, fontSize: { xs: '0.75rem', md: '0.6875rem' }, fontWeight: 500, color: t.foreground, lineHeight: 1.2 }}>
                        {instagramHome.username}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: t.fontSans,
                          fontSize: { xs: '0.75rem', md: '0.625rem' },
                          fontWeight: 300,
                          color: t.mutedForeground,
                          lineHeight: 1.35,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {tour.caption}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Link>
            ))}
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: { xs: 3, md: 4 } }}>
            <Link
              href={instagramHome.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              underline="always"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                ...type.body,
                fontWeight: 500,
                color: t.foreground,
                textDecorationColor: t.border,
                '&:hover': { color: t.accent },
              }}
            >
              <FaInstagram size={16} aria-hidden />
              {instagramHome.viewLabel}
            </Link>
          </Box>
        </Box>
      </Box>

      <Box component="section" sx={{ bgcolor: '#fff', py: { xs: 5, md: 6 } }}>
        <Box sx={{ ...maxContent, px: sp.pagePx }}>
          <Typography component="h2" sx={{ ...sectionTitleSx, mb: { xs: 3, md: 4 } }}>
            {shopEpisode.title}
          </Typography>
          <Box
            sx={{
              display: { xs: 'flex', md: 'grid' },
              gridTemplateColumns: { md: `repeat(${shopEpisode.products.length}, minmax(0, 1fr))` },
              gap: { xs: 1.5, md: 2 },
              overflowX: { xs: 'auto', md: 'visible' },
              scrollSnapType: { xs: 'x mandatory', md: 'none' },
              pb: { xs: 0.5, md: 0 },
              mx: { xs: -1, md: 0 },
              px: { xs: 1, md: 0 },
              '&::-webkit-scrollbar': { display: 'none' },
              scrollbarWidth: 'none',
            }}
          >
            {shopEpisode.products.map((product) => (
              <Link
                key={product.id}
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
                aria-label={product.name}
                sx={{
                  flex: { xs: '0 0 42%', sm: '0 0 28%', md: 'auto' },
                  scrollSnapAlign: { xs: 'start', md: 'unset' },
                  display: 'block',
                  aspectRatio: '1 / 1',
                  bgcolor: '#fff',
                  transition: 'opacity 0.2s ease',
                  '&:hover': { opacity: 0.88 },
                }}
              >
                <Box
                  component="img"
                  src={product.image}
                  alt={product.imageAlt}
                  loading="lazy"
                  sx={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain', p: { xs: 2, md: 2.5 } }}
                />
              </Link>
            ))}
          </Box>
        </Box>
      </Box>

      <CollectorNewsletter />

      <Box component="section" sx={{ bgcolor: '#fff', pt: { xs: 5, md: 6 }, pb: { xs: 6, md: 8 } }}>
        <Box sx={{ ...maxContent, px: sp.pagePx }}>
          <Box sx={{ borderTop: `1px solid ${t.border}`, pt: { xs: 5, md: 6 } }}>
            <Typography component="h2" sx={{ ...sectionTitleSx, mb: { xs: 3, md: 4 } }}>
              {designHelp.title}
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
                gap: 1,
                maxWidth: 560,
                mx: 'auto',
                mb: { xs: 3.5, md: 4 },
              }}
            >
              {designHelp.images.map((image) => (
                <Box
                  key={image.src}
                  component="img"
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  sx={{ display: 'block', width: '100%', maxWidth: 268, aspectRatio: '1 / 1', objectFit: 'cover', mx: 'auto' }}
                />
              ))}
            </Box>
            <Box sx={{ maxWidth: 480, mx: 'auto', textAlign: 'center', mb: { xs: 3, md: 3.5 } }}>
              <Typography sx={{ fontFamily: t.fontSerif, fontSize: { xs: '1rem', md: '1.0625rem' }, fontWeight: 400, lineHeight: 1.65, color: t.foreground, mb: 2 }}>
                {designHelp.lead}
              </Typography>
              <Typography sx={{ ...type.body, fontSize: '0.9375rem', color: t.mutedForeground, lineHeight: 1.7 }}>
                {designHelp.body}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Button
                onClick={() => openIntroSessionWhatsApp('home_need_design_help')}
                sx={{
                  ...type.button,
                  borderRadius: t.radius,
                  bgcolor: t.accent,
                  color: t.accentForeground,
                  px: 4,
                  py: 1.75,
                  fontWeight: 700,
                  '&:hover': { bgcolor: '#9a5636' },
                }}
              >
                {designHelp.ctaLabel}
              </Button>
              <Typography sx={{ ...type.sans, fontSize: '0.75rem', color: '#9a8d82', mt: 1.5, lineHeight: 1.5 }}>
                {designHelp.priceNote}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CollectedHomePage;

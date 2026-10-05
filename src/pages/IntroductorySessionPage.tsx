import { useEffect, useState, type ReactNode } from 'react';
import { useScrollDepthTracking } from '../hooks/useScrollDepthTracking';
import { Box, Typography, type SxProps, type Theme } from '@mui/material';
import BookSessionCtaButton from '../components/BookSessionCtaButton';
import BeforeAfterComparison from '../components/BeforeAfterComparison';
import SectionLabel from '../components/SectionLabel';
import { introSessionContent } from '../utils/introSessionContent';
import {
  lovableSpacing as sp,
  lovableTokens as t,
  lovableTypography as type,
  maxContent,
  sectionPadding,
} from '../theme/lovableTokens';

const StepNumber = ({ children, sx }: { children: ReactNode; sx?: SxProps<Theme> }) => (
  <Typography
    component="span"
    sx={{ display: 'block', mb: 3, color: t.accent, ...type.number, ...sx }}
  >
    {children}
  </Typography>
);

const IntroductorySessionPage = () => {
  const [showStickyCta, setShowStickyCta] = useState(false);
  const content = introSessionContent;

  useScrollDepthTracking('/consultation/introductory-session');

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCta(window.scrollY > window.innerHeight * 0.5);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: t.background,
        color: t.foreground,
        pb: showStickyCta ? 9 : 0,
      }}
    >
      <Box
        component="section"
        sx={{
          position: 'relative',
          height: { xs: '100svh', md: '100svh' },
          minHeight: 640,
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src={content.heroImage}
          alt="Warm minimalist interior with natural light"
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <Box sx={{ position: 'absolute', inset: 0, background: t.heroGradient }} />
        <Box
          sx={{
            ...maxContent,
            position: 'relative',
            zIndex: 10,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            px: sp.pagePx,
            pb: sp.heroPb,
          }}
        >
          <Box sx={{ maxWidth: 720 }}>
            <SectionLabel tone="onDark" sx={{ mb: 3 }}>
              {content.hero.eyebrow}
            </SectionLabel>
            <Typography
              component="h1"
              sx={{
                ...type.h1,
                color: t.onDark,
              }}
            >
              {content.hero.headline.before}
              <br />
              <Box component="span" sx={{ fontStyle: 'italic' }}>
                {content.hero.headline.accent}
              </Box>
              <br />
              {content.hero.headline.after}
            </Typography>
            <Typography
              sx={{
                mt: 4,
                maxWidth: 520,
                ...type.body,
                lineHeight: 1.6,
                color: t.onDarkMuted,
              }}
            >
              <Box component="span" sx={{ display: { xs: 'inline', sm: 'none' } }}>
                {content.sessionTime.heroLeadMobile}
              </Box>
              <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
                {content.sessionTime.heroLead}
              </Box>
            </Typography>
            <Box
              sx={{
                mt: 5,
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'stretch', sm: 'center' },
                gap: 3,
              }}
            >
              <BookSessionCtaButton variant="onDark" trackingSection="intro_hero" />
              <Box sx={{ color: t.onDarkMuted }}>
                <Typography
                  component="span"
                  sx={{
                    ...type.number,
                    color: t.onDark,
                    mr: 1,
                  }}
                >
                  {content.sessionTime.price}
                </Typography>
                <Typography component="span" sx={{ ...type.caption, color: 'inherit' }}>
                  {content.sessionTime.priceNote}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box component="section" sx={{ borderBottom: `1px solid ${t.border}`, bgcolor: t.card }}>
        <Box
          sx={{
            ...maxContent,
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          }}
        >
          {content.benefits.map((benefit, index) => (
            <Box
              key={benefit.title}
              sx={{
                px: { xs: 4, md: 6 },
                py: { xs: 6, md: 8 },
                borderTop: { xs: index > 0 ? `1px solid ${t.border}` : 'none', md: 'none' },
                borderLeft: {
                  md: index > 0 ? `1px solid ${t.border}` : 'none',
                },
              }}
            >
              <StepNumber>{String(index + 1).padStart(2, '0')}</StepNumber>
              <Typography component="h3" sx={{ ...type.h3, color: t.foreground }}>
                {benefit.title}
              </Typography>
              <Typography
                sx={{
                  mt: 2,
                  ...type.body,
                  fontSize: '1rem',
                  color: t.mutedForeground,
                }}
              >
                {benefit.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box component="section" sx={{ ...sectionPadding, ...maxContent }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
            gap: sp.gridGap,
          }}
        >
          <Box sx={{ position: { lg: 'sticky' }, top: { lg: 96 }, alignSelf: { lg: 'start' } }}>
            <SectionLabel>{content.sessionTime.sectionLabel}</SectionLabel>
            <Typography component="h2" sx={{ ...type.h2Large, color: t.foreground }}>
              An hour of listening.
              <br />
              <Box component="span" sx={{ fontStyle: 'italic', color: t.accent }}>
                A day of clarity.
              </Box>
            </Typography>
            <Typography
              sx={{
                mt: 4,
                maxWidth: 420,
                ...type.body,
                color: t.mutedForeground,
              }}
            >
              {content.sessionTime.sectionIntro}
            </Typography>
          </Box>
          <Box>
            <Box
              component="ol"
              sx={{
                listStyle: 'none',
                m: 0,
                p: 0,
                borderTop: `1px solid ${t.border}`,
                borderBottom: `1px solid ${t.border}`,
              }}
            >
              {content.deliverables.map((item, index) => (
                <Box
                  component="li"
                  key={item}
                  sx={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: 4,
                    py: 4,
                    borderBottom: index < content.deliverables.length - 1 ? `1px solid ${t.border}` : 'none',
                  }}
                >
                  <Typography
                    sx={{
                      ...type.number,
                      color: t.accent,
                      minWidth: 36,
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </Typography>
                  <Typography
                    sx={{
                      ...type.body,
                      lineHeight: 1.5,
                      color: t.foreground,
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Typography sx={{ mt: 4, ...type.caption, color: t.mutedForeground }}>
              {content.finePrint}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box component="section" sx={{ bgcolor: t.card }}>
        <Box
          sx={{
            ...maxContent,
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
          }}
        >
          <Box
            sx={{
              position: 'relative',
              aspectRatio: { xs: '4 / 5', lg: 'auto' },
              minHeight: { lg: 560 },
            }}
          >
            <BeforeAfterComparison
              {...content.caseStudyComparison}
              sx={{
                height: '100%',
                minHeight: { xs: 420, md: 480, lg: 560 },
                borderRadius: 0,
                border: 'none',
                boxShadow: 'none',
              }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              px: { xs: 3, md: 'clamp(2rem, 12%, 6rem)' },
              py: { xs: 8, md: 14 },
            }}
          >
            <SectionLabel sx={{ mb: 2 }}>Example project</SectionLabel>
            <Typography component="h2" sx={{ ...type.h2, lineHeight: 1.15, color: t.foreground }}>
              {content.caseStudy.title}
            </Typography>
            <Box sx={{ mt: 5, display: 'flex', flexDirection: 'column', gap: 3 }}>
              {content.caseStudy.paragraphs.map((paragraph) => (
                <Typography
                  key={paragraph}
                  sx={{
                    ...type.body,
                    fontSize: '1rem',
                    color: t.mutedForeground,
                  }}
                >
                  {paragraph}
                </Typography>
              ))}
            </Box>
            <Box
              component="blockquote"
              sx={{
                mt: 7.5,
                mx: 0,
                mb: 0,
                borderLeft: `2px solid ${t.accent}`,
                pl: 3,
              }}
            >
              <Typography sx={{ ...type.quote, color: t.foreground }}>
                &ldquo;{content.testimonial.quote}&rdquo;
              </Typography>
              <Typography
                component="footer"
                sx={{ mt: 1.5, ...type.caption, color: t.mutedForeground }}
              >
                {content.testimonial.attribution}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box component="section" sx={{ ...sectionPadding, ...maxContent }}>
        <Box sx={{ mb: 8, maxWidth: 640 }}>
          <SectionLabel>What we can discuss</SectionLabel>
          <Typography component="h2" sx={{ ...type.h2, color: t.foreground }}>
            Spaces I work with.
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(6, 1fr)',
            },
            gap: sp.tagGrid,
          }}
        >
          {content.topics.map((topic, index) => (
            <Box key={topic} sx={{ borderTop: `1px solid ${t.border}`, pt: 2.5 }}>
              <Typography sx={{ ...type.number, color: t.accent }}>
                {String(index + 1).padStart(2, '0')}
              </Typography>
              <Typography
                sx={{
                  mt: 1.5,
                  fontFamily: t.fontSerif,
                  fontWeight: 400,
                  fontSize: '1.25rem',
                  color: t.foreground,
                }}
              >
                {topic}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        id="book"
        component="section"
        sx={{
          position: 'relative',
          minHeight: { xs: 520, md: 620 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src={content.ctaImage}
          alt="Interior design consultation"
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <Box sx={{ position: 'absolute', inset: 0, background: t.ctaGradient }} />
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            px: 3,
            py: { xs: 10, md: 12 },
            maxWidth: 720,
          }}
        >
          <SectionLabel tone="onDark" sx={{ mb: 0, textAlign: 'center' }}>
            {content.hero.sectionLabel}
          </SectionLabel>
          <Typography
            component="h2"
            sx={{
              mt: 3,
              ...type.h2,
              fontStyle: 'italic',
              lineHeight: 1.15,
              color: t.onDark,
            }}
          >
            A clearer picture of your next steps.
          </Typography>
          <Typography
            sx={{
              mt: 3,
              ...type.body,
              fontSize: '1rem',
              color: t.onDarkMuted,
            }}
          >
            {content.sessionTime.ctaNote}
          </Typography>
          <Box
            sx={{
              mt: 5,
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              gap: 3,
            }}
          >
            <BookSessionCtaButton variant="onDark" trackingSection="intro_cta_section" />
            <Typography sx={{ ...type.caption, color: t.onDarkSoft }}>
              Reply within 1 business day
            </Typography>
          </Box>
        </Box>
      </Box>

      {showStickyCta && (
        <Box
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1200,
            display: { xs: 'flex', md: 'none' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            px: 2,
            py: 1.5,
            bgcolor: t.background,
            borderTop: `1px solid ${t.border}`,
            boxShadow: '0 -4px 20px rgba(58, 52, 46, 0.08)',
          }}
        >
          <Box>
            <Typography sx={{ ...type.number, fontSize: '1.125rem', lineHeight: 1.2, color: t.foreground }}>
              {content.sessionTime.price}
            </Typography>
            <Typography sx={{ ...type.caption, letterSpacing: '0.14em', color: t.mutedForeground }}>
              {content.sessionTime.priceNote}
            </Typography>
          </Box>
          <BookSessionCtaButton variant="compact" trackingSection="intro_sticky" />
        </Box>
      )}
    </Box>
  );
};

export default IntroductorySessionPage;

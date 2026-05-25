import { Button, type SxProps, type Theme } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { introSessionContent, openIntroSessionWhatsApp } from '../utils/introSessionContent';
import { lovableTokens as t, lovableTypography as type } from '../theme/lovableTokens';

type BookSessionCtaVariant = 'primary' | 'onDark' | 'compact';

const variantSx: Record<BookSessionCtaVariant, SxProps<Theme>> = {
  primary: {
    bgcolor: t.primary,
    color: t.primaryForeground,
    px: 4,
    py: 2,
    '&:hover': {
      bgcolor: t.accent,
      color: t.accentForeground,
    },
  },
  onDark: {
    bgcolor: t.background,
    color: t.foreground,
    px: 4,
    py: 2,
    '&:hover': {
      bgcolor: t.accent,
      color: t.accentForeground,
    },
  },
  compact: {
    bgcolor: t.primary,
    color: t.primaryForeground,
    px: 2.5,
    py: 1.25,
    fontSize: '0.75rem',
    flexShrink: 0,
    '&:hover': {
      bgcolor: t.accent,
      color: t.accentForeground,
    },
  },
};

interface BookSessionCtaButtonProps {
  variant?: BookSessionCtaVariant;
  fullWidth?: boolean;
  /** GA4 section/placement for intro_session_whatsapp_click */
  trackingSection?: string;
}

const BookSessionCtaButton = ({
  variant = 'primary',
  fullWidth,
  trackingSection = 'book_session_cta',
}: BookSessionCtaButtonProps) => (
  <Button
    onClick={() => openIntroSessionWhatsApp(trackingSection)}
    startIcon={
      <WhatsAppIcon sx={{ fontSize: variant === 'compact' ? '1rem' : '1.125rem' }} />
    }
    sx={{
      borderRadius: t.radius,
      ...type.button,
      ...variantSx[variant],
      ...(fullWidth ? { width: '100%' } : {}),
    }}
  >
    {introSessionContent.hero.ctaLabel}
  </Button>
);

export default BookSessionCtaButton;

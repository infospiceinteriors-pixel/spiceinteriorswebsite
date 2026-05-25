/**
 * Design tokens from the Lovable styles.css source of truth.
 * Solid colors use hex — MUI createTheme decomposes palette colors and does not support oklch().
 * Gradients keep oklch for CSS-only usage in sx props.
 */
export const lovableTokens = {
  radius: '0.25rem',
  background: '#fdfaf4',
  foreground: '#211912',
  card: '#f9f5ec',
  cardForeground: '#211912',
  primary: '#32261c',
  primaryForeground: '#f9f5ec',
  secondary: '#eee7db',
  secondaryForeground: '#32261c',
  muted: '#f0eae1',
  mutedForeground: '#685b4f',
  accent: '#af6340',
  accentForeground: '#fdfaf4',
  border: '#dfd6cb',
  ring: '#af6340',
  fontSerif: "'Instrument Serif', Georgia, serif",
  fontBrand: "'The Seasons', 'the-seasons', Georgia, serif",
  fontSans: "'Inter', system-ui, sans-serif",
  maxWidth: 1280,
  /** Cream text on hero / dark imagery (≈ text-background) */
  onDark: '#fdfaf4',
  onDarkMuted: 'rgba(253, 250, 244, 0.85)',
  onDarkSoft: 'rgba(253, 250, 244, 0.8)',
  heroGradient:
    'linear-gradient(to bottom, oklch(0.22 0.018 60 / 0.4) 0%, oklch(0.22 0.018 60 / 0.2) 45%, oklch(0.22 0.018 60 / 0.7) 100%)',
  ctaGradient:
    'linear-gradient(to bottom, oklch(0.22 0.018 60 / 0.55) 0%, oklch(0.22 0.018 60 / 0.75) 100%)',
} as const;

export const maxContent = { maxWidth: lovableTokens.maxWidth, mx: 'auto', width: '100%' } as const;

/** Tailwind → MUI spacing (1 unit = 8px) */
export const lovableSpacing = {
  pagePx: { xs: 3, md: 6 },
  sectionPy: { xs: 12, md: 16 },
  heroPb: { xs: 8, md: 12 },
  gridGap: { xs: 8, lg: 12 },
  tagGrid: { columnGap: 4, rowGap: 5 },
} as const;

export const sectionPadding = { px: lovableSpacing.pagePx, py: lovableSpacing.sectionPy } as const;

/** Instrument Serif 400 + Inter 300 scale from Lovable */
export const lovableTypography = {
  serif: { fontFamily: lovableTokens.fontSerif, fontWeight: 400 },
  sans: { fontFamily: lovableTokens.fontSans, fontWeight: 300 },
  h1: {
    fontFamily: lovableTokens.fontSerif,
    fontWeight: 400,
    fontSize: { xs: '2.25rem', md: '3.5rem', lg: '4rem' },
    lineHeight: 1.05,
  },
  h2: {
    fontFamily: lovableTokens.fontSerif,
    fontWeight: 400,
    fontSize: { xs: '2.25rem', md: '3rem' },
    lineHeight: 1.1,
  },
  h2Large: {
    fontFamily: lovableTokens.fontSerif,
    fontWeight: 400,
    fontSize: { xs: '2.25rem', md: '3.75rem' },
    lineHeight: 1.1,
  },
  h3: {
    fontFamily: lovableTokens.fontSerif,
    fontWeight: 400,
    fontSize: { xs: '1.875rem', md: '2.25rem' },
    lineHeight: 1.1,
  },
  body: {
    fontFamily: lovableTokens.fontSans,
    fontWeight: 300,
    fontSize: { xs: '1rem', md: '1.125rem' },
    lineHeight: 1.7,
  },
  label: {
    fontFamily: lovableTokens.fontSans,
    fontWeight: 300,
    fontSize: '0.75rem',
    letterSpacing: '0.3em',
    textTransform: 'uppercase' as const,
  },
  caption: {
    fontFamily: lovableTokens.fontSans,
    fontWeight: 300,
    fontSize: '0.75rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase' as const,
  },
  button: {
    fontFamily: lovableTokens.fontSans,
    fontWeight: 300,
    fontSize: '0.875rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase' as const,
  },
  number: {
    fontFamily: lovableTokens.fontSerif,
    fontWeight: 400,
    fontSize: '1.5rem',
    lineHeight: 1,
  },
  quote: {
    fontFamily: lovableTokens.fontSerif,
    fontWeight: 400,
    fontStyle: 'italic' as const,
    fontSize: { xs: '1.25rem', md: '1.5rem' },
    lineHeight: 1.4,
  },
} as const;

import { Typography, type SxProps, type Theme } from '@mui/material';
import type { ReactNode } from 'react';
import { lovableTokens as t, lovableTypography as type } from '../theme/lovableTokens';

const sectionLabelColors = {
  default: t.accent,
  onDark: t.onDarkMuted,
  muted: t.mutedForeground,
} as const;

interface SectionLabelProps {
  children: ReactNode;
  tone?: keyof typeof sectionLabelColors;
  sx?: SxProps<Theme>;
}

const SectionLabel = ({ children, tone = 'default', sx }: SectionLabelProps) => (
  <Typography
    sx={{
      display: 'block',
      mb: 3,
      color: sectionLabelColors[tone],
      ...type.label,
      ...sx,
    }}
  >
    {children}
  </Typography>
);

export default SectionLabel;

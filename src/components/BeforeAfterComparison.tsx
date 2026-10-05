import { useState } from 'react';
import { Box, Typography, type SxProps, type Theme } from '@mui/material';
import { lovableTokens as t, lovableTypography as type } from '../theme/lovableTokens';

interface BeforeAfterComparisonProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel: string;
  afterLabel: string;
  ariaLabel: string;
  sx?: SxProps<Theme>;
}

const imageSx = {
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
} as const;

const labelSx = {
  ...type.caption,
  position: 'absolute',
  bottom: { xs: 14, sm: 18 },
  zIndex: 3,
  color: t.onDark,
  textShadow: '0 2px 12px rgba(33, 25, 18, 0.45)',
  pointerEvents: 'none',
} as const;

const BeforeAfterComparison = ({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  beforeLabel,
  afterLabel,
  ariaLabel,
  sx,
}: BeforeAfterComparisonProps) => {
  const [position, setPosition] = useState(52);

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '2rem',
        border: `1px solid ${t.border}`,
        bgcolor: t.card,
        boxShadow: '0 8px 32px rgba(33, 25, 18, 0.08)',
        height: { xs: 280, sm: 360, md: 420, lg: 480 },
        '&:focus-within .comparison-handle': {
          boxShadow: '0 0 0 4px rgba(175, 99, 64, 0.24), 0 8px 22px rgba(33, 25, 18, 0.18)',
        },
        ...sx,
      }}
    >
      <Box component="img" src={afterImage} alt={afterAlt} loading="eager" sx={imageSx} />
      <Box sx={{ position: 'absolute', inset: 0, clipPath: `inset(0 ${100 - position}% 0 0)`, zIndex: 1 }}>
        <Box component="img" src={beforeImage} alt={beforeAlt} loading="eager" sx={imageSx} />
      </Box>
      <Typography sx={{ ...labelSx, left: { xs: '14px', sm: '18px' } }}>{beforeLabel}</Typography>
      <Typography sx={{ ...labelSx, right: { xs: '14px', sm: '18px' } }}>{afterLabel}</Typography>
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: `${position}%`,
          zIndex: 2,
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        <Box sx={{ width: 2, height: '100%', bgcolor: t.accent, boxShadow: '0 0 0 1px rgba(253, 250, 244, 0.55)' }} />
        <Box
          className="comparison-handle"
          sx={{
            position: 'absolute',
            width: { xs: 42, sm: 48 },
            height: { xs: 42, sm: 48 },
            borderRadius: '50%',
            bgcolor: t.card,
            border: `1px solid ${t.border}`,
            boxShadow: '0 8px 22px rgba(33, 25, 18, 0.18)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 0.6,
          }}
        >
          <Box sx={{ width: 0, height: 0, borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderRight: `6px solid ${t.accent}` }} />
          <Box sx={{ width: 0, height: 0, borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderLeft: `6px solid ${t.accent}` }} />
        </Box>
      </Box>
      <Box
        component="input"
        type="range"
        min={0}
        max={100}
        value={position}
        aria-label={ariaLabel}
        onChange={(event) => setPosition(Number(event.target.value))}
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 4,
          width: '100%',
          height: '100%',
          m: 0,
          opacity: 0,
          cursor: 'ew-resize',
        }}
      />
    </Box>
  );
};

export default BeforeAfterComparison;

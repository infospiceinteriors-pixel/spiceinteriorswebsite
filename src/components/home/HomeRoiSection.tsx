import { Box, Typography } from '@mui/material';
import { homeRoi } from '../../utils/homePageContent';
import {
  lovableSpacing as sp,
  lovableTokens as t,
  lovableTypography as type,
  maxContent,
} from '../../theme/lovableTokens';

const HomeRoiSection = () => (
  <Box component="section" sx={{ bgcolor: t.background, py: sp.sectionPy }}>
    <Box
      sx={{
        ...maxContent,
        px: sp.pagePx,
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', lg: '1.1fr 0.9fr' },
        gap: { xs: 4, lg: 8 },
        alignItems: 'center',
      }}
    >
      <Box>
        <Typography component="h2" sx={{ ...type.h2, color: t.foreground, mb: 3 }}>
          {homeRoi.title}
        </Typography>
        {homeRoi.paragraphs.map((paragraph) => (
          <Typography key={paragraph.slice(0, 24)} sx={{ ...type.body, color: t.mutedForeground, mb: 2 }}>
            {paragraph}
          </Typography>
        ))}
      </Box>
      <Box
        component="img"
        src={homeRoi.image}
        alt={homeRoi.imageAlt}
        loading="lazy"
        sx={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover', display: 'block' }}
      />
    </Box>
  </Box>
);

export default HomeRoiSection;

'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import { useTranslation } from '../../i18n/useTranslation';
import { getCta } from '../../constants/content';

export default function CtaBanner() {
  const { t } = useTranslation();
  const content = getCta(t);

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        background: 'linear-gradient(135deg, #FF6B4A 0%, #FFB830 50%, #00B4A0 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <Typography variant="h2" sx={{ color: '#FFFFFF', mb: 2 }}>
          {content.headline}
        </Typography>
        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.88)', mb: 4, maxWidth: 500, mx: 'auto' }}>
          {content.subtitle}
        </Typography>
        <Button
          variant="contained"
          size="large"
          component={Link}
          href="/menu"
          endIcon={<ArrowForwardIcon />}
          sx={{
            background: 'linear-gradient(135deg, #FFFFFF 0%, #FFF5F0 100%)',
            color: '#E5502D',
            fontWeight: 700,
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            '&:hover': { background: '#FFFFFF', boxShadow: '0 6px 28px rgba(0,0,0,0.20)' },
          }}
        >
          {content.buttonLabel}
        </Button>
        <Typography variant="caption" sx={{ display: 'block', color: 'rgba(255,255,255,0.7)', mt: 2 }}>
          {content.note}
        </Typography>
      </Container>
    </Box>
  );
}

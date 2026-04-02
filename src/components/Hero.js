'use client';

import { Box, Container, Typography, Button, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

/**
 * Warm, light-mode Hero for the fruteria tenant demo.
 * Uses a warm gradient background instead of the core's dark radial gradient.
 */
export default function Hero({ content }) {
  return (
    <Box
      component="section"
      id="hero"
      sx={{
        position: 'relative',
        minHeight: { xs: '90vh', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(145deg, #E5502D 0%, #FF6B4A 25%, #FFB830 50%, #00B4A0 75%, #008F7D 100%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(67,160,71,0.15) 0%, transparent 40%)',
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 120,
          background: (theme) =>
            `linear-gradient(to top, ${theme.palette.background.default} 0%, transparent 100%)`,
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack alignItems="center" textAlign="center" spacing={3}>
          <Typography
            variant="overline"
            component="p"
            sx={{
              color: 'rgba(255,255,255,0.80)',
              letterSpacing: '0.15em',
              fontSize: '0.8rem',
            }}
          >
            {content.overline}
          </Typography>

          <Typography
            variant="h1"
            component="h1"
            sx={{ color: '#FFFFFF' }}
          >
            {content.headline}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.80)',
              maxWidth: 560,
              mx: 'auto',
              fontSize: '1.125rem',
            }}
          >
            {content.subtitle}
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ pt: 2 }}
          >
            <Button
              variant="contained"
              size="large"
              href="#menu"
              endIcon={<ArrowForwardIcon />}
              sx={{
                background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F0EB 100%)',
                color: '#C06020',
                fontWeight: 700,
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                '&:hover': {
                  background: '#FFFFFF',
                  boxShadow: '0 6px 28px rgba(0,0,0,0.20)',
                },
              }}
            >
              {content.primaryCta}
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="#locations"
              sx={{
                borderColor: 'rgba(255,255,255,0.5)',
                color: '#FFFFFF',
                '&:hover': {
                  borderColor: '#FFFFFF',
                  backgroundColor: 'rgba(255,255,255,0.08)',
                },
              }}
            >
              {content.secondaryCta}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

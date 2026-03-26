'use client';

import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useTranslation } from '../../i18n/useTranslation';
import { getAbout } from '../../constants/content';

export default function AboutSection() {
  const { t } = useTranslation();
  const content = getAbout(t);

  return (
    <Box component="section" id="about" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                height: { xs: 300, md: 400 },
                borderRadius: 4,
                background: 'linear-gradient(145deg, #FF6B4A 0%, #FFB830 50%, #00B4A0 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.2) 0%, transparent 50%)',
                },
              }}
            >
              <Typography sx={{ fontSize: '6rem', position: 'relative', zIndex: 1 }}>🥤</Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.15em', fontWeight: 700 }}>
              {content.overline}
            </Typography>
            <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
              {content.headline}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
              {content.description}
            </Typography>
            <Stack spacing={1.5}>
              {content.highlights.map((highlight) => (
                <Box key={highlight} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <CheckCircleIcon sx={{ color: 'secondary.main', fontSize: 22 }} />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {highlight}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

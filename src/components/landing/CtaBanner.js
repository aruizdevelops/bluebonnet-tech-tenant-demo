'use client';

import { Box, Container, Typography, Button, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { CTA } from '../../constants/content';

export default function CtaBanner() {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 10, md: 14 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: (theme) =>
            `radial-gradient(ellipse at 50% 100%, ${theme.palette.primary.main}1A 0%, transparent 60%)`,
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack alignItems="center" textAlign="center" spacing={3}>
          <Typography variant="h2" component="h2">
            {CTA.headline}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {CTA.subtitle}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="#contact"
            endIcon={<ArrowForwardIcon />}
            sx={{ mt: 2 }}
          >
            {CTA.buttonLabel}
          </Button>
          <Typography variant="caption" color="text.secondary">
            {CTA.note}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

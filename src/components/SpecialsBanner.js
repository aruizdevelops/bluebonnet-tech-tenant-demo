'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Stack,
} from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

export default function SpecialsBanner({ content }) {
  return (
    <Box
      component="section"
      id="specials"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        background: (theme) =>
          `linear-gradient(135deg, ${theme.palette.primary.main}0A 0%, ${theme.palette.secondary.main}0A 100%)`,
      }}
    >
      <Container>
        <Stack alignItems="center" textAlign="center" spacing={2} sx={{ mb: 6 }}>
          <Typography
            variant="overline"
            component="p"
            sx={{ color: 'secondary.dark' }}
          >
            {content.overline}
          </Typography>
          <Typography variant="h2" component="h2">
            {content.headline}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 520 }}
          >
            {content.subtitle}
          </Typography>
        </Stack>

        <Grid container spacing={3} justifyContent="center">
          {content.items.map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.name}>
              <Card
                sx={{
                  height: '100%',
                  p: 1,
                  borderLeft: (theme) => `4px solid ${theme.palette.secondary.main}`,
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 32px rgba(45, 24, 16, 0.10)',
                  },
                }}
              >
                <CardContent sx={{ p: 2.5 }}>
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1.5 }}>
                    <AutoAwesomeIcon sx={{ color: 'secondary.main', fontSize: 20 }} />
                    <Chip
                      label={item.badge}
                      size="small"
                      sx={{
                        fontWeight: 600,
                        fontSize: '0.7rem',
                        backgroundColor: 'secondary.main',
                        color: 'secondary.contrastText',
                      }}
                    />
                  </Stack>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ fontWeight: 700, fontSize: '1.05rem', mb: 1 }}
                  >
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

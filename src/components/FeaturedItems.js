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

export default function FeaturedItems({ content }) {
  return (
    <Box
      component="section"
      id="menu"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
      }}
    >
      <Container>
        <Stack alignItems="center" textAlign="center" spacing={2} sx={{ mb: 6 }}>
          <Typography
            variant="overline"
            component="p"
            sx={{ color: 'primary.main' }}
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

        <Grid container spacing={3}>
          {content.items.map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.name}>
              <Card
                sx={{
                  height: '100%',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 32px rgba(45, 24, 16, 0.12)',
                  },
                }}
              >
                {/* Color placeholder for product image */}
                <Box
                  sx={{
                    height: 180,
                    background: `linear-gradient(135deg, ${item.color}22 0%, ${item.color}44 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '3.5rem',
                      opacity: 0.7,
                      userSelect: 'none',
                    }}
                    aria-hidden="true"
                  >
                    {item.name.includes('Mango') && '\uD83E\uDD6D'}
                    {item.name.includes('Fresa') && '\uD83C\uDF53'}
                    {item.name.includes('Elote') && '\uD83C\uDF3D'}
                    {item.name.includes('Bionico') && '\uD83C\uDF52'}
                  </Typography>
                  {item.badge && (
                    <Chip
                      label={item.badge}
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        fontWeight: 600,
                        fontSize: '0.7rem',
                        backgroundColor: item.color,
                        color: '#FFFFFF',
                      }}
                    />
                  )}
                </Box>
                <CardContent sx={{ p: 2.5 }}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                    sx={{ mb: 1 }}
                  >
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 700, fontSize: '1.05rem' }}>
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 700, color: 'primary.main', whiteSpace: 'nowrap', ml: 1 }}
                    >
                      {item.price}
                    </Typography>
                  </Stack>
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

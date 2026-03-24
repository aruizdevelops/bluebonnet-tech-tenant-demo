'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Divider,
} from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function LocationHours({ content }) {
  return (
    <Box
      component="section"
      id="locations"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.paper',
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

        <Grid container spacing={4} justifyContent="center">
          {content.items.map((location) => (
            <Grid size={{ xs: 12, md: 6 }} key={location.name}>
              <Card
                sx={{
                  height: '100%',
                  p: 1,
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 32px rgba(45, 24, 16, 0.10)',
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{ fontWeight: 700, mb: 2.5 }}
                  >
                    {location.name}
                  </Typography>

                  <Stack spacing={2}>
                    <Stack direction="row" alignItems="flex-start" spacing={1.5}>
                      <PlaceIcon sx={{ color: 'primary.main', fontSize: 22, mt: 0.2 }} />
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {location.address}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {location.city}
                        </Typography>
                      </Box>
                    </Stack>

                    <Stack direction="row" alignItems="center" spacing={1.5}>
                      <PhoneIcon sx={{ color: 'primary.main', fontSize: 22 }} />
                      <Typography
                        variant="body2"
                        component="a"
                        href={`tel:${location.phone.replace(/\D/g, '')}`}
                        sx={{
                          fontWeight: 500,
                          color: 'text.primary',
                          textDecoration: 'none',
                          '&:hover': { color: 'primary.main' },
                        }}
                      >
                        {location.phone}
                      </Typography>
                    </Stack>

                    <Divider sx={{ my: 0.5 }} />

                    <Stack direction="row" alignItems="flex-start" spacing={1.5}>
                      <AccessTimeIcon sx={{ color: 'primary.main', fontSize: 22, mt: 0.2 }} />
                      <Box>
                        {location.hours.map((schedule) => (
                          <Stack
                            key={schedule.days}
                            direction="row"
                            justifyContent="space-between"
                            sx={{ minWidth: 240, mb: 0.5 }}
                          >
                            <Typography variant="body2" sx={{ fontWeight: 500 }}>
                              {schedule.days}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ ml: 2 }}>
                              {schedule.time}
                            </Typography>
                          </Stack>
                        ))}
                      </Box>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

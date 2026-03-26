'use client';

import { Box, Container, Typography, Grid, Card, CardContent, Rating, Avatar } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { useTranslation } from '../../i18n/useTranslation';
import { getTestimonials } from '../../constants/content';

export default function TestimonialsSection() {
  const { t } = useTranslation();
  const content = getTestimonials(t);

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: '0.15em', fontWeight: 700 }}>
            {content.overline}
          </Typography>
          <Typography variant="h2" sx={{ mt: 1 }}>
            {content.headline}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {content.items.map((item) => (
            <Grid key={item.name} size={{ xs: 12, md: 4 }}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 3 }}>
                  <FormatQuoteIcon sx={{ color: 'primary.main', fontSize: 32, mb: 1, opacity: 0.5 }} />
                  <Typography variant="body1" sx={{ mb: 3, fontStyle: 'italic', lineHeight: 1.7 }}>
                    "{item.quote}"
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar sx={{ bgcolor: 'primary.main', width: 40, height: 40, fontWeight: 700, fontSize: '0.9rem' }}>
                      {item.name.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                        {item.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {item.role} — {item.company}
                      </Typography>
                    </Box>
                    <Box sx={{ ml: 'auto' }}>
                      <Rating value={item.rating} readOnly size="small" />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

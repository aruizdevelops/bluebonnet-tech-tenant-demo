'use client';

import { Box, Container, Typography, Grid, Card, CardContent, Chip } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { useTranslation } from '../../i18n/useTranslation';
import { getPromotions } from '../../constants/content';

export default function PromotionsSection() {
  const { t } = useTranslation();
  const content = getPromotions(t);

  const colors = ['#FF6B4A', '#00B4A0', '#FFB830'];

  return (
    <Box component="section" id="promotions" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.15em', fontWeight: 700 }}>
            {content.overline}
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
            {content.headline}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            {content.subtitle}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {content.items.map((item, index) => (
            <Grid key={item.name} size={{ xs: 12, md: 4 }}>
              <Card sx={{ height: '100%', position: 'relative', overflow: 'visible' }}>
                <Box
                  sx={{
                    position: 'absolute',
                    top: -12,
                    left: 20,
                    bgcolor: colors[index % colors.length],
                    color: '#FFFFFF',
                    px: 2,
                    py: 0.5,
                    borderRadius: 2,
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    boxShadow: `0 4px 12px ${colors[index % colors.length]}40`,
                  }}
                >
                  {item.badge}
                </Box>
                <CardContent sx={{ pt: 4, pb: 3, px: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                    <LocalOfferIcon sx={{ color: colors[index % colors.length], fontSize: 22 }} />
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {item.name}
                    </Typography>
                  </Box>
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

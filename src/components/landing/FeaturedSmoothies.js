'use client';

import { Box, Container, Typography, Grid, Card, CardContent, Button, Chip } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useTranslation } from '../../i18n/useTranslation';
import { getFeaturedSmoothies } from '../../constants/smoothies';
import { useCart } from '../../context/CartContext';

export default function FeaturedSmoothies() {
  const { t } = useTranslation();
  const { addToCart } = useCart();
  const featured = getFeaturedSmoothies(t).slice(0, 4);

  return (
    <Box component="section" id="featured" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.15em', fontWeight: 700 }}>
            {t('featured.overline')}
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
            {t('featured.headline')}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            {t('featured.subtitle')}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {featured.map((smoothie) => (
            <Grid key={smoothie.id} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  '&:hover': { transform: 'translateY(-4px)' },
                  transition: 'transform 300ms',
                }}
              >
                <Box
                  sx={{
                    background: smoothie.gradient,
                    height: 160,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  <Typography sx={{ fontSize: '4rem' }}>{smoothie.emoji}</Typography>
                  {smoothie.category === 'specialty' && (
                    <Chip
                      label={t('menu.specialty')}
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        bgcolor: 'rgba(255,255,255,0.9)',
                        fontWeight: 600,
                        fontSize: '0.7rem',
                      }}
                    />
                  )}
                </Box>
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 2.5 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                    {smoothie.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1, lineHeight: 1.5 }}>
                    {smoothie.description.length > 100 ? smoothie.description.substring(0, 100) + '...' : smoothie.description}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>
                      ${smoothie.price.toFixed(2)}
                    </Typography>
                    <Button
                      variant="contained"
                      size="small"
                      startIcon={<AddShoppingCartIcon />}
                      onClick={() => addToCart(smoothie)}
                    >
                      {t('cart.add')}
                    </Button>
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

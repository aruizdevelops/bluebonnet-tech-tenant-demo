'use client';

import { Box, Container, Typography, Grid, Card, CardContent, Button, Chip, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Link from 'next/link';
import { useTranslation } from '../../i18n/useTranslation';
import { getRegularSmoothies, getSpecialtySmoothies } from '../../constants/smoothies';
import { useCart } from '../../context/CartContext';

function SmoothieCard({ smoothie, t, onAdd }) {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'row', overflow: 'hidden', '&:hover': { transform: 'translateY(-2px)' }, transition: 'transform 300ms' }}>
      <Box
        sx={{
          background: smoothie.gradient,
          width: 100,
          minHeight: 120,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <Typography sx={{ fontSize: '2.5rem' }}>{smoothie.emoji}</Typography>
      </Box>
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', py: 2, px: 2.5, '&:last-child': { pb: 2 } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 0.5 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{smoothie.name}</Typography>
          <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 700, ml: 1, flexShrink: 0 }}>
            ${smoothie.price.toFixed(2)}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5, lineHeight: 1.4 }}>
          {smoothie.description.length > 80 ? smoothie.description.substring(0, 80) + '...' : smoothie.description}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Chip label={`${smoothie.calories} cal`} size="small" variant="outlined" sx={{ fontSize: '0.7rem' }} />
          <Box sx={{ flexGrow: 1 }} />
          <Button size="small" startIcon={<AddShoppingCartIcon sx={{ fontSize: 16 }} />} onClick={() => onAdd(smoothie)}>
            {t('cart.add')}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default function MenuPreview() {
  const { t } = useTranslation();
  const { addToCart } = useCart();
  const regulars = getRegularSmoothies(t).slice(0, 3);
  const specials = getSpecialtySmoothies(t).slice(0, 3);

  return (
    <Box component="section" id="menu" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: '0.15em', fontWeight: 700 }}>
            {t('menu.overline')}
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
            {t('menu.headline')}
          </Typography>
        </Box>

        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
              {t('menu.classicBlends')}
            </Typography>
            <Stack spacing={2}>
              {regulars.map((s) => (
                <SmoothieCard key={s.id} smoothie={s} t={t} onAdd={addToCart} />
              ))}
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
              {t('menu.specialtyCreations')}
            </Typography>
            <Stack spacing={2}>
              {specials.map((s) => (
                <SmoothieCard key={s.id} smoothie={s} t={t} onAdd={addToCart} />
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button variant="contained" size="large" component={Link} href="/menu" endIcon={<ArrowForwardIcon />}>
            {t('menu.viewFullMenu')}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

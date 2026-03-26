'use client';

import { useState } from 'react';
import {
  Box, Container, Typography, Grid, Card, CardContent, Button,
  Chip, Tabs, Tab, Stack, IconButton, Badge, AppBar, Toolbar,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import { useTranslation } from '../../i18n/useTranslation';
import { getSmoothies, getSmoothieCategories } from '../../constants/smoothies';
import { useCart } from '../../context/CartContext';
import CartDrawer from '../cart/CartDrawer';
import LanguagePicker from '../LanguagePicker';

function SmoothieDetailCard({ smoothie, t, onAdd }) {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        opacity: smoothie.available ? 1 : 0.6,
        '&:hover': smoothie.available ? { transform: 'translateY(-4px)' } : {},
        transition: 'transform 300ms',
      }}
    >
      <Box
        sx={{
          background: smoothie.gradient,
          height: 140,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <Typography sx={{ fontSize: '3.5rem' }}>{smoothie.emoji}</Typography>
        {!smoothie.available && (
          <Chip
            label={t('menu.soldOut')}
            size="small"
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              bgcolor: 'rgba(0,0,0,0.7)',
              color: '#FFFFFF',
              fontWeight: 600,
            }}
          />
        )}
        {smoothie.category === 'specialty' && smoothie.available && (
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
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 2.5, '&:last-child': { pb: 2.5 } }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
          {smoothie.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.5, flexGrow: 1 }}>
          {smoothie.description}
        </Typography>

        {/* Nutrition chips */}
        <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', mb: 2 }}>
          <Chip label={`${smoothie.calories} cal`} size="small" variant="outlined" sx={{ fontSize: '0.7rem' }} />
          <Chip label={`${smoothie.protein}g protein`} size="small" variant="outlined" sx={{ fontSize: '0.7rem' }} />
          <Chip label={`${smoothie.fiber}g fiber`} size="small" variant="outlined" sx={{ fontSize: '0.7rem' }} />
        </Box>

        {/* Ingredients */}
        <Typography variant="caption" color="text.secondary" sx={{ mb: 2 }}>
          {smoothie.ingredients.join(' · ')}
        </Typography>

        {/* Price and Add to Cart */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 'auto' }}>
          <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>
            ${smoothie.price.toFixed(2)}
          </Typography>
          <Button
            variant="contained"
            size="small"
            startIcon={<AddShoppingCartIcon />}
            onClick={() => onAdd(smoothie)}
            disabled={!smoothie.available}
          >
            {t('cart.add')}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default function MenuPage() {
  const { t } = useTranslation();
  const { addToCart, itemCount } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const [category, setCategory] = useState('all');

  const allSmoothies = getSmoothies(t);
  const categories = getSmoothieCategories(t);
  const filtered = category === 'all'
    ? allSmoothies
    : allSmoothies.filter((s) => s.category === category);

  return (
    <>
      {/* Fixed Nav */}
      <AppBar
        position="fixed"
        sx={{
          bgcolor: 'rgba(255, 249, 245, 0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container>
          <Toolbar disableGutters sx={{ height: 64 }}>
            <IconButton component={Link} href="/" sx={{ mr: 1 }}>
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6" sx={{ fontWeight: 800, color: 'text.primary', flexGrow: 1 }}>
              {t('menu.pageTitle')}
            </Typography>
            <LanguagePicker sx={{ mr: 1.5 }} />
            <IconButton onClick={() => setCartOpen(true)}>
              <Badge badgeContent={itemCount} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Toolbar />

      {/* Hero area */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #FF6B4A 0%, #FFB830 50%, #00B4A0 100%)',
          py: { xs: 4, md: 6 },
          px: 2,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ color: '#FFFFFF', fontWeight: 800, mb: 1 }}>
            {t('menu.heroTitle')}
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.88)' }}>
            {t('menu.heroSubtitle')}
          </Typography>
        </Container>
      </Box>

      {/* Category Tabs */}
      <Container maxWidth="lg" sx={{ mt: -3, position: 'relative', zIndex: 1 }}>
        <Box sx={{ bgcolor: 'background.paper', borderRadius: 3, boxShadow: '0 4px 20px rgba(0,0,0,0.08)', p: 1, display: 'flex', justifyContent: 'center' }}>
          <Tabs
            value={category}
            onChange={(_, val) => setCategory(val)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTab-root': { fontWeight: 600, textTransform: 'none', minHeight: 48 },
              '& .Mui-selected': { color: 'primary.main' },
            }}
          >
            <Tab label={t('menu.allSmoothies')} value="all" />
            {categories.map((cat) => (
              <Tab key={cat.id} label={cat.name} value={cat.id} />
            ))}
          </Tabs>
        </Box>
      </Container>

      {/* Smoothie Grid */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          {t('menu.showing', { count: filtered.length })}
        </Typography>
        <Grid container spacing={3}>
          {filtered.map((smoothie) => (
            <Grid key={smoothie.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <SmoothieDetailCard smoothie={smoothie} t={t} onAdd={addToCart} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}

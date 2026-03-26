'use client';

import { useState } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from '../../i18n/useTranslation';
import Navigation from './Navigation';
import Hero from './Hero';
import FeaturedSmoothies from './FeaturedSmoothies';
import MenuPreview from './MenuPreview';
import NutritionHighlights from './NutritionHighlights';
import AboutSection from './AboutSection';
import PromotionsSection from './PromotionsSection';
import TestimonialsSection from './TestimonialsSection';
import CtaBanner from './CtaBanner';
import Footer from './Footer';
import CartDrawer from '../cart/CartDrawer';

export default function HomePage() {
  const [cartOpen, setCartOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <Box
        component="a"
        href="#main-content"
        sx={{
          position: 'absolute',
          left: '-9999px',
          top: 'auto',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
          '&:focus': {
            position: 'fixed',
            top: 16,
            left: 16,
            width: 'auto',
            height: 'auto',
            zIndex: 9999,
            bgcolor: 'background.paper',
            color: 'text.primary',
            p: 2,
            borderRadius: 1,
            boxShadow: 4,
          },
        }}
      >
        {t('a11y.skipToContent')}
      </Box>

      <Navigation onCartOpen={() => setCartOpen(true)} />

      <main id="main-content">
        <Hero />
        <FeaturedSmoothies />
        <MenuPreview />
        <NutritionHighlights />
        <AboutSection />
        <PromotionsSection />
        <TestimonialsSection />
        <CtaBanner />
      </main>

      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}

'use client';

import { Box } from '@mui/material';
import {
  TenantProvider,
  CoreThemeProvider,
  Services,
  About,
  Benefits,
  Process,
  Testimonials,
  CtaBanner,
  Footer,
} from '@bluebonnet-tech/core';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import SpaIcon from '@mui/icons-material/Spa';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CakeIcon from '@mui/icons-material/Cake';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import VerifiedIcon from '@mui/icons-material/Verified';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SpeedIcon from '@mui/icons-material/Speed';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import tenantConfig from '../src/config/tenant';
import * as content from '../src/constants/content';
import { LanguageProvider } from '../src/i18n/LanguageContext';
import { useTranslation } from '../src/i18n/useTranslation';
import Navigation from '../src/components/Navigation';
import Hero from '../src/components/Hero';
import FeaturedItems from '../src/components/FeaturedItems';
import SpecialsBanner from '../src/components/SpecialsBanner';
import LocationHours from '../src/components/LocationHours';

const menuIconMap = {
  LocalCafe: LocalCafeIcon,
  Spa: SpaIcon,
  AcUnit: AcUnitIcon,
  Cake: CakeIcon,
  Restaurant: RestaurantIcon,
  LocalBar: LocalBarIcon,
};

const benefitsIconMap = {
  Verified: VerifiedIcon,
  Favorite: FavoriteIcon,
  AutoAwesome: AutoAwesomeIcon,
  Speed: SpeedIcon,
};

const socialIcons = [
  { label: 'Facebook', icon: FacebookIcon, href: '#' },
  { label: 'Instagram', icon: InstagramIcon, href: '#' },
];

function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      {/* Skip to main content link */}
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

      <Navigation content={content.getNavigation(t)} />

      <main id="main-content">
        <Hero content={content.getHero(t)} />
        <FeaturedItems content={content.getFeaturedItems(t)} />
        <Services content={content.getServices(t)} iconMap={menuIconMap} />
        <SpecialsBanner content={content.getSpecials(t)} />
        <About content={content.getAbout(t)} />
        <Benefits content={content.getBenefits(t)} iconMap={benefitsIconMap} />
        <Process content={content.getProcess(t)} />
        <Testimonials content={content.getTestimonials(t)} />
        {/* Anchor for core CtaBanner's hardcoded #contact href */}
        <Box id="contact" component="span" sx={{ display: 'block', mt: -9, pt: 9 }} />
        <LocationHours content={content.getLocations(t)} />
        <CtaBanner content={content.getCta(t)} />
      </main>

      <Footer content={content.getFooter(t)} socialIcons={socialIcons} />
    </>
  );
}

export default function Home() {
  return (
    <TenantProvider config={tenantConfig}>
      <CoreThemeProvider>
        <LanguageProvider>
          <HomePage />
        </LanguageProvider>
      </CoreThemeProvider>
    </TenantProvider>
  );
}

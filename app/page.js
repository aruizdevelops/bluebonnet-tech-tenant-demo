'use client';

import { Box } from '@mui/material';
import { TenantProvider } from '../src/providers/TenantProvider';
import { CoreThemeProvider } from '../src/providers/CoreThemeProvider';
import tenantConfig from '../src/config/tenant';
import {
  Navigation,
  Hero,
  Services,
  About,
  Benefits,
  Process,
  Testimonials,
  CtaBanner,
  Footer,
} from '../src/components/landing';

export default function Home() {
  return (
    <TenantProvider config={tenantConfig}>
      <CoreThemeProvider>
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
          Skip to main content
        </Box>
        <Navigation />
        <main id="main-content">
          <Hero />
          <Services />
          <About />
          <Benefits />
          <Process />
          <Testimonials />
          <CtaBanner />
        </main>
        <Footer />
      </CoreThemeProvider>
    </TenantProvider>
  );
}

'use client';

import { TenantProvider, CoreThemeProvider, LandingPage } from '@bluebonnet-tech/core';
import tenantConfig from '../src/config/tenant';
import * as content from '../src/constants/content';

export default function Home() {
  return (
    <TenantProvider config={tenantConfig}>
      <CoreThemeProvider>
        <LandingPage content={content} />
      </CoreThemeProvider>
    </TenantProvider>
  );
}

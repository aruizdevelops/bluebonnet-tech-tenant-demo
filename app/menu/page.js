'use client';

import { TenantProvider, CoreThemeProvider } from '@bluebonnet-tech/core';
import { LanguageProvider } from '../../src/i18n/LanguageContext';
import { CartProvider } from '../../src/context/CartContext';
import tenantConfig from '../../src/config/tenant';
import MenuPage from '../../src/components/menu/MenuPage';

export default function Menu() {
  return (
    <TenantProvider config={tenantConfig}>
      <CoreThemeProvider>
        <LanguageProvider>
          <CartProvider>
            <MenuPage />
          </CartProvider>
        </LanguageProvider>
      </CoreThemeProvider>
    </TenantProvider>
  );
}

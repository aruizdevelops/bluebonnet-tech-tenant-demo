'use client';

import { Typography, Card, CardContent, Grid, Chip, Stack } from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupIcon from '@mui/icons-material/Group';
import {
  TenantProvider,
  CoreThemeProvider,
  AppShell,
  PageContainer,
  StatusChip,
} from '@bluebonnet-tech/core';
import tenantConfig from '../src/config/tenant';
import { TenantBanner } from '../src/components/TenantBanner';

const stats = [
  { label: 'Orders Today', value: '284', change: '+18%', icon: <StorefrontIcon /> },
  { label: 'Revenue', value: '$23.5K', change: '+12%', icon: <TrendingUpIcon /> },
  { label: 'Customers', value: '1,429', change: '+7%', icon: <GroupIcon /> },
  { label: 'Satisfaction', value: '96%', change: '+2%', icon: <TrendingUpIcon /> },
];

const navItems = [
  { label: 'Dashboard', icon: <StorefrontIcon />, path: '/' },
  { label: 'Orders', icon: <StorefrontIcon />, path: '/orders' },
  { label: 'Customers', icon: <GroupIcon />, path: '/customers' },
  { label: 'Analytics', icon: <TrendingUpIcon />, path: '/analytics' },
];

export default function Home() {
  return (
    <TenantProvider config={tenantConfig}>
      <CoreThemeProvider>
        <AppShell navItems={navItems}>
          <PageContainer
            title="Dashboard"
            subtitle="Welcome back. Here's your daily overview."
          >
            <TenantBanner />

            <Grid container spacing={3} sx={{ mb: 4 }}>
              {stats.map((stat) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={stat.label}>
                  <Card>
                    <CardContent>
                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography variant="overline" color="text.secondary">
                          {stat.label}
                        </Typography>
                        {stat.icon}
                      </Stack>
                      <Typography variant="h3" sx={{ my: 1 }}>
                        {stat.value}
                      </Typography>
                      <Chip
                        label={stat.change}
                        size="small"
                        color="success"
                        variant="outlined"
                      />
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Card>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom>
                  Tenant Status
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  <StatusChip status="active" label="Orders – Live" />
                  <StatusChip status="active" label="Analytics – Live" />
                  <StatusChip status="pending" label="Payments – Setup Required" />
                  <StatusChip status="inactive" label="Notifications – Disabled" />
                </Stack>
              </CardContent>
            </Card>
          </PageContainer>
        </AppShell>
      </CoreThemeProvider>
    </TenantProvider>
  );
}

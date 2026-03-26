'use client';

import { Box, Grid, Typography } from '@mui/material';
import { PageContainer } from '@bluebonnet-tech/core';
import { useTranslation } from '../../../src/i18n/useTranslation';
import MockDataBanner from '../../../src/admin/components/MockDataBanner';
import { HorizontalBarChart, TrendsTable, PerformanceCards } from '../../../src/admin/components/DashboardChart';
import {
  getMockOrdersByCategory, getMockBusiestHours, getMockMonthlyTrends,
  getMockFeaturedPerformance, getMockSpecialsPerformance,
} from '../../../src/admin/constants/dashboardMockData';

export default function AnalyticsPage() {
  const { t } = useTranslation();

  return (
    <PageContainer title={t('admin.analytics.title')} subtitle={t('admin.analytics.subtitle')}>
      <MockDataBanner />

      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <HorizontalBarChart title={t('admin.dashboard.ordersByCategory')} data={getMockOrdersByCategory(t)} labelKey="category" valueKey="orders" color="#FF6B4A" />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <HorizontalBarChart title={t('admin.dashboard.busiestHours')} data={getMockBusiestHours(t)} labelKey="hour" valueKey="orders" color="#00B4A0" />
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <TrendsTable title={t('admin.dashboard.monthlyTrends')} data={getMockMonthlyTrends(t)} periodLabel={t('admin.dashboard.periodMonth')} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <PerformanceCards title={t('admin.dashboard.featuredPerformance')} data={getMockFeaturedPerformance(t)} />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12 }}>
          <PerformanceCards title={t('admin.dashboard.promotionsPerformance')} data={getMockSpecialsPerformance(t)} />
        </Grid>
      </Grid>
    </PageContainer>
  );
}

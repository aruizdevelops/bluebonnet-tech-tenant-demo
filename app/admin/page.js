'use client';

import { useState } from 'react';
import { Box, Grid, ToggleButtonGroup, ToggleButton, Typography, Button } from '@mui/material';
import { PageContainer } from '@bluebonnet-tech/core';
import { useTranslation } from '../../src/i18n/useTranslation';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Link from 'next/link';
import MockDataBanner from '../../src/admin/components/MockDataBanner';
import DashboardKpiCard from '../../src/admin/components/DashboardKpiCard';
import {
  HorizontalBarChart, RankedItemsCard, TrendsTable, PerformanceCards,
  AlertCard, StatusBreakdownChart,
} from '../../src/admin/components/DashboardChart';
import ActivityFeed from '../../src/admin/components/ActivityFeed';
import {
  getMockKpis, getMockOrdersByCategory, getMockTopSmoothies, getMockLowPerformers,
  getMockBusiestHours, getMockSpecialsPerformance, getMockFeaturedPerformance,
  getMockWeeklyTrends, getMockMonthlyTrends, getMockOrderStatusBreakdown,
  getMockRecentActivity,
} from '../../src/admin/constants/dashboardMockData';

export default function AdminDashboard() {
  const { t } = useTranslation();
  const [timeframe, setTimeframe] = useState('month');

  const MOCK_KPIS = getMockKpis(t);
  const MOCK_ORDERS_BY_CATEGORY = getMockOrdersByCategory(t);
  const MOCK_TOP_SMOOTHIES = getMockTopSmoothies(t);
  const MOCK_LOW_PERFORMERS = getMockLowPerformers(t);
  const MOCK_BUSIEST_HOURS = getMockBusiestHours(t);
  const MOCK_SPECIALS_PERFORMANCE = getMockSpecialsPerformance(t);
  const MOCK_FEATURED_PERFORMANCE = getMockFeaturedPerformance(t);
  const MOCK_ORDER_STATUS_BREAKDOWN = getMockOrderStatusBreakdown(t);
  const MOCK_RECENT_ACTIVITY = getMockRecentActivity(t);
  const trendData = timeframe === 'week' ? getMockWeeklyTrends(t) : getMockMonthlyTrends(t);
  const periodLabel = timeframe === 'week' ? t('admin.dashboard.periodDay') : t('admin.dashboard.periodMonth');

  return (
    <PageContainer title={t('admin.dashboard.title')} subtitle={t('admin.dashboard.subtitle')}>
      <MockDataBanner message={t('admin.dashboard.mockBanner')} />

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
        <ToggleButtonGroup value={timeframe} exclusive onChange={(e, val) => { if (val) setTimeframe(val); }} size="small">
          <ToggleButton value="week">{t('admin.dashboard.thisWeek')}</ToggleButton>
          <ToggleButton value="month">{t('admin.dashboard.thisMonth')}</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {/* KPI Cards */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
          <DashboardKpiCard title={t('admin.dashboard.totalOrders')} value={MOCK_KPIS.totalOrders.toLocaleString()} subtitle={t('admin.dashboard.thisMonthLabel')} icon={<ShoppingCartIcon />} color="#FF6B4A" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
          <DashboardKpiCard title={t('admin.dashboard.revenue')} value={`$${MOCK_KPIS.totalRevenue.toLocaleString()}`} subtitle={t('admin.dashboard.thisMonthLabel')} icon={<AttachMoneyIcon />} color="#38A169" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
          <DashboardKpiCard title={t('admin.dashboard.avgOrderValue')} value={`$${MOCK_KPIS.avgOrderValue.toFixed(2)}`} subtitle={t('admin.dashboard.avgOrderChange')} icon={<TrendingUpIcon />} color="#FFB830" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
          <DashboardKpiCard title={t('admin.dashboard.newCustomers')} value={MOCK_KPIS.newCustomers} subtitle={t('admin.dashboard.thisMonthLabel')} icon={<PersonAddIcon />} color="#4299E1" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
          <DashboardKpiCard title={t('admin.dashboard.topSmoothie')} value={MOCK_KPIS.topSmoothie} subtitle={t('admin.dashboard.mostOrdered')} icon={<LocalDrinkIcon />} color="#00B4A0" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
          <DashboardKpiCard title={t('admin.dashboard.activePromotions')} value={MOCK_KPIS.activePromotions} subtitle={t('admin.dashboard.running')} icon={<LocalOfferIcon />} color="#8B5CF6" />
        </Grid>
      </Grid>

      {/* Charts Row */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, md: 7 }}>
          <HorizontalBarChart title={t('admin.dashboard.ordersByCategory')} data={MOCK_ORDERS_BY_CATEGORY} labelKey="category" valueKey="orders" color="#FF6B4A" />
        </Grid>
        <Grid size={{ xs: 12, md: 5 }}>
          <RankedItemsCard title={t('admin.dashboard.topSmoothies')} subtitle={t('admin.dashboard.topSmoothiesSubtitle')} data={MOCK_TOP_SMOOTHIES} valueKey="orders" />
        </Grid>
      </Grid>

      {/* Trends and Busiest Hours */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <TrendsTable title={timeframe === 'week' ? t('admin.dashboard.weeklyTrends') : t('admin.dashboard.monthlyTrends')} data={trendData} periodLabel={periodLabel} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <HorizontalBarChart title={t('admin.dashboard.busiestHours')} data={MOCK_BUSIEST_HOURS} labelKey="hour" valueKey="orders" color="#00B4A0" />
        </Grid>
      </Grid>

      {/* Status & Performance */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <StatusBreakdownChart title={t('admin.dashboard.orderStatusBreakdown')} data={MOCK_ORDER_STATUS_BREAKDOWN} />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <PerformanceCards title={t('admin.dashboard.featuredPerformance')} data={MOCK_FEATURED_PERFORMANCE} />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <PerformanceCards title={t('admin.dashboard.promotionsPerformance')} data={MOCK_SPECIALS_PERFORMANCE} />
        </Grid>
      </Grid>

      {/* Activity Feed & Quick Stats */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <ActivityFeed title={t('admin.dashboard.recentActivity')} activities={MOCK_RECENT_ACTIVITY} />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <AlertCard title={t('admin.dashboard.lowPerforming')} items={MOCK_LOW_PERFORMERS} severity="warning" />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Box sx={{ p: 3, borderRadius: 2, border: '1px solid', borderColor: 'divider', bgcolor: 'background.paper' }}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>{t('admin.dashboard.quickStats')}</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" color="text.secondary">{t('admin.dashboard.totalSmoothies')}</Typography>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>{MOCK_KPIS.totalSmoothies}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" color="text.secondary">{t('admin.dashboard.unavailable')}</Typography>
                <Typography variant="body2" sx={{ fontWeight: 600, color: 'warning.main' }}>{MOCK_KPIS.unavailableSmoothies}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" color="text.secondary">{t('admin.dashboard.activePromos')}</Typography>
                <Typography variant="body2" sx={{ fontWeight: 600, color: 'success.main' }}>{MOCK_KPIS.activePromotions}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" color="text.secondary">{t('admin.dashboard.categories')}</Typography>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>2</Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ mt: 3, p: 3, borderRadius: 2, border: '1px solid', borderColor: 'divider', bgcolor: 'background.paper' }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>{t('admin.dashboard.quickActions')}</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Button variant="outlined" size="small" startIcon={<AddIcon />} component={Link} href="/admin/smoothies" fullWidth>
                {t('admin.dashboard.addSmoothie')}
              </Button>
              <Button variant="outlined" size="small" startIcon={<VisibilityIcon />} component={Link} href="/admin/orders" fullWidth>
                {t('admin.dashboard.viewOrders')}
              </Button>
              <Button variant="outlined" size="small" startIcon={<LocalOfferIcon />} component={Link} href="/admin/promotions" fullWidth>
                {t('admin.dashboard.managePromos')}
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </PageContainer>
  );
}

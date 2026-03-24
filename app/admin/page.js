'use client';

import { useState } from 'react';
import { Box, Grid, ToggleButtonGroup, ToggleButton, Typography } from '@mui/material';
import { PageContainer } from '@bluebonnet-tech/core';
import { useTranslation } from '../../src/i18n/useTranslation';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import MockDataBanner from '../../src/admin/components/MockDataBanner';
import DashboardKpiCard from '../../src/admin/components/DashboardKpiCard';
import {
  HorizontalBarChart,
  RankedItemsCard,
  TrendsTable,
  PerformanceCards,
  AlertCard,
} from '../../src/admin/components/DashboardChart';
import {
  MOCK_KPIS,
  MOCK_ORDERS_BY_CATEGORY,
  MOCK_TOP_ITEMS,
  MOCK_LOW_PERFORMERS,
  MOCK_BUSIEST_HOURS,
  MOCK_SPECIALS_PERFORMANCE,
  MOCK_FEATURED_PERFORMANCE,
  MOCK_WEEKLY_TRENDS,
  MOCK_MONTHLY_TRENDS,
} from '../../src/admin/constants/dashboardMockData';

export default function AdminDashboard() {
  const { t } = useTranslation();
  const [timeframe, setTimeframe] = useState('month');

  const trendData = timeframe === 'week' ? MOCK_WEEKLY_TRENDS : MOCK_MONTHLY_TRENDS;
  const periodLabel = timeframe === 'week' ? 'Day' : 'Month';

  return (
    <PageContainer title={t('admin.dashboard.title')} subtitle={t('admin.dashboard.subtitle')}>
      <MockDataBanner message={t('admin.dashboard.mockBanner')} />

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
        <ToggleButtonGroup
          value={timeframe}
          exclusive
          onChange={(e, val) => { if (val) setTimeframe(val); }}
          size="small"
        >
          <ToggleButton value="week">{t('admin.dashboard.thisWeek')}</ToggleButton>
          <ToggleButton value="month">{t('admin.dashboard.thisMonth')}</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {/* KPI Cards */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DashboardKpiCard
            title={t('admin.dashboard.totalOrders')}
            value={MOCK_KPIS.totalOrders.toLocaleString()}
            subtitle={t('admin.dashboard.thisMonthLabel')}
            icon={<ShoppingCartIcon />}
            color="#E07830"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DashboardKpiCard
            title={t('admin.dashboard.revenue')}
            value={`$${MOCK_KPIS.totalRevenue.toLocaleString()}`}
            subtitle={t('admin.dashboard.thisMonthLabel')}
            icon={<AttachMoneyIcon />}
            color="#43A047"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DashboardKpiCard
            title={t('admin.dashboard.avgOrderValue')}
            value={`$${MOCK_KPIS.avgOrderValue.toFixed(2)}`}
            subtitle={t('admin.dashboard.avgOrderChange')}
            icon={<TrendingUpIcon />}
            color="#F9A825"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DashboardKpiCard
            title={t('admin.dashboard.activeSpecials')}
            value={MOCK_KPIS.activeSpecials}
            subtitle={`${MOCK_KPIS.totalMenuItems} menu items`}
            icon={<AutoAwesomeIcon />}
            color="#E07830"
          />
        </Grid>
      </Grid>

      {/* Main Charts Row */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, md: 7 }}>
          <HorizontalBarChart
            title={t('admin.dashboard.ordersByCategory')}
            data={MOCK_ORDERS_BY_CATEGORY}
            labelKey="category"
            valueKey="orders"
            color="#E07830"
          />
        </Grid>
        <Grid size={{ xs: 12, md: 5 }}>
          <RankedItemsCard
            title={t('admin.dashboard.topOrderedItems')}
            subtitle={t('admin.dashboard.topOrderedSubtitle')}
            data={MOCK_TOP_ITEMS}
          />
        </Grid>
      </Grid>

      {/* Trends and Busiest Hours */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <TrendsTable
            title={timeframe === 'week' ? t('admin.dashboard.weeklyOrderTrends') : t('admin.dashboard.monthlyOrderTrends')}
            data={trendData}
            periodLabel={periodLabel}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <HorizontalBarChart
            title={t('admin.dashboard.busiestHours')}
            data={MOCK_BUSIEST_HOURS}
            labelKey="hour"
            valueKey="orders"
            color="#43A047"
          />
        </Grid>
      </Grid>

      {/* Performance Sections */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <PerformanceCards
            title={t('admin.dashboard.featuredPerformance')}
            data={MOCK_FEATURED_PERFORMANCE}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <PerformanceCards
            title={t('admin.dashboard.specialsPerformance')}
            data={MOCK_SPECIALS_PERFORMANCE}
          />
        </Grid>
      </Grid>

      {/* Alerts */}
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <AlertCard
            title={t('admin.dashboard.lowPerforming')}
            items={MOCK_LOW_PERFORMERS}
            severity="warning"
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ p: 3, borderRadius: 2, border: '1px solid', borderColor: 'divider', bgcolor: 'background.paper' }}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>{t('admin.dashboard.quickStats')}</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" color="text.secondary">{t('admin.dashboard.totalMenuItems')}</Typography>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>{MOCK_KPIS.totalMenuItems}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" color="text.secondary">{t('admin.dashboard.unavailableItems')}</Typography>
                <Typography variant="body2" sx={{ fontWeight: 600, color: 'warning.main' }}>{MOCK_KPIS.unavailableItems}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" color="text.secondary">{t('admin.dashboard.activeSpecials')}</Typography>
                <Typography variant="body2" sx={{ fontWeight: 600, color: 'success.main' }}>{MOCK_KPIS.activeSpecials}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" color="text.secondary">{t('admin.dashboard.categories')}</Typography>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>6</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </PageContainer>
  );
}

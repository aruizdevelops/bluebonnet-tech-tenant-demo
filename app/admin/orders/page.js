'use client';

import { useState, useMemo } from 'react';
import {
  Box, Card, CardContent, Typography, Chip, Grid, TextField, MenuItem, InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { PageContainer } from '@bluebonnet-tech/core';
import { useTranslation } from '../../../src/i18n/useTranslation';
import { useAdminData } from '../../../src/admin/hooks/useAdminData';
import MockDataBanner from '../../../src/admin/components/MockDataBanner';

const STATUS_COLORS = {
  completed: 'success',
  'in-progress': 'info',
  pending: 'warning',
  cancelled: 'error',
};

export default function OrdersPage() {
  const { t } = useTranslation();
  const { orders, updateOrderStatus } = useAdminData();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filtered = useMemo(() => {
    return orders.filter((o) => {
      const matchesSearch = !search || o.customer.toLowerCase().includes(search.toLowerCase()) || o.id.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === 'all' || o.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [orders, search, statusFilter]);

  return (
    <PageContainer title={t('admin.orders.title')} subtitle={t('admin.orders.subtitle')}>
      <MockDataBanner message={t('admin.orders.mockBanner')} />

      <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
        <TextField
          size="small"
          placeholder={t('admin.orders.searchPlaceholder')}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{ startAdornment: <InputAdornment position="start"><SearchIcon sx={{ fontSize: 20, color: 'text.secondary' }} /></InputAdornment> }}
          sx={{ minWidth: 220 }}
        />
        <TextField size="small" select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} label={t('admin.orders.statusFilter')} sx={{ minWidth: 160 }}>
          <MenuItem value="all">{t('admin.orders.allStatuses')}</MenuItem>
          <MenuItem value="pending">{t('admin.orders.pending')}</MenuItem>
          <MenuItem value="in-progress">{t('admin.orders.inProgress')}</MenuItem>
          <MenuItem value="completed">{t('admin.orders.completed')}</MenuItem>
          <MenuItem value="cancelled">{t('admin.orders.cancelled')}</MenuItem>
        </TextField>
      </Box>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {t('admin.orders.showing', { count: filtered.length })}
      </Typography>

      <Grid container spacing={2}>
        {filtered.map((order) => (
          <Grid key={order.id} size={{ xs: 12, sm: 6, lg: 4 }}>
            <Card>
              <CardContent sx={{ p: 2.5 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>{order.id}</Typography>
                  <Chip label={order.status.replace('-', ' ')} size="small" color={STATUS_COLORS[order.status] || 'default'} sx={{ textTransform: 'capitalize' }} />
                </Box>
                <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>{order.customer}</Typography>
                <Box sx={{ mb: 1.5 }}>
                  {order.items.map((item, idx) => (
                    <Typography key={idx} variant="body2" color="text.secondary">
                      {item.quantity}x {item.name} — ${(item.price * item.quantity).toFixed(2)}
                    </Typography>
                  ))}
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: 1, borderTop: '1px solid', borderColor: 'divider' }}>
                  <Typography variant="body2" color="text.secondary">{order.time}</Typography>
                  <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 700 }}>
                    ${order.total.toFixed(2)}
                  </Typography>
                </Box>
                {(order.status === 'pending' || order.status === 'in-progress') && (
                  <Box sx={{ mt: 1.5 }}>
                    <TextField
                      size="small"
                      select
                      fullWidth
                      label={t('admin.orders.updateStatus')}
                      value={order.status}
                      onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                    >
                      <MenuItem value="pending">{t('admin.orders.pending')}</MenuItem>
                      <MenuItem value="in-progress">{t('admin.orders.inProgress')}</MenuItem>
                      <MenuItem value="completed">{t('admin.orders.completed')}</MenuItem>
                      <MenuItem value="cancelled">{t('admin.orders.cancelled')}</MenuItem>
                    </TextField>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </PageContainer>
  );
}

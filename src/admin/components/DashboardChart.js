'use client';

import {
  Card,
  CardContent,
  Typography,
  Box,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { useTranslation } from '../../i18n/useTranslation';

/**
 * MUI-based chart visualizations for the admin dashboard.
 * Uses progress bars, tables, and styled cards instead of a chart library.
 */

export function HorizontalBarChart({ title, data, valueKey, labelKey, maxValue, color }) {
  const max = maxValue || Math.max(...data.map((d) => d[valueKey]));

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          {title}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          {data.map((item) => (
            <Box key={item[labelKey]}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {item[labelKey]}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item[valueKey].toLocaleString()}
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={(item[valueKey] / max) * 100}
                sx={{
                  height: 8,
                  borderRadius: 4,
                  bgcolor: 'rgba(0,0,0,0.06)',
                  '& .MuiLinearProgress-bar': {
                    borderRadius: 4,
                    bgcolor: color || 'primary.main',
                  },
                }}
              />
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

export function RankedItemsCard({ title, data, subtitle }) {
  const { t } = useTranslation();
  const maxOrders = data.length > 0 ? data[0].orders : 1;

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ mb: 0.5, fontWeight: 600 }}>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {subtitle}
          </Typography>
        )}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {data.map((item, index) => (
            <Box key={item.name} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography
                variant="body2"
                sx={{
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  bgcolor: index < 3 ? 'primary.main' : 'grey.300',
                  color: index < 3 ? 'white' : 'text.secondary',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  flexShrink: 0,
                }}
              >
                {index + 1}
              </Typography>
              <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                  <Typography variant="body2" sx={{ fontWeight: 500 }} noWrap>
                    {item.name}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flexShrink: 0 }}>
                    <Typography variant="body2" color="text.secondary">
                      {item.orders} {t('admin.dashboard.chart.orders')}
                    </Typography>
                    {item.trend != null && (
                      <Chip
                        size="small"
                        icon={item.trend >= 0 ? <TrendingUpIcon sx={{ fontSize: 14 }} /> : <TrendingDownIcon sx={{ fontSize: 14 }} />}
                        label={`${item.trend > 0 ? '+' : ''}${item.trend}%`}
                        color={item.trend >= 0 ? 'success' : 'error'}
                        variant="outlined"
                        sx={{ height: 22, '& .MuiChip-label': { px: 0.5, fontSize: '0.7rem' } }}
                      />
                    )}
                  </Box>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={(item.orders / maxOrders) * 100}
                  sx={{
                    height: 6,
                    borderRadius: 3,
                    bgcolor: 'rgba(0,0,0,0.06)',
                    '& .MuiLinearProgress-bar': {
                      borderRadius: 3,
                      background: 'linear-gradient(135deg, #E07830, #F09848)',
                    },
                  }}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

export function TrendsTable({ title, data, periodLabel }) {
  const { t } = useTranslation();
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          {title}
        </Typography>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 600 }}>{periodLabel || 'Period'}</TableCell>
                <TableCell align="right" sx={{ fontWeight: 600 }}>{t('admin.dashboard.chart.orders')}</TableCell>
                <TableCell align="right" sx={{ fontWeight: 600 }}>{t('admin.dashboard.chart.revenue')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.period} hover>
                  <TableCell>{row.period}</TableCell>
                  <TableCell align="right">{row.orders.toLocaleString()}</TableCell>
                  <TableCell align="right">${row.revenue.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}

export function PerformanceCards({ title, data }) {
  const { t } = useTranslation();
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          {title}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {data.map((item) => (
            <Box
              key={item.name || item.title}
              sx={{
                p: 2,
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 1,
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                {item.name || item.title}
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="caption" color="text.secondary">{t('admin.dashboard.chart.orders')}</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>{item.orders}</Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="caption" color="text.secondary">{t('admin.dashboard.chart.views')}</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>{item.views}</Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="caption" color="text.secondary">{t('admin.dashboard.chart.convRate')}</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: 'success.main' }}>
                    {item.conversionRate}%
                  </Typography>
                </Box>
                {item.revenue != null && (
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="caption" color="text.secondary">{t('admin.dashboard.chart.revenue')}</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      ${item.revenue.toLocaleString()}
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

export function AlertCard({ title, items, severity }) {
  const colors = {
    warning: { bg: 'rgba(249, 168, 37, 0.08)', border: 'rgba(249, 168, 37, 0.3)', text: '#F9A825' },
    error: { bg: 'rgba(211, 47, 47, 0.08)', border: 'rgba(211, 47, 47, 0.3)', text: '#D32F2F' },
    info: { bg: 'rgba(224, 120, 48, 0.08)', border: 'rgba(224, 120, 48, 0.3)', text: '#E07830' },
  };
  const c = colors[severity] || colors.warning;

  return (
    <Card sx={{ height: '100%', border: '1px solid', borderColor: c.border, bgcolor: c.bg }}>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: c.text }}>
          {title}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          {items.map((item) => (
            <Box key={item.name} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>{item.name}</Typography>
                <Typography variant="caption" color="text.secondary">{item.reason}</Typography>
              </Box>
              <Chip label={`${item.orders} orders`} size="small" variant="outlined" />
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

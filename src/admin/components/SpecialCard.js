'use client';

import {
  Card,
  CardContent,
  Box,
  Typography,
  IconButton,
  Chip,
  Tooltip,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import StarIcon from '@mui/icons-material/Star';
import { StatusChip } from '@bluebonnet-tech/core';
import { useTranslation } from '../../i18n/useTranslation';

export default function SpecialCard({ item, onEdit, onDelete }) {
  const { t } = useTranslation();
  const isExpired = item.endDate && new Date(item.endDate) < new Date();

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Image placeholder */}
      <Box
        sx={{
          height: 120,
          bgcolor: item.active ? 'rgba(67, 160, 71, 0.08)' : 'rgba(0,0,0,0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <Typography variant="h3" sx={{ opacity: 0.3 }}>
          {item.title.charAt(0)}
        </Typography>
        {item.badge && (
          <Chip
            label={item.badge}
            size="small"
            sx={{ position: 'absolute', top: 8, right: 8, bgcolor: 'secondary.main', color: 'white' }}
          />
        )}
        {item.featured && (
          <Chip
            icon={<StarIcon sx={{ fontSize: 14 }} />}
            label={t('admin.menuCard.featured')}
            size="small"
            color="warning"
            sx={{ position: 'absolute', top: 8, left: 8 }}
          />
        )}
      </Box>

      <CardContent sx={{ flexGrow: 1, p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, lineHeight: 1.3 }}>
            {item.title}
          </Typography>
          {item.price && (
            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'secondary.main', flexShrink: 0, ml: 1 }}>
              ${item.price.toFixed(2)}
            </Typography>
          )}
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {item.description}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1, flexWrap: 'wrap' }}>
          <StatusChip
            status={item.active ? 'active' : 'inactive'}
            label={item.active ? t('admin.specialCard.active') : t('admin.specialCard.inactive')}
          />
          {isExpired && <Chip label={t('admin.specialCard.expired')} size="small" color="error" variant="outlined" />}
        </Box>

        {(item.startDate || item.endDate) && (
          <Typography variant="caption" color="text.secondary">
            {item.startDate} &mdash; {item.endDate}
          </Typography>
        )}
      </CardContent>

      {/* Actions */}
      <Box sx={{ px: 2, pb: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <Tooltip title={t('admin.common.edit')}>
          <IconButton size="small" onClick={() => onEdit(item)}>
            <EditIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title={t('admin.common.delete')}>
          <IconButton size="small" onClick={() => onDelete(item)} color="error">
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
    </Card>
  );
}

'use client';

import {
  Card,
  CardContent,
  Box,
  Typography,
  IconButton,
  Switch,
  Chip,
  Tooltip,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import StarIcon from '@mui/icons-material/Star';
import { StatusChip } from '@bluebonnet-tech/core';
import { useTranslation } from '../../i18n/useTranslation';

export default function MenuItemCard({ item, onEdit, onDelete, onToggleAvailability }) {
  const { t } = useTranslation();
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Photo placeholder */}
      <Box
        sx={{
          height: 140,
          bgcolor: item.available ? 'rgba(224, 120, 48, 0.08)' : 'rgba(0,0,0,0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <Typography variant="h3" sx={{ opacity: 0.3 }}>
          {item.name.charAt(0)}
        </Typography>
        {item.featured && (
          <Chip
            icon={<StarIcon sx={{ fontSize: 14 }} />}
            label={t('admin.menuCard.featured')}
            size="small"
            color="warning"
            sx={{ position: 'absolute', top: 8, right: 8 }}
          />
        )}
        {item.badge && !item.featured && (
          <Chip
            label={item.badge}
            size="small"
            sx={{ position: 'absolute', top: 8, right: 8, bgcolor: 'primary.main', color: 'white' }}
          />
        )}
      </Box>

      <CardContent sx={{ flexGrow: 1, p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, lineHeight: 1.3 }}>
            {item.name}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'primary.main', flexShrink: 0, ml: 1 }}>
            ${item.price.toFixed(2)}
          </Typography>
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {item.description}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <Chip label={item.category} size="small" variant="outlined" />
          <StatusChip status={item.available ? 'active' : 'inactive'} label={item.available ? t('admin.menuCard.available') : t('admin.menuCard.unavailable')} />
        </Box>
      </CardContent>

      {/* Actions */}
      <Box sx={{ px: 2, pb: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="caption" color="text.secondary" sx={{ mr: 0.5 }}>
            {t('admin.menuCard.available')}
          </Typography>
          <Switch
            size="small"
            checked={item.available}
            onChange={() => onToggleAvailability(item.id, !item.available)}
            color="success"
          />
        </Box>
        <Box>
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
      </Box>
    </Card>
  );
}

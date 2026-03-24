'use client';

import {
  Box,
  Card,
  Typography,
  IconButton,
  Chip,
  Tooltip,
  Grid,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ImageIcon from '@mui/icons-material/Image';
import { useTranslation } from '../../i18n/useTranslation';

function formatFileSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function MediaGalleryGrid({ items, onDelete }) {
  const { t } = useTranslation();
  return (
    <Grid container spacing={2}>
      {items.map((item) => (
        <Grid key={item.id} size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
          <Card
            sx={{
              position: 'relative',
              '&:hover .media-actions': { opacity: 1 },
            }}
          >
            <Box
              sx={{
                height: 140,
                bgcolor: 'rgba(0,0,0,0.04)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ImageIcon sx={{ fontSize: 48, color: 'text.secondary', opacity: 0.3 }} />
            </Box>
            <Box
              className="media-actions"
              sx={{
                position: 'absolute',
                top: 4,
                right: 4,
                opacity: 0,
                transition: 'opacity 0.2s',
              }}
            >
              <Tooltip title={t('admin.common.delete')}>
                <IconButton
                  size="small"
                  onClick={() => onDelete(item)}
                  sx={{ bgcolor: 'rgba(255,255,255,0.9)', '&:hover': { bgcolor: 'white' } }}
                >
                  <DeleteIcon fontSize="small" color="error" />
                </IconButton>
              </Tooltip>
            </Box>
            <Box sx={{ p: 1.5 }}>
              <Typography variant="caption" sx={{ fontWeight: 500, display: 'block' }} noWrap>
                {item.name}
              </Typography>
              <Box sx={{ display: 'flex', gap: 0.5, mt: 0.5, flexWrap: 'wrap' }}>
                <Chip label={formatFileSize(item.size)} size="small" variant="outlined" sx={{ height: 20, '& .MuiChip-label': { fontSize: '0.65rem', px: 0.5 } }} />
                {item.width && item.height && (
                  <Chip label={`${item.width}x${item.height}`} size="small" variant="outlined" sx={{ height: 20, '& .MuiChip-label': { fontSize: '0.65rem', px: 0.5 } }} />
                )}
              </Box>
              {item.usedIn && item.usedIn.length > 0 && (
                <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block' }}>
                  {t('admin.media.usedIn', { count: item.usedIn.length })}
                </Typography>
              )}
            </Box>
          </Card>
        </Grid>
      ))}
      {items.length === 0 && (
        <Grid size={12}>
          <Box sx={{ textAlign: 'center', py: 6 }}>
            <Typography color="text.secondary">{t('admin.media.noMedia')}</Typography>
          </Box>
        </Grid>
      )}
    </Grid>
  );
}

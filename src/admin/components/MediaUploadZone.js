'use client';

import { Box, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useTranslation } from '../../i18n/useTranslation';

/**
 * Image upload placeholder with drag-and-drop visual.
 * UI only for demo — no actual upload backend.
 *
 * SECURITY NOTE: When implementing real uploads:
 * - Validate file type (accept only image/*)
 * - Enforce max file size (e.g., 5MB)
 * - Use signed upload URLs
 * - Never trust client-side filenames
 * - Scan for malicious content server-side
 */
export default function MediaUploadZone({ onFileSelect, currentImage, height }) {
  const { t } = useTranslation();
  const handleClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = e.target.files?.[0];
      if (file) {
        // Basic client-side validation
        if (!file.type.startsWith('image/')) {
          return;
        }
        if (file.size > 5 * 1024 * 1024) {
          return;
        }
        if (onFileSelect) {
          onFileSelect(file);
        }
      }
    };
    input.click();
  };

  if (currentImage) {
    return (
      <Box
        onClick={handleClick}
        sx={{
          height: height || 160,
          borderRadius: 2,
          border: '2px dashed',
          borderColor: 'primary.main',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          bgcolor: 'rgba(224, 120, 48, 0.04)',
          '&:hover': { bgcolor: 'rgba(224, 120, 48, 0.08)' },
        }}
      >
        <Typography variant="body2" color="primary">
          {t('admin.media.clickToChange')}
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      onClick={handleClick}
      sx={{
        height: height || 160,
        borderRadius: 2,
        border: '2px dashed',
        borderColor: 'divider',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        bgcolor: 'rgba(0,0,0,0.02)',
        transition: 'all 0.2s',
        '&:hover': {
          borderColor: 'primary.main',
          bgcolor: 'rgba(224, 120, 48, 0.04)',
        },
      }}
    >
      <CloudUploadIcon sx={{ fontSize: 36, color: 'text.secondary', mb: 1 }} />
      <Typography variant="body2" color="text.secondary">
        {t('admin.media.clickToUpload')}
      </Typography>
      <Typography variant="caption" color="text.secondary">
        {t('admin.media.uploadHint')}
      </Typography>
    </Box>
  );
}

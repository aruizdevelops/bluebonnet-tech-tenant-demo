'use client';

import { Box, Card, CardContent, Typography, Grid, Button, IconButton, Chip } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import ImageIcon from '@mui/icons-material/Image';
import { PageContainer } from '@bluebonnet-tech/core';
import { useTranslation } from '../../../src/i18n/useTranslation';
import { useAdminData } from '../../../src/admin/hooks/useAdminData';
import MockDataBanner from '../../../src/admin/components/MockDataBanner';

export default function MediaPage() {
  const { t } = useTranslation();
  const { media, deleteMedia } = useAdminData();

  return (
    <PageContainer title={t('admin.media.title')} subtitle={t('admin.media.subtitle')}>
      <MockDataBanner />

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
        <Button variant="contained" startIcon={<CloudUploadIcon />}>{t('admin.media.upload')}</Button>
      </Box>

      <Grid container spacing={2}>
        {media.map((item) => (
          <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Card>
              <Box sx={{ height: 140, bgcolor: 'rgba(255,107,74,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ImageIcon sx={{ fontSize: 48, color: 'text.disabled' }} />
              </Box>
              <CardContent sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600 }} noWrap>{item.name}</Typography>
                    <Box sx={{ display: 'flex', gap: 1, mt: 0.5 }}>
                      <Chip label={item.size} size="small" variant="outlined" sx={{ fontSize: '0.7rem' }} />
                      <Chip label={item.uploadedAt} size="small" variant="outlined" sx={{ fontSize: '0.7rem' }} />
                    </Box>
                  </Box>
                  <IconButton size="small" onClick={() => deleteMedia(item.id)}>
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </PageContainer>
  );
}

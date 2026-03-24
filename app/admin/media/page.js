'use client';

import { useState } from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { PageContainer } from '@bluebonnet-tech/core';
import MockDataBanner from '../../../src/admin/components/MockDataBanner';
import MediaUploadZone from '../../../src/admin/components/MediaUploadZone';
import MediaGalleryGrid from '../../../src/admin/components/MediaGalleryGrid';
import ConfirmDialog from '../../../src/admin/components/ConfirmDialog';
import { useAdminData } from '../../../src/admin/hooks/useAdminData';
import { useTranslation } from '../../../src/i18n/useTranslation';

export default function MediaLibrary() {
  const { t } = useTranslation();
  const { media, isLoading, uploadMedia, deleteMedia } = useAdminData();
  const [deleteTarget, setDeleteTarget] = useState(null);

  const handleUpload = async (file) => {
    await uploadMedia(file);
  };

  const handleDeleteConfirm = async () => {
    if (deleteTarget) {
      await deleteMedia(deleteTarget.id);
      setDeleteTarget(null);
    }
  };

  if (isLoading) {
    return (
      <PageContainer title={t('admin.media.title')}>
        <Typography color="text.secondary">{t('admin.common.loading')}</Typography>
      </PageContainer>
    );
  }

  return (
    <PageContainer title={t('admin.media.title')} subtitle={t('admin.media.subtitle')}>
      <MockDataBanner message={t('admin.media.mockBanner')} />

      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
          {t('admin.media.uploadNew')}
        </Typography>
        <MediaUploadZone onFileSelect={handleUpload} height={120} />
      </Box>

      <Divider sx={{ mb: 3 }} />

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
          {t('admin.media.imageGallery')}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {t('admin.media.imageCount', { count: media.length })}
        </Typography>
      </Box>

      <MediaGalleryGrid items={media} onDelete={setDeleteTarget} />

      <ConfirmDialog
        open={Boolean(deleteTarget)}
        title={t('admin.media.deleteTitle')}
        message={deleteTarget ? t('admin.media.deleteConfirm', { name: deleteTarget.name }) : ''}
        confirmLabel={t('admin.common.delete')}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTarget(null)}
      />
    </PageContainer>
  );
}

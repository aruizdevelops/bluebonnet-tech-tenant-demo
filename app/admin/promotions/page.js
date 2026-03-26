'use client';

import { useState } from 'react';
import {
  Box, Button, Card, CardContent, Typography, Grid, Chip, IconButton, Switch,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { PageContainer } from '@bluebonnet-tech/core';
import { useTranslation } from '../../../src/i18n/useTranslation';
import { useAdminData } from '../../../src/admin/hooks/useAdminData';
import MockDataBanner from '../../../src/admin/components/MockDataBanner';
import ConfirmDialog from '../../../src/admin/components/ConfirmDialog';

export default function PromotionsPage() {
  const { t } = useTranslation();
  const { promotions, updatePromotion, deletePromotion } = useAdminData();
  const [deleteTarget, setDeleteTarget] = useState(null);

  const handleToggleActive = async (promo) => {
    await updatePromotion(promo.id, { ...promo, active: !promo.active });
  };

  const handleDelete = async () => {
    if (deleteTarget) { await deletePromotion(deleteTarget.id); setDeleteTarget(null); }
  };

  return (
    <PageContainer title={t('admin.promotions.title')} subtitle={t('admin.promotions.subtitle')}>
      <MockDataBanner message={t('admin.promotions.mockBanner')} />

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
        <Button variant="contained" startIcon={<AddIcon />}>{t('admin.promotions.addPromotion')}</Button>
      </Box>

      <Grid container spacing={2}>
        {promotions.map((promo) => (
          <Grid key={promo.id} size={{ xs: 12, sm: 6, lg: 4 }}>
            <Card sx={{ height: '100%', opacity: promo.active ? 1 : 0.65 }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>{promo.name}</Typography>
                  <Box sx={{ display: 'flex', gap: 0.5 }}>
                    <IconButton size="small"><EditIcon fontSize="small" /></IconButton>
                    <IconButton size="small" onClick={() => setDeleteTarget(promo)}><DeleteIcon fontSize="small" /></IconButton>
                  </Box>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{promo.description}</Typography>
                <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                  <Chip label={promo.discount} size="small" color="primary" />
                  <Chip label={`${promo.startDate} — ${promo.endDate}`} size="small" variant="outlined" />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography variant="caption" color="text.secondary">{t('admin.promotions.active')}</Typography>
                  <Switch size="small" checked={promo.active} onChange={() => handleToggleActive(promo)} color="primary" />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <ConfirmDialog
        open={Boolean(deleteTarget)}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        title={t('admin.promotions.deleteTitle')}
        message={t('admin.promotions.deleteConfirm', { name: deleteTarget?.name || '' })}
      />
    </PageContainer>
  );
}

'use client';

import { useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { PageContainer } from '@bluebonnet-tech/core';
import MockDataBanner from '../../../src/admin/components/MockDataBanner';
import SpecialCard from '../../../src/admin/components/SpecialCard';
import SpecialForm from '../../../src/admin/components/SpecialForm';
import ConfirmDialog from '../../../src/admin/components/ConfirmDialog';
import { useAdminData } from '../../../src/admin/hooks/useAdminData';
import { useTranslation } from '../../../src/i18n/useTranslation';

export default function SpecialsManagement() {
  const { t } = useTranslation();
  const { specials, isLoading, addSpecial, updateSpecial, deleteSpecial } = useAdminData();

  const [formOpen, setFormOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const handleAdd = () => {
    setEditItem(null);
    setFormOpen(true);
  };

  const handleEdit = (item) => {
    setEditItem(item);
    setFormOpen(true);
  };

  const handleSave = async (values) => {
    if (editItem) {
      await updateSpecial(editItem.id, values);
    } else {
      await addSpecial(values);
    }
    setFormOpen(false);
    setEditItem(null);
  };

  const handleDeleteConfirm = async () => {
    if (deleteTarget) {
      await deleteSpecial(deleteTarget.id);
      setDeleteTarget(null);
    }
  };

  if (isLoading) {
    return (
      <PageContainer title={t('admin.specials.title')}>
        <Typography color="text.secondary">{t('admin.common.loading')}</Typography>
      </PageContainer>
    );
  }

  const activeSpecials = specials.filter((s) => s.active);
  const inactiveSpecials = specials.filter((s) => !s.active);

  return (
    <PageContainer title={t('admin.specials.title')} subtitle={t('admin.specials.subtitle')}>
      <MockDataBanner message={t('admin.specials.mockBanner')} />

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, flexWrap: 'wrap', gap: 2 }}>
        <Typography variant="body2" color="text.secondary">
          {t('admin.specials.statusCount', { active: activeSpecials.length, inactive: inactiveSpecials.length })}
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />} onClick={handleAdd}>
          {t('admin.specials.addSpecial')}
        </Button>
      </Box>

      {/* Active Specials */}
      {activeSpecials.length > 0 && (
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            {t('admin.specials.activeTitle')}
          </Typography>
          <Grid container spacing={3}>
            {activeSpecials.map((item) => (
              <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <SpecialCard item={item} onEdit={handleEdit} onDelete={setDeleteTarget} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* Inactive Specials */}
      {inactiveSpecials.length > 0 && (
        <Box>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'text.secondary' }}>
            {t('admin.specials.inactiveTitle')}
          </Typography>
          <Grid container spacing={3}>
            {inactiveSpecials.map((item) => (
              <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <SpecialCard item={item} onEdit={handleEdit} onDelete={setDeleteTarget} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {specials.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 6 }}>
          <Typography color="text.secondary">{t('admin.specials.noSpecials')}</Typography>
        </Box>
      )}

      {formOpen && (
        <SpecialForm
          open={formOpen}
          onClose={() => { setFormOpen(false); setEditItem(null); }}
          onSave={handleSave}
          item={editItem}
        />
      )}

      <ConfirmDialog
        open={Boolean(deleteTarget)}
        title={t('admin.specials.deleteTitle')}
        message={deleteTarget ? t('admin.specials.deleteConfirm', { name: deleteTarget.title }) : ''}
        confirmLabel={t('admin.common.delete')}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTarget(null)}
      />
    </PageContainer>
  );
}

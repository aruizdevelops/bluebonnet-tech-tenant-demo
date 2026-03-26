'use client';

import { useState, useMemo } from 'react';
import {
  Box, Button, Card, CardContent, Typography, TextField, MenuItem,
  IconButton, Switch, Chip, InputAdornment, Grid,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import { PageContainer } from '@bluebonnet-tech/core';
import { useTranslation } from '../../../src/i18n/useTranslation';
import { useAdminData } from '../../../src/admin/hooks/useAdminData';
import { translateSmoothie, translateCategory } from '../../../src/constants/smoothies';
import MockDataBanner from '../../../src/admin/components/MockDataBanner';
import SmoothieForm from '../../../src/admin/components/SmoothieForm';
import ConfirmDialog from '../../../src/admin/components/ConfirmDialog';

export default function SmoothiesPage() {
  const { t } = useTranslation();
  const { smoothies, categories, addSmoothie, updateSmoothie, deleteSmoothie } = useAdminData();
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [formOpen, setFormOpen] = useState(false);
  const [editingSmoothie, setEditingSmoothie] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const translatedSmoothies = useMemo(() => smoothies.map((s) => {
    try { return translateSmoothie(s, t); } catch { return s; }
  }), [smoothies, t]);
  const translatedCategories = useMemo(() => categories.map((c) => {
    try { return translateCategory(c, t); } catch { return c; }
  }), [categories, t]);

  const filtered = useMemo(() => {
    return translatedSmoothies.filter((s) => {
      const name = (s.name || '').toLowerCase();
      const matchesSearch = !search || name.includes(search.toLowerCase());
      const matchesCategory = categoryFilter === 'all' || s.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [translatedSmoothies, search, categoryFilter]);

  const handleAdd = () => { setEditingSmoothie(null); setFormOpen(true); };
  const handleEdit = (s) => { setEditingSmoothie(s); setFormOpen(true); };
  const handleFormSave = async (formValues) => {
    if (editingSmoothie) await updateSmoothie(editingSmoothie.id, formValues);
    else await addSmoothie(formValues);
  };
  const handleToggleActive = async (s) => { await updateSmoothie(s.id, { ...s, available: !s.available }); };
  const handleToggleFeatured = async (s) => { await updateSmoothie(s.id, { ...s, featured: !s.featured }); };
  const handleDelete = async () => { if (deleteTarget) { await deleteSmoothie(deleteTarget.id); setDeleteTarget(null); } };

  return (
    <PageContainer title={t('admin.smoothies.title')} subtitle={t('admin.smoothies.subtitle')}>
      <MockDataBanner message={t('admin.smoothies.mockBanner')} />

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, flexWrap: 'wrap', gap: 2 }}>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', flexGrow: 1 }}>
          <TextField
            size="small"
            placeholder={t('admin.smoothies.searchPlaceholder')}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{ startAdornment: <InputAdornment position="start"><SearchIcon sx={{ fontSize: 20, color: 'text.secondary' }} /></InputAdornment> }}
            sx={{ minWidth: 220 }}
          />
          <TextField size="small" select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} label={t('admin.smoothies.categoryFilter')} sx={{ minWidth: 180 }}>
            <MenuItem value="all">{t('admin.smoothies.allCategories')}</MenuItem>
            {translatedCategories.map((cat) => <MenuItem key={cat.id} value={cat.id}>{cat.name || cat.id}</MenuItem>)}
          </TextField>
        </Box>
        <Button variant="contained" startIcon={<AddIcon />} onClick={handleAdd}>{t('admin.smoothies.addSmoothie')}</Button>
      </Box>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {t('admin.smoothies.itemsCount', { filtered: filtered.length, total: translatedSmoothies.length })}
      </Typography>

      {filtered.length === 0 ? (
        <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', py: 6 }}>
          {smoothies.length === 0 ? t('admin.smoothies.noItems') : t('admin.smoothies.noMatch')}
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {filtered.map((s) => (
            <Grid key={s.id} size={{ xs: 12, sm: 6, lg: 4 }}>
              <Card sx={{ height: '100%', opacity: s.available ? 1 : 0.65 }}>
                <Box sx={{ background: s.gradient || 'linear-gradient(135deg, #FF6B4A, #FFB830)', height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography sx={{ fontSize: '2.5rem' }}>{s.emoji || '🥤'}</Typography>
                </Box>
                <CardContent sx={{ p: 2.5 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{s.name || s.id}</Typography>
                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                      <IconButton size="small" onClick={() => handleEdit(s)}><EditIcon fontSize="small" /></IconButton>
                      <IconButton size="small" onClick={() => setDeleteTarget(s)}><DeleteIcon fontSize="small" /></IconButton>
                    </Box>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5, minHeight: 40 }}>
                    {(s.description || '').substring(0, 80)}{(s.description || '').length > 80 ? '...' : ''}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, mb: 1.5, flexWrap: 'wrap' }}>
                    <Chip label={s.category} size="small" variant="outlined" />
                    {s.price != null && <Chip label={`$${Number(s.price).toFixed(2)}`} size="small" variant="outlined" />}
                    {s.calories != null && <Chip label={`${s.calories} cal`} size="small" variant="outlined" />}
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant="caption" color="text.secondary">{t('admin.smoothieCard.available')}</Typography>
                      <Switch size="small" checked={s.available} onChange={() => handleToggleActive(s)} color="primary" />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <IconButton size="small" onClick={() => handleToggleFeatured(s)} sx={{ color: s.featured ? 'warning.main' : 'text.disabled' }}>
                        <StarIcon fontSize="small" />
                      </IconButton>
                      {s.featured && <Typography variant="caption" color="warning.main" sx={{ fontWeight: 600 }}>{t('admin.smoothieCard.featured')}</Typography>}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      <SmoothieForm open={formOpen} onClose={() => setFormOpen(false)} smoothie={editingSmoothie} onSaved={handleFormSave} />
      <ConfirmDialog
        open={Boolean(deleteTarget)}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        title={t('admin.smoothies.deleteTitle')}
        message={t('admin.smoothies.deleteConfirm', { name: deleteTarget?.name || '' })}
      />
    </PageContainer>
  );
}

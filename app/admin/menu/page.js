'use client';

import { useState, useMemo } from 'react';
import {
  Box,
  Button,
  Grid,
  TextField,
  MenuItem,
  FormControlLabel,
  Switch,
  InputAdornment,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { PageContainer } from '@bluebonnet-tech/core';
import MockDataBanner from '../../../src/admin/components/MockDataBanner';
import MenuItemCard from '../../../src/admin/components/MenuItemCard';
import MenuItemForm from '../../../src/admin/components/MenuItemForm';
import ConfirmDialog from '../../../src/admin/components/ConfirmDialog';
import { useAdminData } from '../../../src/admin/hooks/useAdminData';
import { useTranslation } from '../../../src/i18n/useTranslation';

export default function MenuManagement() {
  const { t } = useTranslation();
  const {
    menuItems,
    categories,
    isLoading,
    addMenuItem,
    updateMenuItem,
    deleteMenuItem,
  } = useAdminData();

  const [formOpen, setFormOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterAvailable, setFilterAvailable] = useState(false);

  const filteredItems = useMemo(() => {
    let items = menuItems;
    if (search) {
      const lower = search.toLowerCase();
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(lower) ||
          item.description.toLowerCase().includes(lower)
      );
    }
    if (filterCategory !== 'all') {
      items = items.filter((item) => item.category === filterCategory);
    }
    if (filterAvailable) {
      items = items.filter((item) => item.available);
    }
    return items;
  }, [menuItems, search, filterCategory, filterAvailable]);

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
      await updateMenuItem(editItem.id, values);
    } else {
      await addMenuItem(values);
    }
    setFormOpen(false);
    setEditItem(null);
  };

  const handleDeleteConfirm = async () => {
    if (deleteTarget) {
      await deleteMenuItem(deleteTarget.id);
      setDeleteTarget(null);
    }
  };

  const handleToggleAvailability = async (id, available) => {
    await updateMenuItem(id, { available });
  };

  if (isLoading) {
    return (
      <PageContainer title={t('admin.menu.title')}>
        <Typography color="text.secondary">{t('admin.common.loading')}</Typography>
      </PageContainer>
    );
  }

  return (
    <PageContainer title={t('admin.menu.title')} subtitle={t('admin.menu.subtitle')}>
      <MockDataBanner message={t('admin.menu.mockBanner')} />

      {/* Header Actions */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, flexWrap: 'wrap', gap: 2 }}>
        <Typography variant="body2" color="text.secondary">
          {t('admin.menu.itemsCount', { filtered: filteredItems.length, total: menuItems.length })}
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />} onClick={handleAdd}>
          {t('admin.menu.addItem')}
        </Button>
      </Box>

      {/* Filters */}
      <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
        <TextField
          placeholder={t('admin.menu.searchPlaceholder')}
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ minWidth: 220 }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" color="action" />
                </InputAdornment>
              ),
            },
          }}
        />
        <TextField
          select
          size="small"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          sx={{ minWidth: 180 }}
          label={t('admin.menu.categoryFilter')}
        >
          <MenuItem value="all">{t('admin.menu.allCategories')}</MenuItem>
          {categories.map((cat) => (
            <MenuItem key={cat.slug} value={cat.slug}>
              {cat.name}
            </MenuItem>
          ))}
        </TextField>
        <FormControlLabel
          control={
            <Switch
              size="small"
              checked={filterAvailable}
              onChange={(e) => setFilterAvailable(e.target.checked)}
            />
          }
          label={t('admin.menu.availableOnly')}
        />
      </Box>

      {/* Menu Items Grid */}
      <Grid container spacing={3}>
        {filteredItems.map((item) => (
          <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <MenuItemCard
              item={item}
              onEdit={handleEdit}
              onDelete={setDeleteTarget}
              onToggleAvailability={handleToggleAvailability}
            />
          </Grid>
        ))}
        {filteredItems.length === 0 && (
          <Grid size={12}>
            <Box sx={{ textAlign: 'center', py: 6 }}>
              <Typography color="text.secondary">
                {search || filterCategory !== 'all' || filterAvailable
                  ? t('admin.menu.noMatch')
                  : t('admin.menu.noItems')}
              </Typography>
            </Box>
          </Grid>
        )}
      </Grid>

      {/* Form Dialog */}
      {formOpen && (
        <MenuItemForm
          open={formOpen}
          onClose={() => { setFormOpen(false); setEditItem(null); }}
          onSave={handleSave}
          item={editItem}
          categories={categories}
        />
      )}

      {/* Delete Confirm */}
      <ConfirmDialog
        open={Boolean(deleteTarget)}
        title={t('admin.menu.deleteTitle')}
        message={deleteTarget ? t('admin.menu.deleteConfirm', { name: deleteTarget.name }) : ''}
        confirmLabel={t('admin.common.delete')}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTarget(null)}
      />
    </PageContainer>
  );
}

'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Chip,
  Tooltip,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { PageContainer } from '@bluebonnet-tech/core';
import MockDataBanner from '../../../src/admin/components/MockDataBanner';
import CategoryForm from '../../../src/admin/components/CategoryForm';
import ConfirmDialog from '../../../src/admin/components/ConfirmDialog';
import { useAdminData } from '../../../src/admin/hooks/useAdminData';
import { useTranslation } from '../../../src/i18n/useTranslation';

export default function CategoriesManagement() {
  const { t } = useTranslation();
  const { categories, isLoading, addCategory, updateCategory, deleteCategory } = useAdminData();

  const [formOpen, setFormOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const sortedCategories = [...categories].sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));

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
      await updateCategory(editItem.id, values);
    } else {
      await addCategory(values);
    }
    setFormOpen(false);
    setEditItem(null);
  };

  const handleDeleteConfirm = async () => {
    if (deleteTarget) {
      await deleteCategory(deleteTarget.id);
      setDeleteTarget(null);
    }
  };

  if (isLoading) {
    return (
      <PageContainer title={t('admin.categories.title')}>
        <Typography color="text.secondary">{t('admin.common.loading')}</Typography>
      </PageContainer>
    );
  }

  return (
    <PageContainer title={t('admin.categories.title')} subtitle={t('admin.categories.subtitle')}>
      <MockDataBanner message={t('admin.categories.mockBanner')} />

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="body2" color="text.secondary">
          {t('admin.categories.count', { count: categories.length })}
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />} onClick={handleAdd}>
          {t('admin.categories.addCategory')}
        </Button>
      </Box>

      <TableContainer component={Paper} variant="outlined">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>{t('admin.categories.colOrder')}</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>{t('admin.categories.colName')}</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>{t('admin.categories.colSlug')}</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>{t('admin.categories.colItems')}</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>{t('admin.categories.colDescription')}</TableCell>
              <TableCell align="right" sx={{ fontWeight: 600 }}>{t('admin.categories.colActions')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedCategories.map((cat) => (
              <TableRow key={cat.id} hover>
                <TableCell>{cat.sortOrder}</TableCell>
                <TableCell>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>{cat.name}</Typography>
                </TableCell>
                <TableCell>
                  <Chip label={cat.slug} size="small" variant="outlined" />
                </TableCell>
                <TableCell>{cat.itemCount}</TableCell>
                <TableCell>
                  <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 300 }} noWrap>
                    {cat.description}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Tooltip title={t('admin.common.edit')}>
                    <IconButton size="small" onClick={() => handleEdit(cat)}>
                      <EditIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title={t('admin.common.delete')}>
                    <IconButton size="small" onClick={() => setDeleteTarget(cat)} color="error">
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
            {categories.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} align="center" sx={{ py: 4 }}>
                  <Typography color="text.secondary">{t('admin.categories.noCategories')}</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {formOpen && (
        <CategoryForm
          open={formOpen}
          onClose={() => { setFormOpen(false); setEditItem(null); }}
          onSave={handleSave}
          item={editItem}
        />
      )}

      <ConfirmDialog
        open={Boolean(deleteTarget)}
        title={t('admin.categories.deleteTitle')}
        message={deleteTarget ? t('admin.categories.deleteConfirm', { name: deleteTarget.name }) : ''}
        confirmLabel={t('admin.common.delete')}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTarget(null)}
      />
    </PageContainer>
  );
}

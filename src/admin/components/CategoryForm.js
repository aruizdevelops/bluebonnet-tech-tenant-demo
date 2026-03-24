'use client';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
} from '@mui/material';
import { useFormState } from '../hooks/useFormState';
import { useTranslation } from '../../i18n/useTranslation';

const EMPTY_CATEGORY = {
  name: '',
  slug: '',
  description: '',
  sortOrder: '',
};

function validateCategory(values, t) {
  const errors = {};
  if (!values.name || values.name.trim().length < 2) {
    errors.name = t('admin.categoryForm.validation.nameRequired');
  }
  if (!values.slug || !/^[a-z0-9-]+$/.test(values.slug)) {
    errors.slug = t('admin.categoryForm.validation.slugFormat');
  }
  if (values.sortOrder && isNaN(parseInt(values.sortOrder))) {
    errors.sortOrder = t('admin.categoryForm.validation.sortOrderNumber');
  }
  return errors;
}

function toSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export default function CategoryForm({ open, onClose, onSave, item }) {
  const { t } = useTranslation();
  const isEdit = Boolean(item);
  const initialValues = item
    ? { ...item, sortOrder: String(item.sortOrder || '') }
    : EMPTY_CATEGORY;

  const {
    values,
    errors,
    touched,
    isDirty,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormState(initialValues, (values) => validateCategory(values, t));

  const onNameChange = (name) => {
    handleChange('name', name);
    if (!isEdit) {
      handleChange('slug', toSlug(name));
    }
  };

  const onFormSubmit = () => {
    handleSubmit((vals) => {
      onSave({
        ...vals,
        sortOrder: vals.sortOrder ? parseInt(vals.sortOrder) : 0,
      });
    });
  };

  const showError = (field) => touched[field] && errors[field];

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: 600 }}>
        {isEdit ? t('admin.categoryForm.editTitle') : t('admin.categoryForm.addTitle')}
      </DialogTitle>
      <DialogContent dividers>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, pt: 1 }}>
          <TextField
            label={t('admin.categoryForm.categoryName')}
            value={values.name}
            onChange={(e) => onNameChange(e.target.value)}
            onBlur={() => handleBlur('name')}
            error={Boolean(showError('name'))}
            helperText={showError('name') || ''}
            fullWidth
            required
          />
          <TextField
            label={t('admin.categoryForm.slug')}
            value={values.slug}
            onChange={(e) => handleChange('slug', e.target.value)}
            onBlur={() => handleBlur('slug')}
            error={Boolean(showError('slug'))}
            helperText={showError('slug') || t('admin.categoryForm.slugHelper')}
            fullWidth
            required
          />
          <TextField
            label={t('admin.categoryForm.description')}
            value={values.description}
            onChange={(e) => handleChange('description', e.target.value)}
            fullWidth
            multiline
            rows={2}
          />
          <TextField
            label={t('admin.categoryForm.sortOrder')}
            value={values.sortOrder}
            onChange={(e) => handleChange('sortOrder', e.target.value)}
            onBlur={() => handleBlur('sortOrder')}
            error={Boolean(showError('sortOrder'))}
            helperText={showError('sortOrder') || t('admin.categoryForm.sortOrderHelper')}
            fullWidth
            type="number"
          />
        </Box>
      </DialogContent>
      <DialogActions sx={{ px: 3, py: 2 }}>
        <Button onClick={onClose} color="inherit">
          {t('admin.common.cancel')}
        </Button>
        <Button onClick={onFormSubmit} variant="contained" disabled={!isDirty && isEdit}>
          {isEdit ? t('admin.common.saveChanges') : t('admin.categoryForm.addCategory')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

'use client';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  FormControlLabel,
  Switch,
  Grid,
  Box,
  Typography,
} from '@mui/material';
import { useFormState } from '../hooks/useFormState';
import MediaUploadZone from './MediaUploadZone';
import { useTranslation } from '../../i18n/useTranslation';

const EMPTY_SPECIAL = {
  title: '',
  description: '',
  price: '',
  image: null,
  active: true,
  featured: false,
  startDate: '',
  endDate: '',
  badge: '',
};

function validateSpecial(values, t) {
  const errors = {};
  if (!values.title || values.title.trim().length < 2) {
    errors.title = t('admin.specialForm.validation.titleRequired');
  }
  if (values.title && values.title.length > 100) {
    errors.title = t('admin.specialForm.validation.titleMax');
  }
  if (!values.description || values.description.trim().length < 10) {
    errors.description = t('admin.specialForm.validation.descriptionRequired');
  }
  const price = parseFloat(values.price);
  if (values.price && (isNaN(price) || price <= 0)) {
    errors.price = t('admin.specialForm.validation.pricePositive');
  }
  if (values.startDate && values.endDate) {
    if (new Date(values.endDate) <= new Date(values.startDate)) {
      errors.endDate = t('admin.specialForm.validation.endDateAfterStart');
    }
  }
  return errors;
}

export default function SpecialForm({ open, onClose, onSave, item }) {
  const { t } = useTranslation();
  const isEdit = Boolean(item);
  const initialValues = item
    ? { ...item, price: item.price ? String(item.price) : '' }
    : EMPTY_SPECIAL;

  const {
    values,
    errors,
    touched,
    isDirty,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormState(initialValues, (values) => validateSpecial(values, t));

  const onFormSubmit = () => {
    handleSubmit((vals) => {
      onSave({
        ...vals,
        price: vals.price ? parseFloat(vals.price) : null,
      });
    });
  };

  const showError = (field) => touched[field] && errors[field];

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: 600 }}>
        {isEdit ? t('admin.specialForm.editTitle') : t('admin.specialForm.addTitle')}
      </DialogTitle>
      <DialogContent dividers>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, pt: 1 }}>
          <TextField
            label={t('admin.specialForm.specialTitle')}
            value={values.title}
            onChange={(e) => handleChange('title', e.target.value)}
            onBlur={() => handleBlur('title')}
            error={Boolean(showError('title'))}
            helperText={showError('title') || ''}
            fullWidth
            required
          />
          <TextField
            label={t('admin.specialForm.description')}
            value={values.description}
            onChange={(e) => handleChange('description', e.target.value)}
            onBlur={() => handleBlur('description')}
            error={Boolean(showError('description'))}
            helperText={showError('description') || ''}
            fullWidth
            required
            multiline
            rows={3}
          />
          <Grid container spacing={2}>
            <Grid size={{ xs: 4 }}>
              <TextField
                label={t('admin.specialForm.price')}
                value={values.price}
                onChange={(e) => handleChange('price', e.target.value)}
                onBlur={() => handleBlur('price')}
                error={Boolean(showError('price'))}
                helperText={showError('price') || t('admin.specialForm.priceOptional')}
                fullWidth
                type="number"
                slotProps={{ input: { startAdornment: <Typography sx={{ mr: 0.5, color: 'text.secondary' }}>$</Typography> } }}
              />
            </Grid>
            <Grid size={{ xs: 4 }}>
              <TextField
                label={t('admin.specialForm.startDate')}
                type="date"
                value={values.startDate}
                onChange={(e) => handleChange('startDate', e.target.value)}
                fullWidth
                slotProps={{ inputLabel: { shrink: true } }}
              />
            </Grid>
            <Grid size={{ xs: 4 }}>
              <TextField
                label={t('admin.specialForm.endDate')}
                type="date"
                value={values.endDate}
                onChange={(e) => handleChange('endDate', e.target.value)}
                onBlur={() => handleBlur('endDate')}
                error={Boolean(showError('endDate'))}
                helperText={showError('endDate') || ''}
                fullWidth
                slotProps={{ inputLabel: { shrink: true } }}
              />
            </Grid>
          </Grid>
          <TextField
            label={t('admin.specialForm.badge')}
            value={values.badge}
            onChange={(e) => handleChange('badge', e.target.value)}
            fullWidth
            placeholder={t('admin.specialForm.badgePlaceholder')}
          />
          <Box sx={{ display: 'flex', gap: 3 }}>
            <FormControlLabel
              control={
                <Switch
                  checked={values.active}
                  onChange={(e) => handleChange('active', e.target.checked)}
                  color="success"
                />
              }
              label={t('admin.specialForm.active')}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={values.featured}
                  onChange={(e) => handleChange('featured', e.target.checked)}
                  color="warning"
                />
              }
              label={t('admin.specialForm.featured')}
            />
          </Box>
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {t('admin.specialForm.specialImage')}
            </Typography>
            <MediaUploadZone
              currentImage={values.image}
              onFileSelect={(file) => handleChange('image', file.name)}
            />
          </Box>
        </Box>
      </DialogContent>
      <DialogActions sx={{ px: 3, py: 2 }}>
        <Button onClick={onClose} color="inherit">
          {t('admin.common.cancel')}
        </Button>
        <Button
          onClick={onFormSubmit}
          variant="contained"
          disabled={!isDirty && isEdit}
        >
          {isEdit ? t('admin.common.saveChanges') : t('admin.specialForm.addSpecial')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

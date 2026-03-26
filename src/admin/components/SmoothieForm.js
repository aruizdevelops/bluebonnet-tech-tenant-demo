'use client';

import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, TextField, FormControlLabel, Switch, MenuItem, Box, Typography,
} from '@mui/material';
import { useTranslation } from '../../i18n/useTranslation';
import { useFormState } from '../hooks/useFormState';
import { useAdminData } from '../hooks/useAdminData';

const EMPTY_SMOOTHIE = {
  name: '',
  description: '',
  price: '',
  calories: '',
  protein: '',
  sugar: '',
  fiber: '',
  category: '',
  ingredients: '',
  available: true,
  featured: false,
};

function validate(values, t) {
  const errors = {};
  if (!values.name || values.name.trim().length < 2) errors.name = t('admin.smoothieForm.validation.nameRequired');
  if (values.name && values.name.length > 100) errors.name = t('admin.smoothieForm.validation.nameMax');
  if (!values.description || values.description.trim().length < 10) errors.description = t('admin.smoothieForm.validation.descriptionRequired');
  if (values.price && isNaN(Number(values.price))) errors.price = t('admin.smoothieForm.validation.priceInvalid');
  if (!values.category) errors.category = t('admin.smoothieForm.validation.categoryRequired');
  return errors;
}

export default function SmoothieForm({ open, onClose, smoothie, onSaved }) {
  const { t } = useTranslation();
  const { categories } = useAdminData();
  const isEdit = Boolean(smoothie);

  const initialValues = smoothie
    ? {
        name: smoothie.name || '',
        description: smoothie.description || '',
        price: smoothie.price != null ? String(smoothie.price) : '',
        calories: smoothie.calories != null ? String(smoothie.calories) : '',
        protein: smoothie.protein != null ? String(smoothie.protein) : '',
        sugar: smoothie.sugar != null ? String(smoothie.sugar) : '',
        fiber: smoothie.fiber != null ? String(smoothie.fiber) : '',
        category: smoothie.category || '',
        ingredients: Array.isArray(smoothie.ingredients) ? smoothie.ingredients.join(', ') : '',
        available: smoothie.available !== undefined ? smoothie.available : true,
        featured: smoothie.featured || false,
      }
    : EMPTY_SMOOTHIE;

  const { values, errors, touched, isDirty, handleChange, handleBlur, handleSubmit, reset } =
    useFormState(initialValues, (vals) => validate(vals, t));

  const handleSave = () => {
    handleSubmit(async (formValues) => {
      const payload = {
        ...formValues,
        price: formValues.price ? Number(formValues.price) : 0,
        calories: formValues.calories ? Number(formValues.calories) : 0,
        protein: formValues.protein ? Number(formValues.protein) : 0,
        sugar: formValues.sugar ? Number(formValues.sugar) : 0,
        fiber: formValues.fiber ? Number(formValues.fiber) : 0,
        ingredients: formValues.ingredients ? formValues.ingredients.split(',').map((s) => s.trim()).filter(Boolean) : [],
      };
      if (onSaved) await onSaved(payload);
      reset();
      onClose();
    });
  };

  const handleCancel = () => { reset(); onClose(); };

  return (
    <Dialog open={open} onClose={handleCancel} maxWidth="sm" fullWidth>
      <DialogTitle>{isEdit ? t('admin.smoothieForm.editTitle') : t('admin.smoothieForm.addTitle')}</DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
          <TextField
            label={t('admin.smoothieForm.name')}
            value={values.name}
            onChange={(e) => handleChange('name', e.target.value)}
            onBlur={() => handleBlur('name')}
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
            fullWidth
            required
          />
          <TextField
            label={t('admin.smoothieForm.description')}
            value={values.description}
            onChange={(e) => handleChange('description', e.target.value)}
            onBlur={() => handleBlur('description')}
            error={touched.description && Boolean(errors.description)}
            helperText={touched.description && errors.description}
            fullWidth
            multiline
            rows={3}
            required
          />
          <TextField
            label={t('admin.smoothieForm.category')}
            value={values.category}
            onChange={(e) => handleChange('category', e.target.value)}
            onBlur={() => handleBlur('category')}
            error={touched.category && Boolean(errors.category)}
            helperText={touched.category && errors.category}
            select
            fullWidth
            required
          >
            {categories.map((cat) => (
              <MenuItem key={cat.id} value={cat.id}>{cat.name || cat.id}</MenuItem>
            ))}
          </TextField>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              label={t('admin.smoothieForm.price')}
              value={values.price}
              onChange={(e) => handleChange('price', e.target.value)}
              onBlur={() => handleBlur('price')}
              error={touched.price && Boolean(errors.price)}
              helperText={touched.price && errors.price}
              fullWidth
            />
            <TextField label={t('admin.smoothieForm.calories')} value={values.calories} onChange={(e) => handleChange('calories', e.target.value)} fullWidth />
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField label={t('admin.smoothieForm.protein')} value={values.protein} onChange={(e) => handleChange('protein', e.target.value)} fullWidth />
            <TextField label={t('admin.smoothieForm.sugar')} value={values.sugar} onChange={(e) => handleChange('sugar', e.target.value)} fullWidth />
            <TextField label={t('admin.smoothieForm.fiber')} value={values.fiber} onChange={(e) => handleChange('fiber', e.target.value)} fullWidth />
          </Box>
          <TextField
            label={t('admin.smoothieForm.ingredients')}
            value={values.ingredients}
            onChange={(e) => handleChange('ingredients', e.target.value)}
            fullWidth
            helperText={t('admin.smoothieForm.ingredientsHint')}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            <FormControlLabel
              control={<Switch checked={values.available} onChange={(e) => handleChange('available', e.target.checked)} color="primary" />}
              label={t('admin.smoothieForm.available')}
            />
            <FormControlLabel
              control={<Switch checked={values.featured} onChange={(e) => handleChange('featured', e.target.checked)} color="primary" />}
              label={t('admin.smoothieForm.featured')}
            />
          </Box>
          <Box sx={{ mt: 1, p: 2, borderRadius: 2, border: '1px solid', borderColor: 'divider', bgcolor: 'background.default' }}>
            <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>{t('admin.smoothieForm.preview')}</Typography>
            <Typography variant="body1" sx={{ fontWeight: 600 }}>{values.name || t('admin.smoothieForm.previewName')}</Typography>
            <Typography variant="body2" color="text.secondary">{values.description || t('admin.smoothieForm.previewDescription')}</Typography>
            {values.price && <Typography variant="body2" color="primary" sx={{ fontWeight: 600, mt: 0.5 }}>${Number(values.price).toFixed(2)}</Typography>}
          </Box>
        </Box>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={handleCancel}>{t('admin.common.cancel')}</Button>
        <Button variant="contained" onClick={handleSave} disabled={!isDirty}>
          {isEdit ? t('admin.common.saveChanges') : t('admin.smoothieForm.addSmoothie')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

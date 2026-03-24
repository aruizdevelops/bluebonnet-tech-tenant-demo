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
  MenuItem,
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Divider,
} from '@mui/material';
import { useFormState } from '../hooks/useFormState';
import MediaUploadZone from './MediaUploadZone';
import { useTranslation } from '../../i18n/useTranslation';

const EMPTY_ITEM = {
  name: '',
  description: '',
  price: '',
  category: '',
  available: true,
  featured: false,
  photo: null,
  badge: '',
};

function validateMenuItem(values, t) {
  const errors = {};
  if (!values.name || values.name.trim().length < 2) {
    errors.name = t('admin.menuForm.validation.nameRequired');
  }
  if (values.name && values.name.length > 100) {
    errors.name = t('admin.menuForm.validation.nameMax');
  }
  if (!values.description || values.description.trim().length < 10) {
    errors.description = t('admin.menuForm.validation.descriptionRequired');
  }
  if (values.description && values.description.length > 500) {
    errors.description = t('admin.menuForm.validation.descriptionMax');
  }
  const price = parseFloat(values.price);
  if (!values.price || isNaN(price) || price <= 0) {
    errors.price = t('admin.menuForm.validation.pricePositive');
  }
  if (!values.category) {
    errors.category = t('admin.menuForm.validation.categoryRequired');
  }
  return errors;
}

export default function MenuItemForm({ open, onClose, onSave, item, categories }) {
  const { t } = useTranslation();
  const isEdit = Boolean(item);
  const initialValues = item
    ? { ...item, price: String(item.price) }
    : EMPTY_ITEM;

  const {
    values,
    errors,
    touched,
    isDirty,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormState(initialValues, (values) => validateMenuItem(values, t));

  const onFormSubmit = () => {
    handleSubmit((vals) => {
      onSave({
        ...vals,
        price: parseFloat(vals.price),
      });
    });
  };

  const showError = (field) => touched[field] && errors[field];

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ fontWeight: 600 }}>
        {isEdit ? t('admin.menuForm.editTitle') : t('admin.menuForm.addTitle')}
      </DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={3}>
          {/* Form Fields */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, pt: 1 }}>
              <TextField
                label={t('admin.menuForm.itemName')}
                value={values.name}
                onChange={(e) => handleChange('name', e.target.value)}
                onBlur={() => handleBlur('name')}
                error={Boolean(showError('name'))}
                helperText={showError('name') || ''}
                fullWidth
                required
              />
              <TextField
                label={t('admin.menuForm.description')}
                value={values.description}
                onChange={(e) => handleChange('description', e.target.value)}
                onBlur={() => handleBlur('description')}
                error={Boolean(showError('description'))}
                helperText={showError('description') || t('admin.menuForm.charCount', { count: values.description.length })}
                fullWidth
                required
                multiline
                rows={3}
              />
              <Grid container spacing={2}>
                <Grid size={{ xs: 6 }}>
                  <TextField
                    label={t('admin.menuForm.price')}
                    value={values.price}
                    onChange={(e) => handleChange('price', e.target.value)}
                    onBlur={() => handleBlur('price')}
                    error={Boolean(showError('price'))}
                    helperText={showError('price') || ''}
                    fullWidth
                    required
                    type="number"
                    slotProps={{ input: { startAdornment: <Typography sx={{ mr: 0.5, color: 'text.secondary' }}>$</Typography> } }}
                  />
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <TextField
                    label={t('admin.menuForm.category')}
                    value={values.category}
                    onChange={(e) => handleChange('category', e.target.value)}
                    onBlur={() => handleBlur('category')}
                    error={Boolean(showError('category'))}
                    helperText={showError('category') || ''}
                    fullWidth
                    required
                    select
                  >
                    {(categories || []).map((cat) => (
                      <MenuItem key={cat.slug} value={cat.slug}>
                        {cat.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
              <TextField
                label={t('admin.menuForm.badge')}
                value={values.badge}
                onChange={(e) => handleChange('badge', e.target.value)}
                fullWidth
                placeholder={t('admin.menuForm.badgePlaceholder')}
              />
              <Box sx={{ display: 'flex', gap: 3 }}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={values.available}
                      onChange={(e) => handleChange('available', e.target.checked)}
                      color="success"
                    />
                  }
                  label={t('admin.menuForm.available')}
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={values.featured}
                      onChange={(e) => handleChange('featured', e.target.checked)}
                      color="warning"
                    />
                  }
                  label={t('admin.menuForm.featured')}
                />
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                  {t('admin.menuForm.itemPhoto')}
                </Typography>
                <MediaUploadZone
                  currentImage={values.photo}
                  onFileSelect={(file) => handleChange('photo', file.name)}
                />
              </Box>
            </Box>
          </Grid>

          {/* Live Preview */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600, pt: 1 }}>
              {t('admin.menuForm.preview')}
            </Typography>
            <Card variant="outlined">
              <Box
                sx={{
                  height: 120,
                  bgcolor: 'rgba(224, 120, 48, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                <Typography variant="h3" sx={{ opacity: 0.3 }}>
                  {values.name ? values.name.charAt(0) : '?'}
                </Typography>
                {values.badge && (
                  <Chip
                    label={values.badge}
                    size="small"
                    sx={{ position: 'absolute', top: 8, right: 8, bgcolor: 'primary.main', color: 'white' }}
                  />
                )}
              </Box>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    {values.name || t('admin.menuForm.previewName')}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    {values.price ? `$${parseFloat(values.price).toFixed(2)}` : '$0.00'}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                  {values.description || t('admin.menuForm.previewDescription')}
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Box sx={{ display: 'flex', gap: 0.5 }}>
                  {values.category && <Chip label={values.category} size="small" variant="outlined" />}
                  {values.featured && <Chip label={t('admin.menuForm.previewFeatured')} size="small" color="warning" />}
                  {!values.available && <Chip label={t('admin.menuForm.previewUnavailable')} size="small" color="default" />}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
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
          {isEdit ? t('admin.common.saveChanges') : t('admin.menuForm.addItem')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

'use client';

import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Grid,
  Divider,
  Snackbar,
  Alert,
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import { useTranslation } from '../../i18n/useTranslation';

export default function BusinessInfoForm({ businessInfo, onSave }) {
  const { t } = useTranslation();
  const [values, setValues] = useState(businessInfo || {});
  const [saving, setSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleLocationChange = (locIndex, field, value) => {
    setValues((prev) => {
      const locations = [...(prev.locations || [])];
      locations[locIndex] = { ...locations[locIndex], [field]: value };
      return { ...prev, locations };
    });
  };

  const handleHoursChange = (locIndex, hourIndex, field, value) => {
    setValues((prev) => {
      const locations = [...(prev.locations || [])];
      const hours = [...(locations[locIndex].hours || [])];
      hours[hourIndex] = { ...hours[hourIndex], [field]: value };
      locations[locIndex] = { ...locations[locIndex], hours };
      return { ...prev, locations };
    });
  };

  const handleSubmit = async () => {
    setSaving(true);
    await onSave(values);
    setSaving(false);
    setShowSuccess(true);
  };

  return (
    <Box>
      {/* General Info */}
      <Card sx={{ mb: 3 }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            {t('admin.business.generalInfo')}
          </Typography>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                label={t('admin.business.businessName')}
                value={values.name || ''}
                onChange={(e) => handleChange('name', e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                label={t('admin.business.email')}
                value={values.email || ''}
                onChange={(e) => handleChange('email', e.target.value)}
                fullWidth
                type="email"
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                label={t('admin.business.website')}
                value={values.website || ''}
                onChange={(e) => handleChange('website', e.target.value)}
                fullWidth
              />
            </Grid>
          </Grid>
          <TextField
            label={t('admin.business.about')}
            value={values.about || ''}
            onChange={(e) => handleChange('about', e.target.value)}
            fullWidth
            multiline
            rows={4}
            sx={{ mt: 2 }}
          />
        </CardContent>
      </Card>

      {/* Locations */}
      {(values.locations || []).map((location, locIndex) => (
        <Card key={location.id || locIndex} sx={{ mb: 3 }}>
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              {location.name || t('admin.business.location', { number: locIndex + 1 })}
            </Typography>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  label={t('admin.business.locationName')}
                  value={location.name || ''}
                  onChange={(e) => handleLocationChange(locIndex, 'name', e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  label={t('admin.business.phone')}
                  value={location.phone || ''}
                  onChange={(e) => handleLocationChange(locIndex, 'phone', e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  label={t('admin.business.address')}
                  value={location.address || ''}
                  onChange={(e) => handleLocationChange(locIndex, 'address', e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  label={t('admin.business.cityStateZip')}
                  value={location.city || ''}
                  onChange={(e) => handleLocationChange(locIndex, 'city', e.target.value)}
                  fullWidth
                />
              </Grid>
            </Grid>

            <Divider sx={{ my: 2 }} />
            <Typography variant="subtitle2" sx={{ mb: 1.5, fontWeight: 600 }}>
              {t('admin.business.hoursOfOperation')}
            </Typography>
            {(location.hours || []).map((hour, hourIndex) => (
              <Grid container spacing={2} key={hourIndex} sx={{ mb: 1 }}>
                <Grid size={{ xs: 4 }}>
                  <TextField
                    label={t('admin.business.days')}
                    value={hour.days || ''}
                    onChange={(e) => handleHoursChange(locIndex, hourIndex, 'days', e.target.value)}
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid size={{ xs: 4 }}>
                  <TextField
                    label={t('admin.business.open')}
                    value={hour.open || ''}
                    onChange={(e) => handleHoursChange(locIndex, hourIndex, 'open', e.target.value)}
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid size={{ xs: 4 }}>
                  <TextField
                    label={t('admin.business.close')}
                    value={hour.close || ''}
                    onChange={(e) => handleHoursChange(locIndex, hourIndex, 'close', e.target.value)}
                    fullWidth
                    size="small"
                  />
                </Grid>
              </Grid>
            ))}
          </CardContent>
        </Card>
      ))}

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          startIcon={<SaveIcon />}
          onClick={handleSubmit}
          disabled={saving}
        >
          {saving ? t('admin.common.saving') : t('admin.common.saveChanges')}
        </Button>
      </Box>

      <Snackbar
        open={showSuccess}
        autoHideDuration={3000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert severity="success" onClose={() => setShowSuccess(false)}>
          {t('admin.business.saveSuccess')}
        </Alert>
      </Snackbar>
    </Box>
  );
}
